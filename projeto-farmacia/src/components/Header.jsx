import React from 'react';
import logo from '../assets/logo-g.png';
import './css/Header.css';

function Header() {

  return (
    <nav>
      <img src={logo} />

      <div className='links'>
        <a>Medicamentos</a>
        <a>Camisetas</a>
        <a>Informações</a>
        <button>Entrar</button>
      </div>
    </nav>
  );
};

export default Header;