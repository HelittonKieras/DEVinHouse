// Utilize o if ternário para construir uma função que recebe o número do dias e retorna se pertence a primeira ou a segunda quinzena

var numDoDia = 10;

const primOuSegQuinzena = numDoDia => numDoDia <= 15 ? 'Primeira Quinzena' : 'Segunda Quinzena';

console.log(primOuSegQuinzena(numDoDia));