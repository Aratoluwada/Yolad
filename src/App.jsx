import { useEffect } from 'react';
import Header from './Header.jsx';
import { Hero, InfoStrip, Ticker, Welcome, Way, Moments, CtaBand, Visit, Footer } from './Sections.jsx';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfoStrip />
        <Ticker />
        <Welcome />
        <Way />
        <Moments />
        <CtaBand />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
