// src/pages/ServicesPage.jsx
import React from 'react';
// Si hay estilos CSS específicos para esta página que estaban en tu HTML original,
// puedes copiarlos a un archivo src/pages/ServicesPage.css y luego importarlo aquí:
// import './ServicesPage.css';

function ServicesPage() {
  return (
    <div className="my-5">
      <div className="container mt-4 mb-4">
        <div className="row">

          <div className="col-12 col-md-6 col-sm-12 col-lg-4 col-xl-4">
            <img
              src="https://clipground.com/images/tolkien-logo-5.jpg"
              width="420"
              className="img-fluid rounded-circle"
              alt="imagen de walter"
            />
          </div>

          <div className="col-12 col-md-6 mt-5 col-sm-12 col-lg-8 col-xl-8"> 
            <h3 id="scrollspyHeading3">
              <strong>This second Heading</strong>
              <span className="text-secondary"><strong>Is Pretty Cool To</strong></span> 
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
              accusamus! Earum ullam harum facere voluptas. Delectus ullam, nulla
              deleniti amet, porro deserunt expedita aperiam cupiditate ducimus
              distinctio vel dolorum magni.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;