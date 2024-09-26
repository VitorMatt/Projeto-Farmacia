import React from 'react';
import './css/Footer.css';

function Footer() {

  return (
    <div className='footer'>
      <div className='logo'>
        <img src={logo} />
      </div>
      <div className='contatos'>
        <h2>Fale conosco</h2>
        <p>farmatech@gmail.com</p>
        <p>48 9911-5555</p>
      </div>
      <div className='links'>
        <h2>Termos</h2>
        <p>Termos</p>
        <p>Privacidade</p>
      </div>
    </div>
  );
};

export default Footer;