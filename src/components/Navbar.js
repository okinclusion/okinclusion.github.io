import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; 

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

    const [showDropdown1, setShowDropdown1] = useState(false);
    const handleDropdownEnter1 = () => {
        setShowDropdown1(true);
    };
    const handleDropdownLeave1 = () => {
        setShowDropdown1(false);
    }
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showSubDropdown, setShowSubDropdown] = useState(false);
    const handleDropdownEnter2 = () => {
        setShowDropdown2(true);
    };
    const handleDropdownLeave2 = () => {
        setShowDropdown2(false);
    }
    const handleSubDropdownEnter = () => {
        setShowSubDropdown(true);
    };
    const handleSubDropdownLeave = () => {
        setShowSubDropdown(false);
    }

  return (
    <>
    <div className='navbar'>
        <div className="navbar-container">
            <img className='logo' src='../../images/logocrop-nobg.png'/>
            <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faAngleDoubleRight: faAlignJustify}/>
            </div>
            <div className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link to="/" className={"nav-item nav-links" + (url === "/" ?" active" : "")} onClick={closeMobileMenu}>
                    Home
                </Link>
                <div className='nav-links nav-item dropdown' onMouseEnter={handleDropdownEnter1} onMouseLeave={handleDropdownLeave1}>
                        About Us 
                        {showDropdown1 && (
                            <div className='dropdown-menu'>
                                <Link to="/history" className="dropdown-item">
                                    History
                                </Link>                             
                                <Link to="/missionvision" className="dropdown-item">
                                    Mission + Vision
                                </Link>   
                                <Link to="/team" className="dropdown-item">
                                    Leadership Team
                                </Link>     
                                <Link to="/strategicpriorities" className="dropdown-item">
                                    Strategic Priorities
                                </Link>    
                                <Link to="/accreditation" className="dropdown-item">
                                    Accreditation
                                </Link>    
                            </div>
                        )}
                </div>
                <div className='nav-links nav-item dropdown' onMouseEnter={handleDropdownEnter2} onMouseLeave={handleDropdownLeave2}>
                        Our Services
                        {showDropdown2 && (
                            <div className='dropdown-menu'>
                                <div to="/communityinclusion" className="dropdown-item" onMouseEnter={handleSubDropdownEnter} onMouseLeave={handleSubDropdownLeave}>
                                    Community Inclusion
                                    {showSubDropdown && (
                                        <div className='sub-dropdown-menu' onMouseEnter={handleSubDropdownEnter} onMouseLeave={handleSubDropdownLeave}>
                                            <Link to='/penticton' className='sub-dropdown-item'>
                                                Penticton
                                            </Link>
                                            <Link to='/keremeos' className='sub-dropdown-item'>
                                                Keremeos
                                            </Link>
                                        </div>
                                    )}
                                </div>                             
                                <Link to="/homeshare" className="dropdown-item">
                                    Home Share
                                </Link>   
                                <Link to="/employment" className="dropdown-item">
                                    Employment
                                </Link>     
                                <Link to="/supportedliving" className="dropdown-item">
                                    Supported Living
                                </Link>    
                                <Link to="/respite" className="dropdown-item">
                                    Respite
                                </Link>    
                            </div>
                        )}
                </div>
                    <Link to="/news" className={"nav-links" + (url === "/news" ?" active" : "")} onClick={closeMobileMenu}>
                        News
                    </Link>
                    <Link to="/resources" className={"nav-links" + (url === "/resources" ?" active" : "")} onClick={closeMobileMenu}>
                        Resources
                    </Link>
                    <Link to="/contact" className={"nav-links" + (url === "/contact" ?" active" : "")} onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
            </div>            
        </div>
    </div>
    </>
  )
}

export default Navbar;