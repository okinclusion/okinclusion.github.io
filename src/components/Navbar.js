import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import '../components/Navbar.css'; 
import { Button2 } from './Button2';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

  return (
    <>
    <nav className='navbar'>
        <div className="navbar-container">
            <img className='logo' src='../../images/logocrop-nobg.png'/>
            <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faAngleDoubleRight: faAlignJustify}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" className={"nav-links" + (url === "/" ?" active" : "")} onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/about" className={"nav-links" + (url === "/about" ?" active" : "")} onClick={closeMobileMenu}>
                        About Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/services" className={"nav-links" + (url === "/services" ?" active" : "")} onClick={closeMobileMenu}>
                        Our Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/news" className={"nav-links" + (url === "/news" ?" active" : "")} onClick={closeMobileMenu}>
                        News
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/work" className={"nav-links" + (url === "/resources" ?" active" : "")} onClick={closeMobileMenu}>
                        Resources
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/contact" className={"nav-links" + (url === "/contact" ?" active" : "")} onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
            </ul>            
        </div>
    </nav>
    </>
  )
}

export default Navbar;