let segundos = 0;
let timer = null;

// Formata os segundos totais em HH:MM:SS
function formatarTempo(segundos) {
    const hrs = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const mins = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const secs = String(segundos % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

// Atualiza a tela
function atualizarTela() {
    const elemento = document.getElementById('cronometro');
    elemento.textContent = formatarTempo(segundos);
}

// Inicia o cronômetro
function iniciar() {
    if (timer) return; // já está rodando

    const elemento = document.getElementById('cronometro');
    elemento.classList.remove('pausado'); // volta à cor normal

    timer = setInterval(() => {
        segundos++;
        atualizarTela();
    }, 1000);
}

// Pausa o cronômetro
function pausar() {
    clearInterval(timer);
    timer = null;

    const elemento = document.getElementById('cronometro');
    elemento.classList.add('pausado');
}

// Zera o cronômetro
function zerar() {
    pausar();
    segundos = 0;
    atualizarTela();

    const elemento = document.getElementById('cronometro');
    elemento.classList.remove('pausado'); // volta à cor normal
}