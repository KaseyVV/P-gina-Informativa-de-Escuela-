import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="logo">Unidad Educativa Eloy Velasquez Cevallos</h1>
        <ul className="nav-links">
            <li>
                <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li>
                <Link to="/nosotros" className="nav-link">Nosotros</Link>
            </li>
            <li>
                <Link to="/ofertas" className="nav-link">Ofertas Académicas</Link>
            </li>
            <li>
                <Link to="/noticias" className="nav-link">Noticias</Link>
            </li>
            <li>
                <Link to="/galeria" className="nav-link">Galería</Link>
            </li>
            <li>
                <Link to="/contactos" className="nav-link">Contáctanos</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;