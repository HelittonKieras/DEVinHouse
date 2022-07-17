function imprimeElementosEQtd (lista = []) {
    
    function imprimeElementos (listaElementos) {
        for (let i=0; i<listaElementos.length; i++) {
            console.log(listaElementos[i]);
        }
    }
    
    function imprimeQuantidade (listaQtd) {
        console.log(`Este array tem ${listaQtd.lenght} elementos.`)
    }
    
    imprimeElementos(lista);
    imprimeQuantidade(lista);
}


imprimeElementosEQtd(["Helitton", "Helio", "Regiane", "Olga", "Ivonete", "Everaldo"]);