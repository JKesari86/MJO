// src/data/testimonials.js

/*
  Este archivo contiene los datos de los testimonios de clientes.
  Cada objeto en el array representa un testimonio individual.
  Puedes añadir o modificar estos objetos para incluir los testimonios reales de tu amiga.
*/

const testimonials = [
  {
    id: 'test_1',
    name: 'Ana García',
    company: 'Empresa A',
    quote: 'El trabajo de MJO Diseño superó nuestras expectativas. Profesionalismo y creatividad en cada detalle. ¡Totalmente recomendados!',
    image: 'https://placehold.co/100x100/556270/ffffff?text=AG', // Placeholder para la foto del cliente
    rating: 5 // Calificación de 1 a 5 estrellas
  },
  {
    id: 'test_2',
    name: 'Pedro Martínez',
    company: 'Cliente Particular',
    quote: 'Transformaron mi hogar en un espacio soñado. Atención personalizada y un diseño impecable. Gracias por la dedicación.',
    image: 'https://placehold.co/100x100/4ECDC4/ffffff?text=PM',
    rating: 5
  },
  {
    id: 'test_3',
    name: 'Laura Fernández',
    company: 'Startup Tech',
    quote: 'Necesitábamos un diseño de oficina que inspirara y fuera funcional. MJO Diseño lo logró con creces. ¡Excelente comunicación y resultados!',
    image: 'https://placehold.co/100x100/C7F464/ffffff?text=LF',
    rating: 4
  },
  {
    id: 'test_4',
    name: 'Carlos Sánchez',
    company: 'Restaurante Sabor',
    quote: 'El diseño interior de nuestro restaurante ahora atrae a muchos más clientes. MJO Diseño entendió nuestra visión a la perfección y la ejecutó magistralmente.',
    image: 'https://placehold.co/100x100/FF6B6B/ffffff?text=CS',
    rating: 5
  }
];

export default testimonials;
