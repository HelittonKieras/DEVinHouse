import PropTypes from 'prop-types'
import './Post.css'
import PostFooter from './Footer.js'
import PostHeader from './PostHeader'

export default function Post({
  fotoPerfil,
  nomePerfil,
  dataPost,
  imagemPost,
  descricaoPost,
  curtidoPor,
  qtdCurtidas,
}){
  return (
    <div className="Post">
      <div className="Header">
        <div className="InformacoesPessoais">
        <img src={fotoPerfil} className="ImagemDoPerfil"></img>
          <div>
            <h4 className="NomePerfil">{nomePerfil}</h4>
            <p>{dataPost}</p>
          </div>
        </div>

        <img className="Menu" src="https://cdn-icons.flaticon.com/png/512/2311/premium/2311524.png?token=exp=1660951117~hmac=6420fb1c21bc5ccf787fb5bfd35d93fd"></img>
      </div>
      
      <p>{descricaoPost}</p>
      <img className="FotoDoPost" src={imagemPost}></img>
      <div className="FooterUp">
        <div className="HeartComments">
        
          <img className="Heart" src={qtdCurtidas>=1 ? "https://img.icons8.com/color/48/000000/hearts.png":"https://img.icons8.com/windows/32/FA5252/hearts.png"}></img>

        <p>{qtdCurtidas} Comments</p>
        </div>
        <button>Share</button>
      </div>
        <p>Liked by {curtidoPor}</p>
    </div>
  )
}

Post.propTypes = {
  fotoPerfil: PropTypes.string,
  nomePerfil: PropTypes.string,
  dataPost: PropTypes.string,
  imagemPost: PropTypes.string,
  descricaoPost: PropTypes.string,
  curtidoPor: PropTypes.string,
  qtdCurtidas: PropTypes.number
}

Post.defaultProps = {
  fotoPerfil: "https://cdn-icons-png.flaticon.com/512/848/848006.png",
  nomePerfil: "",
  dataPost: "",
  imagemPost: "",
  descricaoPost: "",
  curtidoPor: "",
  qtdCurtidas: 0
}
