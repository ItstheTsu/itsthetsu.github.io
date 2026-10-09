(() => {
  'use strict';
  const nav = document.getElementById('primary-nav');
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('menu-toggle');
  const progress = document.getElementById('reading-progress');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const closeMenu = () => {
    nav.dataset.open = 'false';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    header.classList.remove('menu-open');
  };
  toggle.addEventListener('click', () => {
    const isOpen = nav.dataset.open !== 'true';
    nav.dataset.open = String(isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    header.classList.toggle('menu-open', isOpen);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.dataset.open === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (nav.dataset.open === 'true' && !header.contains(event.target)) closeMenu();
  });
  const desktop = window.matchMedia('(min-width: 1001px)');
  if (desktop.addEventListener) desktop.addEventListener('change', e => { if(e.matches) closeMenu(); });

  let queued = false;
  function updateScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      header.classList.toggle('scrolled', window.scrollY > 22);
      const range = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${range > 0 ? Math.min(100, window.scrollY / range * 100) : 0}%`;
      queued = false;
    });
  }
  window.addEventListener('scroll', updateScroll, {passive:true});
  updateScroll();

  if ('IntersectionObserver' in window) {
    const sections = navLinks.map(link => ({link, section: document.querySelector(link.getAttribute('href'))})).filter(x => x.section);
    const spy = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        navLinks.forEach(link => {
          const selected = link === sections.find(x => x.section === entry.target)?.link;
          link.classList.toggle('current', selected);
          if (selected) link.setAttribute('aria-current','location');
          else link.removeAttribute('aria-current');
        });
      }
    }, {rootMargin:'-25% 0px -62% 0px', threshold:0});
    sections.forEach(({section}) => spy.observe(section));

    if (!reducedMotion.matches) {
      document.documentElement.classList.add('js-motion');
      const reveal = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }, {threshold:0.06,rootMargin:'0px 0px 60px 0px'});
      document.querySelectorAll('.reveal').forEach(x => reveal.observe(x));
    }
  }

  const filters = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-category]')];
  filters.forEach(button => button.addEventListener('click', () => {
    const value = button.dataset.filter;
    filters.forEach(btn => {
      const active = btn === button;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => card.hidden = value !== 'all' && card.dataset.category !== value);
  }));

  const copyButton = document.getElementById('copy-email');
  const copyStatus = document.getElementById('copy-status');
  copyButton.addEventListener('click', async () => {
    const email = 'AllanCorr3a@gmail.com';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard indisponível');
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = 'E-mail copiado!';
    } catch {
      copyStatus.textContent = 'Selecione o e-mail ou use o botão “Enviar e-mail”.';
    }
  });
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
