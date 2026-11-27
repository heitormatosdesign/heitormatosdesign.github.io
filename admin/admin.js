/* Painel: liga/desliga a contagem das visitas deste navegador (lido em script.js) */

const caixa = document.getElementById('ignorar-visitas');
const status = document.getElementById('status-visitas');

function lerIgnorando() {
    try { return localStorage.getItem('skipgc') === 't'; } catch (erro) { return null; }
}

function mostrar() {
    const ignorando = lerIgnorando();
    if (ignorando === null) {
        caixa.disabled = true;
        status.textContent = 'Este navegador bloqueia o armazenamento local, então a opção não funciona aqui.';
        return;
    }
    caixa.checked = ignorando;
    status.textContent = ignorando
        ? 'As suas visitas neste navegador não estão sendo contadas.'
        : 'As suas visitas neste navegador estão sendo contadas.';
}

caixa.addEventListener('change', () => {
    try {
        if (caixa.checked) {
            localStorage.setItem('skipgc', 't');
        } else {
            localStorage.removeItem('skipgc');
        }
    } catch (erro) {}
    mostrar();
});

mostrar();
