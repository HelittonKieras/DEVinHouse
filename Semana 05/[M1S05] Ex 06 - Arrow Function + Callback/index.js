// Escreva duas arrow functions que juntas possam imprimir tabuada de 0 a 10

// DICAS
// - A primeira deve imprimir a tabuada de um número
// - A segunda deve receber um numero e uma função, e realizar repetições de 1 até o número informado
// - Use a primeira função como callback da segunda

// var numParaGerarTabuada = 9;

// const imprimirTabuada = (numero) => {
//     return numParaGerarTabuada * numero;
// }

// const gerarTabuada = (num, callBack) => {
//     for (let i = 0; i <= 10; i++) {
//         const element = callBack([i]);
//         console.log(`${i} x ${num} = ${element}`);
//     }
// }

// gerarTabuada(numParaGerarTabuada, imprimirTabuada);


var numParaGerarTabuada = 9;

const imprimirTabuada = (numero) => {
    return numParaGerarTabuada * numero;
}

const gerarTabuada = (num, callBack) => {
    for (let i = 0; i <= 10; i++) {
        const element = callBack([i]);
        console.log(`${i} x ${num} = ${element}`);
    }
}

gerarTabuada(numParaGerarTabuada, imprimirTabuada);