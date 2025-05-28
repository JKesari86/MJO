// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importa tus páginas existentes
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';

// AÑADE ESTA IMPORTACIÓN PARA LA PÁGINA DE ADMINISTRACIÓN
import AdminPage from './pages/AdminPage'; 

import './index.css';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      {/* Navbar (siempre visible) */}
      <div className="container-fluid p-0">
        <Navbar />
      </div>

      <hr className="my-5" />

      {/* Contenido Principal con Rutas */}
      <main className="flex-grow-1">
        <div className="container-lg"> 
          <Routes> {/* Define tus rutas aquí */}
            <Route path="/" element={<HomePage />} />
            <Route path="/portafolio" element={<HomePage />} /> 
            <Route path="/acerca-de-mi" element={<AboutMePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/portafolio/:id" element={<PortfolioDetailPage />} /> 

            {/* AÑADE ESTA NUEVA RUTA PARA EL PANEL DE ADMINISTRACIÓN */}
            <Route path="/admin" element={<AdminPage />} /> 

          </Routes>
        </div>
      </main>

      {/* Footer (siempre visible) */}
      <div className="container-fluid p-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;