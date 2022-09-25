import Estrutura from './CardEstrutura';
import cards from '../../dados'

import './projetos.css'

export default function Projetos(){


    return(
        <div className="projetos">
            {cards.map((card) => {
                return(
                    <Estrutura 
                    imagem={card.imagem}
                    title={card.title}
                    description={card.description}
                    repositorio={card.repositorio}
                    primeiroIcone={card.primeiroIcone}
                    segundoIcone={card.segundoIcone}
                    terceiroIcone={card.terceiroIcone}
                    />
                )
            })}
        </div>
    )
}
