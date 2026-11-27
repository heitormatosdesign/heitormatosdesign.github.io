"""Busca as estatísticas do GoatCounter e salva um resumo criptografado.

Roda no GitHub Actions (ver .github/workflows/estatisticas.yml).

Variáveis de ambiente (segredos do repositório, nunca no código):
  GOATCOUNTER_TOKEN   chave da API do GoatCounter (permissão de leitura)
  DASHBOARD_PASSWORD  senha usada para criptografar; a mesma que você digita no /admin

Uso:
  python estatisticas.py saida.json            # dados reais
  python estatisticas.py saida.json --exemplo  # dados inventados, para testar a tela

Formato da saída (tudo o que é dado fica dentro de "ct", criptografado):
  {"v": 1, "iter": 600000, "salt": b64, "iv": b64, "ct": b64}
  AES-256-GCM com chave derivada da senha por PBKDF2-SHA256.
"""

import base64
import datetime as dt
import json
import os
import random
import sys
import time
import urllib.parse
import urllib.request

from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

SITE = os.environ.get("GOATCOUNTER_SITE", "https://heitormatosdesign.goatcounter.com")
DIAS = 30
ITERACOES = 600_000


# ---------------------------------------------------------------- API

def api(caminho, **params):
    url = f"{SITE}/api/v0/{caminho}?{urllib.parse.urlencode(params)}"
    pedido = urllib.request.Request(url, headers={
        "Authorization": f"Bearer {os.environ['GOATCOUNTER_TOKEN']}",
        "Content-Type": "application/json",
        "User-Agent": "painel-site/1.0",
    })
    for tentativa in range(4):
        try:
            with urllib.request.urlopen(pedido, timeout=30) as resposta:
                return json.load(resposta)
        except urllib.error.HTTPError as erro:
            if erro.code == 429 and tentativa < 3:
                time.sleep(2 + tentativa * 2)
                continue
            # só o código e o caminho no log (o log do Actions é público)
            raise SystemExit(f"Erro {erro.code} ao ler {caminho}") from None
        finally:
            time.sleep(0.4)  # respeita o limite de requisições da API


def contagem(item):
    return int(item.get("count", item.get("count_unique", 0)) or 0)


def lista(pagina, inicio, fim, limite=10):
    dados = api(f"stats/{pagina}", start=inicio, end=fim, limit=limite)
    return [
        {"id": str(i.get("id") or ""), "nome": (i.get("name") or "").strip() or "(direto)", "total": contagem(i)}
        for i in dados.get("stats") or []
        if contagem(i) > 0
    ]


def coletar():
    hoje = dt.datetime.now(dt.timezone.utc).date()
    inicio = (hoje - dt.timedelta(days=DIAS - 1)).isoformat()
    fim = hoje.isoformat()

    hits = api("stats/hits", start=inicio, end=fim, limit=100).get("hits") or []

    por_dia = {(hoje - dt.timedelta(days=d)).isoformat(): 0 for d in range(DIAS)}
    paginas, eventos = [], []
    for hit in hits:
        if hit.get("event"):
            eventos.append({"nome": hit.get("path", ""), "total": contagem(hit)})
            continue
        paginas.append({
            "caminho": hit.get("path", ""),
            "titulo": (hit.get("title") or "").strip(),
            "total": contagem(hit),
        })
        for dia in hit.get("stats") or []:
            chave = (dia.get("day") or "")[:10]
            if chave in por_dia:
                por_dia[chave] += int(dia.get("daily") or 0)

    print(f"API: {len(paginas)} páginas, {len(eventos)} eventos")  # sem valores no log

    return {
        "gerado": dt.datetime.now(dt.timezone.utc).isoformat(timespec="minutes"),
        "inicio": inicio,
        "fim": fim,
        "dias": [{"dia": d, "total": por_dia[d]} for d in sorted(por_dia)],
        "paginas": sorted(paginas, key=lambda x: -x["total"])[:12],
        "eventos": sorted(eventos, key=lambda x: -x["total"]),
        "origens": lista("toprefs", inicio, fim),
        "campanhas": lista("campaigns", inicio, fim),
        "paises": lista("locations", inicio, fim),
        "navegadores": lista("browsers", inicio, fim, 6),
        "sistemas": lista("systems", inicio, fim, 6),
        "telas": lista("sizes", inicio, fim, 6),
    }


