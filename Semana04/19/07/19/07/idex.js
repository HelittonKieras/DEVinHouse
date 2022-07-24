
class User{
    login;
    senha;
    dataNascimento;
    nome;
    
    constructor(login, senha, dataNascimento, nome){
       this.login = login;
       this.senha = senha;
       this.dataNascimento = dataNascimento;
       this.nome = nome;
    }
    cadastrar(){}
    editar(){}
    postar(){}
   inserirAvatar(){}
   }
   const usuario = new User("UserClamed", "clamed", "20/07/2022", "Clamedinho")
