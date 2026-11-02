import { useState } from 'react';
import Logo from './Logo.jsx';
import { school, nav, tickerWords, way } from './data.js';
import heroImg from './assets/hero-graduation.jpg';
import sportsImg from './assets/sports-banner.jpg';
import childrenImg from './assets/graduation-children.jpg';

const rise = (ms) => ({ '--d': `${ms}ms` });
const reveal = (ms = 0) => ({ 'data-reveal': '', style: { '--d': `${ms}ms` } });

export function Hero() {
  return (
    <section className="hero" id="top">
      <img
        className="hero-img"
        src={heroImg}
        alt="Yolad pupils in maroon plaid uniforms standing on stage at their graduation ceremony"
        width="1395"
        height="965"
        fetchpriority="high"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="wrap hero-inner">
        <p className="eyebrow rise" style={rise(0)}>Montessori school &middot; {school.location}</p>
        <h1 className="hero-title rise" style={rise(120)}>
          Knowledge
          <span>liberates.</span>
        </h1>
        <p className="hero-lede rise" style={rise(260)}>
          A Montessori school in Abeokuta where every child is guided to think for themselves,
          work with their hands and grow in confidence.
        </p>
        <div className="hero-cta rise" style={rise(380)}>
          <a className="btn btn-magenta" href="#visit">Book a visit</a>
          <a className="btn btn-ghost" href="#about">Meet Yolad</a>
        </div>
      </div>
    </section>
  );
}

