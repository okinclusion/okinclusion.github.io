import React, { useEffect } from "react";
import '../../App.css';
import '../styles.css';
import Footer from './Footer.jsx';
import { TypeAnimation } from 'react-type-animation';

const requirements = [
  'Submit annual reporting documents and other required information to CARF, as detailed in the Accreditation Policies and Procedures section in the standards manual.',
  'Maintain ongoing conformance to CARF\'s standards, satisfy all accreditation conditions, and comply with all accreditation policies and procedures, as they are published and made effective by CARF.',
];

export default function Accreditation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ac-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.ac-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="ac-hero">
        <div className="ac-orb ac-orb-1" />
        <div className="ac-orb ac-orb-2" />
        <div className="ac-orb ac-orb-3" />
        <div className="ac-grid-overlay" />

        <div className="ac-hero__content">
          <p className="ac-eyebrow">Okanagan Inclusion</p>
          <h1 className="ac-hero__title">
            <TypeAnimation
              sequence={['CARF', 900, 'CARF Accreditation', 99999]}
              wrapper="span"
              speed={45}
              cursor={false}
            />
          </h1>
          <div className="ac-hero__divider" />
          <p className="ac-hero__sub">A mark of excellence in community services.</p>
        </div>

        <div className="ac-scroll-hint">
          <div className="ac-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── ANNOUNCEMENT ── */}
      <section className="ac-section">
        <div className="ac-diagonal" />
        <div className="ac-inner">

          {/* Badge + headline */}
          <div className="ac-badge-row ac-reveal">
            <div className="ac-badge">
              <img
                src="images/carf-logo.png"
                alt="CARF Canada Accredited"
                className="ac-badge__img"
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="ac-badge__fallback">✦</div>
            </div>
            <div className="ac-badge__text">
              <p className="ac-section-label">Achievement Unlocked</p>
              <h2 className="ac-section-heading">Three-Year CARF Accreditation</h2>
              <p className="ac-lead">
                Okanagan Inclusion is proud to announce the achievement of a{' '}
                <strong>three-year CARF Accreditation</strong> — a distinction
                reached by only 3% of CARF surveys with <em>zero recommendations</em>.
              </p>
            </div>
          </div>

          {/* Quote card */}
          <blockquote className="ac-quote ac-reveal">
            <div className="ac-quote__mark">"</div>
            <p className="ac-quote__text">
              This achievement is an indication of your organization's dedication
              and commitment to improving the quality of the lives of the persons served.
            </p>
            <footer className="ac-quote__source">— CARF Canada</footer>
          </blockquote>

          {/* Body + requirements */}
          <div className="ac-body ac-reveal">
            <p className="ac-body__text">
              Okanagan Inclusion has earned a Three-Year Accreditation. The leadership
              team and staff are complimented and congratulated for this achievement.
              In order to maintain this accreditation throughout the term, the
              organisation is required to:
            </p>
            <ul className="ac-req-list">
              {requirements.map((r, i) => (
                <li key={i} className="ac-req-item">
                  <div className="ac-req-item__dot" />
                  <p>{r}</p>
                </li>
              ))}
            </ul>
            <p className="ac-body__thanks">
              Thank you to our incredible staff and caregivers for their ongoing
              dedication to the individuals we serve. ♥
            </p>
          </div>

          {/* PDF viewer */}
          <div className="ac-pdf-wrap ac-reveal">
            <p className="ac-section-label" style={{ marginBottom: '1rem' }}>Official Report</p>
            <h3 className="ac-pdf-heading">CARF Accreditation Report</h3>
            <div className="ac-pdf-frame">
              <iframe
                src="https://okincbucket.s3.us-east-1.amazonaws.com/Accreditation-Report-2026"
                title="AccreditationReportPDF"
                className="ac-pdf-iframe"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}