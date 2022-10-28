import {    FaHtml5, 
            FaCss3Alt, 
            FaJs, 
            FaReact,
            FaGitAlt,
            FaGithubSquare
        } from "react-icons/fa";
import './skills.css'




function Skills(){
    return(
        <div className="skill">
            <div className="conhecimentos">
                <div className="textos">
                <h2>Conhecimento</h2>
                <p></p>
                </div>
            <div className="icones">
                < FaHtml5 className="icone"/>
                < FaCss3Alt className="icone"/>
                < FaJs className="icone"/>
                < FaReact className="icone"/>
                < FaGitAlt className="icone"/>
                < FaGithubSquare className="icone"/>
            </div>
            </div>
        </div>
    )
}


export default Skills;