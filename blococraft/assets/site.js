(() => {
  'use strict';
  const serverIp = 'sp-05.blackhosting.com.br:25975';
  const copyButtons = document.querySelectorAll('[data-copy-ip]');
  const announce = document.querySelector('#copy-announcement');
  let resetTimer;

  async function copyIp(event) {
    const button = event.currentTarget;
    const original = button.dataset.label || button.textContent.trim();
    button.dataset.label = original;
    let copied = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(serverIp);
        copied = true;
      } else {
        const temp = document.createElement('textarea');
        temp.value = serverIp;
        temp.setAttribute('readonly', '');
        temp.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.appendChild(temp);
        temp.select();
        copied = document.execCommand('copy');
        temp.remove();
      }
    } catch (_error) {
      copied = false;
    }

    if (copied) {
      button.textContent = '✓ IP COPIADO!';
      if (announce) announce.textContent = 'IP do servidor copiado para a área de transferência.';
    } else {
      button.textContent = 'SELECIONE O IP';
      if (announce) announce.textContent = 'Não foi possível copiar automaticamente. Selecione o IP exibido no site.';
      document.querySelector('#server-ip')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      button.textContent = button.dataset.label;
    }, 2800);
  }

  copyButtons.forEach(button => button.addEventListener('click', copyIp));

  const toggle = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#primary-menu');
  function closeMenu() {
    if (!nav || !toggle) return;
    nav.dataset.open = 'false';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.dataset.open === 'true';
      nav.dataset.open = String(!isOpen);
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.textContent = isOpen ? '☰' : '✕';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: .09, rootMargin: '0px 0px 35px 0px' });
    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add('in-view'));
  }
})();