/* =========================================================
   PAINEL /admin
   Os números são gerados de hora em hora pelo GitHub Actions
   (.github/workflows/estatisticas.yml) e ficam criptografados no
   branch "dados". Aqui a senha só serve para abrir esse arquivo,
   no próprio navegador; nada é enviado para servidor nenhum.
========================================================= */

const NO_AR = location.hostname === 'heitormatosdesign.github.io';
const ARQUIVO = NO_AR
    ? 'https://raw.githubusercontent.com/heitormatosdesign/heitormatosdesign.github.io/dados/estatisticas.json'
    : '/estatisticas-teste.json'; // só para testar localmente (fica fora do Git)

const $ = (id) => document.getElementById(id);
const fmt = new Intl.NumberFormat('pt-BR');


/* ---------- nomes amigáveis ---------- */

const NOMES_PAGINAS = {
    '/': 'Início',
    '/index.html': 'Início',
    '/curriculo.html': 'Currículo',
    '/projeto-branding.html': 'Projeto Larissa Xavier',
    '/projeto-institucional.html': 'Projeto Santa Casa',
    '/projeto-recorrente.html': 'Projeto Triângulo Express',
    '/projeto-direcao.html': 'Projeto McDia Feliz 2026',
    '/projeto-packaging.html': 'Projeto Leather Care',
    '/admin/': 'Este painel'
};

const NOMES_EVENTOS = {
    'clique-whatsapp': 'WhatsApp',
    'clique-email': 'E-mail',
    'clique-linkedin': 'LinkedIn',
    'clique-behance': 'Behance',
    'download-curriculo-portugues': 'Baixou o currículo (português)',
    'download-curriculo-ingles': 'Baixou o currículo (inglês)',
    'idioma-ingles': 'Trocou o site para inglês',
    'idioma-portugues': 'Voltou o site para português'
};

const NOMES_TELAS = {
    'Phones': 'Celular',
    'Large phones, small tablets': 'Celular grande',
    'Tablets and small laptops': 'Tablet ou notebook pequeno',
    'Computer monitors': 'Computador',
    'Computer monitors larger than HD': 'Monitor grande',
    '(unknown)': 'Não identificado',
    '(direto)': 'Não identificado'
};

const EVENTOS_CONTATO = ['clique-whatsapp', 'clique-email', 'clique-linkedin', 'clique-behance'];

let nomesPaises = null;
try { nomesPaises = new Intl.DisplayNames(['pt-BR'], { type: 'region' }); } catch (erro) {}

function nomePagina(item) {
    if (NOMES_PAGINAS[item.caminho]) return NOMES_PAGINAS[item.caminho];
    const titulo = (item.titulo || '').split(' — ')[0].trim();
    return titulo || item.caminho;
}

function nomeOrigem(nome) {
    if (nome === '(direto)') return 'Direto ou por aplicativo';
    return nome.replace(/^https?:\/\//, '').replace(/^www\./, '');
}

function nomePais(item) {
    if (item.id && /^[A-Z]{2}$/.test(item.id) && nomesPaises) {
        try { return nomesPaises.of(item.id); } catch (erro) {}
    }
    return item.nome;
}


/* ---------- abrir o arquivo com a senha ---------- */

function base64(texto) {
    return Uint8Array.from(atob(texto), (c) => c.charCodeAt(0));
}

async function abrir(pacote, senha) {
    const material = await crypto.subtle.importKey(
        'raw', new TextEncoder().encode(senha), 'PBKDF2', false, ['deriveKey']
    );
    const chave = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', hash: 'SHA-256', salt: base64(pacote.salt), iterations: pacote.iter },
        material,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
    );
    const texto = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: base64(pacote.iv) }, chave, base64(pacote.ct)
    );
    return JSON.parse(new TextDecoder().decode(texto));
}

let tentativas = 0;

