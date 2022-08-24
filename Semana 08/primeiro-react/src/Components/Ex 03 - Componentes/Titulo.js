import './Titulo.css'

export default function Titulo({ titulo, texto }){
    return (
        <>
            <h1 className="Titulo">{titulo}</h1>
            <p style={{ fontStyle: 'italic', backgroundColor: '#d8edff' }}>{texto}</p>
        </>
    )
}