export function InfoStrip() {
  const items = [
    { k: 'Where', v: school.location },
    { k: 'Method', v: 'Montessori' },
    { k: 'Follow us', v: '@yolad_ms', href: school.social.instagram },
  ];
  return (
    <div className="infostrip">
      <div className="wrap infostrip-row">
        {items.map((i) => (
          <div className="info-cell" key={i.k}>
            <span className="label">{i.k}</span>
            {i.href ? (
              <a href={i.href} target="_blank" rel="noopener noreferrer">{i.v}</a>
            ) : (
              <strong>{i.v}</strong>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Ticker() {
  const group = (suffix) => (
    <div className="ticker-group" key={suffix}>
      {tickerWords.map((w) => (
        <span key={w + suffix}>{w}<i aria-hidden="true" /></span>
      ))}
    </div>
  );
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">{[group('a'), group('b')]}</div>
    </div>
  );
}

export function Welcome() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div {...reveal()}>
          <p className="eyebrow">Welcome to Yolad</p>
          <h2 className="h2">A school where children learn by doing.</h2>
          <p className="body">
            At Yolad Montessori School, children are guided to learn at their own pace, using real
            materials and making real choices. The aim is simple: curious, independent and kind
            children who are ready for whatever comes next.
          </p>
          <p className="body">
            Our motto says it plainly. <strong>Knowledge liberates.</strong> A child who understands
            is a child who is free to keep learning.
          </p>
          <a className="link-arrow" href="#way">See the Yolad way <span aria-hidden="true">&rarr;</span></a>
        </div>
        <figure className="about-figure" {...reveal(140)}>
          <img src={childrenImg} alt="Graduating pupils in maroon plaid waistcoats and skirts, holding hands" width="1215" height="600" loading="lazy" />
          <figcaption className="about-badge">
            <Logo size={52} />
            <span>
              <strong>{school.motto}</strong>
              <small>Yolad Montessori School</small>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Way() {
  return (
    <section className="section section-alt" id="way">
      <div className="wrap">
        <div className="section-head" {...reveal()}>
          <p className="eyebrow">The Yolad way</p>
          <h2 className="h2">How your child learns here.</h2>
        </div>
        <ol className="way-grid">
          {way.map((w, i) => (
            <li className="way-card" key={w.title} {...reveal(i * 90)}>
              <span className="way-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Moments() {
  const items = [
    {
      img: sportsImg,
      alt: 'Yolad banner for the 4th Edition Inter-House Sports, with photos of pupils running, cheering and performing',
      tag: 'Sports',
      title: '4th Edition Inter-House Sports',
      meta: 'Theme: Kiishi · 2023',
      pos: '50% 30%',
    },
    {
      img: heroImg,
      alt: 'Yolad graduation ceremony stage with pupils standing in a row',
      tag: 'Graduation',
      title: 'Graduation Ceremony',
      meta: '2022/2023 session',
      pos: '30% 45%',
    },
  ];
  return (
    <section className="section" id="moments">
      <div className="wrap">
        <div className="section-head" {...reveal()}>
          <p className="eyebrow">Moments</p>
          <h2 className="h2">Life at Yolad, beyond the classroom.</h2>
        </div>
        <div className="moments-grid">
          {items.map((m, i) => (
            <article className="moment" key={m.title} {...reveal(i * 120)}>
              <img src={m.img} alt={m.alt} style={{ objectPosition: m.pos }} />
              <div className="moment-shade" aria-hidden="true" />
              <div className="moment-text">
                <span className="tag">{m.tag}</span>
                <h3>{m.title}</h3>
                <p>{m.meta}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="more" {...reveal()}>
          More from the school on{' '}
          <a href={school.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>,{' '}
          <a href={school.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a> and{' '}
          <a href={school.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>.
        </p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap cta-row" {...reveal()}>
        <h2 className="cta-title">Come and see Yolad for yourself.</h2>
        <a className="btn btn-dark" href="#visit">Plan a visit</a>
      </div>
    </section>
  );
}

export function Visit() {
  const [msg, setMsg] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (!String(f.get('name') || '').trim() || !String(f.get('phone') || '').trim()) {
      setMsg('Please add your name and phone number.');
      return;
    }
    setMsg('Demo only: on the live site this request goes straight to the school.');
  };

  const row = (k, v) => (
    <div className="visit-row">
      <dt>{k}</dt>
      <dd>{v || <span className="tbc">To be confirmed with the school</span>}</dd>
    </div>
  );

  return (
    <section className="section" id="visit">
      <div className="wrap visit-grid">
        <div {...reveal()}>
          <p className="eyebrow">Visit</p>
          <h2 className="h2">Meet the school in person.</h2>
          <p className="body">Leave your details and the school will get back to you to arrange a visit.</p>
          <dl className="visit-list">
            {row('Location', school.location)}
            {row('Address', school.address)}
            {row('Phone', school.phone)}
            {row('Email', school.email)}
          </dl>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate {...reveal(140)}>
          <div className="field-row">
            <label htmlFor="v-name">Parent's name
              <input id="v-name" name="name" type="text" autoComplete="name" placeholder="Full name" />
            </label>
            <label htmlFor="v-phone">Phone number
              <input id="v-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="080..." />
            </label>
          </div>
          <label htmlFor="v-age">Child's age
            <select id="v-age" name="age" defaultValue="">
              <option value="" disabled>Choose an age group</option>
              <option>Under 3 years</option>
              <option>3 to 5 years</option>
              <option>6 to 8 years</option>
              <option>9 years and above</option>
            </select>
          </label>
          <label htmlFor="v-note">Anything you would like to ask?
            <textarea id="v-note" name="note" rows="3" placeholder="Your question" />
          </label>
          <button className="btn btn-magenta" type="submit">Request a visit</button>
          <p className="form-msg" role="status">{msg}</p>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#top" aria-label="Back to top">
            <Logo size={44} />
            <span className="brand-text">
              <span className="brand-name">Yolad</span>
              <span className="brand-sub">Montessori School</span>
            </span>
          </a>
          <p>{school.motto}. {school.location}.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <div className="footer-social">
          <a href={school.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={school.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href={school.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
      <div className="wrap">
        <div className="footer-base">
          <span>&copy; 2026 {school.name}</span>
          <span>
            Sample website by TAG. Items marked &ldquo;to be confirmed&rdquo; will be replaced with the school&rsquo;s own details.
          </span>
        </div>
      </div>
    </footer>
  );
}
