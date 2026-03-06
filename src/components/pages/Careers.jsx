import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
import '../styles.css';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';

const requirements = [
  'First Aid Certificate',
  'Criminal Record Check',
  'Driving Record',
  'Dr. Note of Fitness for Work',
  'Valid Class 5 Driver\'s Licence',
  'Own Vehicle in Good Working Condition',
];

const perks = [
  { icon: '💰', title: 'Competitive Wages',   text: 'We offer competitive wages and benefits for all positions.' },
  { icon: '🎉', title: 'Fun Environment',      text: 'Work in an environment that is fun, inclusive, and active every day.' },
  { icon: '🤝', title: 'Make a Difference',   text: 'Directly support adults with developmental disabilities in the community.' },
  { icon: '📚', title: 'Training Provided',   text: 'Willing to train the right people — experience is an asset, not required.' },
];

export default function Careers() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('car-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.car-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="car-hero">
        <div className="car-orb car-orb-1" />
        <div className="car-orb car-orb-2" />
        <div className="car-orb car-orb-3" />
        <div className="car-grid-overlay" />

        <div className="car-hero__content">
          <p className="car-eyebrow">Join Our Team</p>
          <h1 className="car-hero__title">
            <TypeAnimation
              sequence={['Employment', 99999]}
              wrapper="span"
              speed={45}
              cursor={false}
            />
          </h1>
          <div className="car-hero__divider" />
          <p className="car-hero__sub">Work with us — make a real difference every day.</p>
        </div>

        <div className="car-scroll-hint">
          <div className="car-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="car-section">
        <div className="car-diagonal" />
        <div className="car-inner">

          {/* Intro */}
          <div className="car-intro car-reveal">
            <p className="car-section-label">Work With Us</p>
            <h2 className="car-section-heading">We're Hiring</h2>
            <p className="car-intro__text">
              Okanagan Inclusion is hiring casual and permanent part-time{' '}
              <strong>Community Inclusion Workers</strong> to work with adults with
              developmental disabilities. If you would like to work in an environment
              that is fun, inclusive and active — this is the place for you!
            </p>
            <p className="car-intro__text">
              Preference is given to applicants with certification in the human
              services field and/or experience working with people with developmental
              disabilities, but we are willing to train the right people.
            </p>
            <a
              href="https://www.communitylivingbc.ca/careers"
              target="_blank"
              rel="noreferrer"
              className="car-external-link"
            >
              Click for more information — Careers In Community Living →
            </a>
          </div>

          {/* Perks grid */}
          <div className="car-perks-wrap car-reveal">
            <p className="car-section-label">Why Work Here</p>
            <h2 className="car-section-heading">What We Offer</h2>
            <div className="car-perks">
              {perks.map(({ icon, title, text }, i) => (
                <div
                  key={title}
                  className="car-perk-card car-reveal"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="car-perk-card__icon">{icon}</div>
                  <h3 className="car-perk-card__title">{title}</h3>
                  <p className="car-perk-card__text">{text}</p>
                  <div className="car-perk-card__bar" />
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="car-reqs car-reveal">
            <p className="car-section-label">Before You Apply</p>
            <h2 className="car-section-heading">Requirements</h2>
            <div className="car-reqs__grid">
              {requirements.map((req, i) => (
                <div key={i} className="car-req-item">
                  <div className="car-req-item__dot" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="car-cta car-reveal">
            <h2 className="car-cta__heading">Ready to Join the Team?</h2>
            <p className="car-cta__sub">
              Submit your resume and we'll be in touch. We'd love to hear from you.
            </p>
            <div className="car-cta__buttons">
              <Link to="/employment-apply" className="car-btn car-btn--primary">
                Apply Now
              </Link>
              <Link to="/contact" className="car-btn car-btn--outline">
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