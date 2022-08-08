// Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem "Número validado é par”. 
// Caso o valor seja impar, retorne para o catch a mensagem “Error: número informado é impar”.	


function parImpar(numero) {
    if (numero % 2 == 0) {
        return 'par';
    } else {
        return 'ímpar';
    }
}

var promessa = new Promise((resolve, reject)=>{
    let parOuImpar = parImpar(parseInt(window.prompt('Digite um número inteiro.')));
    if (parOuImpar == 'par') {
        resolve('Número válido é par');
    } else {
        reject('Error: número informado é ímpar');
    }
});

promessa.then((retorno)=>{
    console.log(retorno);
}).catch((err)=>{
    console.error(err);
});