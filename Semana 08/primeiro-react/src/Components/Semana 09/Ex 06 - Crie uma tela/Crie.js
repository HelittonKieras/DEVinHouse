import React, { useState, useEffect, useRef } from 'react';

export default function Crie() {
    const [contatos, setContatos] = useState([{
        id: 1,
        photo:
            "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-251.jpg",
        name: "Jorge",
        description: "Programa demais",
    },
    {
        id: 2,
        photo:
            "https://gr3web.com.br/wp-content/uploads/2022/07/Fotos-para-homem-perfil-de-WhatsApp-656x1024.jpg",
        name: "Matheus",
        description: "Detona!",
    },
    {
        id: 3,
        photo:
            "https://4maos.com.br/wp-content/uploads/2022/06/ffa08ad0368f19f4e4c75d80430c976b.jpg",
        name: "Pedro",
        description: "Top!",
    }])
    function addMessage() {
        setContatos([...contatos, {
            id: 1,
            photo:
                "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-251.jpg",
            name: "Jorge",
            description: "Programa demais",
        }, {
            id: 2,
            photo:
                "https://gr3web.com.br/wp-content/uploads/2022/07/Fotos-para-homem-perfil-de-WhatsApp-656x1024.jpg",
            name: "Matheus",
            description: "Detona!",
        },
        {
            id: 3,
            photo:
                "https://4maos.com.br/wp-content/uploads/2022/06/ffa08ad0368f19f4e4c75d80430c976b.jpg",
            name: "Pedro",
            description: "Top!",
        }])
    }

    return (
        <>
            {contatos.map(contato => (<div style={{ display: "flex", flexDirection: "row", borderColor: "black" }}>

                <img style={{ borderRadius: "50%", width: "10%", height: "100px" }} key={contato.id} src={contato.photo} />
                <div>
                    <h1 style={{ marginTop: "20px", marginLeft: "20px", marginBottom: "0px" }} key={contato.id}> {contato.name} </h1>
                    <p style={{ marginTop: "0px", marginLeft: "20px" }} key={contato.id}> {contato.description} </p>
                </div>
            </div>))}
            <button onClick={addMessage}>Nova Mensagem</button>
        </>
    )
}