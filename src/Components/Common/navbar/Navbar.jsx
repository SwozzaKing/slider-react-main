import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#Nosotros">Nosotros</a></li>
        <li><a href="#Contacto">Contacto</a></li>
      </ul>
      
    </nav>
  );
}

export default Navbar;