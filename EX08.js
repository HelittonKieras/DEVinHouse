function add () {
    const input = document.getElementById("meu-input");
    const divPai = document.getElementById("pai");
    divPai.innerHTML = (input.value);
}


const botao2 = document.getElementById("botao-save"); 
botao2.addEventListener("click", function() {
    const input = document.getElementById("meu-input");
    localStorage.setItem("mensagem", JSON.stringify(input.value))
  })


function show () {
    const input = document.getElementById("meu-input");
    const divPai = document.getElementById("pai");
    const texto = localStorage.getItem("mensagem");
    divPai.innerHTML = JSON.parse(texto);
}