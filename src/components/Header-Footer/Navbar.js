import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const links = ['Projects', 'Resume', 'Contact']
    return (
        <div>
            <ul className='Navbar-list Navbar-header'>
                <li><Link to='/'>Home</Link></li>
                {links.map((page) => <li><Link to={`/${page}`}>{page}</Link></li>)}
            </ul>
        </div>
    )
}

export default Navbar;