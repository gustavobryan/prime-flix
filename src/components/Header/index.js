import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link className="logo" to="/"><span className='color-logo'>P</span>rime Flix</Link>
            <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
        </header>
    );
}

export default Header;