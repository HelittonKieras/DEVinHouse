// Para fechar baixe o zip passado em anexo, nele irá conter o html, o css e o arquivo javascript (index.js), toda implementação será feita no javascript.

// Observe os seguintes pedidos:


// - Na tag img com a classe pokemonimage adicione a imagem do pokémon que você irá pesquisar.
// - No span com a classe pokemonnumber será adicionado o id do pokemon.
// - No span com a classe pokemonname será adicionado o nome do pokemon.
// - No input com a classe input__search será onde o usuário poderá pesquisar pelo nome ou pelo id.
// - No span com o id pokemontype será adicionado o tipo do pokémon pesquisado.
// - No span com o id weight irá ser apresentado o peso do pokemon.
// - Ao clicar no botão com a classe button será iniciado toda a funcionalidade da aplicação: pesquisa da api, adição das informações nos campos…

var botao = document.querySelector(".button");

botao.addEventListener("click", () => {
    const options = {
        method: "GET",
    };
    
    let pokemon = document.querySelector(".input__search").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, options)
    
    .then((response) => {
        return response.json();
    })
    .then((pokemon) => {

        console.log(pokemon);

        let image = document.querySelector(".pokemonimage");
        let idPokemon = document.querySelector(".pokemonnumber");
        let namePokemon = document.querySelector(".pokemonname");
        let typePokemon = document.querySelector("#pokemontype");
        let weightPokemon = document.querySelector("#weight");
        let abilityPokemon = document.querySelector("#ability");

        image.setAttribute('src', pokemon.sprites.front_default);
        idPokemon.innerHTML = pokemon.id;
        namePokemon.innerHTML = pokemon.name;
        typePokemon.innerHTML = pokemon.types[0].type.name;
        weightPokemon.innerHTML = pokemon.weight;


        abilityPokemon.innerHTML = '';
        pokemon.abilities.forEach(item => {
            let tagLi = document.createElement('li');
            tagLi.innerHTML = item.ability.name;
            abilityPokemon.appendChild(tagLi)
        });

        console.log(image)
    })
    .catch((err) => {
        window.alert('Pokemon inexistente.')
        console.error(err);
    });

});