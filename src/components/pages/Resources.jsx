import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
import '../styles.css';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';

const partners = [
  {
    name: 'Inclusion BC',
    description: 'Inclusion BC supports individuals with intellectual disabilities and their families across British Columbia.',
    href: 'https://inclusionbc.org',
    logo: 'images/inclusion-bc-logo.png', // update path if needed
  },
  {
    name: 'Community Living BC',
    description: 'CLBC is a Crown agency that funds and supports adults with developmental disabilities to live, work and participate in their communities.',
    href: 'https://www.communitylivingbc.ca',
    logo: 'images/clbc-logo.png', // update path if needed
  },
  {
    name: 'CARF International',
    description: 'CARF International is an independent, nonprofit accreditor of health and human services. Okanagan Inclusion is CARF accredited.',
    href: 'https://carf.org/carf-canada/',
    logo: 'images/carf-logo.png', // update path if needed
  },
];

const resourceLinks = [
  {
    category: 'Provincial Support',
    links: [
      { label: 'Inclusion BC', href: 'https://inclusionbc.org', desc: 'Resources and advocacy for individuals with intellectual disabilities in BC.' },
      { label: 'Community Living BC', href: 'https://www.communitylivingbc.ca', desc: 'Funding and support for adults with developmental disabilities.' },
    ],
  },
  {
    category: 'Accreditation',
    links: [
      { label: 'CARF Canada', href: 'https://carf.org/carf-canada/', desc: 'Learn about CARF accreditation standards for health and human services.' },
    ],
  },
];

export default function Resources() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('res-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.res-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="res-hero">
        <div className="res-orb res-orb-1" />
        <div className="res-orb res-orb-2" />
        <div className="res-orb res-orb-3" />
        <div className="res-grid-overlay" />

        <div className="res-hero__content">
          <p className="res-eyebrow">Okanagan Inclusion</p>
          <h1 className="res-hero__title">
            <TypeAnimation
              sequence={['Resources', 99999]}
              wrapper="span"
              speed={45}
              cursor={false}
            />
          </h1>
          <div className="res-hero__divider" />
          <p className="res-hero__sub">Helpful links and partner organizations supporting our community.</p>
        </div>

        <div className="res-scroll-hint">
          <div className="res-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="res-section">
        <div className="res-diagonal" />
        <div className="res-inner">

          {/* Partners */}
          <div className="res-partners res-reveal">
            <p className="res-section-label">Our Network</p>
            <h2 className="res-section-heading">Partners</h2>
            <div className="res-partners__grid">
              {partners.map(({ name, description, href, logo }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="res-partner-card"
                >
                  <div className="res-partner-card__logo-wrap">
                    <img
                      src={logo}
                      alt={`${name} logo`}
                      className="res-partner-card__logo"
                      onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                    <div className="res-partner-card__logo-fallback" style={{ display: 'none' }}>
                      {name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="res-partner-card__name">{name}</h3>
                  <p className="res-partner-card__desc">{description}</p>
                  <span className="res-partner-card__link">Visit website →</span>
                  <div className="res-partner-card__bar" />
                </a>
              ))}
            </div>
          </div>

          {/* Resource links */}
          <div className="res-links res-reveal">
            <p className="res-section-label">External Links</p>
            <h2 className="res-section-heading">Helpful Resources</h2>
            <div className="res-links__grid">
              {resourceLinks.map(({ category, links }) => (
                <div key={category} className="res-link-group">
                  <h3 className="res-link-group__heading">{category}</h3>
                  {links.map(({ label, href, desc }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="res-link-item">
                      <div className="res-link-item__left">
                        <span className="res-link-item__arrow">→</span>
                        <div>
                          <span className="res-link-item__label">{label}</span>
                          <p className="res-link-item__desc">{desc}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="res-cta res-reveal">
            <h2 className="res-cta__heading">Looking for More Information?</h2>
            <p className="res-cta__sub">
              Our team is happy to help connect you with the right resources and supports.
            </p>
            <div className="res-cta__buttons">
              <Link to="/contact" className="res-btn res-btn--primary">
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}