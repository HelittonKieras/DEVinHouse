let numeros = [4, 4, 10, 5, 3]

document.querySelector("#result").innerHTML = `
    <h2>A soma dos numeros é: ${numeros.reduce(somar, 0)}</h2>
    <h2>A Média dos numeros é: ${numeros.reduce(somar, 0)/numeros.length}
`
function somar(total, number) {
  return total + number
}
