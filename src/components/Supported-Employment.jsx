import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import './styles.css';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';

const highlights = [
  { icon: '🎯', title: 'Full Community Inclusion', text: 'Responding to individuals\' desire to pursue employment as a means to full inclusion in the community.' },
  { icon: '🏢', title: 'Employer Solutions',        text: 'Providing creative employment solutions, candidate screening and one-to-one support through hiring and training.' },
  { icon: '🤝', title: 'Diversity in the Workplace', text: 'Employers who hire through OI demonstrate their commitment to diversity and benefit from enthusiastic, dependable employees.' },
  { icon: '🔍', title: 'Smart Matching',             text: 'OI Employment Services identifies opportunities for improved efficiency and matches specific needs with willing, able individuals.' },
  { icon: '📅', title: 'Flexible Support Hours',     text: 'Support services run Monday to Friday, 8:30–5:00 pm, with flexibility for evenings and weekends based on individual need.' },
  { icon: '📍', title: 'On-Site Support',             text: 'Supports are provided both at OI program sites and directly at employment sites for a seamless experience.' },
];

export default function SupportedEmployment() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('se-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.se-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="se-hero">
        <div className="se-orb se-orb-1" />
        <div className="se-orb se-orb-2" />
        <div className="se-orb se-orb-3" />
        <div className="se-grid-overlay" />

        <div className="se-hero__content">
          <p className="se-eyebrow">Our Services</p>
          <h1 className="se-hero__title">
            <TypeAnimation
              sequence={['Supported', 800, 'Supported Employment', 99999]}
              wrapper="span"
              speed={50}
              cursor={false}
            />
          </h1>
          <div className="se-hero__divider" />
          <p className="se-hero__sub">Connecting individuals with meaningful employment opportunities.</p>
        </div>

        <div className="se-scroll-hint">
          <div className="se-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="se-section">
        <div className="se-diagonal" />
        <div className="se-inner">

          {/* Intro — two column */}
          <div className="se-intro se-reveal">
            <div className="se-intro__col">
              <p className="se-section-label">Employment Services</p>
              <h2 className="se-section-heading">Work With Us</h2>
              <p className="se-intro__text">
                Okanagan Inclusion Employment Services responds to the desire of
                individuals living with a developmental disability to pursue
                employment as a means to <strong>full inclusion in our community</strong>.
              </p>
              <p className="se-intro__text">
                At the same time, the program addresses employers' growing demand
                for qualified, reliable employees by providing creative employment
                solutions, candidate screening and one-to-one support through the
                hiring and training process.
              </p>
            </div>
            <div className="se-intro__col">
              <p className="se-intro__text">
                Employers who choose to hire an individual with a developmental
                disability demonstrate their commitment to our community and to
                diversity in the workplace. They benefit by hiring an enthusiastic
                individual who is capable and dependable.
              </p>
              <p className="se-intro__text">
                OI Employment Services helps employers identify opportunities for
                improved efficiency and employee retention, and matches specific
                needs with individuals who are willing and able to work.
              </p>
              <p className="se-intro__text">
                Support services are typically provided during the week Monday to
                Friday between <strong>8:30 – 5:00 pm</strong>. The service is
                designed to be flexible and some individuals, based on individual
                need, may receive support after 5:00 pm and on weekends.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="se-highlights-wrap se-reveal">
            <p className="se-section-label">Programme Highlights</p>
            <h2 className="se-section-heading">What We Provide</h2>
            <div className="se-highlights">
              {highlights.map(({ icon, title, text }, i) => (
                <div
                  key={title}
                  className="se-card se-reveal"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="se-card__icon">{icon}</div>
                  <h3 className="se-card__title">{title}</h3>
                  <p className="se-card__text">{text}</p>
                  <div className="se-card__bar" />
                </div>
              ))}
            </div>
          </div>

          {/* Support hours note */}
          <div className="se-note se-reveal">
            <div className="se-note__icon">📍</div>
            <p className="se-note__text">
              Supports will be provided both at the <strong>OI program sites</strong> and
              at the <strong>employment sites</strong> — ensuring individuals receive
              consistent, on-the-ground support wherever they need it most.
            </p>
          </div>

          {/* CTA */}
          <div className="se-cta se-reveal">
            <h2 className="se-cta__heading">Interested in Learning More?</h2>
            <p className="se-cta__sub">
              Whether you're an individual seeking employment or an employer looking
              for great candidates — we'd love to connect with you.
            </p>
            <div className="se-cta__buttons">
              <Link to="/contact" className="se-btn se-btn--primary">
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