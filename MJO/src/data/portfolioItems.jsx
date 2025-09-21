import React, { useEffect, useState } from 'react';

function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = 'https://urban-spoon-q57xgg456gvf4wqr-5000.app.github.dev/api/projects'; 

    useEffect(() => {
        const fetchProjects = async () => {
            const token = localStorage.getItem('access_token');
            if (!token) {
                setError(new Error('No hay token de autenticación.'));
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(API_URL, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []); 

    if (loading) return <p>Cargando proyectos...</p>;
    if (error) return <p>Error al cargar proyectos: {error.message}</p>;

    return (
        <div>
            <h1>Nuestros Proyectos</h1>
            {/* Asegúrate de que los nombres de las propiedades (project.id, etc.) coincidan con las de tu API */}
            {projects.map(project => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.shortDescription}</p>
                    <img src={project.imageUrl} alt={project.title} style={{ width: '200px' }} />
                </div>
            ))}
        </div>
    );
}

export default ProjectsPage;