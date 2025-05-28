// src/pages/AdminPage.jsx
import React from 'react';

function AdminPage() {
  return (
    <div className="admin-page my-5">
      <h1 className="text-center mb-4">Panel de Administración del Portafolio</h1>
      <p className="text-center lead">Aquí podrás gestionar tus proyectos de diseño de interiores.</p>

      {/* Aquí es donde eventualmente añadiremos la lista de proyectos y el formulario para añadir/editar */}
      <div className="mt-5 p-4 border rounded shadow-sm">
        <h3>Próximos pasos:</h3>
        <ul>
          <li>Listado de proyectos existentes con opciones para editar/eliminar.</li>
          <li>Formulario para añadir un nuevo proyecto.</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminPage;