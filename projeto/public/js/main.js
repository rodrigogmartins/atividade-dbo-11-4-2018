const form = document.querySelector('form');
const inputDescricao = document.querySelector('input#descricao');
const selectPrioridade = document.querySelector('select#prioridade');
const ol = document.querySelector('ol');
const trocarCurso = document.querySelector('#trocarCurso');
const curso0 = document.querySelector('#curso0');
const curso1 = document.querySelector('#curso1');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeCurso = inputDescricao.value;
    let cursos = selectPrioridade.children;
    let naoTemCurso;
    for (let curso of cursos) {
        naoTemCurso = !(curso.firstChild.nodeValue === nomeCurso);
    }
    if (naoTemCurso) {
        const option = document.createElement('option');
        option.textContent = nomeCurso;
        return selectPrioridade.appendChild(option);
    }
});

selectPrioridade.addEventListener('click', function(event) {
    const tamanhoOl = ol.children.length;
    const tamanhoMaximo = 2;
    if (event.target.tagName === 'OPTION' && tamanhoOl <= tamanhoMaximo) {
        const button = document.createElement('button');
        button.textContent = 'X';
        const li = document.createElement('li');
        li.textContent = event.target.textContent;
        li.appendChild(button);
        return ol.appendChild(li);
    }
});


ol.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
    }
});

let cliques = 1;
ol.addEventListener('dblclick', function(event) {
    if (curso0 !== '' && curso1 !== '') {
        cliques++;
        let nomeCurso = event.target.textContent.replace('X', '');
        return (cliques % 2 === 0) ?
            curso0.value = nomeCurso :
            curso1.value = nomeCurso;
    }        
});

trocarCurso.addEventListener('click', function() {
    let cursosDaLista = ol.children;
    for (let curso of cursosDaLista) {
        if (curso.firstChild.nodeValue === curso0.value) {
            curso.firstChild.nodeValue = curso1.value;
        } else if (curso.firstChild.nodeValue === curso1.value) {
            curso.firstChild.nodeValue = curso0.value;
        }
    }
    curso0.value = curso1.value = '';
});

