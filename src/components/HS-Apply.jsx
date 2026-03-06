import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import '../App.css';
import './styles.css';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';

const EMAILJS_SERVICE_ID  = 'service_0ohyycb';
const EMAILJS_TEMPLATE_ID = 'template_0v7u4r8';
const EMAILJS_PUBLIC_KEY  = 'TInXkn9D4lftKds5g';

const INITIAL = { name: '', email: '', phone: '' };

export default function HomeShareApplication() {
  const formRef               = useRef(null);
  const [fields, setFields]   = useState(INITIAL);
  const [file, setFile]       = useState(null);
  const [status, setStatus]   = useState('idle'); // idle | sending | success | error
  const [touched, setTouched] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = e =>
    setTouched(prev => ({ ...prev, [e.target.name]: true }));

  const handleFile = e => setFile(e.target.files[0] || null);

  const isValid =
    fields.name.trim() && fields.email.trim() && fields.phone.trim();

  const handleSubmit = async e => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true });
    if (!isValid) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFields(INITIAL);
      setFile(null);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const fieldError = name => touched[name] && !fields[name].trim();

  return (
    <>
      {/* ── HERO ── */}
      <section className="hsa-hero">
        <div className="hsa-orb hsa-orb-1" />
        <div className="hsa-orb hsa-orb-2" />
        <div className="hsa-orb hsa-orb-3" />
        <div className="hsa-grid-overlay" />

        <div className="hsa-hero__content">
          <p className="hsa-eyebrow">Our Services</p>
          <h1 className="hsa-hero__title">
            <TypeAnimation
              sequence={['Home Share', 800, 'Home Share Application', 99999]}
              wrapper="span"
              speed={55}
              cursor={false}
            />
          </h1>
          <div className="hsa-hero__divider" />
          <p className="hsa-hero__sub">
            Take the first step toward becoming a Home Share provider.
          </p>
        </div>

        <div className="hsa-scroll-hint">
          <div className="hsa-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section className="hsa-section">
        <div className="hsa-diagonal" />
        <div className="hsa-inner">

          {/* Left: info panel */}
          <div className="hsa-info">
            <p className="hsa-section-label">Apply Today</p>
            <h2 className="hsa-section-heading">Send Us Your Information</h2>
            <p className="hsa-info__text">
              Fill out the form and a member of our team will be in touch to
              discuss the next steps. All applications are reviewed carefully
              and treated with full confidentiality.
            </p>

            <div className="hsa-steps">
              {[
                { n: '01', label: 'Submit your application' },
                { n: '02', label: 'We review & reach out' },
                { n: '03', label: 'Screening & home study' },
                { n: '04', label: 'Approval & onboarding' },
              ].map(({ n, label }) => (
                <div key={n} className="hsa-step">
                  <span className="hsa-step__num">{n}</span>
                  <span className="hsa-step__label">{label}</span>
                </div>
              ))}
            </div>

            <div className="hsa-contact-note">
              <span>Questions?</span>
              <a href="mailto:homeshare@okinclusion.ca">
                homeshare@okinclusion.ca
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="hsa-form-wrap">
            {status === 'success' ? (
              <div className="hsa-success">
                <div className="hsa-success__icon">✓</div>
                <h3 className="hsa-success__heading">Application Sent!</h3>
                <p className="hsa-success__text">
                  Thank you for your interest. We'll be in touch with you shortly.
                </p>
                <button
                  className="hsa-btn hsa-btn--primary"
                  onClick={() => setStatus('idle')}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="hsa-form"
              >
                {/* Name */}
                <div className={`hsa-field${fieldError('name') ? ' hsa-field--error' : ''}`}>
                  <label className="hsa-label" htmlFor="name">
                    Full Name <span>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="hsa-input"
                    placeholder="Jane Smith"
                    value={fields.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {fieldError('name') && (
                    <p className="hsa-field__error">Name is required</p>
                  )}
                </div>

                {/* Email */}
                <div className={`hsa-field${fieldError('email') ? ' hsa-field--error' : ''}`}>
                  <label className="hsa-label" htmlFor="email">
                    Email Address <span>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="hsa-input"
                    placeholder="jane@email.com"
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {fieldError('email') && (
                    <p className="hsa-field__error">Email is required</p>
                  )}
                </div>

                {/* Phone */}
                <div className={`hsa-field${fieldError('phone') ? ' hsa-field--error' : ''}`}>
                  <label className="hsa-label" htmlFor="phone">
                    Phone Number <span>*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="hsa-input"
                    placeholder="(250) 000-0000"
                    value={fields.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {fieldError('phone') && (
                    <p className="hsa-field__error">Phone is required</p>
                  )}
                </div>

                {/* File upload */}
                <div className="hsa-field">
                  <label className="hsa-label" htmlFor="file">
                    Attach a File{' '}
                    <span className="hsa-label__optional">(optional)</span>
                  </label>
                  <label className="hsa-file-label" htmlFor="file">
                    <span className="hsa-file-label__icon">📎</span>
                    <span className="hsa-file-label__text">
                      {file ? file.name : 'Choose a file to attach'}
                    </span>
                    <input
                      id="file"
                      name="file"
                      type="file"
                      className="hsa-file-input"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFile}
                    />
                  </label>
                  <p className="hsa-field__hint">PDF, Word, or image — max 5MB</p>
                </div>

                {/* Error banner */}
                {status === 'error' && (
                  <div className="hsa-error-banner">
                    Something went wrong. Please try again or email us directly at{' '}
                    <a href="mailto:homeshare@okinclusion.ca">
                      homeshare@okinclusion.ca
                    </a>.
                  </div>
                )}

                <button
                  type="submit"
                  className={`hsa-btn hsa-btn--primary hsa-btn--full${
                    status === 'sending' ? ' hsa-btn--loading' : ''
                  }`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <span className="hsa-spinner" />
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}