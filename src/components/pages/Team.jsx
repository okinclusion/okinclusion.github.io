import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
import '../styles.css';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';
import leanneImg   from '../../images/StaffPhotos/LeanneWilliams.jpeg';
import michelleF   from '../../images/StaffPhotos/MichelleFritsche.jpg';
import amyImg      from '../../images/StaffPhotos/AmyTemple.jpeg';
import michelleY   from '../../images/StaffPhotos/MichelleYoung.jpeg';
import kobeImg     from '../../images/StaffPhotos/KobeHutchinson.jpg';
import bethImg     from '../../images/StaffPhotos/BethRoth.JPG';
import sierraImg   from '../../images/StaffPhotos/SierraWilliams.jpg';
import comingSoon  from '../../images/comingsoon.png';

const team = [
  {
    name:  'Leanne Williams',
    role:  'CEO',
    email: 'ceo@okinclusion.ca',
    src:   leanneImg,
  },
  {
    name:  'Michelle Fritsche',
    role:  'Director of Share Living',
    email: 'michelleb.okinclusion@shaw.ca',
    src:   michelleF,
  },
  {
    name:  'Amy Temple',
    role:  'Program Coordinator',
    email: 'pc2@okinclusion.ca',
    src:   amyImg,
  },
  {
    name:  'Michelle Young',
    role:  'Program Coordinator',
    email: 'homeshare@okinclusion.ca',
    src:   michelleY,
  },
  {
    name:  'Kobe Hutchinson',
    role:  'Assistant Program Coordinator',
    email: 'asstpcpen@okinclusion.ca',
    src:   kobeImg,
  },
  {
    name:  'Elizabeth Roth',
    role:  'Assistant Program Coordinator',
    email: 'kcommunityoptions@okinclusion.ca',
    src:   bethImg,
  },
  {
    name:  'Andrea Scarfo',
    role:  'Employment Specialist / Job Developer',
    email: 's.emp@okinclusion.ca',
    src:   comingSoon,
  },
  {
    name:  'Sierra Williams',
    role:  'IT',
    email: 'it@okinclusion.ca',
    src:   sierraImg,
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