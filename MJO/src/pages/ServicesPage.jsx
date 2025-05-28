import React from 'react';
// Si tuvieras un archivo CSS separado, lo importarías aquí:
// import './ServicesPage.css'; // O el nombre que le des a tu archivo CSS

const ServicesPage = () => {
  return (
    <>
      {/* Puedes colocar tus estilos CSS directamente aquí si quieres mantenerlos en el componente,
          pero la práctica recomendada es importarlos desde un archivo CSS separado o usar styled-components, etc. */}
      <style jsx="true">{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f8f8f8;
          color: #333;
        }

        .services-container {
          max-width: 1200px;
          margin: 40px auto;
          padding: 20px;
          text-align: center;
        }

        h1 {
          font-size: 2.5em;
          margin-bottom: 50px;
          color: #333;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          justify-content: center;
        }

        .service-card {
          background-color: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 200px;
        }

        .service-card h2 {
          font-size: 1.4em;
          margin-top: 0;
          margin-bottom: 15px;
          color: #333;
          font-weight: normal;
        }

        .service-card p {
          font-size: 0.95em;
          line-height: 1.6;
          color: #666;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            margin: 0 auto;
            max-width: 450px;
          }
        }
      `}</style>

      <div className="services-container">
        <h1>services</h1>

        <div className="services-grid">
          <div className="service-card">
            <h2>Creative Lead</h2>
            <p>I empower my teams to harness their unique abilities and perspectives to deliver truly authentic, brief-smashing outputs that leave clients wowed and proud. When we celebrate victories, it is always we over me.</p>
          </div>

          <div className="service-card">
            <h2>Graphic Design</h2>
            <p>I educate, inform and persuade my target market through design, communicating succinctly and leaving a lasting impression. Just don't ask if I can "make it pop" - we designers don't like that.</p>
          </div>

          <div className="service-card">
            <h2>Branding + Logo Creation</h2>
            <p>You only have one chance at a first impression. I will translate your company's core identity to a unique, memorable mark that is as effective as it is undeniably you.</p>
          </div>

          <div className="service-card">
            <h2>Photo Editing</h2>
            <p>From simple touchups and color-corrections to exploratory scenes with purples and greens, I know my way around Photoshop. Art is beautiful information.</p>
          </div>

          <div className="service-card">
            <h2>Presentation Design</h2>
            <p>A deck is never "just a deck" to me. A compelling story and a thoughtful template are just a few of the necessary tools to presenting effective work to your audience. From wireframe to podium, I'm your guy.</p>
          </div>

          <div className="service-card">
            <h2>Travel</h2>
            <p>A brainstorm in Jersey? A conference in Phoenix? A crepe in Paris? (Well, that one's for pleasure.) I am happy to lend a helping hand to your business's growing footprint - wherever that may be.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;