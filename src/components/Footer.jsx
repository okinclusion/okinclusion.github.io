import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr">
      <div className="ftr-grid-overlay" />

      <div className="ftr__inner">

        {/* Top row */}
        <div className="ftr__top">

          {/* Brand */}
          <div className="ftr__brand">
            <img src="../images/logocrop-nobg.png" alt="Okanagan Inclusion" className="ftr__logo" />
            <p className="ftr__tagline">Supporting individuals with developmental disabilities to live, work, and thrive in our community.</p>
          </div>

          {/* Quick links */}
          <div className="ftr__col">
            <p className="ftr__col-heading">About</p>
            <Link to="/history"            className="ftr__link">Our History</Link>
            <Link to="/missionvision"      className="ftr__link">Mission &amp; Vision</Link>
            <Link to="/team"               className="ftr__link">Our Team</Link>
            <Link to="/accreditation"      className="ftr__link">Accreditation</Link>
            <Link to="/strategicpriorities" className="ftr__link">Strategic Priorities</Link>
          </div>

          <div className="ftr__col">
            <p className="ftr__col-heading">Services</p>
            <Link to="/homeshare"          className="ftr__link">Home Share</Link>
            <Link to="/supportedliving"    className="ftr__link">Supported Living</Link>
            <Link to="/supportedemployment" className="ftr__link">Supported Employment</Link>
            <Link to="/respite"            className="ftr__link">Respite</Link>
            <Link to="/employment"         className="ftr__link">Careers</Link>
          </div>

          <div className="ftr__col">
            <p className="ftr__col-heading">Connect</p>
            <Link to="/news"      className="ftr__link">News &amp; Events</Link>
            <Link to="/resources" className="ftr__link">Resources</Link>
            <Link to="/contact"   className="ftr__link">Contact Us</Link>
            <Link to="/staff"     className="ftr__link">Staff Resources</Link>
            <Link to="/OMR"       className="ftr__link">Outcomes Report</Link>
          </div>

        </div>

        {/* Divider */}
        <div className="ftr__divider" />

        {/* Bottom row */}
        <div className="ftr__bottom">
          <p className="ftr__copyright">© {year} Okanagan Inclusion. All rights reserved.</p>

          <div className="ftr__social">
            <p className="ftr__social-label">Follow Us</p>
            <div className="ftr__social-icons">
              <a
                href="https://www.facebook.com/okinclusion"
                target="_blank"
                rel="noreferrer"
                className="ftr__social-icon ftr__social-icon--fb"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/okanaganinclusion"
                target="_blank"
                rel="noreferrer"
                className="ftr__social-icon ftr__social-icon--ig"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}