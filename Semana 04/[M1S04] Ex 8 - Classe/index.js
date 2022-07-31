// // Crie uma classe chamada Serie com os seguintes atributos: nome, anoLancamento, qttTemporada.
// // Construa o construtor dessa classe com todos os atributos.
// // Após isso, com um laço de repetição a sua escolha, instancie a classe
// // 4 vezes com os dados sendo capturados por um prompt e depois adicione a classe a um array chamado series.
// // Após isso imprima no documento (usando o innerHTML) a série mais antiga
// // (ou seja, a que possui o menor anoLancamento).
// // Para percorrer o array com as 4 classes utilize o forEach.

class Serie {
    nome;
    anoLancamento;
    qttTemporada;
  
    constructor(nome, anoLancamento, qttTemporada) {
      this.nome = nome;
      this.anoLancamento = anoLancamento;
      this.qttTemporada = qttTemporada;
    }
  }
  
  let series = [],
    minhaDiv,
    serieMaisAntiga = 9999,
    nomeDaMaisAntiga;
  minhaDiv = document.getElementById("souUmaDiv");
  
  for (let i = 0; i < 4; i++) {
    let nomeAtual = window.prompt("Por favor informe o nome de uma série:");
    let anoLancamentoAtual = parseInt(window.prompt("Por favor informe o ano de lançamento desta série:"));
    let qttTemporadaAtual = parseInt(window.prompt("Por favor informe a quantidade de temporadas desta série:"));
    let serieAtual = new Serie(nomeAtual, anoLancamentoAtual, qttTemporadaAtual);
    series.push(new Object(serieAtual));
  }
  
  series.forEach(function (item, i) {
    if (series[i].anoLancamento < serieMaisAntiga) {
      serieMaisAntiga = item.anoLancamento;
      nomeDaMaisAntiga = item.nome;
    }
  });
  minhaDiv.innerHTML = `A série mais antiga, ${nomeDaMaisAntiga}, foi lançada em ${serieMaisAntiga}`;