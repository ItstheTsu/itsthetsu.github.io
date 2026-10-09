(() => {
  'use strict';
  const header = document.getElementById('site-header');
  const nav = document.getElementById('primary-nav');
  const toggle = document.getElementById('menu-toggle');
  const progress = document.getElementById('reading-progress');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const setMenu = (isOpen) => {
    nav.dataset.open = String(isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    header.classList.toggle('menu-open', isOpen);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (nav.dataset.open === 'true' && !header.contains(event.target)) setMenu(false);
  });
  window.matchMedia('(min-width: 931px)').addEventListener('change', event => {
    if (event.matches) setMenu(false);
  });

  let queued = false;
  function onScroll() {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(() => {
      header.classList.toggle('scrolled', window.scrollY > 30);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? Math.min(100, window.scrollY / max * 100) : 0) + '%';
      queued = false;
    });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  const sections = navLinks.map(link => ({link, section: document.querySelector(link.getAttribute('href'))})).filter(item=>item.section);
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const item = sections.find(s => s.section === entry.target);
        if (!item) return;
        navLinks.forEach(link => {
          const active = link === item.link;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin:'-23% 0px -62% 0px',threshold:0});
    sections.forEach(item => sectionObserver.observe(item.section));
  }

  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('[data-category]')];
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(b => {
      const selected = b === button;
      b.classList.toggle('selected', selected);
      b.setAttribute('aria-pressed', String(selected));
    });
    projects.forEach(project => {project.hidden = filter !== 'all' && project.dataset.category !== filter;});
  }));

  const reveals = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.07,rootMargin:'0px 0px 40px 0px'});
    document.documentElement.classList.add('has-motion');
    reveals.forEach(node => revealObserver.observe(node));
  }
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
