// src/pages/AboutMePage.jsx
import React from 'react';
// Si hay estilos CSS específicos para esta página que estaban en tu HTML original,
// puedes copiarlos a un archivo src/pages/AboutMePage.css y luego importarlo aquí:
// import './AboutMePage.css';

function AboutMePage() {
  return (
    <div className="my-5"> 
      <div className="container mt-4 mb-4"> 
        <div className="row">
         
          <div className="col-12 col-md-6 mt-5 col-sm-12 col-lg-8 col-xl-8"> 
            <h3 id="scrollspyHeading4">
              <strong>J.R.R. Tolkien</strong>
              <span className="text-secondary"><strong>Escritor</strong></span> 
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
              accusamus! Earum ullam harum facere voluptas. Delectus ullam, nulla
              deleniti amet, porro deserunt expedita aperiam cupiditate ducimus
              distinctio vel dolorum magni.
            </p>

          </div>

          <div className="col-12 col-md-6 col-sm-12 col-lg-4 col-xl-4"> 
            <img
              src="https://www.bosshunting.com.au/cdn-cgi/imagedelivery/izM8XxyLg9MD6py1ribxJw/www.bosshunting.com.au/2020/05/t1.jpg/w=9999"
              width="420"
              className="img-fluid" 
              alt="Imagen de Tolkien"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;