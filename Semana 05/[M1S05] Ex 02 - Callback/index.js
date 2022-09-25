// Crie 2 funções, ambas recebem um número e retorna true ou false:
// - a primeira  verifica se é par;
// - a segunda verifica se é ímpar.

// Em seguida crie uma função que recebe como parâmetros: um array de números e uma função callback.
// Essa função principal deverá ser capaz de filtrar os números e retornar um array de números filtrados (independente de qual seja a função callback).

// Dica: o filtro poderá ser de números ímpares ou pares.

function verificaSeEPar(numero) {
    if(numero % 2 == 0){
        return true;
    }
}

function verificaSeEImpar(numero) {
    if(numero % 2 != 0){
        return true;
        }
    }
    
var arrayPares=[]
var arrayImpares=[]
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const filtroParImpar = array.filter(item => {
    if (verificaSeEPar(item) == true) {
        return arrayPares.push(item);
    } else {
        arrayImpares.push(item);
    }
});

// Retorno Pares com Callback
console.log(`Estes são os nums pares: ${filtroParImpar}`);

// Retorno Ímpares somente no log
console.log(`Estes são os nums ímpares: ${arrayImpares}`);