import React, { useEffect, useState } from 'react';

// Opcional: Si tenías una importación de datos locales, bórrala o coméntala.
// Por ejemplo: // import { portfolioItems } from '../../data/portfolioItems.js';

function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // !!! IMPORTANTE: REEMPLAZA ESTA URL con la URL de tu Codespace !!!
    const API_URL = 'https://urban-spoon-q57xgg456gvf4wqr-5000.app.github.dev/api/projects'; 

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(API_URL);
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