var parImpar = function (numero) {
    if (numero % 2 == 0){
        console.log("Este número é PAR");
    } else if (numero % 2 == 1){
        console.log("Este número é ÍMPAR");
    } else {
        console.log("Número inválido.")
    }
}

parImpar();