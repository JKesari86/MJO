// src/pages/PortfolioDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom'; // Importa useParams para obtener parámetros de la URL
import portfolioItems from '../data/portfolioItems'; // Importa los datos del portafolio

function PortfolioDetailPage() {
  // Usamos useParams para obtener el 'id' de la URL (ej. /portafolio/project-id-1)
  const { id } = useParams();

  // Buscamos el proyecto correspondiente en nuestros datos
  const project = portfolioItems.find(item => item.id === id);

  // Si el proyecto no se encuentra, mostramos un mensaje de error o redireccionamos
  if (!project) {
    return (
      <div className="text-center my-5">
        <h2 className="display-4">Proyecto no encontrado</h2>
        <p className="lead">Lo sentimos, no pudimos encontrar el proyecto con el ID: {id}</p>
        {/* Opcional: podrías añadir un botón para volver al portafolio general */}
      </div>
    );
  }

  // Si el proyecto se encuentra, mostramos sus detalles
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
              style={{ maxWidth: '800px', height: 'auto' }} // Estilo para limitar el tamaño de la imagen
            />
          </div>

          <div className="row mt-4">
            <div className="col-md-8 offset-md-2"> {/* Centra el texto de la descripción */}
              <p className="lead">{project.shortDescription}</p>
              <p>{project.fullDescription}</p>
              <hr />
              <p><strong>Categoría:</strong> {project.category}</p>
              <p><strong>Ubicación:</strong> {project.location}</p>
              <p><strong>Año:</strong> {project.year}</p>
              {/* Puedes añadir más detalles aquí si los tienes en la estructura de datos */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetailPage;