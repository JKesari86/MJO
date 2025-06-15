// src/components/WhatsAppButton.jsx

import React from 'react';
import './WhatsAppButton.css'; // Estilos para el botón flotante

/**
 * Componente funcional WhatsAppButton.
 * Crea un botón flotante en la esquina inferior derecha de la pantalla
 * que redirige al usuario a un chat de WhatsApp predefinido.
 */
function WhatsAppButton() {
  // Número de teléfono con código de país (sin + ni espacios)
  // Reemplaza 'XXXXXXXXXXX' con el número real de WhatsApp de tu amiga.
  const phoneNumber = '569XXXXXXXX'; // Ejemplo: +56 9 1234 5678 (en Chile) -> '56912345678'
  // Mensaje predefinido que aparecerá en el chat de WhatsApp
  const message = encodeURIComponent('Hola, me gustaría saber más sobre tus servicios de diseño de interiores.');

  // URL de WhatsApp para iniciar el chat
  // 'https://wa.me/' es el enlace estándar.
  // Puedes usar `api.whatsapp.com/send` si necesitas compatibilidad con versiones muy antiguas.
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float-button" 
      target="_blank" // Abre el enlace en una nueva pestaña
      rel="noopener noreferrer" // Mejora la seguridad al abrir nuevas pestañas
      aria-label="Contactar por WhatsApp" // Texto para accesibilidad
    >
      {/* Icono de WhatsApp (puedes usar Font Awesome o un SVG inline) */}
      <i className="fab fa-whatsapp"></i> {/* Requiere que Font Awesome esté importado en public/index.html */}
      {/* Opcional: Texto junto al icono
      <span className="button-text">WhatsApp</span>
      */}
    </a>
  );
}

export default WhatsAppButton;
