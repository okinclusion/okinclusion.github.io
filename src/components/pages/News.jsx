import React, { useState, useEffect } from "react";
import '../../App.css';
import '../styles.css';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';

// ── EVENT TYPES — edit colours here ──────────────────────────
const EVENT_TYPES = {
  holiday:   { label: 'Holiday',           dot: '#e8b86d', bg: '#fdf6e3', color: '#92600a' },
  awareness: { label: 'Awareness Day',     dot: '#9b6cc7', bg: '#f0e8ff', color: '#4a1f8a' },
  program:   { label: 'Program/Activity',  dot: '#4caf8a', bg: '#e6f7f1', color: '#1a6649' },
  cultural:  { label: 'Cultural Event',    dot: '#e07060', bg: '#fdecea', color: '#8a2010' },
  default:   { label: 'Event',             dot: '#9b6cc7', bg: '#f0e8ff', color: '#4a1f8a' },
};

// ── NEWS ARTICLES ─────────────────────────────────────────────
const newsArticles = [
  {
    title: 'Okanagan Inclusion looking for home share providers who will make big impact.',
    description: 'Article on Castanet recruiting Homeshare providers.',
    href: 'https://www.castanet.net/news/Penticton/article-here',
    date: 'March 2026',
  },
];

// ── EVENTS ────────────────────────────────────────────────────
// Each event: { name: 'Event Name', type: 'holiday' | 'awareness' | 'program' | 'cultural' }
const events = {
  // January
  '2026-01-01': [{ name: "New Year's Day",    type: 'holiday' }],
  '2026-01-03': [{ name: 'Mahayana New Year', type: 'cultural' }],
  '2026-01-04': [{ name: 'World Braille Day', type: 'awareness' }],
  // February
  '2026-02-14': [{ name: "Valentine's Day",                  type: 'holiday' }],
  '2026-02-15': [{ name: 'Maha Shivaratri',                  type: 'cultural' }],
  '2026-02-16': [{ name: 'Family Day',                       type: 'holiday' }],
  '2026-02-17': [{ name: 'Random Acts of Kindness Day',      type: 'awareness' }, { name: 'Chinese New Year', type: 'cultural' }],
  '2026-02-25': [{ name: 'World Braille Day',                type: 'awareness' }],
  // March
  '2026-03-02': [{ name: 'Group Office Clean',               type: 'program' },   { name: 'Gym/Swim',              type: 'program' }],
  '2026-03-03': [{ name: 'Friends in Motion',                type: 'program' },   { name: 'SOEC Walk',             type: 'program' }],
  '2026-03-04': [{ name: 'Holi',                             type: 'cultural' },  { name: 'Hola Mohalla',          type: 'cultural' }, { name: 'Craft', type: 'program' }, { name: 'Art Gallery Tour', type: 'program' }],
  '2026-03-05': [{ name: 'H20',                              type: 'program' },   { name: 'Cubby Clean',           type: 'program' }],
  '2026-03-06': [{ name: 'Friends in Music',                 type: 'program' },   { name: 'Bowling',               type: 'program' }],
  '2026-03-08': [{ name: "International Women's Day",        type: 'awareness' }, { name: 'Daylight Savings',      type: 'holiday' }],
  '2026-03-09': [{ name: 'Group Office Clean',               type: 'program' },   { name: 'Gym/Swim',              type: 'program' }],
  '2026-03-10': [{ name: 'Friends in Motion',                type: 'program' },   { name: 'SOEC Walk',             type: 'program' }],
  '2026-03-11': [{ name: 'Library Craft',                    type: 'program' },   { name: 'Cubby Clean',           type: 'program' }],
  '2026-03-12': [{ name: 'Skating',                          type: 'program' },   { name: 'Client Meeting',        type: 'program' }],
  '2026-03-13': [{ name: 'Friends in Music',                 type: 'program' },   { name: 'Bowling',               type: 'program' }],
  '2026-03-16': [{ name: 'Group Office Clean',               type: 'program' },   { name: 'Gym/Swim',              type: 'program' }],
  '2026-03-17': [{ name: "St. Patrick's Day",                type: 'holiday' },   { name: 'Craft',                 type: 'program' }],
  '2026-03-18': [{ name: 'Apex Tubing',                      type: 'program' }],
  '2026-03-19': [{ name: 'Skating',                          type: 'program' },   { name: 'Cubby Clean',           type: 'program' }, { name: 'Goal Review', type: 'program' }],
  '2026-03-20': [{ name: 'Crazy Sock Day',                   type: 'program' },   { name: 'Bowling',               type: 'program' }],
  '2026-03-21': [{ name: 'World Down Syndrome Day',          type: 'awareness' }],
  '2026-03-23': [{ name: 'Group Office Clean',               type: 'program' },   { name: 'Gym/Swim',              type: 'program' }],
  '2026-03-24': [{ name: 'SOEC Walk',                        type: 'program' }],
  '2026-03-25': [{ name: 'Craft',                            type: 'program' },   { name: 'Calendars',             type: 'program' }, { name: 'Soup Day', type: 'program' }],
  '2026-03-26': [{ name: 'Purple Day for Epilepsy',          type: 'awareness' }, { name: 'Skating',               type: 'program' }, { name: 'Cubby Clean', type: 'program' }, { name: 'Scavenger Hunt', type: 'program' }],
  '2026-03-27': [{ name: 'Craft',                            type: 'program' },   { name: 'Bowling',               type: 'program' }],
  '2026-03-30': [{ name: 'Nature Walk',                      type: 'program' }],
  '2026-03-31': [{ name: 'International Transgender Day of Visibility', type: 'awareness' }, { name: 'Friends in Motion', type: 'program' }, { name: 'SOEC Walk', type: 'program' }],
  // April
  '2026-04-02': [{ name: 'World Autism Day',   type: 'awareness' }],
  '2026-04-03': [{ name: 'Good Friday',        type: 'holiday' }],
  '2026-04-05': [{ name: 'Easter Sunday',      type: 'holiday' }],
  '2026-04-06': [{ name: 'Easter Monday',      type: 'holiday' }],
  '2026-04-14': [{ name: 'Vaisakhi',           type: 'cultural' }],
  // May
  '2026-05-10': [{ name: "Mother's Day",       type: 'holiday' }],
  '2026-05-15': [{ name: 'Global Accessibility Awareness Day', type: 'awareness' }],
  '2026-05-17': [{ name: 'International Day Against Homophobia, Transphobia, and Biphobia', type: 'awareness' }],
  '2026-05-18': [{ name: 'Victoria Day',       type: 'holiday' }],
  '2026-05-25': [{ name: 'National AccessAbility Week', type: 'awareness' }],
  '2026-05-26': [{ name: 'National AccessAbility Week', type: 'awareness' }],
  '2026-05-27': [{ name: 'National AccessAbility Week', type: 'awareness' }],
  '2026-05-28': [{ name: 'National AccessAbility Week', type: 'awareness' }],
  '2026-05-29': [{ name: 'National AccessAbility Week', type: 'awareness' }],
  '2026-05-30': [{ name: 'National AccessAbility Week', type: 'awareness' }],
  '2026-05-31': [{ name: 'National AccessAbility Week', type: 'awareness' }],
  // June
  '2026-06-03': [{ name: 'Red Shirt Day',      type: 'awareness' }],
  '2026-06-21': [{ name: 'National Indigenous Peoples Day', type: 'awareness' }],
  // July
  '2026-07-01': [{ name: 'Canada Day',         type: 'holiday' }],
  '2026-07-14': [{ name: "International Non-Binary People's Day", type: 'awareness' }],
  // August
  '2026-08-13': [{ name: 'Ganesh Chaturthi',   type: 'cultural' }],
  '2026-08-14': [{ name: 'Ganesh Chaturthi',   type: 'cultural' }],
  // September
  '2026-09-07': [{ name: 'Labour Day',         type: 'holiday' }],
  '2026-09-09': [{ name: 'FASD Day',           type: 'awareness' }],
  '2026-09-10': [{ name: 'World Suicide Prevention Day', type: 'awareness' }],
  '2026-09-21': [{ name: 'A Day to Remember (CHARGE)', type: 'awareness' }],
  '2026-09-23': [{ name: 'International Day of Sign Languages', type: 'awareness' }],
  '2026-09-30': [{ name: 'National Day for Truth and Reconciliation', type: 'awareness' }],
  // October
  '2026-10-08': [{ name: 'Diwali',             type: 'cultural' }],
  '2026-10-10': [{ name: 'World Inclusion Day', type: 'awareness' }],
  '2026-10-14': [{ name: 'International Pronouns Day', type: 'awareness' }],
  '2026-10-31': [{ name: 'Halloween',          type: 'holiday' }],
  // November
  '2026-11-02': [{ name: 'Día de Muertos (Day of the Dead)', type: 'cultural' }],
  '2026-11-11': [{ name: 'Remembrance Day',    type: 'holiday' }],
  '2026-11-20': [{ name: 'Transgender Day of Remembrance', type: 'awareness' }],
  // December
  '2026-12-03': [{ name: 'International Day of Persons with Disabilities', type: 'awareness' }],
  '2026-12-04': [{ name: 'Hanukkah Begins',    type: 'cultural' }],
  '2026-12-05': [{ name: 'Hanukkah',           type: 'cultural' }],
  '2026-12-06': [{ name: 'Hanukkah',           type: 'cultural' }],
  '2026-12-07': [{ name: 'Hanukkah',           type: 'cultural' }],
  '2026-12-08': [{ name: 'Hanukkah',           type: 'cultural' }],
  '2026-12-09': [{ name: 'Hanukkah',           type: 'cultural' }],
  '2026-12-10': [{ name: 'Hanukkah',           type: 'cultural' }, { name: 'International Human Rights Day', type: 'awareness' }],
  '2026-12-11': [{ name: 'Hanukkah',           type: 'cultural' }],
  '2026-12-12': [{ name: 'Hanukkah Ends',      type: 'cultural' }],
  '2026-12-24': [{ name: 'Christmas Eve',      type: 'holiday' }],
  '2026-12-25': [{ name: 'Christmas Day',      type: 'holiday' }],
  '2026-12-26': [{ name: 'Boxing Day',         type: 'holiday' }],
  '2026-12-31': [{ name: "New Year's Eve",     type: 'holiday' }],
};

