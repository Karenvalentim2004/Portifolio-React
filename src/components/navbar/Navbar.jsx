import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <header>
      <nav className="navbar" aria-label="Menu principal">
        <div className="logo">KRV</div>

        <ul className="nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li>
            <a
              href="projetos.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Projetos
            </a>
          </li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar; 
