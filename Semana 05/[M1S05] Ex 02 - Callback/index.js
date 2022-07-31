function ePar (numero){
    if(numero%2==0){
        let par = true
        return par
    }
    else {
        var impar =false
        return impar
    }
}
function eImpar(numero){
    if (numero%2==1){
        let impar = true
        return impar
    }
}
var arrayPares=[]
var arrayImpares=[]
function arraysFiltradoParEImpar (array=[],funcao){
    array.forEach(element => {
        if(funcao(element) == true){
         arrayPares.push (element)
        }
        else if(funcao(element) == false){
           arrayImpares.push (element)
        }
    });
    console.log(arrayPares)
    console.log(arrayImpares)
}
arraysFiltradoParEImpar([1,2,6,5,4,9,10],ePar)