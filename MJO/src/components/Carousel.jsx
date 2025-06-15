// src/components/Carousel.jsx

import React, { useEffect } from 'react'; // Importa useEffect
import { Link } from 'react-router-dom';
import './Carousel.css';

// Carousel ahora acepta `portfolioItems` como prop
function Carousel({ portfolioItems }) { 
  // *** COMPROBACIÓN DEFENSIVA CLAVE ***
  // Asegura que portfolioItems sea un array antes de intentar usar .map() o .length
  const itemsToDisplay = Array.isArray(portfolioItems) ? portfolioItems : []; 

  // Opcional: Si quieres mostrar solo los 3-5 primeros proyectos en el carrusel para que sea una "vitrina destacada"
  const featuredItems = itemsToDisplay.slice(0, 5); 

  // *** AÑADIDO PARA DEPURACIÓN ***
  useEffect(() => {
    console.log("Carousel - itemsToDisplay (después de la comprobación):", itemsToDisplay);
  }, [itemsToDisplay]);
  // ******************************

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {/* Usa itemsToDisplay que ya está garantizado que es un array */}
        {itemsToDisplay.map((item, index) => (
          <button
            key={item.id}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {/* Usa itemsToDisplay que ya está garantizado que es un array */}
        {itemsToDisplay.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <Link to={`/portafolio/${item.id}`}>
              <img 
                src={item.imageUrl} 
                className="d-block w-100" 
                alt={item.title} 
                style={{ maxHeight: '500px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/800x500/cccccc/333333?text=Imagen+no+disponible";
                }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.title}</h5>
                <p>{item.shortDescription}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
