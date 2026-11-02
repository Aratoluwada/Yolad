import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import { nav, school } from './data.js';

const readTheme = () => (document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme);

  // Stay in sync if the theme attribute is changed from outside this button.
  useEffect(() => {
    const mo = new MutationObserver(() => setTheme(readTheme()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => mo.disconnect();
  }, []);

  const dark = theme === 'dark';
  const toggle = () => {
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('yolad-theme', next); } catch (e) { /* storage unavailable */ }
    setTheme(next);
  };
  const label = dark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button className="theme-btn" type="button" onClick={toggle} aria-pressed={dark} aria-label={label} title={label}>
      {dark ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z" />
        </svg>
      )}
    </button>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled || open ? ' solid' : ''}`}>
      <div className="wrap header-row">
        <a className="brand" href="#top" onClick={close} aria-label={`${school.name}, home`}>
          <Logo size={44} />
          <span className="brand-text">
            <span className="brand-name">Yolad</span>
            <span className="brand-sub">Montessori School</span>
          </span>
        </a>

        <nav className="nav" aria-label="Main">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>

        <ThemeToggle />

        <a className="btn btn-magenta header-cta" href="#visit">Book a visit</a>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <nav id="mobile-nav" className={`mobile-nav${open ? ' open' : ''}`} aria-label="Mobile">
        <div className="wrap mobile-nav-inner">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={close}>{n.label}</a>
          ))}
          <a className="btn btn-magenta" href="#visit" onClick={close}>Book a visit</a>
        </div>
      </nav>
    </header>
  );
}
