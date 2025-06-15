// src/pages/PortfolioDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Importa useParams y Link
// REMOVIDO: import portfolioItems from '../data/portfolioItems'; // Ya no se importa directamente

// PortfolioDetailPage ahora acepta `portfolioItems` como prop
function PortfolioDetailPage({ portfolioItems }) { 
  const { id } = useParams();

  // Busca el proyecto correspondiente en los datos pasados por prop
  const project = portfolioItems.find(item => item.id === id);

  if (!project) {
    return (
      <div className="text-center my-5">
        <h2 className="display-4">Proyecto no encontrado</h2>
        <p className="lead">Lo sentimos, no pudimos encontrar el proyecto con el ID: {id}</p>
        {/* Botón para volver al portafolio general */}
        <Link to="/portafolio" className="btn btn-primary mt-3">Volver al Portafolio</Link>
      </div>
    );
  }

  return (
    <div className="portfolio-detail-page my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <h1 className="text-center mb-4">{project.title}</h1>

          <div className="text-center mb-4">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="img-fluid rounded shadow-sm" 
              style={{ maxWidth: '800px', height: 'auto' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/800x600/cccccc/333333?text=Imagen+no+disponible";
              }}
            />
          </div>

          <div className="row mt-4">
            <div className="col-md-8 offset-md-2">
              <p className="lead">{project.shortDescription}</p>
              <p>{project.fullDescription}</p>
              <hr />
              <p><strong>Categoría:</strong> {project.category}</p>
              <p><strong>Ubicación:</strong> {project.location}</p>
              <p><strong>Año:</strong> {project.year}</p>
              {/* Botón para volver al portafolio general desde la página de detalle */}
              <Link to="/portafolio" className="btn btn-secondary mt-3">Volver a la Grilla del Portafolio</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetailPage;
