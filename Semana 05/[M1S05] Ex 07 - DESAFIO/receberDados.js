// Crie uma aplicação com três inputs que receba um nome, link de imagem e descrição de um usuário. 
// Fazendo uso de módulos nativos do JS, exiba os valores recebidos em um card de usuário.

// Importar funcao
import imprimirElementos from "./imprimirDados.js";

// Acessar elementos
var botao = document.getElementById('btn');
var inputImagem = document.getElementById('input-imagem');
var inputNome = document.getElementById('input-nome');
var inputDescricao = document.getElementById('input-descricao');
var formulario = document.getElementById('formulario');


botao.addEventListener('click', (event) => {
    event.preventDefault();
        
   
    var valorDoNome = inputNome.value;
    var valorDaImagem = inputImagem;
    var valorDaDescricao = inputDescricao.value;

    imprimirElementos(valorDaImagem, valorDoNome, valorDaDescricao);
    
    formulario.reset();
});
    
