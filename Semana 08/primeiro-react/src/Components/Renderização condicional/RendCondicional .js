// Crie um componente chamado Produto. Cada produto contém as props photo, name e price.

import './RendCondicional.css'

export default function RendCondicional({ photo, name, price }) {
    return (
        <div>
            {price >= 10 && (
                <div className="DadosProduto">
                    <p className='melhorPreco'>Melhor preco encontrado</p>
                    <div className='Photo'>
                        <img className='fileImg' src={photo}></img>
                    </div>
                    <div className='Info'>
                        <p className='name'><strong>{name}</strong></p>
                        <p className='price'><strong>{price}</strong></p>
                    </div>
                </div>
            )}
            {price < 10 && (
                <div className="DadosProduto">
                    <p className='oferta'>Oferta</p>
                    <div className='Photo'>
                        <img className='fileImg' src={photo}></img>
                    </div>
                    <div className='Info'>
                        <p className='name'><strong>{name}</strong></p>
                        <p className='price'><strong>${price}</strong></p>
                    </div>
                </div>
            )}
        </div>
    )
}