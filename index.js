const elementos = [
    {tag: 'p', texto: 'Aqui vai um bom titulo'},
    {tag: 'div', texto: 'Aqui vai algo para prender o leitor'},
    {tag: 'section', texto: 'Aqui finaliza o texto'},
    {tag: 'footer', texto: 'Eduardo.Medeiros'},
];

const container = document.querySelector('#container'); // Seleciona a div onde os elementos serão adicionados

elementos.forEach(el => {
    const novoElemento = document.createElement(el.tag); // Cria um novo elemento HTML
    novoElemento.textContent = el.texto; // Adiciona o texto dentro do elemento
    container.appendChild(novoElemento); // Adiciona o elemento ao container
});
