// src/pages/PortfolioGridPage.jsx

import React, { useEffect } from 'react'; // Importa useEffect
import { Link } from 'react-router-dom'; 
// REMOVIDO: import portfolioItems from '../data/portfolioItems'; 
import './PortfolioGridPage.css';

/**
 * Componente funcional PortfolioGridPage.
 * Muestra todos los proyectos del portafolio en un formato de grilla responsiva.
 * Cada tarjeta de proyecto es enlazable a su página de detalle.
 * Ahora recibe `portfolioItems` como prop desde `App.jsx`.
 */
function PortfolioGridPage({ portfolioItems }) { 
  // *** COMPROBACIÓN DEFENSIVA CLAVE ***
  // Asegura que portfolioItems sea un array antes de intentar usar .map()
  const itemsToDisplay = Array.isArray(portfolioItems) ? portfolioItems : [];

  // *** AÑADIDO PARA DEPURACIÓN ***
  useEffect(() => {
    console.log("PortfolioGridPage - itemsToDisplay (después de la comprobación):", itemsToDisplay);
    if (itemsToDisplay.length === 0) {
      console.log("PortfolioGridPage - La lista de proyectos para la grilla está vacía.");
    }
  }, [itemsToDisplay]);
  // ******************************

  return (
    <div className="portfolio-grid-page-container my-5">
      <h1 className="text-center mb-5">Explora Nuestro Portafolio Completo</h1>
      <p className="text-center lead mb-5">
        Aquí encontrarás todos nuestros proyectos, organizados para que puedas explorar a fondo el trabajo de diseño de interiores.
      </p>

      {/* Si no hay proyectos, muestra un mensaje amigable */}
      {itemsToDisplay.length === 0 ? (
        <p className="text-center">No hay proyectos para mostrar en el portafolio. ¡Pronto añadiremos más!</p>
      ) : (
        <div className="portfolio-grid">
          {itemsToDisplay.map(project => (
            <Link to={`/portafolio/${project.id}`} key={project.id} className="portfolio-card-link">
              <div className="portfolio-card">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="portfolio-card-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x300/cccccc/333333?text=Imagen+no+disponible";
                  }}
                />
                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <p className="portfolio-card-description">{project.shortDescription}</p>
                  <div className="portfolio-card-meta">
                    <span>{project.category}</span> | <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default PortfolioGridPage;
