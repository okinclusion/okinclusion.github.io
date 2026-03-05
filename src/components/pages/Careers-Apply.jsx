import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../styles.css';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';

const EMAILJS_SERVICE_ID  = 'service_0ohyycb';
const EMAILJS_TEMPLATE_ID = 'template_ijg3p4h';
const EMAILJS_PUBLIC_KEY  = 'TInXkn9D4lftKds5g';

const INITIAL = { name: '', email: '', phone: '', message: '' };

export default function CareersApply() {
  const formRef               = useRef(null);
  const [fields, setFields]   = useState(INITIAL);
  const [file, setFile]       = useState(null);
  const [status, setStatus]   = useState('idle');
  const [touched, setTouched] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = e =>
    setTouched(prev => ({ ...prev, [e.target.name]: true }));

  const handleFile = e => {
    setFile(e.target.files[0] || null);
    setTouched(prev => ({ ...prev, file: true }));
  };

  const isValid =
    fields.name.trim() &&
    fields.email.trim() &&
    fields.phone.trim() &&
    file !== null;

  const handleSubmit = async e => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, file: true });
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
  const fileError  = touched.file && !file;

  return (
    <>
      {/* ── HERO ── */}
      <section className="cap-hero">
        <div className="cap-orb cap-orb-1" />
        <div className="cap-orb cap-orb-2" />
        <div className="cap-orb cap-orb-3" />
        <div className="cap-grid-overlay" />

        <div className="cap-hero__content">
          <p className="cap-eyebrow">Join Our Team</p>
          <h1 className="cap-hero__title">
            <TypeAnimation
              sequence={['Work With', 800, 'Work With Us', 99999]}
              wrapper="span"
              speed={55}
              cursor={false}
            />
          </h1>
          <div className="cap-hero__divider" />
          <p className="cap-hero__sub">Send us your resume and we'll be in touch.</p>
        </div>

        <div className="cap-scroll-hint">
          <div className="cap-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section className="cap-section">
        <div className="cap-diagonal" />
        <div className="cap-inner">

          {/* Left info */}
          <div className="cap-info">
            <p className="cap-section-label">Apply Today</p>
            <h2 className="cap-section-heading">Send Us Your Resume</h2>
            <p className="cap-info__text">
              We're looking for caring, motivated individuals to join our team.
              Fill out the form and attach your resume — we'll be in touch to
              discuss next steps.
            </p>

            <div className="cap-steps">
              {[
                { n: '01', label: 'Submit your resume' },
                { n: '02', label: 'We review & reach out' },
                { n: '03', label: 'Interview & reference check' },
                { n: '04', label: 'Welcome to the team!' },
              ].map(({ n, label }) => (
                <div key={n} className="cap-step">
                  <span className="cap-step__num">{n}</span>
                  <span className="cap-step__label">{label}</span>
                </div>
              ))}
            </div>

            <div className="cap-contact-note">
              <span>Questions?</span>
              <a href="mailto:okinclusion@shaw.ca">okinclusion@shaw.ca</a>
            </div>

            <Link to="/employment" className="cap-back-link">
              ← Back to Employment
            </Link>
          </div>

          {/* Form */}
          <div className="cap-form-wrap">
            {status === 'success' ? (
              <div className="cap-success">
                <div className="cap-success__icon">✓</div>
                <h3 className="cap-success__heading">Application Sent!</h3>
                <p className="cap-success__text">
                  Thanks for your interest in joining our team. We'll be in
                  touch with you shortly.
                </p>
                <button
                  className="cap-btn cap-btn--primary"
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
                className="cap-form"
              >
                {/* Name */}
                <div className={`cap-field${fieldError('name') ? ' cap-field--error' : ''}`}>
                  <label className="cap-label" htmlFor="name">
                    Full Name <span>*</span>
                  </label>
                  <input
                    id="name" name="name" type="text"
                    className="cap-input"
                    placeholder="Jane Smith"
                    value={fields.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {fieldError('name') && (
                    <p className="cap-field__error">Name is required</p>
                  )}
                </div>

                {/* Email */}
                <div className={`cap-field${fieldError('email') ? ' cap-field--error' : ''}`}>
                  <label className="cap-label" htmlFor="email">
                    Email Address <span>*</span>
                  </label>
                  <input
                    id="email" name="email" type="email"
                    className="cap-input"
                    placeholder="jane@email.com"
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {fieldError('email') && (
                    <p className="cap-field__error">Email is required</p>
                  )}
                </div>

                {/* Phone */}
                <div className={`cap-field${fieldError('phone') ? ' cap-field--error' : ''}`}>
                  <label className="cap-label" htmlFor="phone">
                    Phone Number <span>*</span>
                  </label>
                  <input
                    id="phone" name="phone" type="tel"
                    className="cap-input"
                    placeholder="(250) 000-0000"
                    value={fields.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {fieldError('phone') && (
                    <p className="cap-field__error">Phone is required</p>
                  )}
                </div>

                {/* Cover letter */}
                <div className="cap-field">
                  <label className="cap-label" htmlFor="message">
                    Cover Letter / Message{' '}
                    <span className="cap-label__optional">(optional)</span>
                  </label>
                  <textarea
                    id="message" name="message"
                    className="cap-input cap-textarea"
                    placeholder="Tell us a bit about yourself and why you'd like to work with us..."
                    rows={5}
                    value={fields.message}
                    onChange={handleChange}
                  />
                </div>

                {/* File — required */}
                <div className={`cap-field${fileError ? ' cap-field--error' : ''}`}>
                  <label className="cap-label" htmlFor="file">
                    Attach Resume <span>*</span>
                  </label>
                  <label className={`cap-file-label${fileError ? ' cap-file-label--error' : ''}`} htmlFor="file">
                    <span className="cap-file-label__icon">📎</span>
                    <span className="cap-file-label__text">
                      {file ? file.name : 'Choose your resume to attach'}
                    </span>
                    <input
                      id="file" name="file" type="file"
                      className="cap-file-input"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFile}
                    />
                  </label>
                  {fileError && (
                    <p className="cap-field__error">Please attach your resume</p>
                  )}
                  <p className="cap-field__hint">PDF or Word — max 5MB</p>
                </div>

                {status === 'error' && (
                  <div className="cap-error-banner">
                    Something went wrong. Please try again or email us at{' '}
                    <a href="mailto:okinclusion@shaw.ca">okinclusion@shaw.ca</a>.
                  </div>
                )}

                <button
                  type="submit"
                  className={`cap-btn cap-btn--primary cap-btn--full${
                    status === 'sending' ? ' cap-btn--loading' : ''
                  }`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <span className="cap-spinner" />
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