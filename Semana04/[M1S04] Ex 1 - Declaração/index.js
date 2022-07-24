// Em um arquivo javascript crie 3 variáveis, cada uma delas com a seguinte instrução:
// 1- exampleLet - sendo uma variável não constante e de escopo local do tipo numérico com a sua idade como valor.
// 2- exampleConst - sendo uma variável constante e de escopo local do tipo string com o seu nome como valor.
// 3- exampleVar - sendo uma variável não constante e de escopo global do tipo string com a concatenação da
// seguinte frase: “Olá meu nome é ”+exampleConst +” e tenho ”+exampleLet+” anos”.

var exampleVar;

do {
  const exampleConst = window.prompt("Por favor informe seu nome");
  let protegeNum = window.prompt("Por favor informe sua idade");
  let exampleLet = Number(protegeNum);
  exampleVar = `Olá meu nome é ${exampleConst} e tenho ${exampleLet} anos.`;
} while (exampleVar === undefined);

let minhaDiv = document.getElementById("souUmaDiv");
minhaDiv.innerHTML = exampleVar;