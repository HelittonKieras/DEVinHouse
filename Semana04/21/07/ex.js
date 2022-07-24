// Exercício em sala
// Em grupos e utilizando o laço de interação foreach execute uma função que irá percorrer a seguinte lista de nomes:
// var names = ["Ben","Carol", "Iane", "Jafar", "Matt", "Priya", "Brian", "Guilherme", "Bruna"];
// A cada item deverá ser verificado se o primeiro caractere é B, caso seja, adicione toda a string do item em um outro array.

novoArray = [];
var names = [
  'Ben',
  'Carol',
  'Iane',
  'Jafar',
  'Matt',
  'Priya',
  'Brian',
  'Guilherme',
  'Bruna',
];
names.forEach(function (item) {
  if (item[0] == 'B') {
    novoArray.push(item);
  }
});
document.write(
  '<h3>Os nomes que começam com a letra B são: ' +
    '<br/> <br/>' +
    novoArray +
    '</h3'
);
