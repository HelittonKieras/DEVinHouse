// Crie um componente de soma que recebe duas propriedades (números), 
// e que retorna uma frase: “A soma dos números é __”

export default function Soma({num1, num2}) {
    var soma = num1 + num2;
    return <p>A soma dos números é {soma}</p>;
}