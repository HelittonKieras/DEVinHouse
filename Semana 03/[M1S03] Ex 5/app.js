const caixaDeTexto = document.querySelectorAll('.container');
console.log(caixaDeTexto);

window.addEventListener('DOMContentLoaded', function () {
  caixaDeTexto.forEach(function (caixa) {
    criarTexto(caixa);
  });
  
});

function criarTexto(caixa) {
  caixa.innerHTML = '<p>como voce esta?</p>';
}