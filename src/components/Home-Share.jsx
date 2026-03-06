
import React, { useEffect } from "react";
import '../App.css';
import './styles.css';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';

const highlights = [
  { icon: '🏠', title: 'Flexible Living',      text: 'Homes may be owned, rented or leased by the provider or the individual receiving support.' },
  { icon: '🤝', title: 'Real Relationships',   text: 'Home Sharing builds natural social connections and meaningful relationships within the community.' },
  { icon: '⚖️', title: 'Balance & Independence', text: 'An ideal balance of support and independence — person-centred and evolving with individual needs.' },
  { icon: '🔒', title: 'Screened & Monitored', text: 'All providers complete a thorough application and screening process with ongoing monitoring.' },
  { icon: '📞', title: '24/7 Support',          text: 'Support services are provided 24 hours per day, 7 days per week with emergency on-call.' },
  { icon: '🌱', title: 'Path to Independence', text: 'For some, Home Share is a stepping stone to greater independence. For others, a lasting home.' },
];

export default function HomeShare() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('hs2-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.hs2-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="hs2-hero">
        <div className="hs2-orb hs2-orb-1" />
        <div className="hs2-orb hs2-orb-2" />
        <div className="hs2-orb hs2-orb-3" />
        <div className="hs2-grid-overlay" />

        <div className="hs2-hero__content">
          <p className="hs2-eyebrow">Our Services</p>
          <h1 className="hs2-hero__title">
            <TypeAnimation
              sequence={['Home', 800, 'Home Share', 99999]}
              wrapper="span"
              speed={50}
              cursor={false}
            />
          </h1>
          <div className="hs2-hero__divider" />
          <p className="hs2-hero__sub">Shared Living Services for adults with developmental disabilities.</p>
        </div>

        <div className="hs2-scroll-hint">
          <div className="hs2-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── WHAT IS HOME SHARE ── */}
      <section className="hs2-section">
        <div className="hs2-diagonal" />
        <div className="hs2-inner">

          {/* Intro */}
          <div className="hs2-intro hs2-reveal">
            <p className="hs2-section-label">Shared Living Services</p>
            <h2 className="hs2-section-heading">What is Home Share?</h2>
            <div className="hs2-intro__body">
              <p>
                <strong>Shared Living (Home Share)</strong> is a residential service which provides
                individuals with developmental disabilities the opportunity to choose a living
                arrangement specifically designed to meet their needs and lifestyle preferences.
              </p>
              <p>
                The individuals within the home share not only their living space, but also their
                lives. In some homes the members of the household spend significant amounts of time
                together and are actively involved in one another's daily activities. In other
                situations, the arrangement is characterised by more independent relationships.
              </p>
              <p>
                People are happiest when they feel valued and are a contributing member of their
                household. Home Sharing increases opportunities for people to establish natural
                relationships and social connections within their community.
              </p>
              <p>
                Individuals tend to choose this option because it provides an ideal balance of
                support and independence. The program is{' '}
                <a href="/missionvision" className="hs2-inline-link">person-centred</a>{' '}
                in that it allows individuals to select a Home Share provider and home environment
                that meet their unique goals and preferences. Support is flexible and evolves
                according to the changing needs of the individual.
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="hs2-highlights-wrap hs2-reveal">
            <p className="hs2-section-label">Programme Highlights</p>
            <h2 className="hs2-section-heading">What to Expect</h2>
            <div className="hs2-highlights">
              {highlights.map(({ icon, title, text }, i) => (
                <div
                  key={title}
                  className="hs2-highlight-card hs2-reveal"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="hs2-highlight-card__icon">{icon}</div>
                  <h3 className="hs2-highlight-card__title">{title}</h3>
                  <p className="hs2-highlight-card__text">{text}</p>
                  <div className="hs2-highlight-card__bar" />
                </div>
              ))}
            </div>
          </div>

          {/* Screening + CLBC note */}
          <div className="hs2-note hs2-reveal">
            <div className="hs2-note__icon">ℹ️</div>
            <p className="hs2-note__text">
              For all program areas (with the exception of Home Share &amp; Respite): if individuals
              are self-referred and choose to pay themselves, rates will be based on the per hour
              rate paid by{' '}
              <a href="https://www.communitylivingbc.ca" target="_blank" rel="noreferrer" className="hs2-inline-link">
                CLBC
              </a>. All agency services are voluntary and participants may refuse service at any time.
            </p>
          </div>

          {/* CTA */}
          <div className="hs2-cta hs2-reveal">
            <h2 className="hs2-cta__heading">Interested in Becoming a Provider?</h2>
            <p className="hs2-cta__sub">
              We're always looking for caring individuals who can offer a welcoming, stable home
              environment. Apply today to learn more about becoming a Home Share provider.
            </p>
            <div className="hs2-cta__buttons">
              <a href="/homeshare-apply" className="hs2-btn hs2-btn--primary">
                Apply to Be a Home Share Provider
              </a>
              <a href="/contact" className="hs2-btn hs2-btn--outline">
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}