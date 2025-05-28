// src/components/Navbar.jsx

import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Importa Link

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="https://clipground.com/images/tolkien-logo-5.jpg" alt="Logo" width="40" height="40" className="d-inline-block align-text-top me-2" />
          MJO
        </Link>
        

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/portafolio">Portafolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/acerca-de-mi">Acerca de mi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;