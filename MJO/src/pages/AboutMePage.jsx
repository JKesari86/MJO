import React from 'react';
import './AboutMePage.css'; // ¡Importa tu archivo CSS aquí!

function AboutMePage() {
  return (
    // Hemos eliminado el div "my-5" original y lo hemos reemplazado con la estructura principal de la sección About Me
    // para que los estilos de AboutMePage.css controlen el margen y el contenedor principal.
    <div className="about-me-section">
      {/* Columna de la imagen */}
      <div className="profile-image-container">
        {/*
          La imagen de fondo se define en el CSS externo (AboutMePage.css)
          Asegúrate de que la ruta de la imagen en tu CSS sea correcta (ej. url('/images/your-profile-picture.jpg') si está en public)
          O si la importas directamente en JSX:
          import profilePic from '../assets/your-profile-picture.jpg';
          <img src={profilePic} alt="Tu foto de perfil" style={{ display: 'none' }} /> // Ocultar si solo es para que Webpack la procese
        */}
      </div>

      {/* Columna del contenido de texto */}
      <div className="about-me-content-container">
        <h1>Hola, soy J.R.R. Tolkien.</h1>
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
        {/* En React, si usas React Router, usarías <Link> en lugar de <a> */}
        <a href="/contacto" className="contact-button">Contact Me</a>
      </div>
    </div>
  );
}

export default AboutMePage;