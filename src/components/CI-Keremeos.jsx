import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../App.css';
import './styles.css';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';
import photo1 from '../images/ClientPhotos/okinc-pic09.jpg';
import photo2 from '../images/ClientPhotos/okinc-pic10.jpg';
import photo3 from '../images/ClientPhotos/okinc-pic11.jpg';
import photo4 from '../images/ClientPhotos/okinc-pic05.jpg';

// Fix leaflet default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Then add them to the gallery array below
const gallery = [
 //  { src: photo1, alt: 'Puppy Love' },
 //  { src: photo2, alt: 'Friends in Motion' },
  // { src: photo3, alt: 'Time with Friends' },
  // { src: photo4, alt: 'Group outing' },
];

const hours = [
  { day: 'Tuesday',            time: '9:30 am – 1:30 pm' },
  { day: 'Wednesday – Friday', time: '9:30 am – 2:30 pm' },
];

const info = [
  { icon: '📞', label: 'Phone',   value: '(250) 499-2399',                  href: 'tel:2504992399' },
  { icon: '📠', label: 'Fax',     value: '(250) 499-5662',                  href: null },
  { icon: '✉️', label: 'Email',   value: 'keremeos.ok.inclusion@shaw.ca',    href: 'mailto:keremeos.ok.inclusion@shaw.ca' },
  { icon: '📍', label: 'Address', value: '427 7th Avenue, Keremeos, BC V0X 1N3', href: 'https://maps.google.com/?q=427+7th+Avenue+Keremeos+BC' },
];

export default function Keremeos() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('loc-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.loc-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="loc-hero">
        <div className="loc-orb loc-orb-1" />
        <div className="loc-orb loc-orb-2" />
        <div className="loc-orb loc-orb-3" />
        <div className="loc-grid-overlay" />
        <div className="loc-hero__content">
          <p className="loc-eyebrow">Community Inclusion</p>
          <h1 className="loc-hero__title">
            <TypeAnimation
              sequence={['Keremeos', 99999]}
              wrapper="span"
              speed={45}
              cursor={false}
            />
          </h1>
          <div className="loc-hero__divider" />
          <p className="loc-hero__sub">427 7th Avenue, Keremeos, BC</p>
        </div>
        <div className="loc-scroll-hint">
          <div className="loc-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="loc-section">
        <div className="loc-diagonal" />
        <div className="loc-inner">

          {/* Info + Map row */}
          <div className="loc-top-row loc-reveal">
            <div className="loc-details">
              <p className="loc-section-label">Visit Us</p>
              <h2 className="loc-section-heading">Location Info</h2>

              <div className="loc-hours">
                <p className="loc-hours__title">Hours of Operation</p>
                {hours.map(({ day, time }) => (
                  <div key={day} className="loc-hours__row">
                    <span className="loc-hours__day">{day}</span>
                    <span className="loc-hours__time">{time}</span>
                  </div>
                ))}
              </div>

              <div className="loc-info-list">
                {info.map(({ icon, label, value, href }) => (
                  <div key={label} className="loc-info-item">
                    <span className="loc-info-item__icon">{icon}</span>
                    <div>
                      <span className="loc-info-item__label">{label}</span>
                      {href
                        ? <a href={href} className="loc-info-item__value loc-info-item__value--link">{value}</a>
                        : <span className="loc-info-item__value">{value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="loc-map-wrap">
              <MapContainer
                center={[49.2097, -119.8283]}
                zoom={15}
                className="loc-map"
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[49.2097, -119.8283]}>
                  <Popup>Okanagan Inclusion — Keremeos<br />427 7th Avenue</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* Gallery */}
          <div className="loc-gallery-section loc-reveal">
            <p className="loc-section-label">Our Community</p>
            <h2 className="loc-section-heading">Keremeos in Action</h2>

            {gallery.length > 0 ? (
              <div className="loc-gallery">
                {gallery.map(({ src, alt }, i) => (
                  <div
                    key={i}
                    className="loc-gallery__item loc-reveal"
                    style={{ transitionDelay: `${i * 0.07}s` }}
                  >
                    <img src={src} alt={alt} className="loc-gallery__img" />
                    <div className="loc-gallery__overlay">
                      <span className="loc-gallery__alt">{alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="loc-gallery-placeholder">
                <div className="loc-gallery-placeholder__icon">📸</div>
                <p className="loc-gallery-placeholder__text">
                  Photos coming soon — check back to see our Keremeos community in action!
                </p>
                <p className="loc-gallery-placeholder__hint">
                  To add photos: import images at the top of <code>Keremeos.jsx</code> and add them to the <code>gallery</code> array.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}