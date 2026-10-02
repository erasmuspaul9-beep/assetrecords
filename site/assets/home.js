// AssetRecords homepage — nav state on scroll, scroll-reveal, stats count-up.
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Nav: transparent over the hero, white with a hairline once scrolled.
  const nav = document.getElementById('site-nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const revealEls = document.querySelectorAll('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // Scroll-reveal: fade/translate each block in once.
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        revealIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => revealIO.observe(el));

  // Stats band: count up from 0 the first time it scrolls into view.
  const statsEl = document.getElementById('stats-band');
  const counters = statsEl ? statsEl.querySelectorAll('[data-count]') : [];
  if (!counters.length) return;
  counters.forEach((el) => { el.textContent = '0'; });

  const animateCounts = () => {
    const duration = 1400;
    const start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const ease = 1 - Math.pow(1 - p, 3);
      counters.forEach((el) => { el.textContent = Math.round(Number(el.dataset.count) * ease); });
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const statsIO = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      statsIO.disconnect();
      animateCounts();
    }
  }, { threshold: 0.3 });
  statsIO.observe(statsEl);
})();
