// Construa um código javascript que irá remover de um array um item que irá ser passado no parâmetro desse método.
// O fluxo consiste em capturar em um input html um item do array e ao apertar em um botão fazer com que esse 
// item seja excluído (utilize o addEventListener de click).
// Pode conferir no console.log() como está o array após a exclusão.

let array = ["carne", "pedra", "teclado", "mouse", "refrigerante"];
let minhaDiv = document.getElementById("souUmaDiv");
let minhaNovaDiv = document.getElementById("souUmaDiv2");
const botao = document.getElementById("meuBotao");
let input = document.getElementById("meuInput");

minhaDiv.innerHTML = `Os itens do meu array são: ${array}. Escolha um deles para excluir do lista e digite abaixo:`

console.log(`Meu array inicial é composto por ${array}`);


botao.addEventListener('click', function(){
let informado = array.indexOf(input.value);
array.splice(informado,1);
minhaNovaDiv.innerHTML = `Sua nova lista de array é: ${array}`
console.log(`Meu novo array é composto por ${array}`);
});