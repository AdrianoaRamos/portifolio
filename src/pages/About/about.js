import Navegacao from "../../navbar";
import foto from '../../img/foto.png'
import './about.css'

function About(){
    return(
        <div className="about">
            <div className="sobre">
            <img src={foto} />
            <h2>        Fazer a diferença é o objetivo do meu trabalho! 
                        Fazer as mesmas coisas todos os dias não estão nos meus planos, 
                        por isso estou sempre atrás de conhecimentos e buscando inovações 
                        para resolver problemas pois isso me mantém engajado. 
                        Sou preocupado com o impacto do que eu faço, então, 
                        busco atuar em empresas onde eu possa expor e defender meus ideais. 
                        Eu geralmente desenvolvo minhas competências com desafios e experimentação. 
                        Sou disponível ao diálogo, aberto a novas ideias, e pra mim a resolução de problemas
                        e a entregas de valor para o cliente são prioridades.</h2>
            </div>
    
        </div>
    )
}


export default About;