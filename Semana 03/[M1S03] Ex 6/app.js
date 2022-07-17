
const item = document.querySelector('#item');

const adicionar = document.querySelector('.adicionar');

const lista = document.querySelector('.lista');

const apagar = document.querySelector('.apagar');

adicionar.addEventListener('click', function () {
  lista.append(criarLista(item));
});

apagar.addEventListener('click', function () {
  lista.innerHTML = '';
});

function criarLista(item) {
  let li = document.createElement('li');
  li.textContent = item.value;
  return li;
}