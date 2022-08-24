// Crie um componente chamado Produto. Cada produto contém as props photo, name e price.

import './ListaDeProdutos.css'

export default function ListaDeProdutos({ photo, name, price }) {
    return (
        <div className="DadosProduto">
            <div className='Photo'>
                <img className='fileImg' src={photo}></img>
            </div>
            <div className='Info'>
                <p className='name'><strong>{name}</strong></p>
                <p className='price'><strong>{price}</strong></p>
            </div>
        </div>
    )
}