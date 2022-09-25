import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    NavLink
    } from 'reactstrap';

function Estrutura({ title, description,imagem, repositorio, primeiroIcone, segundoIcone, terceiroIcone }){

return(
        <div className='cards'>
            <Card body style={{width: '18rem'}}>
                <img src={imagem}/>
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
                    <NavLink className='link-projeto' href={repositorio} target={'blank'}>Repositório GitHub</NavLink>            
            <div className='icones-card'>
            <i id='icon' className={ primeiroIcone }></i>
            <i id='icon' className={ segundoIcone }></i>
            <i id='icon' className={ terceiroIcone }></i>
            </div>
            </Card>
        </div>
        
)
}

export default Estrutura;