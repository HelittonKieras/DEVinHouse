// Crie um código javascript para verificar se todos os alunos do array de objetos
// arrayAlunos abaixo estão acima da média que será 7.
// Se o retorno for verdadeiro imprima em tela "Parabéns a todos da turma",
// porem se não for imprima em uma lista html todos os alunos que ficaram na "recuperação".
let arrayAlunos = [
    {
      nome: "Carlos",
      media: 5,
    },
    {
      nome: "Julia",
      media: 2,
    },
    {
      nome: "Rayane",
      media: 7,
    },
    {
      nome: "Arthur",
      media: 1,
    },
  ],
  minhaDiv,
  contador = 0;
minhaDiv = document.getElementById("souUmaDiv");

minhaDiv.innerHTML = `<h1>Os alunos que ficaram em recupeção foram: </h1>`;

arrayAlunos.forEach((aluno) => {
  if (aluno.media < 7) {
    contador++;
    minhaDiv.innerHTML += `<h2>${aluno.nome}</h2>`;
  }
});

if (contador == 0) {
  minhaDiv.innerHTML += `<h2>Nenhum aluno!</br>Parabéns, toda turma foi aprovada</h2>`;
}