import React from 'react';
import './ContactPage.css'; // Importa tus estilos CSS aquí
// Importa tus imágenes si las manejas con import para que Webpack las procese
// import phoneImage from '../assets/phone-image.png'; // Ajusta la ruta
// import smileyIcon from '../assets/smiley_icon.png'; // Ajusta la ruta

function ContactPage() {
  return (
    // Ya que body styles están en el CSS global, eliminamos el div "my-5"
    // y reemplazamos el comentario con la estructura completa.
    // Usamos un React.Fragment (<>) si no queremos un div adicional.
    <div className="main-contact-section">
      <div className="contact-image-container">
        {/* Usar una variable importada para la ruta de la imagen es la mejor práctica en React */}
        {/* <img src={phoneImage} alt="Teléfono rotatorio amarillo" /> */}
        {/* Temporalmente, si la imagen está en la carpeta 'public' o directamente accesible */}
        <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/09/senor-anillos-comunidad-anillo-palantir-saruman-2817717.jpg?tf=3840x" alt="Palantir" />
      </div>

      <div className="contact-form-container">
        <h1>Pongámonos en contacto</h1>
        <p className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

        {/* El manejo de formularios en React se hace con estado (useState) y funciones onSubmit.
            Los atributos 'action' y 'method' del formulario HTML se suelen omitir en React. */}
        <form /* onSubmit={handleSubmit} */>
          <div className="name-fields">
            <div className="form-group">
              <label htmlFor="firstName">Name *</label>
              <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="sr-only">Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" placeholder="" required />

            <div className="validation-icon" style={{backgroundImage: "url('/path/to/your/smiley_icon.png')"}}></div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;