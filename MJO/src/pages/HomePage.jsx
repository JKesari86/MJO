// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';
import './HomePage.css'; // ¡Importa los estilos CSS específicos para HomePage!

function HomePage({ portfolioItems }) {
  useEffect(() => {
    console.log("HomePage - portfolioItems recibidos:", portfolioItems);
    if (!Array.isArray(portfolioItems)) {
      console.error("HomePage - portfolioItems no es un array como se esperaba:", portfolioItems);
    } else if (portfolioItems.length === 0) {
      console.log("HomePage - La lista de proyectos para el carrusel está vacía.");
    }
  }, [portfolioItems]);

  return (
    <>
      <Carousel portfolioItems={Array.isArray(portfolioItems) ? portfolioItems : []} />

      <div className="my-5 text-center">
        <h2>¡Bienvenido al Portafolio de MJO Diseño!</h2>
        <p className="lead">Explora mis proyectos más recientes y descubre cómo puedo ayudarte.</p>
        {/* Añadida la clase 'cta-button' para estilos personalizados */}
        <Link to="/portafolio" className="btn btn-primary mt-3 cta-button">
          Ver Portafolio Completo
        </Link>
      </div>
    </>
  );
}

export default HomePage;
