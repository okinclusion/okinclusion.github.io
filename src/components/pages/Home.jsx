import React, { useEffect, useRef } from "react";
import '../../App.css';
import '../Item.css';
import '../styles.css';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';
import recruitingImg from '../../images/Caregiver.png';

export default function Home() {
  const servicesRef   = useRef(null);
  const recruitRef    = useRef(null);
  const valuesRef     = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('hm-visible');
      }),
      { threshold: 0.15 }
    );

    // observe all .hm-reveal elements
    document.querySelectorAll('.hm-reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: '🏠', tag: 'Home Sharing',        text: 'Agency Coordinated Home Sharing connects adults with caring providers in a welcoming, stable home environment.' },
    { icon: '🤝', tag: 'Respite',              text: 'Planned short-term relief for caregivers while ensuring quality care and meaningful experiences for individuals.' },
    { icon: '💼', tag: 'Employment',           text: 'Helping adults find and maintain meaningful employment through personalized job development and coaching.' },
    { icon: '🌿', tag: 'Community Inclusion',  text: 'Supporting full, active participation in community activities, recreation, and social life.' },
  ];

  const values = ['Inclusion','Acceptance','Dignity','Community','Empowerment','Belonging','Independence'];

  const caregiverDuties = [
    'Medication management',
    'Health care support',
    'Social, vocational & recreational activities',
    'Accessing the community & transportation',
    'Personal care & other needs as required',
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="hm-hero">
        <div className="hm-orb hm-orb-1" />
        <div className="hm-orb hm-orb-2" />
        <div className="hm-orb hm-orb-3" />
        <div className="hm-grid-overlay" />

        <div className="hm-hero__content">
          <p className="hm-eyebrow">Okanagan Inclusion</p>

          <h1 className="hm-hero__title">
            <TypeAnimation
              sequence={[
                'Supporting Adults to',        800,
                'Supporting Adults to Live.',   800,
                'Supporting Adults to Belong.', 800,
                'Supporting Adults to Thrive.', 99999,
              ]}
              wrapper="span"
              speed={50}
              cursor={false}
            />
          </h1>

          <div className="hm-hero__divider" />

          <p className="hm-hero__sub">
            We provide Agency Coordinated Home Sharing, Respite, Employment and
            Community Inclusion programs to adults with developmental disabilities
            across the Okanagan.
          </p>

          <div className="hm-hero__buttons">
            <a href="/team" className="hm-btn hm-btn--primary">Meet the Team</a>
            <a href="/contact" className="hm-btn hm-btn--outline">Contact Us</a>
          </div>
        </div>

        <div className="hm-scroll-hint">
          <div className="hm-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="hm-services">
        <div className="hm-diagonal" />
        <div className="hm-services__inner">
          <p className="hm-section-label hm-reveal">What We Offer</p>
          <h2 className="hm-section-heading hm-reveal">Our Programs &amp; Services</h2>

          <div className="hm-services__grid">
            {services.map((s, i) => (
              <div
                key={s.tag}
                className="hm-service-card hm-reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="hm-service-card__icon">{s.icon}</div>
                <h3 className="hm-service-card__title">{s.tag}</h3>
                <p className="hm-service-card__text">{s.text}</p>
                <div className="hm-service-card__bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECRUITING CAREGIVERS ── */}
      <section className="hm-recruiting">
        <div className="hm-recruiting__inner">

          <div className="hm-recruiting__text hm-reveal">
            <h2 className="hm-recruiting__title">
              Recruiting<br />
              <strong>Caregivers</strong>
            </h2>
            <p className="hm-recruiting__body">
              Okanagan Inclusion is recruiting contracted Home Share Providers who
              can offer a welcoming, stable home environment to an adult with a
              developmental disability. While experience is an asset, we welcome
              applicants willing to learn and grow.
            </p>

            <ul className="hm-duty-list">
              {caregiverDuties.map(d => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <p className="hm-recruiting__footnote">
              A complete screening process is required prior to approval, including
              a criminal record check, driver's abstract, application package, home
              study, and references. Compensation varies depending on individual
              support needs.
            </p>

            <div className="hm-recruiting__actions">
              <a href="mailto:homeshare@okinclusion.ca" className="hm-btn hm-btn--primary">
                Apply Now
              </a>
              <span className="hm-recruiting__email">
                or email{' '}
                <a href="mailto:homeshare@okinclusion.ca">homeshare@okinclusion.ca</a>
              </span>
            </div>
          </div>

          {/* ── swap this div for your imported image ── */}
          <div className="hm-recruiting__image hm-reveal" style={{ transitionDelay: '0.2s' }}>
            <img src={recruitingImg} alt="Recruiting Caregivers" />
          </div>

        </div>
      </section>

      {/* ── VALUES STRIP ── */}
      <section className="hm-values">
        <div className="hm-reveal" ref={valuesRef}>
          <p className="hm-values__label">What We Stand For</p>
          <div className="hm-pills">
            {values.map(v => (
              <span key={v} className="hm-pill">{v}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className="hm-contact-strip">
        <div className="hm-reveal">
          <h2 className="hm-contact-strip__heading">Ready to Make a Difference?</h2>
          <p className="hm-contact-strip__sub">Reach out — we'd love to hear from you.</p>
          <a href="/contact" className="hm-btn hm-btn--primary">Get In Touch</a>
        </div>
      </section>

      <Footer />
    </>
  );
}