$('form-senha').addEventListener('submit', async (envio) => {
    envio.preventDefault();
    const aviso = $('aviso-entrada');
    const botao = $('botao-entrar');
    const senha = $('senha').value;

    if (tentativas >= 5) {
        aviso.textContent = 'Muitas tentativas. Recarregue a página para tentar de novo.';
        return;
    }

    botao.disabled = true;
    botao.textContent = 'Abrindo…';
    aviso.textContent = '';

    let pacote;
    try {
        const resposta = await fetch(`${ARQUIVO}?t=${Date.now()}`, { cache: 'no-store' });
        if (!resposta.ok) throw new Error(String(resposta.status));
        pacote = await resposta.json();
    } catch (erro) {
        aviso.textContent = 'Os dados ainda não estão disponíveis. A rotina do GitHub precisa rodar pelo menos uma vez.';
        botao.disabled = false;
        botao.textContent = 'Entrar';
        return;
    }

    try {
        const dados = await abrir(pacote, senha);
        $('senha').value = '';
        mostrarPainel(dados);
    } catch (erro) {
        tentativas += 1;
        aviso.textContent = 'Senha incorreta.';
        botao.disabled = false;
        botao.textContent = 'Entrar';
        $('senha').select();
    }
});

$('botao-sair').addEventListener('click', () => location.reload());


/* ---------- montar o painel ---------- */

function soma(lista) {
    return lista.reduce((total, item) => total + item.total, 0);
}

function dataCurta(iso) {
    const [ano, mes, dia] = iso.split('-').map(Number);
    return new Date(ano, mes - 1, dia).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' }).replace('.', '');
}

let dadosAtuais = null;

function mostrarPainel(dados) {
    dadosAtuais = dados;
    $('entrada').hidden = true;
    $('painel').hidden = false;

    const gerado = new Date(dados.gerado);
    $('atualizado').textContent =
        `Últimos 30 dias · atualizado em ${gerado.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}`;

    // números do topo
    const dias = dados.dias || [];
    const total30 = soma(dias);
    const ult7 = soma(dias.slice(-7));
    const ant7 = soma(dias.slice(-14, -7));
    $('kpi-30').textContent = fmt.format(total30);
    $('kpi-7').textContent = fmt.format(ult7);

    const variacao = $('kpi-7-var');
    variacao.textContent = '';
    if (ant7 > 0) {
        const pct = Math.round(((ult7 - ant7) / ant7) * 100);
        const marca = document.createElement('span');
        marca.className = pct >= 0 ? 'sobe' : 'desce';
        marca.textContent = `${pct >= 0 ? '↑' : '↓'} ${Math.abs(pct)}%`;
        variacao.append(marca, ' em relação aos 7 dias anteriores');
    } else {
        variacao.textContent = 'sem dados da semana anterior';
    }

    const eventos = dados.eventos || [];
    const totalEvento = (nome) => (eventos.find((e) => e.nome === nome) || { total: 0 }).total;
    $('kpi-contato').textContent = fmt.format(EVENTOS_CONTATO.reduce((t, n) => t + totalEvento(n), 0));
    const cvPt = totalEvento('download-curriculo-portugues');
    const cvEn = totalEvento('download-curriculo-ingles');
    $('kpi-cv').textContent = fmt.format(cvPt + cvEn);
    $('kpi-cv-det').textContent = `${fmt.format(cvPt)} em português · ${fmt.format(cvEn)} em inglês`;

    desenharDias(dias);

    preencher('lista-paginas', (dados.paginas || []).map((i) => ({ nome: nomePagina(i), total: i.total })), 'Nenhuma visita ainda.');
    preencher('lista-origens', (dados.origens || []).map((i) => ({ nome: nomeOrigem(i.nome), total: i.total })), 'Nenhuma origem registrada.');
    preencher('lista-eventos', eventos.map((i) => ({ nome: NOMES_EVENTOS[i.nome] || i.nome, total: i.total })), 'Nenhum clique registrado.');
    preencher('lista-paises', (dados.paises || []).map((i) => ({ nome: nomePais(i), total: i.total })), 'Sem dados de país.');
    preencher('lista-telas', (dados.telas || []).map((i) => ({ nome: NOMES_TELAS[i.nome] || i.nome, total: i.total })), 'Sem dados de aparelho.');
    preencher('lista-sistemas', dados.sistemas || [], 'Sem dados de sistema.');
    preencher('lista-navegadores', dados.navegadores || [], 'Sem dados de navegador.');
}

