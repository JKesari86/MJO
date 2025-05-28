// src/components/Carousel.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './Carousel.css';
import portfolioItems from '../data/portfolioItems'; // Importa los datos del portafolio

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {/* Genera los indicadores dinámicamente si es necesario, o usa los estáticos si son pocos */}
        {portfolioItems.map((item, index) => (
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
        {portfolioItems.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            {/* ENVUELVE LA IMAGEN CON UN LINK A LA PÁGINA DE DETALLE */}
            <Link to={`/portafolio/${item.id}`}> {/* Link a la ruta dinámica */}
              <img 
                src={item.imageUrl} // Usamos imageUrl de nuestros datos
                className="d-block w-100" 
                alt={item.title} 
                style={{ maxHeight: '500px', objectFit: 'cover' }} // Ajusta el tamaño de la imagen en el carrusel
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.title}</h5> {/* Muestra el título del proyecto */}
                <p>{item.shortDescription}</p> {/* Muestra la descripción corta */}
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