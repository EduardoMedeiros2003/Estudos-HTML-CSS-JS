window.onload = function () {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefasSalvas.forEach(tarefa => adicionarTarefaNaTela(tarefa));
}

document.getElementById('novaTarefa').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const input = document.getElementById('novaTarefa');
    const tarefa = input.value.trim();

   

    if (tarefa === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    adicionarTarefaNaTela(tarefa);
    salvarTarefa(tarefa);

    input.value = '';
    input.focus();
}

function adicionarTarefaNaTela(tarefa) {
    const ul = document.getElementById('listaTarefas');
    const li = document.createElement('li');
    li.textContent = tarefa;

    const botao = document.createElement('button');
    botao.textContent = 'Finalizado';
    botao.classList.add('finalizar');

    botao.onclick = function () {
        ul.removeChild(li);
        removerTarefa(tarefa);
    };

    li.appendChild(botao);
    ul.appendChild(li);
}

function salvarTarefa(tarefa) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function removerTarefa(tarefa) {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas = tarefas.filter(item => item !== tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}