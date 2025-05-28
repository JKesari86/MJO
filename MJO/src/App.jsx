// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importa tus páginas
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
// import BlogPage from './pages/BlogPage'; // ELIMINAMOS ESTA IMPORTACIÓN

import './index.css';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <div className="container-fluid p-0">
        <Navbar />
      </div>

      <hr className="my-5" />

      <main className="flex-grow-1">
        <div className="container-lg">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portafolio" element={<HomePage />} />
            <Route path="/acerca-de-mi" element={<AboutMePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contacto" element={<ContactPage />} />

          </Routes>
        </div>
      </main>

      <div className="container-fluid p-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;