# ---------------------------------------------------------------- exemplo

def exemplo():
    random.seed(7)
    hoje = dt.date(2026, 11, 27)
    dias = []
    for d in range(DIAS - 1, -1, -1):
        dia = hoje - dt.timedelta(days=d)
        base = 4 if dia.weekday() >= 5 else 9
        dias.append({"dia": dia.isoformat(), "total": max(0, base + random.randint(-4, 8))})
    return {
        "gerado": "2026-11-27T14:00+00:00",
        "inicio": dias[0]["dia"],
        "fim": dias[-1]["dia"],
        "dias": dias,
        "paginas": [
            {"caminho": "/", "titulo": "Heitor Matos — Designer Gráfico, Branding e Direção de Arte", "total": 142},
            {"caminho": "/curriculo.html", "titulo": "Currículo — Heitor Matos", "total": 61},
            {"caminho": "/projeto-packaging.html", "titulo": "Embalagens e Site Leather Care", "total": 23},
            {"caminho": "/projeto-direcao.html", "titulo": "Direção de Arte McDia Feliz 2026", "total": 19},
            {"caminho": "/projeto-branding.html", "titulo": "Identidade Visual Larissa Xavier", "total": 14},
            {"caminho": "/projeto-institucional.html", "titulo": "Grupo Santa Casa de Franca", "total": 11},
        ],
        "eventos": [
            {"nome": "clique-whatsapp", "total": 9},
            {"nome": "download-curriculo-portugues", "total": 7},
            {"nome": "clique-linkedin", "total": 5},
            {"nome": "idioma-ingles", "total": 4},
            {"nome": "clique-behance", "total": 3},
            {"nome": "download-curriculo-ingles", "total": 2},
            {"nome": "clique-email", "total": 1},
        ],
        "origens": [
            {"nome": "linkedin.com", "total": 48}, {"nome": "(direto)", "total": 40},
            {"nome": "google.com", "total": 21}, {"nome": "br.indeed.com", "total": 9},
            {"nome": "web.whatsapp.com", "total": 6},
        ],
        "campanhas": [{"nome": "cba", "total": 3}, {"nome": "gupy", "total": 2}],
        "paises": [
            {"id": "BR", "nome": "Brazil", "total": 151}, {"id": "PT", "nome": "Portugal", "total": 8},
            {"id": "US", "nome": "United States", "total": 5}, {"id": "GB", "nome": "United Kingdom", "total": 2},
        ],
        "navegadores": [{"nome": "Chrome", "total": 104}, {"nome": "Safari", "total": 41}, {"nome": "Edge", "total": 15}, {"nome": "Firefox", "total": 6}],
        "sistemas": [{"nome": "Android", "total": 63}, {"nome": "Windows", "total": 52}, {"nome": "iOS", "total": 38}, {"nome": "macOS", "total": 13}],
        "telas": [{"nome": "Phones", "total": 98}, {"nome": "Computer monitors", "total": 61}, {"nome": "Tablets", "total": 7}],
    }


# ---------------------------------------------------------------- cripto

def criptografar(dados, senha):
    sal, iv = os.urandom(16), os.urandom(12)
    chave = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=sal, iterations=ITERACOES).derive(senha.encode("utf-8"))
    texto = json.dumps(dados, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    ct = AESGCM(chave).encrypt(iv, texto, None)
    b64 = lambda b: base64.b64encode(b).decode("ascii")
    return {"v": 1, "iter": ITERACOES, "salt": b64(sal), "iv": b64(iv), "ct": b64(ct)}


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    saida = sys.argv[1]
    senha = os.environ.get("DASHBOARD_PASSWORD", "")
    if len(senha) < 12:
        raise SystemExit("DASHBOARD_PASSWORD ausente ou curta (mínimo 12 caracteres).")
    dados = exemplo() if "--exemplo" in sys.argv else coletar()
    with open(saida, "w", encoding="utf-8") as arquivo:
        json.dump(criptografar(dados, senha), arquivo)
    print("Resumo criptografado salvo.")


if __name__ == "__main__":
    main()
