import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
import '../styles.css';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';

const highlights = [
  { icon: '🏠', title: 'Live Independently',    text: 'An independent living option for people who want to live in their own home but still need some help with daily living.' },
  { icon: '🛒', title: 'Daily Living Support',   text: 'Support staff assist with things like banking, medical appointments, cooking healthy meals, and more.' },
  { icon: '🌍', title: 'Community Involvement',  text: 'Support is provided both at home and out in the community — wherever individuals need it most.' },
  { icon: '🎯', title: 'Wide Range of Needs',    text: 'Supported Living is possible for individuals with many different support requirements.' },
  { icon: '💪', title: 'Your Choices Matter',    text: 'Designed for anyone with the desire to live more independently and make choices for themselves.' },
  { icon: '📅', title: 'Flexible Scheduling',    text: 'Services typically run Monday–Friday, 8:30–5:00 pm, with flexibility for evenings and weekends based on individual need.' },
];

export default function SupportedLiving() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('sl-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.sl-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="sl-hero">
        <div className="sl-orb sl-orb-1" />
        <div className="sl-orb sl-orb-2" />
        <div className="sl-orb sl-orb-3" />
        <div className="sl-grid-overlay" />

        <div className="sl-hero__content">
          <p className="sl-eyebrow">Our Services</p>
          <h1 className="sl-hero__title">
            <TypeAnimation
              sequence={['Supported', 800, 'Supported Living', 99999]}
              wrapper="span"
              speed={50}
              cursor={false}
            />
          </h1>
          <div className="sl-hero__divider" />
          <p className="sl-hero__sub">Independent living with the support you need, when you need it.</p>
        </div>

        <div className="sl-scroll-hint">
          <div className="sl-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="sl-section">
        <div className="sl-diagonal" />
        <div className="sl-inner">

          {/* Intro */}
          <div className="sl-intro sl-reveal">
            <p className="sl-section-label">Supported Living Services</p>
            <h2 className="sl-section-heading">What is Supported Living?</h2>
            <div className="sl-intro__body">
              <p>
                Supported Living is an <strong>independent living option</strong> for
                people who want to live in their own home, but still need some help
                with daily living. Support staff assist individuals in their home and
                in the community with things like banking, medical appointments, and
                cooking healthy meals.
              </p>
              <p>
                Supported Living is possible for a wide range of individuals with
                different support requirements, as long as the person has the desire
                to live more independently and make choices for themselves.
              </p>
              <p>
                Support services are typically provided during the week Monday to
                Friday between <strong>8:30 – 5:00 pm</strong>. The service is
                designed to be flexible and some individuals, based on individual
                need, may include support services after 5:00 pm and on weekends.
                Supports will be provided both at the OI program sites and at the
                individual's home as required.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="sl-highlights-wrap sl-reveal">
            <p className="sl-section-label">Programme Highlights</p>
            <h2 className="sl-section-heading">What We Offer</h2>
            <div className="sl-highlights">
              {highlights.map(({ icon, title, text }, i) => (
                <div
                  key={title}
                  className="sl-card sl-reveal"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="sl-card__icon">{icon}</div>
                  <h3 className="sl-card__title">{title}</h3>
                  <p className="sl-card__text">{text}</p>
                  <div className="sl-card__bar" />
                </div>
              ))}
            </div>
          </div>

          {/* CLBC note */}
          <div className="sl-note sl-reveal">
            <div className="sl-note__icon">ℹ️</div>
            <p className="sl-note__text">
              For all program areas (with the exception of Home Share &amp; Respite):
              if individuals are self-referred and choose to pay themselves, rates
              will be based on the per hour rate paid by{' '}
              <a href="https://www.communitylivingbc.ca" target="_blank" rel="noreferrer" className="sl-inline-link">
                CLBC
              </a>. All agency services are voluntary and participants may refuse
              service at any time.
            </p>
          </div>

          {/* CTA */}
          <div className="sl-cta sl-reveal">
            <h2 className="sl-cta__heading">Ready to Learn More?</h2>
            <p className="sl-cta__sub">
              Contact us to find out if Supported Living is the right fit — we're
              here to help you live the life you choose.
            </p>
            <div className="sl-cta__buttons">
              <Link to="/contact" className="sl-btn sl-btn--primary">
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