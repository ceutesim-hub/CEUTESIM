document.addEventListener('DOMContentLoaded', function () {

  /* ═══════════════════════════════════════
     1. HEADER — sombra al hacer scroll
  ═══════════════════════════════════════ */
  var header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* ═══════════════════════════════════════
     2. MENÚ HAMBURGUESA — overlay mobile
  ═══════════════════════════════════════ */
  var menuToggle = document.getElementById('menu-toggle');
  var overlay    = document.getElementById('mob-overlay');

  // Construir el menú mobile dentro del overlay
  if (overlay) {
    var mobNav = document.createElement('div');
    mobNav.className = 'mob-nav';
    mobNav.innerHTML = [
      '<a href="#inicio"    class="mob-nav-link">Inicio</a>',
      '<button class="mob-dropdown-toggle" id="mob-carr-btn">',
        'Carreras',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>',
      '</button>',
      '<div class="mob-sub" id="mob-carr-sub">',
        '<a href="#plan-hys">Higiene y Seguridad</a>',
        '<a href="#plan-logistica">Logística</a>',
        '<a href="#plan-mecatronica">Mecatrónica</a>',
      '</div>',
      '<a href="#biblioteca" class="mob-nav-link">Biblioteca</a>',
      '<a href="#equipo"     class="mob-nav-link">Equipo</a>',
      '<a href="#soporte"    class="mob-nav-link">Soporte</a>',
    ].join('');
    overlay.appendChild(mobNav);
  }

  // Toggle del overlay
  function openMenu() {
    overlay.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Animar hamburguesa → X
    var spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  }
  function closeMenu() {
    overlay.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    // Restaurar hamburguesa
    var spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      overlay.classList.contains('open') ? closeMenu() : openMenu();
    });
  }

  // Dropdown "Carreras" dentro del mobile nav
  var mobCarrBtn = document.getElementById('mob-carr-btn');
  var mobCarrSub = document.getElementById('mob-carr-sub');
  if (mobCarrBtn && mobCarrSub) {
    mobCarrBtn.addEventListener('click', function () {
      var isOpen = mobCarrSub.classList.toggle('open');
      mobCarrBtn.classList.toggle('open', isOpen);
    });
  }

  // Cerrar al hacer clic en cualquier link del overlay
  if (overlay) {
    overlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });
  }

  /* ═══════════════════════════════════════
     3. DROPDOWN DESKTOP — toggle con click
  ═══════════════════════════════════════ */
  var ddBtn     = document.getElementById('dropdown-btn');
  var ddContent = document.getElementById('dropdown-content');
  var dropdown  = ddBtn ? ddBtn.closest('.dropdown') : null;

  if (ddBtn && dropdown) {
    ddBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
    // Cerrar al hacer clic afuera
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
    });
    // Cerrar al seleccionar un item
    if (ddContent) {
      ddContent.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { dropdown.classList.remove('open'); });
      });
    }
  }

  /* ═══════════════════════════════════════
     4. SCROLL SUAVE
  ═══════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        var offset = (header ? header.offsetHeight : 0) + 16;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ═══════════════════════════════════════
     5. INTERSECTION OBSERVER — reveals
  ═══════════════════════════════════════ */
  // Reveal genérico
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); revealIO.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(function (el) { revealIO.observe(el); });
  }

  // Plan años — stagger
  var planYears = document.querySelectorAll('[data-reveal]');
  if (planYears.length) {
    var planIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var idx = Array.from(planYears).indexOf(entry.target);
          setTimeout(function () { entry.target.classList.add('visible'); }, (idx % 3) * 140);
          planIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    planYears.forEach(function (el) { planIO.observe(el); });
  }

  // Tarjetas equipo — stagger
  var cards = document.querySelectorAll('.miembro-card');
  if (cards.length) {
    var cardIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var idx = Array.from(cards).indexOf(entry.target);
          setTimeout(function () { entry.target.classList.add('visible'); }, (idx % 3) * 70);
          cardIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07 });
    cards.forEach(function (c) { cardIO.observe(c); });
  }

  /* ═══════════════════════════════════════
     6. BIBLIOTECA — tabs
  ═══════════════════════════════════════ */
  var bibTabs   = document.querySelectorAll('.bib-tab');
  var bibPanels = document.querySelectorAll('.bib-panel');
  if (bibTabs.length) {
    bibTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        bibTabs.forEach(function (t) { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
        bibPanels.forEach(function (p) { p.classList.remove('active'); });
        tab.classList.add('active'); tab.setAttribute('aria-selected','true');
        var panel = document.getElementById('bib-' + tab.dataset.tab);
        if (panel) panel.classList.add('active');
      });
    });
  }

});
