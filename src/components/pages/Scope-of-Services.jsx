import React from "react";
import '../../App.css';
import '../styles.css';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';

export default function Scope() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="scp-hero">
        <div className="scp-orb scp-orb-1" />
        <div className="scp-orb scp-orb-2" />
        <div className="scp-orb scp-orb-3" />
        <div className="scp-grid-overlay" />

        <div className="scp-hero__content">
          <p className="scp-eyebrow">Our Services</p>
          <h1 className="scp-hero__title">
            <TypeAnimation
              sequence={['Scope of', 800, 'Scope of Services', 99999]}
              wrapper="span"
              speed={50}
              cursor={false}
            />
          </h1>
          <div className="scp-hero__divider" />
          <p className="scp-hero__sub">A full overview of the services Okanagan Inclusion provides.</p>
        </div>

        <div className="scp-scroll-hint">
          <div className="scp-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── PDF SECTION ── */}
      <section className="scp-section">
        <div className="scp-diagonal" />
        <div className="scp-inner">

          <div className="scp-pdf-wrap">
            <div className="scp-pdf-header">
              <p className="scp-section-label">Document</p>
              <h2 className="scp-section-heading">Scope of Services</h2>
              <a
                href="https://okincbucket.s3.us-east-1.amazonaws.com/ScopeOfServices"
                target="_blank"
                rel="noreferrer"
                className="scp-download-btn"
              >
                ↓ Download PDF
              </a>
            </div>

            <div className="scp-pdf-container">
              <iframe
                src="https://okincbucket.s3.us-east-1.amazonaws.com/ScopeOfServices"
                title="Scope of Services"
                className="scp-pdf-frame"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}