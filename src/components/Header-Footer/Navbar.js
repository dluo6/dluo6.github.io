import './Navbar.css'

function Navbar() {
    const links = ['Home', 'Resume', 'Projects', 'Contact']
    return (
        <div>
            <ul className='Navbar-list'>
                {links.map((section) => <li>
                    <p onClick={() => document.getElementById(section).scrollIntoView()}>{section}</p>
                </li>)}
            </ul>
        </div>
    )
}

export default Navbar;