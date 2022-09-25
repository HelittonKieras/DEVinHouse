// Seguir o conceito abaixo, a ação deve ocorrer da seguinte forma:

// Ao clicar no botão "Focar no input", o foco do HTML deve passar para o input de forma automática (simulando o clique no input).

import React, {useRef} from 'react';

export default function Ref() {
    const focarAqui = useRef(0)
function focaNoInput(){
    focarAqui.current.focus();
}

    return(
        <div>
            <input type="text" ref={focarAqui}></input>
            <button onClick={focaNoInput}>Focar no Input</button>
        </div>
    )
}