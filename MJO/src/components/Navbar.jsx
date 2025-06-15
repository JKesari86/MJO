// src/components/Navbar.jsx

import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (location.pathname.startsWith(path) && path !== '/') {
        if (path === '/portafolio' && location.pathname.startsWith('/portafolio/')) {
            return true;
        }
        return true;
    }
    return false;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://clipground.com/images/tolkien-logo-5.jpg"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/40x40/cccccc/333333?text=Logo";
            }}
          />
          MJO
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/portafolio') || isActive('/portafolio-completo') ? 'active' : ''}`}
                to="/portafolio"
              >
                Portafolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/acerca-de-mi') ? 'active' : ''}`}
                to="/acerca-de-mi"
              >
                Acerca de mi
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/servicios') ? 'active' : ''}`}
                to="/servicios"
              >
                Servicios
              </Link>
            </li>
            {/* NUEVO ENLACE: Testimonios */}
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/testimonios') ? 'active' : ''}`}
                to="/testimonios"
              >
                Testimonios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/contacto') ? 'active' : ''}`}
                to="/contacto"
              >
                Contacto
              </Link>
            </li>
            {/* Si quieres que la página de administración sea visible en la navbar, descomenta esto */}
            {/*
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/admin') ? 'active' : ''}`}
                to="/admin"
              >
                Admin
              </Link>
            </li>
            */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
