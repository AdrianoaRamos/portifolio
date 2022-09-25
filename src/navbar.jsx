import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { FaJediOrder } from "react-icons/fa";


import './navbar.css'

function Navegacao() {

  return (
    <div >
      <div className='navegacao'>
        <FaJediOrder className='logo' style={{color: '#FFFFFF'}}/>
          <Nav >
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Projetos">Projetos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contato">Contato</NavLink>
            </NavItem>
          </Nav>
      </div>
    </div>
  );
}

export default Navegacao;