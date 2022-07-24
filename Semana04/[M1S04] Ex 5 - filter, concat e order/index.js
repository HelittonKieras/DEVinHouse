// Crie um código javascript que irá juntar os dois arrays abaixo e coloque esse array concatenado em outra variável:
// let array1 = [1,3,4,5,3,7];
// let array2 = [1,2,6,4,8,5];
// Após fazer a junção remova os itens que se repetem usando o .includes ou o .filter
// Após isso ordene por ordem crescente.

let array1 = [1, 3, 4, 5, 3, 7],
  array2 = [1, 2, 6, 4, 8, 5],
  meuArrayConcat,
  meuArrayReduzido,
  minhaDiv,
  itensAReduzir = [];

minhaDiv = document.getElementById("souUmaDiv");

meuArrayConcat = array1.concat(array2);

let array1Reduzida = [...new Set(array1)];

let array2Reduzida = [...new Set(array2)];


meuArrayReduzido = array1Reduzida.concat(array2Reduzida);

array2.forEach(function (item) {
 
  if (array1.includes(item) == true) {
   
    itensAReduzir.push(item);
  }
});


itensAReduzir.forEach(function (item) {
  meuArrayReduzido.splice(meuArrayReduzido.indexOf(item), 1);
});

meuArrayReduzido.sort(function (a, b) {
  return a - b;
});


minhaDiv.innerHTML += `Meu array1 é: ${array1}</br> Meu array2 é: ${array2}</br> Meu array concatenado é: ${meuArrayConcat}</br> Meu array reduzindo os itens duplicados, em ordem crescente, é: ${meuArrayReduzido}`;