// ── MONTHLY HIGHLIGHTS ────────────────────────────────────────
const monthlyHighlights = {
  '2026-02': ['Black History Month'],
  '2026-03': ['Cerebral Palsy Awareness Month'],
  '2026-04': ['Autism Acceptance Month'],
  '2026-05': ['Mental Health Awareness Month'],
  '2026-06': ['Pride Month'],
  '2026-07': ['Disability Pride Month'],
  '2026-08': ['Intersectionality Awareness Month'],
  '2026-09': ['Hispanic Heritage Month'],
  '2026-10': ['Community Inclusion Month'],
  '2026-11': ['Hindu Heritage Month'],
  '2026-12': ['Universal Human Rights Month'],
};

const DAYS   = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function Calendar() {
  const today = new Date();
  const [current, setCurrent]   = useState({ year: today.getFullYear(), month: today.getMonth() });
  const [selected, setSelected] = useState(null);

  const { year, month } = current;
  const firstDay    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev  = new Date(year, month, 0).getDate();

  const prevMonth = () => setCurrent(c => c.month === 0  ? { year: c.year - 1, month: 11 } : { year: c.year, month: c.month - 1 });
  const nextMonth = () => setCurrent(c => c.month === 11 ? { year: c.year + 1, month: 0  } : { year: c.year, month: c.month + 1 });
  const prevYear  = () => setCurrent(c => ({ ...c, year: c.year - 1 }));
  const nextYear  = () => setCurrent(c => ({ ...c, year: c.year + 1 }));

  const pad      = n => String(n).padStart(2, '0');
  const dateKey  = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`;
  const monthKey = `${year}-${pad(month + 1)}`;

  const selectedEvents = selected ? (events[selected] || []) : [];
  const highlights     = monthlyHighlights[monthKey] || [];

  // dot colour = first event's type colour
  const dotColor = key => {
    const evs = events[key];
    if (!evs || !evs.length) return EVENT_TYPES.default.dot;
    return (EVENT_TYPES[evs[0].type] || EVENT_TYPES.default).dot;
  };

  // Build cells
  const cells = [];
  for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: daysInPrev - i, type: 'prev' });
  for (let d = 1; d <= daysInMonth; d++)   cells.push({ day: d, type: 'current' });
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++)     cells.push({ day: d, type: 'next' });

  const isToday = d => d === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  return (
    <div className="nws-cal">
      {/* ── Sidebar ── */}
      <div className="nws-cal__side">
        <p className="nws-cal__side-label">Monthly Events</p>
        {highlights.length > 0
          ? highlights.map((h, i) => <p key={i} className="nws-cal__highlight">{h}</p>)
          : <p className="nws-cal__highlight nws-cal__highlight--empty">No monthly highlights</p>
        }

        {/* Legend */}
        <div className="nws-cal__legend">
          {Object.entries(EVENT_TYPES).filter(([k]) => k !== 'default').map(([key, val]) => (
            <div key={key} className="nws-cal__legend-item">
              <span className="nws-cal__legend-dot" style={{ background: val.dot }} />
              <span className="nws-cal__legend-label">{val.label}</span>
            </div>
          ))}
        </div>

        {/* Selected day events */}
        {selected && (
          <div className="nws-cal__selected-events">
            <p className="nws-cal__side-label" style={{ marginTop: '1.75rem' }}>
              {new Date(selected + 'T12:00:00').toLocaleDateString('en-CA', {
                weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
              })}
            </p>
            {selectedEvents.length > 0
              ? selectedEvents.map((e, i) => {
                  const s = EVENT_TYPES[e.type] || EVENT_TYPES.default;
                  return (
                    <div
                      key={i}
                      className="nws-cal__event-pill"
                      style={{ background: s.bg, color: s.color, borderLeft: `3px solid ${s.dot}` }}
                    >
                      {e.name}
                    </div>
                  );
                })
              : <p className="nws-cal__highlight--empty" style={{ marginTop: '0.5rem' }}>No events this day</p>
            }
          </div>
        )}
      </div>

      {/* ── Grid ── */}
      <div className="nws-cal__grid-wrap">
        <div className="nws-cal__nav">
          <button className="nws-cal__nav-btn" onClick={prevYear}  title="Previous year">«</button>
          <button className="nws-cal__nav-btn" onClick={prevMonth} title="Previous month">‹</button>
          <span className="nws-cal__month-label">{MONTHS[month]} {year}</span>
          <button className="nws-cal__nav-btn" onClick={nextMonth} title="Next month">›</button>
          <button className="nws-cal__nav-btn" onClick={nextYear}  title="Next year">»</button>
        </div>

        <div className="nws-cal__days-header">
          {DAYS.map(d => <div key={d} className="nws-cal__day-name">{d}</div>)}
        </div>

        <div className="nws-cal__grid">
          {cells.map((cell, i) => {
            const key        = cell.type === 'current' ? dateKey(year, month, cell.day) : null;
            const hasEvent   = key && events[key];
            const isSelected = key === selected;
            const isTod      = cell.type === 'current' && isToday(cell.day);
            return (
              <div
                key={i}
                className={[
                  'nws-cal__cell',
                  cell.type !== 'current' ? 'nws-cal__cell--other'     : '',
                  hasEvent                ? 'nws-cal__cell--has-event'  : '',
                  isSelected              ? 'nws-cal__cell--selected'   : '',
                  isTod                   ? 'nws-cal__cell--today'      : '',
                ].filter(Boolean).join(' ')}
                onClick={() => cell.type === 'current' && setSelected(isSelected ? null : key)}
              >
                <span className="nws-cal__cell-num">{cell.day}</span>
                {hasEvent && (
                  <span className="nws-cal__event-dot" style={{ background: dotColor(key) }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function News() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('nws-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.nws-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="nws-hero">
        <div className="nws-orb nws-orb-1" />
        <div className="nws-orb nws-orb-2" />
        <div className="nws-orb nws-orb-3" />
        <div className="nws-grid-overlay" />

        <div className="nws-hero__content">
          <p className="nws-eyebrow">Okanagan Inclusion</p>
          <h1 className="nws-hero__title">
            <TypeAnimation
              sequence={['News', 99999]}
              wrapper="span"
              speed={45}
              cursor={false}
            />
          </h1>
          <div className="nws-hero__divider" />
          <p className="nws-hero__sub">Stay up to date with OI news and upcoming events.</p>
        </div>

        <div className="nws-scroll-hint">
          <div className="nws-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="nws-section">
        <div className="nws-diagonal" />
        <div className="nws-inner">

          {/* News articles */}
          <div className="nws-articles nws-reveal">
            <p className="nws-section-label">Latest</p>
            <h2 className="nws-section-heading">OI News</h2>
            <div className="nws-articles__grid">
              {newsArticles.map(({ title, description, href, date }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="nws-article-card">
                  <span className="nws-article-card__date">{date}</span>
                  <h3 className="nws-article-card__title">{title}</h3>
                  <p className="nws-article-card__desc">{description}</p>
                  <span className="nws-article-card__link">Read more →</span>
                  <div className="nws-article-card__bar" />
                </a>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div className="nws-events nws-reveal">
            <p className="nws-section-label">Events at OI</p>
            <h2 className="nws-section-heading">Events Calendar</h2>
            <p className="nws-events__hint">Click a date to see events. The dot colour indicates the event type.</p>
            <Calendar />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}