

function listaNumeros(arrayNumeros = []) {
    var par = 0;
    var impar = 0;
    var invalido = 0;
    for (const item of arrayNumeros) {
      if (item % 2 == 0) {
        par++;
      } else if (item % 2 === 1) {
        impar++;
      } else {
        invalido++;
      }
      
    }
    return [par, impar, invalido];
  }
  
  
  var lista = [1, 2, "Helitton", 4, 5, 6, 7, 8, 9, 10];
  
  qtdPares = listaNumeros(lista)[0];
  qtdImpares = listaNumeros(lista)[1];
  qtdInvalidos = listaNumeros(lista)[2];
  
  
  if (qtdInvalidos != 0) {
    window.alert(`Sua lista tem ${qtdInvalidos} dados inválidos. Sua lista de números precisa conter apenas números inteiros.`);
  } else {
    console.log(`A quantidade informada foi de ${lista.length} números, a de valores pares foi de ${qtdPares}, e a de valores ímpares foi de ${qtdImpares}.`);
  }