import React from 'react';
import './Home.css'; // Archivo de estilos para esta página
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Sección 1: Hero */}
      <section className="home__section home__section--hero">
        <h1>Bienvenido a la Página Home</h1>
        <p>Descubre todo lo que tenemos para ti.</p>
      </section>

      {/* Sección 2: Actividades */}
      <section className="home__section home__section--activities">
        <h2>Nuestras Actividades</h2>
        <ul>
          <li><Link to="/activities/activity1">Actividad 1</Link></li>
          <li><Link to="/activities/activity2">Actividad 2</Link></li>
        </ul>
      </section>

      {/* Sección 3: Sobre nosotros */}
      <section className="home__section home__section--about">
        <h2>Sobre Nosotros</h2>
        <p>Información sobre la empresa o la página.</p>
      </section>

      {/* Sección 4: Testimonios */}
      <section className="home__section home__section--testimonials">
        <h2>Testimonios</h2>
        <p>Lo que nuestros usuarios dicen de nosotros.</p>
      </section>

      {/* Sección 5: Contacto */}
      <section className="home__section home__section--contact">
        <h2>Contáctanos</h2>
        <form>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo Electrónico" required />
          <textarea placeholder="Mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
