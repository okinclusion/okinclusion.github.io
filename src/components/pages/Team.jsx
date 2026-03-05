import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
import '../styles.css';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';

const team = [
  {
    name:  'Leanne Williams',
    role:  'CEO',
    email: 'ceo@okinclusion.ca',
    src:   'images/comingsoon.png',
  },
  {
    name:  'Michelle Fritsche',
    role:  'Director of Share Living',
    email: 'michelleb.okinclusion@shaw.ca',
    src:   'images/comingsoon.png',
  },
  {
    name:  'Amy Temple',
    role:  'Program Coordinator',
    email: 'pc2@okinclusion.ca',
    src:   'images/StaffPhotos/AmyTemple.jpeg',
  },
  {
    name:  'Michelle Young',
    role:  'Program Coordinator',
    email: 'homeshare@okinclusion.ca',
    src:   'images/StaffPhotos/MichelleYoung.jpeg',
  },
  {
    name:  'Kobe Hutchinson',
    role:  'Assistant Program Coordinator',
    email: 'asstpcpen@okinclusion.ca',
    src:   'images/StaffPhotos/KobeHutchinson.jpg',
  },
  {
    name:  'Elizabeth Roth',
    role:  'Assistant Program Coordinator',
    email: 'kcommunityoptions@okinclusion.ca',
    src:   'images/StaffPhotos/BethRoth.JPG',
  },
  {
    name:  'Andrea Scarfo',
    role:  'Employment Specialist / Job Developer',
    email: 's.emp@okinclusion.ca',
    src:   'images/comingsoon.png',
  },
  {
    name:  'Sierra Williams',
    role:  'IT',
    email: 'it@okinclusion.ca',
    src:   'images/StaffPhotos/SierraWilliams.jpg',
  },
];

export default function Team() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('tm-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.tm-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="tm-hero">
        <div className="tm-orb tm-orb-1" />
        <div className="tm-orb tm-orb-2" />
        <div className="tm-orb tm-orb-3" />
        <div className="tm-grid-overlay" />

        <div className="tm-hero__content">
          <p className="tm-eyebrow">Okanagan Inclusion</p>
          <h1 className="tm-hero__title">
            <TypeAnimation
              sequence={['Meet', 800, 'Meet the', 800, 'Meet the Team', 99999]}
              wrapper="span"
              speed={50}
              cursor={false}
            />
          </h1>
          <div className="tm-hero__divider" />
          <p className="tm-hero__sub">The people behind the mission.</p>
        </div>

        <div className="tm-scroll-hint">
          <div className="tm-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="tm-section">
        <div className="tm-diagonal" />
        <div className="tm-inner">
          <p className="tm-section-label tm-reveal">Our People</p>
          <h2 className="tm-section-heading tm-reveal">Leadership Team</h2>

          <div className="tm-grid">
            {team.map(({ name, role, email, src }, i) => (
              <div
                key={email}
                className="tm-card tm-reveal"
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                {/* photo */}
                <div className="tm-card__photo-wrap">
                  <img src={src} alt={name} className="tm-card__photo" />
                  <div className="tm-card__photo-overlay" />
                  <span className="tm-card__role-badge">{role}</span>
                </div>

                {/* info */}
                <div className="tm-card__body">
                  <h3 className="tm-card__name">{name}</h3>
                  <a
                    href={`mailto:${email}`}
                    className="tm-card__email"
                  >
                    {email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}