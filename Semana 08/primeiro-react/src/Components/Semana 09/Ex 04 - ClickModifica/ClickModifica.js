// Adicione dois botões na tela com os nomes "Título 1" e "Título 2", adicione ainda um <span> que irá receber o valor dos botões clicados.
// Modificar o título da página ao gerar um evento onClick nos botões, mostrar também na tela qual botão foi clicado.

import React, { useState, useEffect} from "react";

export default function ClickModifica() {
    
    const [title, setTitle] = useState('')

    const [valorBotao, setValorBotao] = useState()
    
    useEffect(()=>{
        if(title == 'Título 1') {
            setValorBotao('Título 1')
        } else if(title == 'Título 2') {
            setValorBotao('Título 2')
        } else {
            setValorBotao('Nenhum Clique')
        }
    },[title])

    return (
        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
            <div style={{ 'padding': '10px', 'textAlign': 'center' }}>
                <span>Botão clicado: {valorBotao}</span>
            </div>
            <div style={{ 'textAlign': 'center', 'margin': '5px' }}>
                <button onClick={() => setTitle('Título 1')}>Título 1</button>
                <button onClick={() => setTitle('Título 2')}>Título 2</button>
            </div>
        </div>
    )

}