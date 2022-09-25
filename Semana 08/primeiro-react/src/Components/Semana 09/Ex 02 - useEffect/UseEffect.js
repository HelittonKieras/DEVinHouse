// Mostrar no console o valor digitado no input por meio do recurso useEffect

import React, { useEffect, useState } from "react";

export default function MudancaInput() {

    const [change, setChange] = useState()
    
    useEffect(() => {
        console.log(`O valor digitado foi ${change}`)
    }, [change])

    return (
            <input value={change} placeholder='Digite um valor' onChange={(e) => setChange(e.target.value)}></input>
    )

}