function preencher(id, itens, vazio) {
    const lista = $(id);
    lista.replaceChildren();
    const validos = itens.filter((i) => i.total > 0);
    if (!validos.length) {
        const li = document.createElement('li');
        li.className = 'vazio';
        li.textContent = vazio;
        lista.append(li);
        return;
    }
    const maior = Math.max(...validos.map((i) => i.total));
    validos.slice(0, 8).forEach((item) => {
        const li = document.createElement('li');
        const nome = document.createElement('span');
        nome.className = 'nome';
        nome.textContent = item.nome;
        nome.title = item.nome;
        const valor = document.createElement('span');
        valor.className = 'valor';
        valor.textContent = fmt.format(item.total);
        const trilho = document.createElement('span');
        trilho.className = 'trilho';
        trilho.setAttribute('aria-hidden', 'true');
        const barra = document.createElement('span');
        barra.className = 'preenchido';
        barra.style.width = `${Math.max(2, (item.total / maior) * 100)}%`;
        trilho.append(barra);
        li.append(nome, valor, trilho);
        lista.append(li);
    });
}


/* ---------- gráfico de visitas por dia ---------- */

const SVG = 'http://www.w3.org/2000/svg';

function el(nome, atributos = {}, texto) {
    const no = document.createElementNS(SVG, nome);
    Object.entries(atributos).forEach(([k, v]) => no.setAttribute(k, v));
    if (texto !== undefined) no.textContent = texto;
    return no;
}

function escalaBonita(maximo) {
    if (maximo <= 4) return 4;
    const passo = Math.pow(10, Math.floor(Math.log10(maximo)));
    for (const m of [1, 2, 2.5, 5, 10]) {
        if (m * passo >= maximo) return m * passo;
    }
    return 10 * passo;
}

