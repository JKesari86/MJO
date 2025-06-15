// src/App.jsx

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; 

// Importa tus páginas existentes
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import AdminPage from './pages/AdminPage'; 
import PortfolioGridPage from './pages/PortfolioGridPage';
import TestimonialsPage from './pages/TestimonialsPage'; // NUEVA IMPORTACIÓN: TestimonialsPage

// Importa los items iniciales del portafolio para la primera carga si no hay nada en localStorage
import initialPortfolioItems from './data/portfolioItems'; 

import './index.css';

// Clave para localStorage
const LOCAL_STORAGE_KEY = 'designerPortfolioItems';

function App() {
  // Estado centralizado para los items del portafolio.
  // Se inicializa cargando desde localStorage o usando los datos iniciales.
  const [portfolioItems, setPortfolioItems] = useState(() => {
    try {
      const savedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
      // Asegura que lo que se parsea es un array. Si no, usa los items iniciales.
      const parsedItems = savedItems ? JSON.parse(savedItems) : null;
      return Array.isArray(parsedItems) ? parsedItems : initialPortfolioItems;
    } catch (error) {
      console.error("Error loading portfolio items from localStorage:", error);
      // En caso de error, siempre retorna los datos iniciales.
      return initialPortfolioItems; 
    }
  });

  // Muestra el estado inicial de portfolioItems en la consola
  useEffect(() => {
    console.log("App.jsx - Estado inicial de portfolioItems:", portfolioItems);
  }, []); // Se ejecuta solo una vez al montar el componente.

  // Efecto para guardar los portfolioItems en localStorage cada vez que cambian
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(portfolioItems));
    } catch (error) {
      console.error("Error saving portfolio items to localStorage:", error);
    }
  }, [portfolioItems]); // Se ejecuta cada vez que 'portfolioItems' cambia

  return (
    <div className="App d-flex flex-column min-vh-100">
      {/* Navbar (siempre visible) */}
      <div className="container-fluid p-0">
        <Navbar portfolioItems={portfolioItems} /> 
      </div>

      <hr className="my-5" />

      {/* Contenido Principal con Rutas */}
      <main className="flex-grow-1">
        <div className="container-lg"> 
          <Routes>
            <Route path="/" element={<HomePage portfolioItems={portfolioItems} />} />
            
            <Route path="/portafolio-completo" element={<PortfolioGridPage portfolioItems={portfolioItems} />} />
            <Route path="/portafolio" element={<PortfolioGridPage portfolioItems={portfolioItems} />} />

            <Route path="/acerca-de-mi" element={<AboutMePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/portafolio/:id" element={<PortfolioDetailPage portfolioItems={portfolioItems} />} /> 
            
            {/* NUEVA RUTA PARA LA PÁGINA DE TESTIMONIOS */}
            <Route path="/testimonios" element={<TestimonialsPage />} /> 

            <Route path="/admin" element={<AdminPage portfolioItems={portfolioItems} setPortfolioItems={setPortfolioItems} />} /> 

          </Routes>
        </div>
      </main>

      {/* Footer (siempre visible) */}
      <div className="container-fluid p-0">
        <Footer />
      </div>

      {/* Botón de WhatsApp flotante, siempre visible */}
      <WhatsAppButton /> 
    </div>
  );
}

export default App;
