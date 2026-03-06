import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faAngleDoubleRight, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function Navbar() {
  const [click, setClick]               = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [mobileAbout, setMobileAbout]   = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const location = useLocation();
  const url = location.pathname;

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setMobileAbout(false);
    setMobileServices(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const aboutUsPaths = ['/history','/missionvision','/team','/strategicpriorities','/accreditation','/OMR'];
  const servicesPaths = ['/communityinclusion','/penticton','/keremeos','/homeshare','/employment','/supportedemployment','/supportedliving','/respite','/scopeofservices'];
  const isAboutUsActive   = aboutUsPaths.includes(url);
  const isServicesActive  = servicesPaths.includes(url);

  return (
    <nav className={`nb-nav${scrolled ? ' nb-nav--scrolled' : ''}`}>
      <div className="nb-container">

        {/* Logo */}
        <Link to="/" className="nb-logo" onClick={closeMobileMenu}>
          <img src="../images/logocrop-nobg.png" alt="Okanagan Inclusion" />
        </Link>

        {/* Desktop menu */}
        <div className="nb-menu">
          <Link to="/" className={`nb-link${url === '/' ? ' nb-link--active' : ''}`}>
            Home
          </Link>

          {/* About Us dropdown */}
          <div
            className={`nb-link nb-dropdown${isAboutUsActive ? ' nb-link--active' : ''}`}
            onMouseEnter={() => setShowDropdown1(true)}
            onMouseLeave={() => setShowDropdown1(false)}
          >
            About Us <FontAwesomeIcon icon={faChevronDown} className="nb-chevron" />
            {showDropdown1 && (
              <div className="nb-dropdown__panel">
                {[
                  { to: '/history',             label: 'History' },
                  { to: '/missionvision',        label: 'Mission + Vision' },
                  { to: '/team',                 label: 'Leadership Team' },
                  { to: '/strategicpriorities',  label: 'Strategic Priorities' },
                  { to: '/accreditation',        label: 'Accreditation' },
                  { to: '/OMR',                  label: 'Outcomes Management Report' },
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`nb-dropdown__item${url === to ? ' nb-dropdown__item--active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Our Services dropdown */}
          <div
            className={`nb-link nb-dropdown${isServicesActive ? ' nb-link--active' : ''}`}
            onMouseEnter={() => setShowDropdown2(true)}
            onMouseLeave={() => { setShowDropdown2(false); setShowSubDropdown(false); }}
          >
            Our Services <FontAwesomeIcon icon={faChevronDown} className="nb-chevron" />
            {showDropdown2 && (
              <div className="nb-dropdown__panel">
                {/* Community Inclusion with sub-dropdown */}
                <div
                  className="nb-dropdown__item nb-dropdown__item--has-sub"
                  onMouseEnter={() => setShowSubDropdown(true)}
                  onMouseLeave={() => setShowSubDropdown(false)}
                >
                  Community Inclusion <FontAwesomeIcon icon={faChevronRight} className="nb-chevron nb-chevron--sm" />
                  {showSubDropdown && (
                    <div className="nb-subdropdown__panel">
                      <Link to="/penticton"  className={`nb-dropdown__item${url === '/penticton'  ? ' nb-dropdown__item--active' : ''}`} onClick={closeMobileMenu}>Penticton</Link>
                      <Link to="/keremeos"   className={`nb-dropdown__item${url === '/keremeos'   ? ' nb-dropdown__item--active' : ''}`} onClick={closeMobileMenu}>Keremeos</Link>
                    </div>
                  )}
                </div>
                {[
                  { to: '/homeshare',          label: 'Home Share' },
                  { to: '/employment',         label: 'Careers' },
                  { to: '/supportedemployment',label: 'Supported Employment' },
                  { to: '/supportedliving',    label: 'Supported Living' },
                  { to: '/respite',            label: 'Respite' },
                  { to: '/scopeofservices',    label: 'Scope of Services' },
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`nb-dropdown__item${url === to ? ' nb-dropdown__item--active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/news"      className={`nb-link${url === '/news'      ? ' nb-link--active' : ''}`}>News</Link>
          <Link to="/resources" className={`nb-link${url === '/resources' ? ' nb-link--active' : ''}`}>Resources</Link>
          <Link to="/contact"   className={`nb-link nb-link--cta${url === '/contact' ? ' nb-link--active' : ''}`}>Contact Us</Link>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`nb-drawer${click ? ' nb-drawer--open' : ''}`}>

        <Link to="/" className={`nb-drawer__link${url === '/' ? ' nb-drawer__link--active' : ''}`} onClick={closeMobileMenu}>
          Home
        </Link>

        {/* Mobile About Us accordion */}
        <div className="nb-drawer__accordion">
          <button
            className={`nb-drawer__link nb-drawer__accordion-toggle${isAboutUsActive ? ' nb-drawer__link--active' : ''}`}
            onClick={() => setMobileAbout(!mobileAbout)}
          >
            About Us <FontAwesomeIcon icon={faChevronDown} className={`nb-chevron${mobileAbout ? ' nb-chevron--open' : ''}`} />
          </button>
          {mobileAbout && (
            <div className="nb-drawer__sub">
              {[
                { to: '/history',             label: 'History' },
                { to: '/missionvision',        label: 'Mission + Vision' },
                { to: '/team',                 label: 'Leadership Team' },
                { to: '/strategicpriorities',  label: 'Strategic Priorities' },
                { to: '/accreditation',        label: 'Accreditation' },
                { to: '/OMR',                  label: 'Outcomes Management Report' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className={`nb-drawer__sublink${url === to ? ' nb-drawer__sublink--active' : ''}`} onClick={closeMobileMenu}>
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Services accordion */}
        <div className="nb-drawer__accordion">
          <button
            className={`nb-drawer__link nb-drawer__accordion-toggle${isServicesActive ? ' nb-drawer__link--active' : ''}`}
            onClick={() => setMobileServices(!mobileServices)}
          >
            Our Services <FontAwesomeIcon icon={faChevronDown} className={`nb-chevron${mobileServices ? ' nb-chevron--open' : ''}`} />
          </button>
          {mobileServices && (
            <div className="nb-drawer__sub">
              {[
                { to: '/penticton',           label: 'Community Inclusion — Penticton' },
                { to: '/keremeos',            label: 'Community Inclusion — Keremeos' },
                { to: '/homeshare',           label: 'Home Share' },
                { to: '/employment',          label: 'Careers' },
                { to: '/supportedemployment', label: 'Supported Employment' },
                { to: '/supportedliving',     label: 'Supported Living' },
                { to: '/respite',             label: 'Respite' },
                { to: '/scopeofservices',     label: 'Scope of Services' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className={`nb-drawer__sublink${url === to ? ' nb-drawer__sublink--active' : ''}`} onClick={closeMobileMenu}>
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/news"      className={`nb-drawer__link${url === '/news'      ? ' nb-drawer__link--active' : ''}`} onClick={closeMobileMenu}>News</Link>
        <Link to="/resources" className={`nb-drawer__link${url === '/resources' ? ' nb-drawer__link--active' : ''}`} onClick={closeMobileMenu}>Resources</Link>
        <Link to="/contact"   className={`nb-drawer__link nb-drawer__link--cta${url === '/contact' ? ' nb-drawer__link--active' : ''}`} onClick={closeMobileMenu}>Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;