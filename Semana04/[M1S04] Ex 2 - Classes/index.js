// Crie uma classe chamada Filme com os atributos nome, anoDeLancamento e diretor. 
// Fora do escopo dessa classe, instancie ela e preencha os campos acessando seus atributos por meio do ponto (.).

class Filme {
    nome;
    anoDeLancamento;
    diretor;
  }
  
  let ArremessandoAlto = new Filme();
  ArremessandoAlto.nome = "Arremessando Alto";
  ArremessandoAlto.anoDeLancamento = 2022;
  ArremessandoAlto.diretor = "Jeremiah Zagar";
  
  console.log(ArremessandoAlto);
  console.log(ArremessandoAlto.diretor);
  console.log(ArremessandoAlto.nome);
  console.log(ArremessandoAlto.anoDeLancamento);