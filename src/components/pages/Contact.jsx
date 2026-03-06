import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import '../../App.css';
import '../styles.css';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';

const EMAILJS_SERVICE_ID  = 'service_0ohyycb';
const EMAILJS_TEMPLATE_ID = 'YOUR_CONTACT_TEMPLATE_ID'; // ← update this
const EMAILJS_PUBLIC_KEY  = 'TInXkn9D4lftKds5g';

const INITIAL = { name: '', email: '', message: '' };

const contactInfo = [
  { icon: '📍', label: 'Main Office', value: '527 Main Street, Penticton, BC' },
  { icon: '📞', label: 'Phone',       value: '(236) 422-0055',  href: 'tel:+12364220055' },
  { icon: '📠', label: 'Fax',         value: '(236) 422-0056' },
  { icon: '✉️', label: 'Email',       value: 'pc2@okinclusion.ca', href: 'mailto:pc2@okinclusion.ca' },
];

export default function Contact() {
  const formRef               = useRef(null);
  const [fields, setFields]   = useState(INITIAL);
  const [status, setStatus]   = useState('idle');
  const [touched, setTouched] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = e =>
    setTouched(prev => ({ ...prev, [e.target.name]: true }));

  const isValid = fields.name.trim() && fields.email.trim() && fields.message.trim();

  const handleSubmit = async e => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
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
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const fieldError = name => touched[name] && !fields[name].trim();

  return (
    <>
      {/* ── HERO ── */}
      <section className="con-hero">
        <div className="con-orb con-orb-1" />
        <div className="con-orb con-orb-2" />
        <div className="con-orb con-orb-3" />
        <div className="con-grid-overlay" />

        <div className="con-hero__content">
          <p className="con-eyebrow">Get In Touch</p>
          <h1 className="con-hero__title">
            <TypeAnimation
              sequence={['Contact', 800, 'Contact Us', 99999]}
              wrapper="span"
              speed={50}
              cursor={false}
            />
          </h1>
          <div className="con-hero__divider" />
          <p className="con-hero__sub">We'd love to hear from you — reach out anytime.</p>
        </div>

        <div className="con-scroll-hint">
          <div className="con-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="con-section">
        <div className="con-diagonal" />
        <div className="con-inner">

          {/* Left: contact info */}
          <div className="con-info">
            <p className="con-section-label">Reach Us</p>
            <h2 className="con-section-heading">Get In Touch</h2>
            <p className="con-info__text">
              Have a question about our services, want to refer someone, or just want
              to say hello? We're here to help.
            </p>

            <div className="con-info__cards">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} className="con-info-card">
                  <span className="con-info-card__icon">{icon}</span>
                  <div>
                    <p className="con-info-card__label">{label}</p>
                    {href
                      ? <a href={href} className="con-info-card__value con-info-card__value--link">{value}</a>
                      : <p className="con-info-card__value">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="con-hours">
              <p className="con-section-label" style={{ marginBottom: '0.75rem' }}>Office Hours</p>
              <div className="con-hours__row"><span>Monday – Friday</span><span>8:30 am – 4:30 pm</span></div>
              <div className="con-hours__row con-hours__row--muted"><span>Saturday – Sunday</span><span>Closed</span></div>
            </div>
          </div>

          {/* Right: form */}
          <div className="con-form-wrap">
            {status === 'success' ? (
              <div className="con-success">
                <div className="con-success__icon">✓</div>
                <h3 className="con-success__heading">Message Sent!</h3>
                <p className="con-success__text">
                  Thanks for reaching out. We'll be in touch with you shortly.
                </p>
                <button className="con-btn con-btn--primary" onClick={() => setStatus('idle')}>
                  Send Another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="con-form">
                <p className="con-section-label">Send Us A Message</p>
                <h2 className="con-form__heading">We'd Love to Hear From You</h2>

                {/* Name */}
                <div className={`con-field${fieldError('name') ? ' con-field--error' : ''}`}>
                  <label className="con-label" htmlFor="name">Full Name <span>*</span></label>
                  <input
                    id="name" name="name" type="text"
                    className="con-input"
                    placeholder="Jane Smith"
                    value={fields.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {fieldError('name') && <p className="con-field__error">Name is required</p>}
                </div>

                {/* Email */}
                <div className={`con-field${fieldError('email') ? ' con-field--error' : ''}`}>
                  <label className="con-label" htmlFor="email">Email Address <span>*</span></label>
                  <input
                    id="email" name="email" type="email"
                    className="con-input"
                    placeholder="jane@email.com"
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {fieldError('email') && <p className="con-field__error">Email is required</p>}
                </div>

                {/* Message */}
                <div className={`con-field${fieldError('message') ? ' con-field--error' : ''}`}>
                  <label className="con-label" htmlFor="message">Message <span>*</span></label>
                  <textarea
                    id="message" name="message"
                    className="con-input con-textarea"
                    placeholder="How can we help you?"
                    rows={6}
                    value={fields.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {fieldError('message') && <p className="con-field__error">Message is required</p>}
                </div>

                {status === 'error' && (
                  <div className="con-error-banner">
                    Something went wrong. Please try again or email us at{' '}
                    <a href="mailto:pc2@okinclusion.ca">pc2@okinclusion.ca</a>.
                  </div>
                )}

                <button
                  type="submit"
                  className={`con-btn con-btn--primary con-btn--full${status === 'sending' ? ' con-btn--loading' : ''}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? <span className="con-spinner" /> : 'Send Message'}
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