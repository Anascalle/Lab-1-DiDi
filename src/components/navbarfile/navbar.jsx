import React from 'react';
import NavButton from '../navbutton/navbutton';
import "./navbar.css"

const Nav = () => {
  return (
    <nav className="navigate">
       
      <img src="src/img/DIDI.png" alt="DiDi Logo" className="logo" />
      <div className="nav-buttons">
        <NavButton title="DiDi Conductor" imgSrc="src/img/menu1.webp" />
        <NavButton title="DiDi Pasajero" imgSrc="src/img/menu2.webp"/>
        <NavButton title="DiDi Taxi"imgSrc="src/img/menu1.webp" />
        <NavButton title="DiDi Fleet" imgSrc="src/img/menu2.webp"/>
        <NavButton title="DiDi Food" imgSrc="src/img/menu3.webp"/>
        <NavButton title="DiDi Entregas" imgSrc="src/img/menu4.webp"/>
        <NavButton title="Sobre DiDi" imgSrc="src/img/menu5.webp"/>
      </div>
      <button className="register-button">Regístrate en DiDi Conductor</button>
      
    </nav>
  );
};

export default Nav;
