import React, { useEffect, useRef } from "react";
import '../../App.css';
import '../Item.css';
import '../styles.css';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';

export default function Mission() {
  const missionRef = useRef(null);
  const visionRef  = useRef(null);
  const valuesRef  = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('mv-visible');
      }),
      { threshold: 0.2 }
    );
    [missionRef, visionRef, valuesRef].forEach(r => {
      if (r.current) observer.observe(r.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="mv-hero">
        <div className="mv-orb mv-orb-1" />
        <div className="mv-orb mv-orb-2" />
        <div className="mv-orb mv-orb-3" />
        <div className="mv-grid-overlay" />

        <div className="mv-hero__content">
          <p className="mv-eyebrow">Okanagan Inclusion</p>

          <h1 className="mv-hero__title">
            <TypeAnimation
              sequence={['Mission + Vision', 99999]}
              wrapper="span"
              speed={40}
              cursor={false}
            />
          </h1>

          <div className="mv-hero__divider" />
          <p className="mv-hero__sub">Inclusion. Acceptance. Community.</p>
        </div>

        <div className="mv-scroll-hint">
          <div className="mv-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      <section className="mv-content">
        <div className="mv-diagonal" />
        <div className="mv-cards-grid">

          <div className="mv-card mv-reveal" ref={missionRef}>
            <div className="mv-card__icon">🌱</div>
            <p className="mv-card__tag">Our Mission</p>
            <p className="mv-card__text">
              We support adults with developmental disabilities to participate
              meaningfully in all aspects of community life.
            </p>
            <div className="mv-card__bar" />
          </div>

          <div className="mv-card mv-reveal" ref={visionRef} style={{ transitionDelay: '0.2s' }}>
            <div className="mv-card__icon">✦</div>
            <p className="mv-card__tag">Our Vision</p>
            <p className="mv-card__text">
              Okanagan Inclusion envisions a community in which all individuals
              are included, accepted and valued.
            </p>
            <div className="mv-card__bar" />
          </div>

        </div>
      </section>


      <section className="mv-values">
        <div className="mv-reveal" ref={valuesRef}>
          <p className="mv-values__label">What We Stand For</p>
          <div className="mv-pills">
            {['Inclusion','Acceptance','Dignity','Community','Empowerment','Belonging','Independence'].map(v => (
              <span key={v} className="mv-pill">{v}</span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
