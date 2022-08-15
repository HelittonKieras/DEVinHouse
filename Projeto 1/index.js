 function receberDados(){
const form = document.querySelector("#form");
const titulo = document.querySelector("#tit");
const skill = document.querySelector("#skill");
const categoria = document.querySelector("#categoria");
const descricao = document.querySelector("#descricao");
}

button.addEventListener("submit", (e)=>{
  e.preventDefault();
  const tituloInput = document.querySelector("#titulo");
  //localStorage.setItem("titulo", tituloInput.value);
})
button.addEventListener("submit", "Limpar")



/* function caracteristicas() {
  const tituloValue = titulo.value;
  const skillValue = skill.value;
  const categoriaValue = categoria.value;
  const descricaoValue = descricao.value;
} */

function cadastrar(){
  if(titulo && skill && categoria && descricao){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')}
    
    listaUser.push(
    {
      titulo: titulo.value,
      skill: skill.value,
      categoria: categoria.value,
      descricao: descricao.value
    }
    )
}
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

form.submit()

function Limpar (){
  event.preventDefault()
form.reset()}  
