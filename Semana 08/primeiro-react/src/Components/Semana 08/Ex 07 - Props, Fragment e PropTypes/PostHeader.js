export default function PostHeader({
    fotoPerfil,
    nomePerfil,
    dataPost,
  }) {
    return (
      <div className="Header">
        <div className="InformacoesPessoais">
          <img
            src={fotoPerfil}
            alt="imagem do perfil"
            className="ImagemDoPerfil"
          />
          <div>
            <h3 className="NomePerfil">{nomePerfil}</h3>
            <p className="DataPost">{dataPost}</p>
          </div>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2089/2089793.png"
          alt="menu"
          class="Menu"
        />
      </div>
    );
  }