import React from 'react';
// Importa el archivo CSS para este componente (lo crearemos en el siguiente paso)
import './Footer.css';

function Footer() {
  return (
    <footer>
      <hr className="mb-5 mt-5" /> {/* 'class' a 'className' */}
      <div className="container">
        <ul> {/* Las etiquetas <a> vacías podrían ser <Link> de React Router si son rutas */}
          <li>
            <a>Diseño MJO &copy; 2025</a>
          </li>
          <li>
            {/* Font Awesome icons. Asegúrate de que el script de Font Awesome esté en public/index.html */}
            <i className="fas fa-share" style={{ fontSize: 'xx-large' }}></i>
          </li>
          <li>
            <i className="fab fa-instagram" style={{ fontSize: 'xx-large' }}></i>
          </li>
          <li>
            <i className="fab fa-facebook-square" style={{ fontSize: 'xx-large' }}></i>
          </li>
          <li>
            <a>Made by Heimdall &copy;</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;