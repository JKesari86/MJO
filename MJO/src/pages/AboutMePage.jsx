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
        <h1>Hello, I'm John Panek.</h1>
        <p>
          A Rochester, NY-based Creative Lead and Graphic Designer with an eye for simplicity and a less is more design approach.
          I believe in cutting through today's noisy visual landscape with efficient, digestible messaging.
        </p>
        <p>
          The projects you've seen here at JPSdesign.com represent about 2% of the work I've created in my career. 360°
          marketing campaigns, full websites, photoshoots, video
          shoots, keynote presentations, best practice awards, business
          pitches, new hire interviews. You name it - I've done it.
        </p>
        <p>
          When I'm not driving the mouse, I'm busy researching the
          latest market and design trends, ensuring our team delivers
          easily-executable and innovative solutions for our clients.
        </p>
        <p>
          And when I'm not near the computer at all, I'm likely out for a
          walk with my wife, Bridgette and our toy poodle, Oakley.
          We've been known to hog the pickleball court.
        </p>
        <p>
          I also enjoy running, basketball, acoustic guitar, live concerts,
          The Office, and the occasional hazy IPA.
        </p>
        {/* En React, si usas React Router, usarías <Link> en lugar de <a> */}
        <a href="/contact" className="contact-button">Contact Me</a>
      </div>
    </div>
  );
}

export default AboutMePage;