import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Importaciones de componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; 

// Importaciones de páginas
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import AdminPage from './pages/AdminPage'; 
import PortfolioGridPage from './pages/PortfolioGridPage';
import TestimonialsPage from './pages/TestimonialsPage';
import LoginPage from './components/LoginPage'; // La nueva página de login

// Importa los items iniciales del portafolio para la primera carga si no hay nada en localStorage
import initialPortfolioItems from './data/portfolioItems'; 

import './index.css';

// Clave para localStorage
const LOCAL_STORAGE_KEY = 'designerPortfolioItems';

function App() {
  // ---- Lógica de autenticación (NUEVA) ----
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
  };
  // ----------------------------------------

  // Estado centralizado para los items del portafolio.
  // Se inicializa cargando desde localStorage o usando los datos iniciales.
  const [portfolioItems, setPortfolioItems] = useState(() => {
    try {
      const savedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
      const parsedItems = savedItems ? JSON.parse(savedItems) : null;
      return Array.isArray(parsedItems) ? parsedItems : initialPortfolioItems;
    } catch (error) {
      console.error("Error loading portfolio items from localStorage:", error);
      return initialPortfolioItems; 
    }
  });

  // Muestra el estado inicial de portfolioItems en la consola
  useEffect(() => {
    console.log("App.jsx - Estado inicial de portfolioItems:", portfolioItems);
  }, []);

  // Efecto para guardar los portfolioItems en localStorage cada vez que cambian
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(portfolioItems));
    } catch (error) {
      console.error("Error saving portfolio items to localStorage:", error);
    }
  }, [portfolioItems]);

  return (
    <div className="App d-flex flex-column min-vh-100">
      <div className="container-fluid p-0">
        <Navbar portfolioItems={portfolioItems} /> 
      </div>

      <hr className="my-5" />

      <main className="flex-grow-1">
        <div className="container-lg"> 
          <Routes>
            <Route path="/" element={<HomePage portfolioItems={portfolioItems} />} />
            
            {/* Rutas públicas (no requieren login) */}
            <Route path="/portafolio-completo" element={<PortfolioGridPage portfolioItems={portfolioItems} />} />
            <Route path="/portafolio" element={<PortfolioGridPage portfolioItems={portfolioItems} />} />
            <Route path="/acerca-de-mi" element={<AboutMePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/portafolio/:id" element={<PortfolioDetailPage portfolioItems={portfolioItems} />} /> 
            <Route path="/testimonios" element={<TestimonialsPage />} /> 

            {/* Rutas de login y administración (PROTEGIDAS) */}
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route 
              path="/admin" 
              element={isAuthenticated ? <AdminPage portfolioItems={portfolioItems} setPortfolioItems={setPortfolioItems} /> : <Navigate to="/login" />} 
            /> 
            
            {/* Redirección para URLs no encontradas */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </main>

      <div className="container-fluid p-0">
        <Footer />
      </div>

      <WhatsAppButton /> 
    </div>
  );
}

export default App;