/* ================================================================
   MOBILE NAV FIX — reemplazar el bloque @media (max-width: 768px)
   existente con este
   ================================================================ */

@media (max-width: 768px) {

  /* ── Overlay del menú ── */
  .nav {
    display: none;
    position: fixed;
    top: 70px; left: 0; right: 0; bottom: 0;
    background: rgba(6, 8, 16, .97);
    backdrop-filter: blur(20px);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;       /* ← arriba, no centrado */
    padding-top: 32px;
    gap: 0;
    z-index: 199;
    overflow-y: auto;
  }
  .nav.open { display: flex; }

  /* ── Links principales ── */
  .nav > a {
    font-size: 18px;
    font-weight: 600;
    padding: 14px 28px;
    width: 100%;
    text-align: center;
    color: var(--c-text-1);
    border-bottom: 1px solid rgba(255,255,255,.06);
  }
  .nav > a:hover { background: rgba(255,255,255,.05); }

  /* ── Dropdown wrapper ── */
  .dropdown {
    width: 100%;
  }
  .dropdown > a {
    font-size: 18px;
    font-weight: 600;
    padding: 14px 28px;
    display: block;
    text-align: center;
    color: var(--c-text-1);
    border-bottom: 1px solid rgba(255,255,255,.06);
    position: relative;
  }
  /* Flecha indicativa */
  .dropdown > a::after {
    content: '▾';
    position: absolute;
    right: 28px;
    font-size: 12px;
    color: var(--c-text-3);
  }

  /* ── Sub-items del dropdown ── */
  .dropdown-content {
    position: static;          /* quitar absolute */
    transform: none;
    background: rgba(255,255,255,.03);
    border: none;
    border-radius: 0;
    box-shadow: none;
    display: none;             /* oculto por defecto en mobile */
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,.06);
  }
  /* Se muestra al hacer hover/focus en mobile via JS */
  .dropdown.mob-open .dropdown-content { display: block; }

  .dropdown-content a {
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
    color: var(--c-text-2);
    padding: 12px 24px;
    border-bottom: 1px solid rgba(255,255,255,.04);
  }
  .dropdown-content a:last-child { border-bottom: none; }
  .dropdown-content a::before { display: none; }

  /* ── Resto responsive existente ── */
  .menu-toggle { display: flex; }

  .plan-hero { padding: 48px 24px 40px; }
  .plan-stats { flex-wrap: wrap; }
  .plan-stat  { max-width: 50%; border-bottom: 1px solid var(--c-light-border); }
  .equipo-grid { grid-template-columns: 1fr; }
  .social-icons { gap: 16px; }
  #inicio { min-height: 80vh; }
}

@media (max-width: 480px) {
  .plan-progress-track { padding-left: 20px; }
  .plan-year-dot { left: -18px; width: 12px; height: 12px; }
}
