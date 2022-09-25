// Crie um site com um botão que espera receber um evento de click e uma função callback que informe ao usuário que o botão foi clicado.

var botao = document.getElementById('btn');
var contarClicks = 0;

function clicarBotao() {
    contarClicks++;
    console.log(`O botão foi clicado ${contarClicks}X.`)
}

botao.addEventListener('click', clicarBotao)