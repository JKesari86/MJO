// src/pages/TestimonialsPage.jsx

import React from 'react';
import testimonials from '../data/testimonials'; // Importa los datos de los testimonios
import './TestimonialsPage.css'; // Importa los estilos CSS para esta página

/**
 * Componente funcional TestimonialsPage.
 * Muestra una colección de testimonios de clientes en un formato de cuadrícula.
 */
function TestimonialsPage() {
  return (
    <div className="testimonials-page-container my-5">
      <h1 className="text-center mb-4">Lo que dicen nuestros clientes</h1>
      <p className="text-center lead mb-5">
        La satisfacción de quienes confían en nuestro trabajo es nuestra mayor recompensa.
      </p>

      {/* Si no hay testimonios, muestra un mensaje amigable */}
      {testimonials.length === 0 ? (
        <p className="text-center empty-testimonials-message">
          Aún no hay testimonios para mostrar. ¡Pronto tendremos más opiniones!
        </p>
      ) : (
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="testimonial-image" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/100x100/cccccc/333333?text=User"; // Placeholder si la imagen falla
                  }}
                />
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              {testimonial.rating && (
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                    >
                      &#9733; {/* Carácter de estrella Unicode */}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TestimonialsPage;
