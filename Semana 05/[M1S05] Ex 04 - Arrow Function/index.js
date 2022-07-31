const array = [-3, -2, -1, 0, 1, 2, 3, 4];
const retornaPositivo = array => {
    return array.filter(array => array > 0);
};
console.log(retornaPositivo(array));