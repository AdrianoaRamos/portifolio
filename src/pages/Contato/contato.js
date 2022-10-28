import React, { useRef } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

import './contato.css'

const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m1ft4ok', 'template_e4bpt94', form.current, '7fSE-ZKD8QGC5wgcp')
        .then((result) => {
            alert('Menssagem Enviada Com sucesso');
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  
    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail} ref={form}>
                    <div className="row pt-5 mx-auto">
                        
                        <div className="col-lg-8 col-sm-12 form-group mx-auto">
                            <label>Nome</label>
                            <input type="text" autoFocus className="form-control" required placeholder="Nome" name="name"/>
                        </div>
                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label>Email</label>
                            <input type="email" className="form-control" required placeholder="Seu email" name="email"/>
                        </div>

                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label>Mensagem</label>
                            <textarea className="form-control" id="" cols="30" rows="8" required placeholder="Sua mensagem" name="message"></textarea>
                        </div>
                        <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Enviar mensagem"></input>
                        </div>
                    </div>
                </form>
            </div>
            <div className='redes'>
            <a href='https://github.com/AdrianoaRamos' target={'blank'} ><FaGithub className='icone-contato'/></a>
            <a href='https://www.linkedin.com/in/adriano-augusto-ramos-53b241b8/' target={'blank'}><FaLinkedin className='icone-contato'/></a>
            </div>
        </div>
    )
  };

export default ContactUs