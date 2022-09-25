// Crie uma arrow function que recebe um array de números e retorne um array contendo apenas números positivos

array = [-3, -2 , -5, 6, 7, 90, 23]
arrayPositivos = [];

const numerosPositivos = array => {
    for (const item of array) {
        if (item >= 0) {
            arrayPositivos.push(item);
        };
    }
    return arrayPositivos;
}

console.log(numerosPositivos(array));