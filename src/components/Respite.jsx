import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import './styles.css';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';

const highlights = [
  { icon: '🌿', title: 'Short-Term Relief',      text: 'Provides short-term relief to primary caregivers of adults with intellectual disabilities.' },
  { icon: '👨‍👩‍👧', title: 'Family Support',         text: 'Supports families of children with intellectual and/or physical disabilities in the South & Central Okanagan.' },
  { icon: '🕐', title: 'Flexible Duration',      text: 'Respite can be provided for a few hours, a day, a weekend, or even a full week.' },
  { icon: '🔄', title: 'Occasional or Regular',  text: 'Services may be provided on an occasional basis or scheduled regularly depending on your needs.' },
  { icon: '🏡', title: 'At Home or Away',         text: 'Services can be provided in the individual\'s home or at the respite provider\'s home.' },
  { icon: '🔒', title: 'Screened Providers',      text: 'Contracted respite providers go through a screening process similar to that of our home share providers.' },
];

export default function Respite() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('rsp-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.rsp-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="rsp-hero">
        <div className="rsp-orb rsp-orb-1" />
        <div className="rsp-orb rsp-orb-2" />
        <div className="rsp-orb rsp-orb-3" />
        <div className="rsp-grid-overlay" />

        <div className="rsp-hero__content">
          <p className="rsp-eyebrow">Our Services</p>
          <h1 className="rsp-hero__title">
            <TypeAnimation
              sequence={['Respite', 99999]}
              wrapper="span"
              speed={45}
              cursor={false}
            />
          </h1>
          <div className="rsp-hero__divider" />
          <p className="rsp-hero__sub">Short-term relief and support for caregivers and families.</p>
        </div>

        <div className="rsp-scroll-hint">
          <div className="rsp-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="rsp-section">
        <div className="rsp-diagonal" />
        <div className="rsp-inner">

          {/* Intro */}
          <div className="rsp-intro rsp-reveal">
            <p className="rsp-section-label">Respite Services</p>
            <h2 className="rsp-section-heading">What is Respite?</h2>
            <div className="rsp-intro__body">
              <p>
                Respite Services provides <strong>short-term relief and support</strong> to
                primary caregivers of adults with intellectual disabilities and families of
                children with intellectual and/or physical disabilities residing in the
                South &amp; Central Okanagan.
              </p>
              <p>
                Respite can be provided for a few hours, a day, a weekend or a week. It
                may be provided on an occasional or on a regular basis. Services may be
                provided in the individual's home or the respite provider's home.
              </p>
              <p>
                Contracted respite providers go through a <strong>screening process
                similar to that of our home share providers</strong>, ensuring a safe,
                consistent, and trustworthy experience for every family.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="rsp-highlights-wrap rsp-reveal">
            <p className="rsp-section-label">Programme Highlights</p>
            <h2 className="rsp-section-heading">What We Offer</h2>
            <div className="rsp-highlights">
              {highlights.map(({ icon, title, text }, i) => (
                <div
                  key={title}
                  className="rsp-card rsp-reveal"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="rsp-card__icon">{icon}</div>
                  <h3 className="rsp-card__title">{title}</h3>
                  <p className="rsp-card__text">{text}</p>
                  <div className="rsp-card__bar" />
                </div>
              ))}
            </div>
          </div>

          {/* CLBC note */}
          <div className="rsp-note rsp-reveal">
            <div className="rsp-note__icon">ℹ️</div>
            <p className="rsp-note__text">
              For all program areas (with the exception of Home Share &amp; Respite):
              if individuals are self-referred and choose to pay themselves, rates will
              be based on the per hour rate paid by{' '}
              <a href="https://www.communitylivingbc.ca" target="_blank" rel="noreferrer" className="rsp-inline-link">
                CLBC
              </a>. All agency services are voluntary and participants may refuse
              service at any time.
            </p>
          </div>

          {/* CTA */}
          <div className="rsp-cta rsp-reveal">
            <h2 className="rsp-cta__heading">Need a Break? We're Here to Help.</h2>
            <p className="rsp-cta__sub">
              Caring for a loved one is rewarding — and demanding. Reach out to learn
              more about Respite Services available in your area.
            </p>
            <div className="rsp-cta__buttons">
              <Link to="/contact" className="rsp-btn rsp-btn--primary">
                Contact Us For More Information
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}