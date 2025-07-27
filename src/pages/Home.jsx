import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero">
        <h1>Bienvenido al Corralon</h1>
        <p>Tu mejor opción en materiales de construcción y herramientas.</p>
       <Link to="/items" className="btn-primary">Ver Productos</Link>
      </section>

      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="/img/cemento.jpg" alt="Cemento" />
            <h3>Cemento Premium</h3>
            <p>Calidad garantizada para tus obras.</p>
          </div>
          <div className="product-card">
            <img src="/img/martillo.jpg" alt="Martillo" />
            <h3>Martillo Profesional</h3>
            <p>Herramienta resistente para cualquier trabajo.</p>
          </div>
          <div className="product-card">
            <img src="/img/tornillo.jpg" alt="Tornillos" />
            <h3>Tornillos Varios</h3>
            <p>Fijación segura y duradera.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contacto</h2>
        <p>¿Tenés dudas? ¡Escribinos!</p>
        <button className="btn-secondary">Contacto</button>
      </section>
    </main>
  );
};

export default Home;
