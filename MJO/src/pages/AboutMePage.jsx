// src/pages/AboutMePage.jsx

import React from 'react';
import './AboutMePage.css';
import { Link } from 'react-router-dom';
// IMPORTA LA IMAGEN DE PERFIL LOCALMENTE
import profileImage from '../assets/images/profile.jpg'; // Asegúrate de que esta ruta y nombre de archivo sean correctos

function AboutMePage() {
  return (
    <div className="about-me-section">
      <div 
        className="profile-image-container"
        // APLICA LA IMAGEN COMO ESTILO EN LÍNEA USANDO LA VARIABLE IMPORTADA
        style={{ backgroundImage: `url(${profileImage})` }}
      >
        {/* La imagen de fondo ahora se define aquí en JSX */}
        {/* No se necesita una etiqueta <img> aquí si solo es para el fondo */}
      </div>

      <div className="about-me-content-container">
        <h1>Hola, soy María José Labra.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
          accusamus! Earum ullam harum facere voluptas. Delectus ullam, nulla
          deleniti amet, porro deserunt expedita aperiam cupiditate ducimus
          distinctio vel dolorum magni.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
          accusamus! Earum ullam harum facere voluptas. Delectus ullam, nulla
          deleniti amet, porro deserunt expedita aperiam cupiditate ducimus
          distinctio vel dolorum magni.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
          accusamus! Earum ullam harum facere voluptas. Delectus ullam, nulla
          deleniti amet, porro deserunt expedita aperiam cupiditate ducimus
          distinctio vel dolorum magni.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
          accusamus! Earum ullam harum facere voluptas. Delectus ullam, nulla
          deleniti amet, porro deserunt expedita aperiam cupiditate ducimus
          distinctio vel dolorum magni.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
          accusamus! Earum ullam harum facere voluptas. Delectus ullam, nulla
          deleniti amet, porro deserunt expedita aperiam cupiditate ducimus
          distinctio vel dolorum magni.
        </p>
        <Link to="/contacto" className="contact-button">Contact Me</Link>
      </div>
    </div>
  );
}

export default AboutMePage;
