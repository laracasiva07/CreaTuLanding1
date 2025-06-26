import './CartWidget';
import CardWidget from './CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <header className="navbar-container">
      <h1 className="navbar-title">Corralón Cura Brochero</h1>

      <nav className="navbar-links">
        <Link to="/" className="nav-link">Todos</Link>
        <Link to="/category/materiales" className="nav-link">Materiales</Link>
        <Link to="/category/herramientas" className="nav-link">Herramientas</Link>
        <Link to="/category/instalaciones" className="nav-link">Instalaciones</Link>
      </nav>

      <CardWidget />
    </header>
    );
};

export default NavBar;

