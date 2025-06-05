import './NavBar.css'
import './CartWidget'
import CardWidget from './CartWidget'
import { useState } from 'react';

const NavBar = () => {
    const [showCategories, setShowCategories] = useState(false);

    const categorias = ['Materiales de Contruccion', 'Herramientas', 'Instalaciones'];

    const toggleCategorias = () => {
        setShowCategories(!showCategories);
    };

    return (
        <header>
            <h1>Corralon Cura Brochero</h1>
            <nav className="navbar">
                <ul className="nav-menu">
                    <li onClick={toggleCategorias} className="nav-item">
                        Productos
                    </li>
                    {showCategories && (
                        <ul className="dropdown">
                            {categorias.map((cat, index) => (
                                <li key={index} className="dropdown-item">
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    )}
                </ul>
            </nav>
            <CardWidget />
        </header>
    );
};

export default NavBar;