function desenharDias(dias) {
    const caixa = $('grafico-dias');
    caixa.replaceChildren();
    if (!dias.length) return;

    const largura = Math.max(320, caixa.clientWidth || 800);
    const altura = largura < 560 ? 200 : 240;
    const m = { topo: 18, dir: 8, baixo: 26, esq: 34 };
    const w = largura - m.esq - m.dir;
    const h = altura - m.topo - m.baixo;

    const maxValor = Math.max(...dias.map((d) => d.total));
    const teto = escalaBonita(maxValor);
    const x = (i) => m.esq + (dias.length === 1 ? w / 2 : (i / (dias.length - 1)) * w);
    const y = (v) => m.topo + h - (v / teto) * h;

    const svg = el('svg', { viewBox: `0 0 ${largura} ${altura}`, role: 'img' });
    const pico = dias.reduce((a, b) => (b.total > a.total ? b : a), dias[0]);
    svg.setAttribute('aria-label',
        `Visitas por dia nos últimos ${dias.length} dias. Maior movimento em ${dataCurta(pico.dia)}, com ${pico.total} visitas.`);

    // grade e eixo y
    const eixo = el('g', { class: 'eixo' });
    [0, teto / 2, teto].forEach((v) => {
        svg.append(el('line', { class: 'linha-grade', x1: m.esq, x2: largura - m.dir, y1: y(v), y2: y(v) }));
        eixo.append(el('text', { x: m.esq - 8, y: y(v) + 4, 'text-anchor': 'end' }, fmt.format(v)));
    });

    // eixo x: uma data por semana
    dias.forEach((d, i) => {
        if ((dias.length - 1 - i) % 7 === 0) {
            const ancora = i === 0 ? 'start' : i === dias.length - 1 ? 'end' : 'middle';
            eixo.append(el('text', { x: x(i), y: altura - 6, 'text-anchor': ancora }, dataCurta(d.dia)));
        }
    });
    svg.append(eixo);

    // área e linha
    const pontos = dias.map((d, i) => `${x(i).toFixed(1)},${y(d.total).toFixed(1)}`);
    svg.append(el('path', { class: 'area', d: `M${x(0)},${y(0)} L${pontos.join(' L')} L${x(dias.length - 1)},${y(0)} Z` }));
    svg.append(el('path', { class: 'linha', d: `M${pontos.join(' L')}` }));

    // rótulo do pico
    const iPico = dias.indexOf(pico);
    if (pico.total > 0) {
        svg.append(el('circle', { class: 'ponto', cx: x(iPico), cy: y(pico.total), r: 4 }));
        const ancora = iPico > dias.length * 0.85 ? 'end' : iPico < dias.length * 0.15 ? 'start' : 'middle';
        svg.append(el('text', { class: 'rotulo-pico', x: x(iPico), y: y(pico.total) - 9, 'text-anchor': ancora }, `${pico.total}`));
    }

    // camada de hover
    const mira = el('line', { class: 'mira', y1: m.topo, y2: m.topo + h, visibility: 'hidden' });
    const ponto = el('circle', { class: 'ponto', r: 5, visibility: 'hidden' });
    const alvo = el('rect', { x: m.esq, y: 0, width: w, height: altura, fill: 'transparent' });
    svg.append(mira, ponto, alvo);
    caixa.append(svg);

    const dica = document.createElement('div');
    dica.className = 'dica';
    caixa.append(dica);

    function mover(evento) {
        const quadro = svg.getBoundingClientRect();
        const escala = largura / quadro.width;
        const px = (evento.clientX - quadro.left) * escala;
        const i = Math.max(0, Math.min(dias.length - 1, Math.round(((px - m.esq) / w) * (dias.length - 1))));
        const d = dias[i];
        mira.setAttribute('x1', x(i));
        mira.setAttribute('x2', x(i));
        ponto.setAttribute('cx', x(i));
        ponto.setAttribute('cy', y(d.total));
        mira.setAttribute('visibility', 'visible');
        ponto.setAttribute('visibility', 'visible');
        dica.textContent = `${dataCurta(d.dia)} · ${d.total} ${d.total === 1 ? 'visita' : 'visitas'}`;
        dica.style.left = `${x(i) / escala}px`;
        dica.style.top = `${y(d.total) / escala - 6}px`;
        dica.classList.add('visivel');
    }

    function esconder() {
        mira.setAttribute('visibility', 'hidden');
        ponto.setAttribute('visibility', 'hidden');
        dica.classList.remove('visivel');
    }

    alvo.addEventListener('pointermove', mover);
    alvo.addEventListener('pointerdown', mover);
    alvo.addEventListener('pointerleave', esconder);

    $('grafico-resumo').textContent =
        pico.total > 0 ? `Dia mais movimentado: ${dataCurta(pico.dia)} (${pico.total})` : '';
}

let ultimaLargura = 0;
window.addEventListener('resize', () => {
    const caixa = $('grafico-dias');
    if (!caixa || $('painel').hidden || Math.abs(caixa.clientWidth - ultimaLargura) < 40) return;
    ultimaLargura = caixa.clientWidth;
    if (dadosAtuais) desenharDias(dadosAtuais.dias || []);
});


/* ---------- não contar as minhas visitas (lido em script.js) ---------- */

const caixaIgnorar = $('ignorar-visitas');
const statusIgnorar = $('status-visitas');

function lerIgnorando() {
    try { return localStorage.getItem('skipgc') === 't'; } catch (erro) { return null; }
}

function mostrarIgnorar() {
    const ignorando = lerIgnorando();
    if (ignorando === null) {
        caixaIgnorar.disabled = true;
        statusIgnorar.textContent = 'Este navegador bloqueia o armazenamento local, então a opção não funciona aqui.';
        return;
    }
    caixaIgnorar.checked = ignorando;
    statusIgnorar.textContent = ignorando
        ? 'As suas visitas neste navegador não estão sendo contadas.'
        : 'As suas visitas neste navegador estão sendo contadas.';
}

caixaIgnorar.addEventListener('change', () => {
    try {
        if (caixaIgnorar.checked) localStorage.setItem('skipgc', 't');
        else localStorage.removeItem('skipgc');
    } catch (erro) {}
    mostrarIgnorar();
});

mostrarIgnorar();
