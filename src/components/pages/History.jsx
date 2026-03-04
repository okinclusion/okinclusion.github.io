import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
import '../styles.css';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';

const photoCards = [
  { src: 'https://okincbucket.s3.us-east-1.amazonaws.com/okinc-pic01.jpg', label: 'Community Inclusion', to: '/communityinclusion' },
  { src: 'https://okincbucket.s3.us-east-1.amazonaws.com/okinc-pic02.jpg',             label: 'Events',              to: '/news' },
  { src: 'https://okincbucket.s3.us-east-1.amazonaws.com/okinc-pic05.jpg',               label: 'News',                to: '/news' },
  { src: 'https://okincbucket.s3.us-east-1.amazonaws.com/okinc-pic06.jpg',      label: 'Mission + Vision',    to: '/missionvision' },
  { src: 'https://okincbucket.s3.us-east-1.amazonaws.com/okinc-pic07.jpg',         label: 'Employment',          to: '/employment' },
  { src: 'https://okincbucket.s3.us-east-1.amazonaws.com/okinc-pic08.jpg',          label: 'Resources',           to: '/resources' },
];

const milestones = [
  { year: '2013', text: 'Began services to adults with developmental disabilities in the South Okanagan.' },
  { year: '2018', text: 'Incorporated as a formal organisation, expanding programs and reach.' },
  { year: '2021', text: 'Achieved CARF accreditation — a mark of excellence in community services.' },
  { year: 'Today', text: 'Growing team of qualified staff and contractors delivering person-centred care across the region.' },
];

export default function History() {
  const bodyRef      = useRef(null);
  const timelineRef  = useRef(null);
  const cardsWrapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('hs-visible');
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.hs-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="hs-hero">
        <div className="hs-orb hs-orb-1" />
        <div className="hs-orb hs-orb-2" />
        <div className="hs-orb hs-orb-3" />
        <div className="hs-grid-overlay" />

        <div className="hs-hero__content">
          <p className="hs-eyebrow">Okanagan Inclusion</p>
          <h1 className="hs-hero__title">
            <TypeAnimation
              sequence={['About', 900, 'About Us', 99999]}
              wrapper="span"
              speed={45}
              cursor={false}
            />
          </h1>
          <div className="hs-hero__divider" />
          <p className="hs-hero__sub">Community. Care. Connection.</p>
        </div>

        <div className="hs-scroll-hint">
          <div className="hs-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── PHOTO CARDS ── */}
      <section className="hs-cards-section">
        <div className="hs-diagonal" />
        <div className="hs-cards-inner">
          <p className="hs-section-label hs-reveal">Explore</p>
          <h2 className="hs-section-heading hs-reveal">What We Do</h2>
          <div className="hs-cards-grid" ref={cardsWrapRef}>
            {photoCards.map(({ src, label, to }, i) => (
              <Link
                key={label}
                to={to}
                className="hs-card hs-reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="hs-card__img-wrap">
                  <img src={src} alt={label} className="hs-card__img" />
                  <div className="hs-card__overlay" />
                </div>
                <div className="hs-card__label">
                  <span>{label}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT BODY ── */}
      <section className="hs-about">
        <div className="hs-about__inner">

          <div className="hs-about__intro hs-reveal" ref={bodyRef}>
            <p className="hs-section-label">Our Story</p>
            <h2 className="hs-section-heading">Who We Are</h2>
            <p className="hs-about__text">
              Okanagan Inclusion provides Agency Coordinated Home Sharing, Respite, Employment
              and Community Inclusion programs to adults with developmental disabilities.
            </p>
            <p className="hs-about__text">
              We employ highly qualified staff and contractors to deliver our programs and services.
              We provide services mainly in Penticton but extend to Summerland, Okanagan Falls,
              Twin Lakes and Kelowna. Our services are provided by referral from{' '}
              <strong>Community Living British Columbia (CLBC)</strong>.
            </p>
            <p className="hs-about__text">
              It was developed as there was a need for more individualized, person centred services
              in the South Okanagan. OI has grown extensively since then, adding Shared Living,
              Respite as well as Employment to the already thriving Community Inclusion program.
            </p>
          </div>

          {/* ── TIMELINE ── */}
          <div className="hs-timeline" ref={timelineRef}>
            <p className="hs-section-label hs-reveal">Our Journey</p>
            <h2 className="hs-section-heading hs-reveal">Key Milestones</h2>
            <div className="hs-timeline__track">
              {milestones.map(({ year, text }, i) => (
                <div
                  key={year}
                  className="hs-milestone hs-reveal"
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  <div className="hs-milestone__year">{year}</div>
                  <div className="hs-milestone__dot" />
                  <div className="hs-milestone__text">{text}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}