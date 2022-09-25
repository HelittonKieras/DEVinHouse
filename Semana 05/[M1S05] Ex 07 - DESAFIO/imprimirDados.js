// Crie uma aplicação com três inputs que receba um nome, link de imagem e descrição de um usuário. 
// Fazendo uso de módulos nativos do JS, exiba os valores recebidos em um card de usuário.

// Acessar elementos para fazer a impressao
var imprimirNome = document.getElementById('imprimir-nome');
var imprimirImagem = document.getElementById('imprimir-imagem');
var imprimirDescricao = document.getElementById('imprimir-descricao');

// Criar e exportar funcao
export default function imprimirElementos(imagem, nome, descricao) {
    if (imagem) {
        imprimirImagem.setAttribute("src",imagem);
    }
    if (nome) {
        imprimirNome.innerHTML = nome;
    }
    if (descricao) {
        imprimirDescricao.innerHTML = descricao;
    }
}