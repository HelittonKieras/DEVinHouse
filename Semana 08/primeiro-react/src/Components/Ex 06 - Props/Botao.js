// Crie um componente de botão com as props background (Cor de fundo do botão) e title (Texto do botão).

export default function Botao({ title, background, color }) {
    return <h1 style={{ backgroundColor: background, color: color }}>{title}</h1>
}