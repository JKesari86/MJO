import React from 'react';
// Importa el archivo CSS para este componente (lo crearemos en el siguiente paso)
import './Carousel.css';

function Carousel() {
  return (
    <div className="container-fluid">
      {/* El atributo style en línea lo he movido al CSS para mantener la consistencia */}
      <h2 className="h1 mt-4 mb-4" id="scrollspyHeading2">Mi Trabajo</h2>
      
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {/* Los botones de los indicadores pueden generarse dinámicamente si tienes muchas imágenes */}
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          {/* Cada item del carrusel */}
          <div className="carousel-item active">
            {/* Es recomendable usar Link de React Router DOM para navegación interna */}
            <a href="/portfolio-individual-1">
              <img src="https://th.bing.com/th/id/OIP.dTvzfpQdbdXeDhpgwBKorwHaE5?rs=1&pid=ImgDetMain" className="d-block w-100" alt="Galadriel" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="/portfolio-individual-2">
              <img src="https://i.pinimg.com/originals/67/06/1f/67061fa2df2665ddf8ab492444fccda9.jpg" className="d-block w-100" alt="..." />
            </a>
          </div>
          <div className="carousel-item">
            <a href="/portfolio-individual-3">
              <img src="https://th.bing.com/th/id/R.ae0308e58e684d44258547548144bc38?rik=n9w3G93pPcU6vw&riu=http%3a%2f%2f31.media.tumblr.com%2ftumblr_macgn2ShyH1rfbyaxo1_1280.jpg&ehk=TOc2Br%2fPOOqB0EnwBMtfS4Sfy2CQxUGniVUdp5GCwe0%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="..." />
            </a>
          </div>
        </div>
        {/* Controles del carrusel */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;