import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-left">
                <Link to="/">
                    <img src="/img/logo.png" alt="Logo" className="logo" />
                </Link>
                <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaBars />
                </button>
            </div>

            <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                <div className="nav-item dropdown">
                    <button className="dropdown-btn">Productos ▾</button>
                    <div className="dropdown-menu">
                        <Link to="/category/materiales">Materiales</Link>
                        <Link to="/category/herramientas">Herramientas</Link>
                        <Link to="/category/instalaciones">Instalaciones</Link>
                    </div>
                </div>
                <Link className="nav-item" to="/ofertas">Ofertas</Link>
                <Link className="nav-item" to="/contacto">Contacto</Link>
                <Link className="nav-item" to="/login">Iniciar Sesión</Link>
                <Link className="nav-item" to="/cart">
                    <FaShoppingCart size={20} />
                </Link>
            </nav>
        </header>
    );
};

export default Header;
