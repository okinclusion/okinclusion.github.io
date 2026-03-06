import React, { useEffect } from "react";
import '../App.css';
import './styles.css';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';

export default function OMR() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('omr-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.omr-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="omr-hero">
        <div className="omr-orb omr-orb-1" />
        <div className="omr-orb omr-orb-2" />
        <div className="omr-orb omr-orb-3" />
        <div className="omr-grid-overlay" />

        <div className="omr-hero__content">
          <p className="omr-eyebrow">Okanagan Inclusion</p>
          <h1 className="omr-hero__title">
            <TypeAnimation
              sequence={['Outcomes Management Report', 99999]}
              wrapper="span"
              speed={55}
              cursor={false}
            />
          </h1>
          <div className="omr-hero__divider" />
          <p className="omr-hero__sub">Transparency. Accountability. Impact.</p>
        </div>

        <div className="omr-scroll-hint">
          <div className="omr-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── INTRO + PDF ── */}
      <section className="omr-section">
        <div className="omr-diagonal" />
        <div className="omr-inner">

          {/* intro */}
          <div className="omr-intro omr-reveal">
            <p className="omr-section-label">Annual Report</p>
            <h2 className="omr-section-heading">Our Outcomes & Impact</h2>
            <p className="omr-intro__text">
              Our Outcomes Management Report reflects our ongoing commitment to
              transparency and accountability. It documents the measurable impact
              of our programs and services on the individuals we support across
              the Okanagan — and guides how we continue to grow and improve.
            </p>
          </div>

          {/* stat highlights */}
          <div className="omr-stats omr-reveal">
            {[
              { value: '3-Year', label: 'CARF Accreditation' },
              { value: '2013',   label: 'Year Founded' },
              { value: 'CLBC',   label: 'Referral Partner' },
              { value: '100%',   label: 'Person-Centred Care' },
            ].map(({ value, label }) => (
              <div key={label} className="omr-stat">
                <span className="omr-stat__value">{value}</span>
                <span className="omr-stat__label">{label}</span>
              </div>
            ))}
          </div>

          {/* PDF */}
          <div className="omr-pdf-wrap omr-reveal">
            <div className="omr-pdf-header">
              <p className="omr-section-label">Full Document</p>
              <h3 className="omr-pdf-heading">Outcomes Management Report</h3>
            </div>
            <div className="omr-pdf-frame">
              <iframe
                src="https://okincbucket.s3.us-east-1.amazonaws.com/OMR2023"
                title="Outcomes Management Report PDF"
                className="omr-pdf-iframe"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}