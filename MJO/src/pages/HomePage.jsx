// src/pages/HomePage.jsx
import React from 'react';
import Carousel from '../components/Carousel'; // Importa el carrusel

function HomePage() {
  return (
    <> {/* Fragmento para agrupar elementos sin añadir un div extra */}
      {/* El carrusel es parte de la página de inicio */}
      <Carousel />

      {/* Puedes añadir más secciones aquí para tu página de inicio */}
      <div className="my-5 text-center">
        <h2>Bienvenido a mi Portafolio Esotérico</h2>
        <p>Explora el arte y la magia.</p>
      </div>
    </>
  );
}

export default HomePage;