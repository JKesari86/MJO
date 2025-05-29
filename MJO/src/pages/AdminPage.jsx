// src/pages/AdminPage.jsx
import React from 'react';
import portfolioItems from '../data/portfolioItems'; // Importa los datos del portafolio

function AdminPage() {
  return (
    <div className="admin-page my-5">
      <h1 className="text-center mb-4">Panel de Administración del Portafolio</h1>
      <p className="text-center lead">Aquí podrás gestionar tus proyectos de diseño de interiores.</p>

      <div className="mt-5 p-4 border rounded shadow-sm">
        <h2 className="mb-4">Proyectos Existentes</h2>

        {/* Botón para añadir nuevo proyecto (lo haremos en el siguiente paso) */}
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-success">Añadir Nuevo Proyecto</button>
        </div>

        {/* Tabla para listar los proyectos */}
        {portfolioItems.length === 0 ? (
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
                {portfolioItems.map((project, index) => (
                  <tr key={project.id}> {/* Usamos el ID del proyecto como key */}
                    <th scope="row">{index + 1}</th>
                    <td>{project.title}</td>
                    <td>{project.category}</td>
                    <td>{project.year}</td>
                    <td>
                      {/* Botones de acción (funcionalidad pendiente) */}
                      <button className="btn btn-sm btn-info me-2">Editar</button>
                      <button className="btn btn-sm btn-danger">Eliminar</button>
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