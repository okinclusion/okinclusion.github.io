import React, { useEffect } from "react";
import '../../App.css';
import '../styles.css';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';

const staffTools = [
  {
    name: 'ShareVision',
    description: 'Access client records, schedules, and documentation through the ShareVision portal.',
    href: 'https://SHAREVISION_URL_HERE', // ← update this
    logo: 'images/sharevision-logo.png',  // ← update path if needed
    fallbackInitial: 'SV',
    fallbackColor: '#5b2d8e',
  },
  {
    name: 'Relias',
    description: 'Complete your required training and track certifications through the Relias learning management system.',
    href: 'https://login.reliaslearning.com/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Drlms-legacy%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520offline_access%2520impersonator%2520saml%2520usersapi%2520assessmentsapi%2520learningapi%2520identityapi%2520learning-reporting-api%2520evaluationsapi%2520notification-delivery-service-api%2520compliance-policermanager-service-api%2520workflow-service-api%2520compliance-incident-service-api%26state%3DOpenIdConnect.AuthenticationProperties%253DXqxW5FYjk9jaxegFkXZWvJsU4Dr9nfbRVBmhxPExWgOu2dvJknp04z2AwygYWE6T741CmUhaHH7_t2Zor9OEq8jLzw11cjHKuMPaxj9Gow4nfTz4RfNKvww-tMJgOq3cLIhGPla16S7o1RGBJX6-Aw%26response_mode%3Dform_post%26nonce%3D639084092139885418.NDhiZjJjMGYtMzljMS00MzhjLTgwZDEtZTk5MjlhMDU1ODg3ZDFkMzUxZTQtYzAxNC00Y2YyLWIzMzAtYTMzOTIwYjA4NjI4%26redirect_uri%3Dhttps%253A%252F%252Ftraining.reliaslearning.com%26post_logout_redirect_uri%3Dhttps%253A%252F%252Ftraining.reliaslearning.com%26x-client-SKU%3DID_NET472%26x-client-ver%3D8.1.2.0',
    logo: 'images/relias-logo.png',       // ← update path if needed
    fallbackInitial: 'R',
    fallbackColor: '#2d6a4f',
  },
];

export default function Staff() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('stf-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.stf-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="stf-hero">
        <div className="stf-orb stf-orb-1" />
        <div className="stf-orb stf-orb-2" />
        <div className="stf-orb stf-orb-3" />
        <div className="stf-grid-overlay" />

        <div className="stf-hero__content">
          <p className="stf-eyebrow">Internal</p>
          <h1 className="stf-hero__title">
            <TypeAnimation
              sequence={['Staff', 800, 'Staff Resources', 99999]}
              wrapper="span"
              speed={50}
              cursor={false}
            />
          </h1>
          <div className="stf-hero__divider" />
          <p className="stf-hero__sub">Quick access to the tools and systems you use every day.</p>
        </div>

        <div className="stf-scroll-hint">
          <div className="stf-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="stf-section">
        <div className="stf-diagonal" />
        <div className="stf-inner">

          <div className="stf-tools stf-reveal">
            <p className="stf-section-label">Staff Portals</p>
            <h2 className="stf-section-heading">Click to Access</h2>
            <p className="stf-hint">Click any card below to open the login page in a new tab.</p>

            <div className="stf-tools__grid">
              {staffTools.map(({ name, description, href, logo, fallbackInitial, fallbackColor }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="stf-tool-card"
                >
                  <div className="stf-tool-card__logo-wrap">
                    <img
                      src={logo}
                      alt={`${name} logo`}
                      className="stf-tool-card__logo"
                      onError={e => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      className="stf-tool-card__logo-fallback"
                      style={{ background: fallbackColor, display: 'none' }}
                    >
                      {fallbackInitial}
                    </div>
                  </div>

                  <div className="stf-tool-card__body">
                    <h3 className="stf-tool-card__name">{name}</h3>
                    <p className="stf-tool-card__desc">{description}</p>
                  </div>

                  <div className="stf-tool-card__footer">
                    <span className="stf-tool-card__link">Open portal →</span>
                    <div className="stf-tool-card__bar" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="stf-note stf-reveal">
            <div className="stf-note__icon">🔒</div>
            <p className="stf-note__text">
              These portals require your individual staff login credentials. If you're having
              trouble accessing either system, please contact your supervisor or the main office
              at <a href="mailto:pc2@okinclusion.ca" className="stf-inline-link">pc2@okinclusion.ca</a>.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}