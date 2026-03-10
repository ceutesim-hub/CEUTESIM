/* ═══════════════════════════════════════════════════
   CEUTESIM — script.js
   Curved Outside Active Tab Sidebar + all interactions
═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Elements ── */
  const header      = document.getElementById('header');
  const menuToggle  = document.getElementById('menu-toggle');
  const sidebar     = document.getElementById('sidebar');
  const backdrop    = document.getElementById('mob-backdrop');
  const sidebarClose= document.getElementById('sidebar-close');
  const indicator   = document.getElementById('sidebar-indicator');
  const sidebarList = document.getElementById('sidebar-list');
  const sidebarItems= document.querySelectorAll('.sidebar-item');

  /* ── Header scroll ── */
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* ── Open / Close sidebar ── */
  function openSidebar() {
    sidebar.classList.add('open');
    sidebar.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('visible');
    backdrop.style.display = 'block';
    menuToggle.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    moveIndicator();
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebar.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('visible');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!sidebar.classList.contains('open')) {
        backdrop.style.display = 'none';
      }
    }, 300);
  }

  menuToggle  && menuToggle.addEventListener('click', openSidebar);
  sidebarClose && sidebarClose.addEventListener('click', closeSidebar);
  backdrop    && backdrop.addEventListener('click', closeSidebar);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });

  /* ── Curved Indicator: move to active item ── */
  function moveIndicator() {
    if (!indicator || !sidebarList) return;

    const activeItem = sidebarList.querySelector('.sidebar-item.active');
    if (!activeItem) return;

    // get the <a> or <button> inside the item (skip sub-items)
    const link = activeItem.querySelector(':scope > .sidebar-link, :scope > .sidebar-link-btn');
    if (!link) return;

    // position relative to sidebar list top
    const listTop   = sidebarList.getBoundingClientRect().top;
    const linkTop   = link.getBoundingClientRect().top;
    const itemH     = 64; // var(--item-h)

    // sidebarList has paddingTop: 80px; activeItem is at its natural position
    // We measure offset from sidebarList
    const offsetTop = link.offsetTop + activeItem.offsetTop;

    indicator.style.top = (sidebarList.offsetTop + activeItem.offsetTop) + 'px';
  }

  /* ── Set active item and move indicator ── */
  function setActive(targetItem) {
    sidebarItems.forEach(item => item.classList.remove('active'));
    targetItem.classList.add('active');
    moveIndicator();
  }

  /* ── Sidebar link clicks ── */
  sidebarItems.forEach((item) => {
    const link = item.querySelector(':scope > a.sidebar-link');
    const btn  = item.querySelector(':scope > button.sidebar-link-btn');

    // Direct navigation links
    if (link) {
      link.addEventListener('click', () => {
        setActive(item);
        setTimeout(closeSidebar, 120);
      });
    }

    // Toggle for sub-menu (Carreras)
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        item.classList.toggle('sub-open');
      });
    }

    // Sub-item links
    const subLinks = item.querySelectorAll('.sidebar-sub a');
    subLinks.forEach(sub => {
      sub.addEventListener('click', () => {
        // Mark parent as active
        setActive(item);
        item.classList.remove('sub-open');
        setTimeout(closeSidebar, 120);
      });
    });
  });

  /* ── Highlight active sidebar item based on scroll ── */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveFromScroll() {
    const scrollY = window.scrollY + window.innerHeight / 3;

    let currentId = '';
    sections.forEach(sec => {
      if (sec.offsetTop <= scrollY) currentId = sec.id;
    });

    // Map section id to sidebar item
    const map = {
      'inicio':          0,
      'carreras':        1,
      'plan-hys':        1,
      'plan-logistica':  1,
      'plan-mecatronica':1,
      'biblioteca':      2,
      'equipo':          3,
      'soporte':         4,
    };

    const idx = map[currentId];
    if (idx === undefined) return;

    const targetItem = sidebarList && sidebarList.querySelectorAll(':scope > .sidebar-item')[idx];
    if (!targetItem) return;

    sidebarItems.forEach(item => item.classList.remove('active'));
    targetItem.classList.add('active');

    // Only animate indicator if sidebar is open
    if (sidebar.classList.contains('open')) {
      moveIndicator();
    }
  }

  window.addEventListener('scroll', updateActiveFromScroll, { passive: true });

  /* ── Initial indicator position ── */
  // We need a small delay so layout is ready
  requestAnimationFrame(() => {
    requestAnimationFrame(moveIndicator);
  });

  /* ── Desktop Dropdown (click toggle) ── */
  const dropdownBtn     = document.getElementById('dropdown-btn');
  const dropdownContent = document.getElementById('dropdown-content');
  const dropdown        = dropdownBtn && dropdownBtn.closest('.dropdown');

  if (dropdownBtn && dropdown) {
    dropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
    });
    dropdownContent && dropdownContent.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => dropdown.classList.remove('open'));
    });
  }

  /* ── Biblioteca tabs ── */
  const bibTabs   = document.querySelectorAll('.bib-tab');
  const bibPanels = document.querySelectorAll('.bib-panel');

  bibTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      bibTabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      bibPanels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById('bib-' + target);
      if (panel) panel.classList.add('active');
    });
  });

  // Set tab counts
  const counts = { hys: 1, log: 1, mec: 1 };
  Object.entries(counts).forEach(([key, val]) => {
    const el = document.getElementById('count-' + key);
    if (el) el.textContent = val + ' Drive';
  });

  /* ── Scroll reveal ── */
  const revealEls = document.querySelectorAll('.reveal, [data-scroll-reveal]');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObs.observe(el));

})();
