// src/pages/AdminPage.jsx
import React, { useState, useEffect } from 'react';
// REMOVIDO: import initialPortfolioItems from '../data/portfolioItems'; 
// La lista de proyectos ahora viene de las props de App.jsx

// REMOVIDO: const LOCAL_STORAGE_KEY = 'designerPortfolioItems'; 
// El manejo de localStorage se movió a App.jsx

// AdminPage ahora acepta `portfolioItems` y `setPortfolioItems` como props
function AdminPage({ portfolioItems, setPortfolioItems }) { 
  // Nuevo estado para el proyecto que se está editando
  const [editingProject, setEditingProject] = useState(null); 
  // Nuevo estado para saber si estamos en modo edición
  const [isEditing, setIsEditing] = useState(false); 

  // Estado para los datos del formulario (se usa tanto para añadir como para editar)
  const [formData, setFormData] = useState({
    id: '', // Este será el ID si estamos editando
    title: '',
    shortDescription: '',
    fullDescription: '',
    imageUrl: '',
    category: '',
    location: '',
    year: '',
  });

  // Efecto para precargar el formulario cuando editingProject cambie (modo edición)
  useEffect(() => {
    if (editingProject) {
      setFormData({
        id: editingProject.id, 
        title: editingProject.title,
        shortDescription: editingProject.shortDescription,
        fullDescription: editingProject.fullDescription,
        imageUrl: editingProject.imageUrl,
        category: editingProject.category,
        location: editingProject.location,
        year: editingProject.year,
      });
      setIsEditing(true); 
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    } else {
      setFormData({
        id: '',
        title: '',
        shortDescription: '',
        fullDescription: '',
        imageUrl: '',
        category: '',
        location: '',
        year: '',
      });
      setIsEditing(false); 
    }
  }, [editingProject]);

  // *** AÑADIDO PARA DEPURACIÓN Y MANEJO SEGURO ***
  // Observa qué proyectos está recibiendo este componente.
  useEffect(() => {
    console.log("AdminPage - portfolioItems recibidos:", portfolioItems);
    // Si portfolioItems no es un array, loguea un error.
    if (!Array.isArray(portfolioItems)) {
      console.error("AdminPage - portfolioItems no es un array como se esperaba:", portfolioItems);
    } else if (portfolioItems.length === 0) {
      console.log("AdminPage - La lista de proyectos está vacía.");
    }
  }, [portfolioItems]);
  // ******************************

  // Función para manejar cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Función para manejar el envío del formulario (Ahora maneja Añadir y Editar)
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Validaciones básicas
    if (!formData.title || !formData.imageUrl || !formData.category) {
      // ATENCIÓN: Reemplazar alert() con un modal personalizado de React para una mejor UX.
      alert('Por favor, completa al menos el Título, URL de Imagen y Categoría.');
      return;
    }

    if (isEditing) {
      // *** MODO EDICIÓN ***
      // Llama a setPortfolioItems que viene de App.jsx para actualizar el estado global
      setPortfolioItems(prevItems => prevItems.map(item => 
        item.id === formData.id ? { ...formData, year: parseInt(formData.year) || new Date().getFullYear() } : item
      ));
      // ATENCIÓN: Reemplazar alert() con un modal personalizado de React.
      alert('Proyecto actualizado exitosamente!');
      setEditingProject(null); // Sale del modo edición
    } else {
      // *** MODO AÑADIR NUEVO PROYECTO ***
      let generatedId = formData.title.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now(); 

      let counter = 0;
      let uniqueId = generatedId;
      // Asegurarse de que portfolioItems es un array antes de usar .some()
      while (Array.isArray(portfolioItems) && portfolioItems.some(item => item.id === uniqueId)) {
          counter++;
          uniqueId = `${generatedId}-${counter}`;
      }
      generatedId = uniqueId;

      const projectToAdd = {
        ...formData,
        id: generatedId,
        year: parseInt(formData.year) || new Date().getFullYear(),
      };

      // Llama a setPortfolioItems que viene de App.jsx para actualizar el estado global
      setPortfolioItems(prevItems => [...prevItems, projectToAdd]);
      // ATENCIÓN: Reemplazar alert() con un modal personalizado de React.
      alert('Proyecto añadido exitosamente!');
    }

    // Resetear el formulario después de la operación
    setFormData({
      id: '',
      title: '',
      shortDescription: '',
      fullDescription: '',
      imageUrl: '',
      category: '',
      location: '',
      year: '',
    });
    setIsEditing(false); // Asegurarse de que no estamos en modo edición después de añadir
  };

  // *** Manejar clic en botón "Editar" ***
  const handleEdit = (projectToEdit) => {
    setEditingProject(projectToEdit); 
  };

  // Manejar la eliminación de un proyecto
  const handleDelete = (idToDelete) => {
    // ATENCIÓN: Reemplazar window.confirm() con un modal de confirmación personalizado de React.
    if (window.confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
      // Llama a setPortfolioItems que viene de App.jsx para actualizar el estado global
      setPortfolioItems(prevItems => prevItems.filter(item => item.id !== idToDelete));
      // ATENCIÓN: Reemplazar alert() con un modal personalizado de React.
      alert('Proyecto eliminado.');
      if (editingProject && editingProject.id === idToDelete) {
        setEditingProject(null);
      }
    }
  };

  // Función para cancelar la edición
  const handleCancelEdit = () => {
    setEditingProject(null); 
  };


  return (
    <div className="admin-page my-5 container">
      <h1 className="text-center mb-4">Panel de Administración del Portafolio</h1>
      <p className="text-center lead">Aquí podrás gestionar tus proyectos de diseño de interiores.</p>

      {/* Formulario para Añadir/Editar Proyecto */}
      <div className="mt-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="mb-4 text-center">
          {isEditing ? 'Editar Proyecto' : 'Añadir Nuevo Proyecto'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Título del Proyecto</label>
            <input 
              type="text" 
              className="form-control" 
              id="title" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">URL de la Imagen Principal</label>
            <input 
              type="url" 
              className="form-control" 
              id="imageUrl" 
              name="imageUrl" 
              value={formData.imageUrl} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="shortDescription" className="form-label">Descripción Corta</label>
            <textarea 
              className="form-control" 
              id="shortDescription" 
              name="shortDescription" 
              rows="2" 
              value={formData.shortDescription} 
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="fullDescription" className="form-label">Descripción Completa</label>
            <textarea 
              className="form-control" 
              id="fullDescription" 
              name="fullDescription" 
              rows="5" 
              value={formData.fullDescription} 
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Categoría</label>
            <select 
              className="form-select" 
              id="category" 
              name="category" 
              value={formData.category} 
              onChange={handleChange} 
              required
            >
              <option value="">Selecciona una categoría</option>
              <option value="Residencial">Residencial</option>
              <option value="Comercial">Comercial</option>
              <option value="Remodelación">Remodelación</option>
              <option value="Nueva Construcción">Nueva Construcción</option>
              <option value="Diseño de Cocinas">Diseño de Cocinas</option>
              <option value="Diseño de Baños">Diseño de Baños</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Ubicación</label>
            <input 
              type="text" 
              className="form-control" 
              id="location" 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">Año</label>
            <input 
              type="number" 
              className="form-control" 
              id="year" 
              name="year" 
              value={formData.year} 
              onChange={handleChange} 
            />
          </div>
          <button type="submit" className={`btn ${isEditing ? 'btn-warning' : 'btn-primary'} w-100`}>
            {isEditing ? 'Guardar Cambios' : 'Añadir Proyecto'}
          </button>
          {isEditing && (
            <button type="button" className="btn btn-secondary w-100 mt-2" onClick={handleCancelEdit}>
              Cancelar Edición
            </button>
          )}
        </form>
      </div>

      <hr className="my-5" /> 

      {/* Sección de Proyectos Existentes */}
      <div className="p-4 border rounded shadow-sm">
        <h2 className="mb-4">Proyectos Existentes</h2>

        {/* COMPROBACIONES DEFENSIVAS: Asegura que portfolioItems exista y sea un array */}
        {(!portfolioItems || !Array.isArray(portfolioItems) || portfolioItems.length === 0) ? (
          <p className="text-center">No hay proyectos de portafolio cargados.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Título</th>
                  <th scope="col">Categoría</th>
                  <th scope="col">Año</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {/* Asegúrate de que portfolioItems sea un array antes de mapear */}
                {Array.isArray(portfolioItems) && portfolioItems.map((project, index) => (
                  <tr key={project.id}> 
                    <th scope="row">{index + 1}</th>
                    <td>{project.title}</td>
                    <td>{project.category}</td>
                    <td>{project.year}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-info me-2"
                        onClick={() => handleEdit(project)} 
                      >
                        Editar
                      </button>
                      <button 
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(project.id)} 
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
