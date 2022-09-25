const Botao = ({ corDeFundo, children }) => {
    return <button style={ { backgroundColor: corDeFundo } }>{children}</button>
  }
  
  export default Botao;