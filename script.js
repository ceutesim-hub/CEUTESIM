/* ================================================================
   CEUTESIM — script.js
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 1. MENÚ HAMBURGUESA ── */
  const menuToggle = document.getElementById('menu-toggle');
  const nav        = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      const s    = menuToggle.querySelectorAll('span');
      if (open) {
        s[0].style.transform = 'translateY(7px) rotate(45deg)';
        s[1].style.opacity   = '0';
        s[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        s[0].style.transform = s[2].style.transform = '';
        s[1].style.opacity   = '';
      }
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        menuToggle.querySelectorAll('span').forEach(function (s) {
          s.style.transform = s.style.opacity = '';
        });
      });
    });
  }

  /* ── 2. HEADER — sombra al hacer scroll ── */
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* ── 3. SCROLL SUAVE ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = (header ? header.offsetHeight : 0) + 16;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });

  /* ── 4. INTERSECTION OBSERVER — helper genérico ── */
  function observe(selector, threshold, callback) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { callback(entry.target, io); }
      });
    }, { threshold: threshold });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ── 5. REVEAL — secciones generales ── */
  observe('.reveal', 0.12, function (el, io) {
    el.classList.add('visible');
    io.unobserve(el);
  });

  /* ── 6. PLAN DE ESTUDIOS — años con stagger ── */
  const planYears = document.querySelectorAll('[data-scroll-reveal]');
  if (planYears.length) {
    const planIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const idx = Array.from(planYears).indexOf(entry.target);
          setTimeout(function () { entry.target.classList.add('visible'); }, (idx % 3) * 160);
          planIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    planYears.forEach(function (el) { planIO.observe(el); });
  }

  /* ── 7. TARJETAS EQUIPO — entrada escalonada ── */
  const cards = document.querySelectorAll('.miembro-card');
  if (cards.length) {
    const cardIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const idx = Array.from(cards).indexOf(entry.target);
          setTimeout(function () {
            entry.target.style.transition = 'opacity .5s ease ' + (idx % 3) * 75 + 'ms, transform .5s ease ' + (idx % 3) * 75 + 'ms, border-color .28s ease, box-shadow .28s ease';
            entry.target.classList.add('visible');
          }, 0);
          cardIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    cards.forEach(function (c) { cardIO.observe(c); });
  }

  /* ── 8. BIBLIOTECA — tabs ── */
  (function () {
    var bibTabs   = document.querySelectorAll('.bib-tab');
    var bibPanels = document.querySelectorAll('.bib-panel');
    if (!bibTabs.length) return;

    // Badge: "1 Drive" en cada tab
    bibTabs.forEach(function (tab) {
      var badge = document.getElementById('count-' + tab.dataset.tab);
      if (badge) badge.textContent = '1 Drive';
    });

    // Cambiar tab activo
    bibTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        bibTabs.forEach(function (t) { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
        bibPanels.forEach(function (p) { p.classList.remove('active'); });
        tab.classList.add('active');
        tab.setAttribute('aria-selected','true');
        var target = document.getElementById('bib-' + tab.dataset.tab);
        if (target) target.classList.add('active');
      });
    });
  })();

});