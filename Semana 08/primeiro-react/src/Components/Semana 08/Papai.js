const Botao = ({ children, titulo }) => {
    return (
        <div>
            <h1>{titulo}</h1>
            {children}
            <h2>Eu sou um titulo 2</h2>
        </div>
    )
  }
  
  export default Botao;
  