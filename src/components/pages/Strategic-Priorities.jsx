import React, { useEffect } from "react";
import '../../App.css';
import '../styles.css';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';

const priorities = [
  { icon: '📣', text: 'Find ways to be more recognized in the community.' },
  { icon: '🏠', text: 'Research ways to recruit home share caregivers.' },
  { icon: '🎓', text: 'Develop orientation and training for new potentially inexperienced staff.' },
  { icon: '🚌', text: 'Increase transportation options.' },
  { icon: '💻', text: 'Train all staff with ShareVision.' },
  { icon: '🤝', text: 'Support a non-profit organization.' },
  { icon: '⭐', text: 'Maintain and exceed our standard of care — be the "Go To" organization in our area.' },
];

export default function StrategicPriorities() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('sp-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.sp-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-orb sp-orb-1" />
        <div className="sp-orb sp-orb-2" />
        <div className="sp-orb sp-orb-3" />
        <div className="sp-grid-overlay" />

        <div className="sp-hero__content">
          <p className="sp-eyebrow">Okanagan Inclusion</p>
          <h1 className="sp-hero__title">
            <TypeAnimation
              sequence={['Strategic', 900, 'Strategic Priorities', 99999]}
              wrapper="span"
              speed={45}
              cursor={false}
            />
          </h1>
          <div className="sp-hero__divider" />
          <p className="sp-hero__sub">Our roadmap for growth and impact.</p>
        </div>

        <div className="sp-scroll-hint">
          <div className="sp-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── PRIORITIES ── */}
      <section className="sp-section">
        <div className="sp-diagonal" />
        <div className="sp-inner">
          <p className="sp-section-label sp-reveal">Our Focus Areas</p>
          <h2 className="sp-section-heading sp-reveal">Where We're Headed</h2>

          <div className="sp-list">
            {priorities.map(({ icon, text }, i) => (
              <div
                key={i}
                className="sp-item sp-reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="sp-item__left">
                  <span className="sp-item__number">{String(i + 1).padStart(2, '0')}</span>
                  <div className="sp-item__icon">{icon}</div>
                </div>
                <p className="sp-item__text">{text}</p>
                <div className="sp-item__bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}