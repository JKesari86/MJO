// src/pages/ContactPage.jsx

import React from 'react';
import './ContactPage.css'; // Importa tus estilos CSS aquí
import { Link } from 'react-router-dom'; // Importa Link si se usa

function ContactPage() {
  return (
    <div className="contact-page-message my-5 text-center">
      <h1>¡Pongámonos en contacto!</h1>
      <p className="lead">
        Para una comunicación más rápida y directa, te invitamos a contactarnos a través de WhatsApp.
        Haz clic en el botón flotante en la esquina inferior derecha para iniciar una conversación.
      </p>
      <p>También puedes enviarnos un correo electrónico a:</p>
      <p><a href="mailto:info@mjodiseno.com">info@mjodiseno.com</a></p>
      
      {/* Opcional: Un botón si el usuario no nota el flotante */}
      <Link to="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg mt-4 whatsapp-redirect-button">
        Abrir Chat de WhatsApp
      </Link>
    </div>
  );
}

export default ContactPage;
