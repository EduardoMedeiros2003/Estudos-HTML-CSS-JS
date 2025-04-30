document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');

    // Impede digitação manual diretamente no input
    display.addEventListener('keydown', function (e) {
        e.preventDefault();
    });

    // Lista de operadores válidos
    const operadores = ['+', '-', '*', '/', '.', '**'];

    // Adiciona valor ao display com validação
    function addToDisplay(value) {
        const ultimo = display.value.slice(-1);

        // Impede operadores repetidos
        if (operadores.includes(value) && operadores.includes(ultimo)) {
            return;
        }

        display.value += value;
    }

    // Limpa tudo
    function clearDisplay() {
        display.value = '';
    }

    // Apaga último caractere
    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }

    // Calcula o resultado
    function calculate() {
        const expressao = display.value;
    
        // Se estiver vazio ou terminar com operador, não faz nada
        if (!expressao || /[+\-*/.]$/.test(expressao)) {
            return;
        }
    
        try {
            display.value = eval(expressao);
        } catch {
            display.value = 'Erro';
        }
    }

    function addToDisplay(value) {
        const ultimo = display.value.slice(-1);
    
        // Se o display estiver com erro, limpa antes de continuar
        if (display.value === 'Erro') {
            display.value = '';
        }
    
        // Impede operadores repetidos
        if (operadores.includes(value) && operadores.includes(ultimo)) {
            return;
        }
    
        display.value += value;
    }

    // Clique nos botões numéricos e de operadores
    const buttons = document.querySelectorAll('.btn-num');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            addToDisplay(button.textContent);
        });
    });

    document.querySelector('.btn-clear').addEventListener('click', clearDisplay);
    document.querySelector('.btn-del').addEventListener('click', deleteLast);
    document.querySelector('.btn-eq').addEventListener('click', calculate);

    // Teclado físico
    document.addEventListener('keydown', function (event) {
        const teclasPermitidas = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','(',')','.'];

        if (teclasPermitidas.includes(event.key)) {
            addToDisplay(event.key);
        } else if (event.key === 'Backspace') {
            deleteLast();
        } else if (event.key === 'Enter') {
            event.preventDefault();
            calculate();
        } else if (event.key === 'Escape') {
            clearDisplay();
        }
    });
});
