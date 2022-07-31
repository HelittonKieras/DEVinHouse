// Dado o array de cidades abaixo, filtre apenas as cidades com mais de 200000 habitantes;
// let cidades = [...];
// _Dica: Dar uma olhada no método filter

let cidades = [
    { nome: "Patos de Minas", populacao: 153585 },
    { nome: "Lages", populacao: 157349 },
    { nome: "Ibiúna", populacao: 79479 },
    { nome: "Maringá", populacao: 403063 },
    { nome: "Curitiba", populacao: 1963726 },
    { nome: "Florianópolis", populacao: 508826 },
    { nome: "Pato Branco", populacao: 84779 },
  ],
  cidadeMaisDe200k = [], nomes=[];

  cidadeMaisDe200k = cidades.filter(function(cidade){
    return cidade.populacao > 200000;
  });
  console.log(cidadeMaisDe200k);

  cidadeMaisDe200k.forEach(function(item){
    nomes += item.nome + " ";
  })
 
  minhaDiv = document.getElementById("souUmaDiv");
  minhaDiv.innerHTML = `As cidades que tem população maior que 200000 hab. são: ${nomes}`