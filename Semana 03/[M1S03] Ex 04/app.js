
const caixaDeTexto = document.querySelectorAll('.container');
console.log(caixaDeTexto);

window.addEventListener('DOMContentLoaded', function () {
  caixaDeTexto.forEach(function (caixa) {
    caixa.innerHTML = '<p>Como voce esta?</p>';
  });
  
});