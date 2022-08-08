// Agora pensando em avançar um pouco mais iremos adicionar em tela um input e um botão que irá pegar o nome do pokemon e ao apertar no botão pesquisar irá fazer a mesma requisição construída anteriormente.
// Com isso imprima as mesmas informações pedidas todas em tela, adicione uma lista com todas as habilidades do pokémon (observe a propriedade abilities).

var botao = document.getElementById('pesquisar');
    botao.addEventListener('click', () => {
    var input = document.getElementById('input').value;

const pokemon = new XMLHttpRequest(); 

pokemon.onload = () => {

        console.log(pokemon.response);
            
        let image = document.querySelector(".pokeimage");
        let namePokemon = document.querySelector("#pokemonname");
        let typePokemon = document.querySelector("#pokemontype");
        let weightPokemon = document.querySelector("#weight");
        let abilityPokemon = document.querySelector("#ability");
        
        image.setAttribute('src', pokemon.response.sprites.front_default);
        namePokemon.innerHTML = pokemon.response.name;
        typePokemon.innerHTML = pokemon.response.types[0].type.name;
        weightPokemon.innerHTML = pokemon.response.weight;
        
        abilityPokemon.innerHTML = '';
        pokemon.response.abilities.forEach(item => {
            let tagLi = document.createElement('li');
            tagLi.innerHTML = item.ability.name;
            abilityPokemon.appendChild(tagLi)
        });
    }
    
    pokemon.open("GET", `https://pokeapi.co/api/v2/pokemon/${input}`);
    
    pokemon.responseType = "json";
    
    pokemon.send();
});
    