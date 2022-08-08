// Utilizando a api https://pokeapi.co/ e fazendo uma requisição get com XMLHttpRequest, imprima em um console.log() o nome, a altura, o peso e adicione na tela uma imagem (a sua escolha) desse pokémon. Todas as informações precisam vir da api inclusive a imagem. 

// Dicas: as informações pedidas estão dentro do json que é retornado da api, observe as propriedades: height, weight, sprites e name.
// Para o teste no final da url é necessário usar um nome de um pokémon. Ex: pikachu, ditto, charmander…


const myRequest = new XMLHttpRequest(); 
const imagem = document.getElementById('imagem');

myRequest.onload = () => {

    console.log(myRequest.response.name);
    console.log(myRequest.response.height);
    console.log(myRequest.response.weight);

    imagem.setAttribute("src",myRequest.response.sprites.front_default);
}

myRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/pikachu");
myRequest.responseType = "json";

myRequest.send();