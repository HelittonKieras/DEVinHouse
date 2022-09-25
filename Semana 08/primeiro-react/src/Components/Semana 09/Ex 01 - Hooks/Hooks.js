// Inicie um componente com Hooks e adicione uma lista inicial com 5 frutas e renderize estes elementos na tela.

import React, { useState } from "react";

export default function ImprimeFrutas() {

    const listaInicial = [
        {
            id: 1,
            name: 'Abacate'
        },
        {
            id: 2,
            name: 'Manga'
        },
        {
            id: 3,
            name: 'Laranja'
        },
        {
            id: 4,
            name: 'Pera'
        },
        {
            id: 5,
            name: 'Abacaxi'
        },
    ]
    
    const [frutas, setFrutas] = useState(listaInicial)

    return (
        <ul>
            { frutas.map(fruta => 
                <li key={fruta.id}> {fruta.name} </li>
                )}
        </ul>
    )
}