/* ================================================================
   CEUTESIM — style.css
   Diseño: Académico Futurista
   Paleta: Azul profundo · Dorado · Blanco frío · Grafito oscuro
   Tipografía: DM Serif Display + DM Sans
   ================================================================ */

@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;400;500;600;700&display=swap');

/* ── VARIABLES ── */
:root {
  --c-void:        #060810;
  --c-deep:        #0b0f1c;
  --c-surface:     #111827;
  --c-panel:       #141d2e;
  --c-border:      rgba(255,255,255,.07);
  --c-border-md:   rgba(255,255,255,.13);

  --c-blue-deep:   #0d2a6b;
  --c-blue:        #1a3a8f;
  --c-blue-mid:    #2554c7;
  --c-blue-light:  #3b6ef0;
  --c-blue-glow:   rgba(59,110,240,.25);

  --c-gold:        #c9a84c;
  --c-gold-light:  #e6c56a;
  --c-gold-dim:    rgba(201,168,76,.15);

  --c-text-1:      #f0f4ff;
  --c-text-2:      #a8b4d0;
  --c-text-3:      #5a6a8a;

  --c-light-bg:    #f5f7fc;
  --c-light-text:  #0d1526;
  --c-light-muted: #6b7a99;
  --c-light-border:#dde3f0;

  --c-1c-bg:   #eef2ff; --c-1c-icon: #c7d2fe; --c-1c-tag: #3730a3; --c-1c-dot: #4f46e5;
  --c-2c-bg:   #f0fdf4; --c-2c-icon: #bbf7d0; --c-2c-tag: #166534; --c-2c-dot: #16a34a;
  --c-an-bg:   #fff7ed; --c-an-icon: #fed7aa; --c-an-tag: #9a3412; --c-an-dot: #ea580c;

  --font-display: 'DM Serif Display', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;

  --r-sm:   6px;
  --r-md:   12px;
  --r-lg:   20px;
  --r-full: 999px;

  --t-fast: .15s ease;
  --t-med:  .28s ease;
  --t-slow: .6s ease;
}

/* ── RESET ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  background: var(--c-void);
  color: var(--c-text-1);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}
img, svg { display: block; }
a { color: inherit; text-decoration: none; }
.container { max-width: 1120px; margin: 0 auto; width: 100%; padding: 0 24px; }

/* ================================================================
   HEADER
   ================================================================ */
.header {
  position: sticky; top: 0; z-index: 200;
  background: rgba(6,8,16,.88);
  backdrop-filter: blur(20px) saturate(1.4);
  border-bottom: 1px solid var(--c-border);
  transition: box-shadow var(--t-med), border-color var(--t-med);
}
.header.scrolled {
  border-color: var(--c-border-md);
  box-shadow: 0 4px 40px rgba(0,0,0,.55);
}
.header-inner {
  display: flex; align-items: center;
  justify-content: space-between;
  height: 70px;
}
.brand-link { display: flex; align-items: center; gap: 13px; }
.logo       { width: 44px; height: 44px; flex-shrink: 0; filter: brightness(1.1); }
.brand-name {
  display: block;
  font-family: var(--font-display);
  font-size: 19px; letter-spacing: .04em;
  color: var(--c-text-1);
}
.brand-subtitle {
  display: block; font-size: 10px; line-height: 1.35;
  color: var(--c-text-3); margin-top: 1px;
}
.nav { display: flex; align-items: center; gap: 2px; }
.nav > a, .dropdown > a {
  font-size: 13.5px; font-weight: 500; color: var(--c-text-2);
  padding: 8px 13px; border-radius: var(--r-sm);
  transition: color var(--t-fast), background var(--t-fast);
}
.nav > a:hover, .dropdown > a:hover { color: var(--c-text-1); background: var(--c-border); }

/* Dropdown */
.dropdown { position: relative; }
.dropdown-content {
  display: none; position: absolute;
  top: calc(100% + 8px); left: 50%;
  transform: translateX(-50%);
  min-width: 210px;
  background: var(--c-surface);
  border: 1px solid var(--c-border-md);
  border-radius: var(--r-md);
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,.65);
}
.dropdown:hover .dropdown-content { display: block; }
.dropdown-content a {
  display: flex; align-items: center; gap: 10px;
  padding: 11px 18px; font-size: 13px; font-weight: 500;
  color: var(--c-text-2); border-bottom: 1px solid var(--c-border);
  transition: background var(--t-fast), color var(--t-fast);
}
.dropdown-content a:last-child { border-bottom: none; }
.dropdown-content a::before {
  content: ''; width: 5px; height: 5px; border-radius: 50%;
  background: var(--c-blue-light); flex-shrink: 0;
  opacity: 0; transition: opacity var(--t-fast);
}
.dropdown-content a:hover { background: rgba(59,110,240,.09); color: var(--c-text-1); }
.dropdown-content a:hover::before { opacity: 1; }

.menu-toggle {
  display: none; flex-direction: column; gap: 5px;
  cursor: pointer; padding: 6px; border-radius: var(--r-sm);
}
.menu-toggle span {
  width: 22px; height: 2px;
  background: var(--c-text-2); border-radius: 2px;
  transition: all var(--t-med);
}

/* ================================================================
   HERO
   ================================================================ */
#inicio {
  position: relative; min-height: 92vh;
  display: flex; align-items: center; justify-content: center;
  text-align: center; overflow: hidden; padding: 80px 24px;
  background: var(--c-void);
}
#inicio::before {
  content: ''; position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(59,110,240,.16) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
}
#inicio::after {
  content: ''; position: absolute;
  width: 800px; height: 800px; top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  background: radial-gradient(circle, rgba(26,58,143,.32) 0%, transparent 65%);
  pointer-events: none;
}
.hero-inner { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; }
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 10px; font-weight: 700; letter-spacing: 3.5px;
  text-transform: uppercase; color: var(--c-gold); margin-bottom: 22px;
}
.hero-eyebrow::before, .hero-eyebrow::after {
  content: ''; width: 28px; height: 1px; background: var(--c-gold); opacity: .5;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(44px, 7.5vw, 82px);
  line-height: 1.06; letter-spacing: -.01em;
  color: var(--c-text-1); margin-bottom: 22px;
}
.hero-title em { font-style: italic; color: var(--c-gold-light); }
.hero-subtitle {
  font-size: clamp(15px, 2vw, 17px);
  color: var(--c-text-2); font-weight: 300;
  max-width: 500px; margin: 0 auto 40px; line-height: 1.75;
}
.hero-cta {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--c-blue-mid); color: #fff;
  font-weight: 600; font-size: 14px;
  padding: 14px 32px; border-radius: var(--r-full);
  transition: background var(--t-med), transform var(--t-med), box-shadow var(--t-med);
}
.hero-cta svg { width: 16px; height: 16px; stroke: currentColor; fill: none; stroke-width: 2.5; }
.hero-cta:hover {
  background: var(--c-blue-light); transform: translateY(-2px);
  box-shadow: 0 0 40px var(--c-blue-glow);
}
.hero-scroll {
  position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--c-text-3); animation: bounce 2.2s ease infinite;
}
.hero-scroll svg { width: 18px; height: 18px; stroke: var(--c-text-3); fill: none; stroke-width: 1.5; }
@keyframes bounce {
  0%,100% { transform: translateX(-50%) translateY(0); }
  50%      { transform: translateX(-50%) translateY(7px); }
}

/* ================================================================
   CARRERAS (resumen)
   ================================================================ */
#carreras { background: var(--c-light-bg); padding: 88px 24px; }
.section-label {
  font-size: 10px; font-weight: 700; letter-spacing: 3px;
  text-transform: uppercase; color: var(--c-blue-mid); margin-bottom: 10px;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 44px);
  color: var(--c-light-text); line-height: 1.12; margin-bottom: 48px;
}
.section-title span { color: var(--c-blue-mid); }

.grid-carreras {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.carrera-card {
  background: #fff; border: 1px solid var(--c-light-border);
  border-radius: var(--r-lg); padding: 32px 28px;
  position: relative; overflow: hidden;
  transition: transform var(--t-med), box-shadow var(--t-med), border-color var(--t-med);
  cursor: pointer;
}
.carrera-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  transform: scaleX(0); transform-origin: left; transition: transform var(--t-med);
}
.carrera-card.hys::before   { background: linear-gradient(90deg,#0c3d28,#1e8a58); }
.carrera-card.log::before   { background: linear-gradient(90deg,var(--c-blue-mid),var(--c-blue-light)); }
.carrera-card.mec::before   { background: linear-gradient(90deg,#5c1020,#b52244); }
.carrera-card:hover { transform: translateY(-4px); border-color: rgba(37,84,199,.22); box-shadow: 0 12px 40px rgba(0,0,0,.1); }
.carrera-card:hover::before { transform: scaleX(1); }

.carrera-icon {
  width: 44px; height: 44px; border-radius: var(--r-md);
  background: var(--c-light-bg); border: 1px solid var(--c-light-border);
  display: grid; place-items: center; margin-bottom: 20px;
}
.carrera-icon svg { width: 22px; height: 22px; stroke: var(--c-blue-mid); fill: none; stroke-width: 1.8; }
.carrera-card h3 { font-family: var(--font-display); font-size: 20px; color: var(--c-light-text); margin-bottom: 8px; }
.carrera-card p  { font-size: 13px; color: var(--c-light-muted); line-height: 1.6; }
.carrera-link {
  display: inline-flex; align-items: center; gap: 6px;
  margin-top: 20px; font-size: 13px; font-weight: 600;
  color: var(--c-blue-mid); transition: gap var(--t-fast);
}
.carrera-link svg { width: 14px; height: 14px; stroke: currentColor; fill: none; stroke-width: 2.5; }
.carrera-card:hover .carrera-link { gap: 10px; }

/* ================================================================
   PLAN DE ESTUDIOS — compartido
   ================================================================ */
.plan-section { padding: 0; }

.plan-hero {
  padding: 72px 48px 60px;
  position: relative; overflow: hidden;
}
.plan-hero::before {
  content: ''; position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,.035) 1px, transparent 1px);
  background-size: 28px 28px; pointer-events: none;
}
.plan-hero-inner { position: relative; z-index: 1; max-width: 660px; }
.plan-breadcrumb { font-size: 11px; color: rgba(255,255,255,.42); letter-spacing: .5px; margin-bottom: 16px; }
.plan-breadcrumb span { color: rgba(255,255,255,.82); }
.plan-hero-title {
  font-family: var(--font-display);
  font-size: clamp(26px, 4vw, 44px);
  color: #fff; line-height: 1.14; margin-bottom: 14px;
}
.plan-hero-subtitle { font-size: 14px; color: rgba(255,255,255,.62); font-weight: 300; max-width: 460px; line-height: 1.72; }
.plan-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,.09); border: 1px solid rgba(255,255,255,.16);
  border-radius: var(--r-full); padding: 6px 16px;
  font-size: 11px; color: rgba(255,255,255,.86);
  margin-top: 20px; backdrop-filter: blur(4px);
}
.plan-hero-badge::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: var(--c-gold-light); }

.hero-logistica   { background: linear-gradient(135deg, #0d2a6b 0%, #1a3a8f 55%, #2554c7 100%); }
.hero-hys         { background: linear-gradient(135deg, #0c3d28 0%, #145c3c 55%, #1e8a58 100%); }
.hero-mecatronica { background: linear-gradient(135deg, #5c1020 0%, #8b1a32 55%, #b52244 100%); }

/* Stats */
.plan-stats {
  display: flex; justify-content: center;
  background: #fff; border-bottom: 1px solid var(--c-light-border);
}
.plan-stat {
  flex: 1; max-width: 200px;
  padding: 20px; text-align: center;
  border-right: 1px solid var(--c-light-border);
}
.plan-stat:last-child { border-right: none; }
.plan-stat-num   { font-family: var(--font-display); font-size: 28px; color: var(--c-light-text); }
.plan-stat-label { font-size: 11px; color: var(--c-light-muted); margin-top: 3px; }

/* Body */
.plan-body { background: var(--c-light-bg); padding: 48px 24px 72px; }
.plan-body-inner { max-width: 1080px; margin: 0 auto; }

/* Leyenda */
.plan-leyenda {
  display: flex; flex-wrap: wrap; align-items: center;
  gap: 20px; padding: 14px 20px;
  background: #fff; border: 1px solid var(--c-light-border);
  border-radius: var(--r-md); margin-bottom: 40px;
}
.plan-leyenda-label { font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--c-light-muted); }
.plan-leyenda-item { display: flex; align-items: center; gap: 7px; font-size: 13px; color: var(--c-light-text); }
.leyenda-dot { width: 9px; height: 9px; border-radius: 2px; }
.leyenda-1c    { background: var(--c-1c-dot); }
.leyenda-2c    { background: var(--c-2c-dot); }
.leyenda-anual { background: var(--c-an-dot); }

/* Progress track */
.plan-progress-track { position: relative; padding-left: 32px; }
.plan-progress-track::before {
  content: ''; position: absolute; left: 11px; top: 8px; bottom: 8px;
  width: 2px; background: var(--c-light-border); border-radius: 2px;
}

.plan-year {
  position: relative; margin-bottom: 56px;
  opacity: 0; transform: translateY(30px);
  transition: opacity .65s ease, transform .65s ease;
}
.plan-year.visible { opacity: 1; transform: translateY(0); }

.plan-year-dot {
  position: absolute; left: -26px; top: 14px;
  width: 16px; height: 16px; border-radius: 50%;
  background: #fff; border: 3px solid var(--c-blue-mid);
  box-shadow: 0 0 0 4px var(--c-light-bg); z-index: 1;
}
#plan-hys         .plan-year-dot { border-color: #1e8a58; }
#plan-mecatronica .plan-year-dot { border-color: #b52244; }

.plan-year-header { display: flex; align-items: center; gap: 14px; margin-bottom: 24px; }
.plan-year-badge {
  background: var(--c-light-text); color: #fff;
  font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
  padding: 4px 14px; border-radius: var(--r-full); white-space: nowrap; flex-shrink: 0;
}
#plan-hys         .plan-year-badge { background: #0c3d28; }
#plan-mecatronica .plan-year-badge { background: #5c1020; }

.plan-year-title { font-family: var(--font-display); font-size: 22px; color: var(--c-light-text); }
.plan-year-line  { flex: 1; height: 1px; background: var(--c-light-border); }

.plan-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(268px,1fr)); gap: 16px; }

.plan-card {
  background: #fff; border: 1px solid var(--c-light-border);
  border-radius: var(--r-md); overflow: hidden;
  transition: box-shadow var(--t-med), transform var(--t-med);
}
.plan-card:hover { box-shadow: 0 8px 30px rgba(0,0,0,.08); transform: translateY(-2px); }
.plan-card-header { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-bottom: 1px solid #f0f0f5; }
.plan-card-icon { width: 30px; height: 30px; border-radius: var(--r-sm); display: grid; place-items: center; flex-shrink: 0; }
.plan-card-icon svg { width: 14px; height: 14px; }
.plan-card-tag { font-size: 10px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; }
.plan-card-count { font-size: 11px; color: var(--c-light-muted); }

.tipo-1c .plan-card-header { background: var(--c-1c-bg); }
.tipo-1c .plan-card-icon   { background: var(--c-1c-icon); }
.tipo-1c .plan-card-tag    { color: var(--c-1c-tag); }
.tipo-1c .plan-card-icon svg { stroke: var(--c-1c-tag); fill: none; stroke-width: 2; }
.tipo-1c .plan-dot { background: var(--c-1c-dot); }

.tipo-2c .plan-card-header { background: var(--c-2c-bg); }
.tipo-2c .plan-card-icon   { background: var(--c-2c-icon); }
.tipo-2c .plan-card-tag    { color: var(--c-2c-tag); }
.tipo-2c .plan-card-icon svg { stroke: var(--c-2c-tag); fill: none; stroke-width: 2; }
.tipo-2c .plan-dot { background: var(--c-2c-dot); }

.tipo-anual .plan-card-header { background: var(--c-an-bg); }
.tipo-anual .plan-card-icon   { background: var(--c-an-icon); }
.tipo-anual .plan-card-tag    { color: var(--c-an-tag); }
.tipo-anual .plan-card-icon svg { stroke: var(--c-an-tag); fill: none; stroke-width: 2; }
.tipo-anual .plan-dot { background: var(--c-an-dot); }

.plan-materia-list { list-style: none; padding: 4px 0; margin: 0; }
.plan-materia-item {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 16px; font-size: 13px; color: #1a2035;
  border-bottom: 1px solid #f5f5f8; transition: background var(--t-fast);
}
.plan-materia-item:last-child { border-bottom: none; }
.plan-materia-item:hover { background: #f8f9fe; }
.plan-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }

/* ================================================================
   EQUIPO
   ================================================================ */
#equipo {
  background: var(--c-deep);
  padding: 96px 24px 104px;
  position: relative; overflow: hidden;
}
#equipo::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(59,110,240,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59,110,240,.04) 1px, transparent 1px);
  background-size: 48px 48px; pointer-events: none;
}
#equipo::after {
  content: ''; position: absolute; top: -200px; left: 50%;
  transform: translateX(-50%);
  width: 900px; height: 600px;
  background: radial-gradient(ellipse, rgba(26,58,143,.2) 0%, transparent 65%);
  pointer-events: none;
}

.equipo-header { text-align: center; margin-bottom: 64px; position: relative; z-index: 1; }
.equipo-eyebrow {
  font-size: 10px; font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
  color: var(--c-gold); margin-bottom: 14px;
  display: flex; align-items: center; justify-content: center; gap: 12px;
}
.equipo-eyebrow::before, .equipo-eyebrow::after {
  content: ''; width: 40px; height: 1px; background: var(--c-gold); opacity: .5;
}
.equipo-title { font-family: var(--font-display); font-size: clamp(32px,5vw,52px); color: var(--c-text-1); line-height: 1.1; }
.equipo-title span { color: var(--c-gold-light); font-style: italic; }
.equipo-subtitle { font-size: 14px; color: var(--c-text-3); margin-top: 12px; }

.equipo-grid {
  max-width: 1080px; margin: 0 auto;
  display: grid; grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  gap: 18px; position: relative; z-index: 1;
}

.miembro-card {
  background: rgba(255,255,255,.025);
  border: 1px solid var(--c-border);
  border-radius: var(--r-lg); padding: 26px 24px;
  position: relative; overflow: hidden;
  opacity: 0; transform: translateY(20px);
  transition: border-color var(--t-med), box-shadow var(--t-med), transform var(--t-med);
}
.miembro-card.visible { opacity: 1; transform: translateY(0); }
.miembro-card::before {
  content: ''; position: absolute; top: 0; left: 16px; right: 16px; height: 1px;
  background: linear-gradient(90deg, transparent, var(--c-blue-light), transparent);
  opacity: 0; transition: opacity var(--t-med);
}
.miembro-card:hover {
  border-color: rgba(59,110,240,.35);
  box-shadow: 0 0 40px rgba(59,110,240,.1), 0 12px 40px rgba(0,0,0,.4);
  transform: translateY(-3px);
}
.miembro-card:hover::before { opacity: 1; }

.miembro-num {
  position: absolute; right: 16px; bottom: 10px;
  font-family: var(--font-display); font-size: 56px;
  color: rgba(255,255,255,.03); line-height: 1;
  user-select: none; pointer-events: none;
}
.miembro-rol {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
  padding: 4px 10px; border-radius: var(--r-full);
  margin-bottom: 12px; position: relative; z-index: 1;
}
.miembro-rol::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: currentColor; opacity: .9; }

.tipo-presidente { background: rgba(201,168,76,.12); color: #e6c56a; border: 1px solid rgba(201,168,76,.28); }
.tipo-secretaria { background: rgba(59,110,240,.1);  color: #93b4f8; border: 1px solid rgba(59,110,240,.28); }
.tipo-consejera  { background: rgba(167,80,230,.1);  color: #d49af8; border: 1px solid rgba(167,80,230,.28); }
.tipo-vocero     { background: rgba(16,185,129,.1);  color: #5eead4; border: 1px solid rgba(16,185,129,.28); }

.miembro-nombre {
  font-size: 16px; font-weight: 600; color: var(--c-text-1);
  line-height: 1.3; margin-bottom: 2px; position: relative; z-index: 1;
}
.suplentes-list {
  margin-top: 14px; padding-top: 14px;
  border-top: 1px solid rgba(255,255,255,.07);
  display: flex; flex-direction: column; gap: 8px;
}
.suplente-item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; }
.suplente-item::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: #475569; flex-shrink: 0; }
.suplente-tag  { font-size: 10px; color: var(--c-text-3); margin-left: 2px; }

/* ================================================================
   SOPORTE
   ================================================================ */
#soporte { background: var(--c-light-bg); padding: 88px 24px; }
#soporte .section-title { margin-bottom: 14px; }
#soporte p { font-size: 15px; color: var(--c-light-muted); }

/* ================================================================
   FOOTER
   ================================================================ */
.footer {
  background: var(--c-void); border-top: 1px solid var(--c-border);
  padding: 64px 24px 40px; text-align: center;
}
.footer-brand-name { font-family: var(--font-display); font-size: 24px; letter-spacing: .06em; color: var(--c-text-1); }
.footer-tagline {
  font-size: 12px; color: var(--c-text-3); margin: 6px auto 0;
  max-width: 380px; line-height: 1.65;
}
.footer-divider {
  width: 48px; height: 1px;
  background: linear-gradient(90deg, transparent, var(--c-gold), transparent);
  margin: 28px auto;
}
.footer-redes-label { font-size: 10px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--c-text-3); margin-bottom: 28px; }

.social-icons { display: flex; justify-content: center; align-items: center; gap: 28px; margin-bottom: 52px; }
.social-icons a {
  position: relative; display: grid; place-items: center;
  width: 48px; height: 48px; border-radius: 50%;
  transition: transform var(--t-med);
}
.social-icons a svg { width: 24px; height: 24px; fill: currentColor; position: relative; z-index: 2; transition: filter var(--t-med), transform var(--t-med); }
.social-icons a::before {
  content: ''; position: absolute; inset: 0; border-radius: 50%;
  opacity: 0; filter: blur(14px); transform: scale(.5);
  transition: opacity var(--t-med), transform .4s ease; z-index: 1;
}
.social-icons a:hover { transform: translateY(-5px); }
.social-icons a:hover::before { opacity: 1; transform: scale(1.6); }
.social-icons a:hover svg { filter: brightness(1.25); transform: scale(1.1); }

.si-instagram { color: #e1306c; } .si-instagram::before { background: #e1306c; }
.si-facebook  { color: #1877f2; } .si-facebook::before  { background: #1877f2; }
.si-whatsapp  { color: #25d366; } .si-whatsapp::before  { background: #25d366; }
.si-tiktok    { color: #e8e8e8; } .si-tiktok::before    { background: #e8e8e8; }
.si-youtube   { color: #ff0000; } .si-youtube::before   { background: #ff0000; }

.footer-copy { font-size: 12px; color: var(--c-text-3); border-top: 1px solid var(--c-border); padding-top: 28px; }

/* ================================================================
   ANIMACIONES GLOBALES
   ================================================================ */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ================================================================
   RESPONSIVE
   ================================================================ */
@media (max-width: 768px) {
  /* Nav móvil — panel lateral desde arriba, limpio */
  .nav {
    display: none;
    position: fixed;
    top: 70px; left: 0; right: 0;
    background: #080c1a;
    border-bottom: 1px solid var(--c-border-md);
    flex-direction: column; align-items: stretch;
    gap: 0; z-index: 199;
    padding: 8px 0 16px;
    box-shadow: 0 16px 40px rgba(0,0,0,.7);
  }
  .nav.open { display: flex; }

  /* Links principales del nav */
  .nav > a {
    font-size: 16px; font-weight: 500;
    padding: 14px 28px;
    color: var(--c-text-2);
    border-bottom: 1px solid var(--c-border);
    border-radius: 0;
    text-align: left;
  }
  .nav > a:hover { color: var(--c-text-1); background: rgba(255,255,255,.04); }

  /* Dropdown en móvil */
  .dropdown { border-bottom: 1px solid var(--c-border); }
  .dropdown > a { font-size: 16px; font-weight: 500; padding: 14px 28px; display: block; }
  .dropdown-content {
    position: static; transform: none;
    background: rgba(255,255,255,.03);
    border: none; border-top: 1px solid var(--c-border);
    box-shadow: none; display: block;
    border-radius: 0;
  }
  .dropdown-content a {
    justify-content: flex-start;
    font-size: 14px; color: var(--c-text-3);
    padding: 11px 28px 11px 40px;
    border-bottom: 1px solid var(--c-border);
  }
  .dropdown-content a:last-child { border-bottom: none; }
  .dropdown-content a::before { opacity: 1; }

  /* Botón hamburguesa */
  .menu-toggle { display: flex; }

  /* Resto responsive */
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

/* ================================================================
   BIBLIOTECA DIGITAL
   ================================================================ */
#biblioteca {
  background: var(--c-void);
  padding: 0;
}

/* Header */
.bib-header {
  background: var(--c-deep);
  border-bottom: 1px solid var(--c-border);
  padding: 80px 24px 48px;
  position: relative; overflow: hidden;
}
.bib-header::before {
  content: ''; position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(59,110,240,.08) 1px, transparent 1px);
  background-size: 32px 32px; pointer-events: none;
}
.bib-header::after {
  content: ''; position: absolute; top: -160px; right: -80px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(201,168,76,.07) 0%, transparent 65%);
  pointer-events: none;
}
.bib-header-inner { max-width: 680px; position: relative; z-index: 1; }
.bib-eyebrow {
  font-size: 10px; font-weight: 700; letter-spacing: 3.5px;
  text-transform: uppercase; color: var(--c-gold); margin-bottom: 12px;
}
.bib-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 5vw, 52px);
  color: var(--c-text-1); line-height: 1.1; margin-bottom: 14px;
}
.bib-title em { font-style: italic; color: var(--c-gold-light); }
.bib-subtitle { font-size: 15px; color: var(--c-text-2); font-weight: 300; max-width: 520px; line-height: 1.7; }

/* Buscador */
.bib-search-wrap {
  margin-top: 36px; position: relative; z-index: 1;
}
.bib-search {
  display: flex; align-items: center; gap: 12px;
  background: rgba(255,255,255,.05);
  border: 1px solid var(--c-border-md);
  border-radius: var(--r-full);
  padding: 0 20px;
  max-width: 480px;
  transition: border-color var(--t-med), background var(--t-med);
}
.bib-search:focus-within {
  border-color: rgba(59,110,240,.5);
  background: rgba(59,110,240,.05);
}
.bib-search > svg { width: 16px; height: 16px; stroke: var(--c-text-3); flex-shrink: 0; }
.bib-search input {
  flex: 1; background: none; border: none; outline: none;
  font-family: var(--font-body); font-size: 14px;
  color: var(--c-text-1); padding: 14px 0;
}
.bib-search input::placeholder { color: var(--c-text-3); }
.bib-search-clear {
  background: none; border: none; cursor: pointer; padding: 4px;
  display: grid; place-items: center; opacity: 0; pointer-events: none;
  transition: opacity var(--t-fast);
}
.bib-search-clear.visible { opacity: 1; pointer-events: auto; }
.bib-search-clear svg { width: 14px; height: 14px; stroke: var(--c-text-3); }

/* Body (tabs + paneles) */
.bib-body { max-width: 1080px; margin: 0 auto; padding: 0 24px 80px; }

/* Tabs */
.bib-tabs {
  display: flex; gap: 4px;
  padding: 20px 0 0;
  border-bottom: 1px solid var(--c-border);
  margin-bottom: 36px;
  overflow-x: auto;
}
.bib-tab {
  display: flex; align-items: center; gap: 8px;
  background: none; border: none; cursor: pointer;
  font-family: var(--font-body); font-size: 13.5px; font-weight: 500;
  color: var(--c-text-3);
  padding: 10px 18px 14px;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  border-radius: var(--r-sm) var(--r-sm) 0 0;
  transition: color var(--t-fast), border-color var(--t-fast), background var(--t-fast);
  white-space: nowrap;
}
.bib-tab svg { width: 15px; height: 15px; flex-shrink: 0; transition: stroke var(--t-fast); }
.bib-tab:hover { color: var(--c-text-2); background: rgba(255,255,255,.03); }
.bib-tab.active { color: var(--c-text-1); border-bottom-color: var(--c-blue-light); }
.bib-tab.active svg { stroke: var(--c-blue-light); }

/* Contador de recursos en tab */
.bib-tab-count {
  background: var(--c-border); color: var(--c-text-3);
  font-size: 10px; font-weight: 700;
  padding: 2px 7px; border-radius: var(--r-full);
  transition: background var(--t-fast), color var(--t-fast);
}
.bib-tab.active .bib-tab-count { background: rgba(59,110,240,.2); color: var(--c-blue-light); }

/* Paneles */
.bib-panel { display: none; }
.bib-panel.active { display: block; }

/* Mensaje sin resultados */
.bib-no-results {
  text-align: center; padding: 48px 24px;
  font-size: 14px; color: var(--c-text-3);
}

/* Acordeón de materia */
.bib-materia {
  border: 1px solid var(--c-border);
  border-radius: var(--r-md);
  overflow: hidden; margin-bottom: 10px;
  transition: border-color var(--t-med);
}
.bib-materia:hover { border-color: var(--c-border-md); }
.bib-materia.open  { border-color: rgba(59,110,240,.3); }

.bib-materia-toggle {
  width: 100%; background: rgba(255,255,255,.025);
  border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px; padding: 16px 20px;
  font-family: var(--font-body);
  transition: background var(--t-fast);
}
.bib-materia-toggle:hover { background: rgba(255,255,255,.045); }
.bib-materia.open .bib-materia-toggle { background: rgba(59,110,240,.06); }

.bib-materia-info { display: flex; align-items: center; gap: 12px; }
.bib-materia-year {
  font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
  padding: 3px 10px; border-radius: var(--r-full); flex-shrink: 0;
}
.bib-materia-year.hys { background: rgba(30,138,88,.15); color: #4ade80; border: 1px solid rgba(30,138,88,.3); }
.bib-materia-year.log { background: rgba(59,110,240,.12); color: #93b4f8; border: 1px solid rgba(59,110,240,.3); }
.bib-materia-year.mec { background: rgba(181,34,68,.12);  color: #f9a8bc; border: 1px solid rgba(181,34,68,.3); }

.bib-materia-name {
  font-size: 14px; font-weight: 600; color: var(--c-text-1);
  text-align: left;
}
.bib-materia-meta { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
.bib-materia-items { font-size: 12px; color: var(--c-text-3); }
.bib-chevron {
  width: 16px; height: 16px; stroke: var(--c-text-3);
  transition: transform var(--t-med);
}
.bib-materia.open .bib-chevron { transform: rotate(180deg); }

/* Lista de recursos (colapsable) */
.bib-recursos {
  max-height: 0; overflow: hidden;
  transition: max-height .4s ease;
  border-top: 0px solid var(--c-border);
}
.bib-materia.open .bib-recursos {
  max-height: 600px;
  border-top: 1px solid var(--c-border);
}

/* Recurso individual */
.bib-recurso {
  display: flex; align-items: center; gap: 14px;
  padding: 14px 20px;
  border-bottom: 1px solid var(--c-border);
  text-decoration: none;
  transition: background var(--t-fast);
}
.bib-recurso:last-child { border-bottom: none; }
.bib-recurso:hover { background: rgba(255,255,255,.03); }

/* Ícono del recurso */
.bib-recurso-icon {
  width: 36px; height: 36px; border-radius: var(--r-sm);
  display: grid; place-items: center; flex-shrink: 0;
}
.bib-recurso-icon svg { width: 16px; height: 16px; }
.bib-recurso-icon.pdf  { background: rgba(239,68,68,.12);  }
.bib-recurso-icon.pdf svg { stroke: #f87171; }
.bib-recurso-icon.link { background: rgba(59,110,240,.12); }
.bib-recurso-icon.link svg { stroke: var(--c-blue-light); }

/* Texto del recurso */
.bib-recurso-body { flex: 1; min-width: 0; }
.bib-recurso-name {
  display: block; font-size: 13.5px; font-weight: 600;
  color: var(--c-text-1); line-height: 1.3;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.bib-recurso-desc {
  display: block; font-size: 12px; color: var(--c-text-3);
  margin-top: 2px;
}

/* Botón de acción */
.bib-recurso-action {
  display: flex; align-items: center; gap: 6px;
  font-size: 12px; font-weight: 600;
  color: var(--c-text-3); flex-shrink: 0;
  padding: 6px 12px; border-radius: var(--r-full);
  border: 1px solid var(--c-border);
  background: transparent;
  transition: color var(--t-fast), border-color var(--t-fast), background var(--t-fast);
  white-space: nowrap;
}
.bib-recurso-action svg { width: 12px; height: 12px; stroke: currentColor; }
.bib-recurso:hover .bib-recurso-action {
  color: var(--c-text-1);
  border-color: var(--c-border-md);
  background: rgba(255,255,255,.05);
}

@media (max-width: 600px) {
  .bib-recurso { flex-wrap: wrap; }
  .bib-recurso-action { width: 100%; justify-content: center; margin-top: 8px; }
  .bib-materia-name { font-size: 13px; }
}

/* ── TARJETA DRIVE (una por carrera) ── */
.bib-drive-card {
  display: flex; align-items: center; gap: 28px;
  background: rgba(255,255,255,.03);
  border: 1px solid var(--c-border-md);
  border-radius: var(--r-lg);
  padding: 36px 40px;
  margin-top: 8px;
  position: relative; overflow: hidden;
  transition: border-color var(--t-med), box-shadow var(--t-med), transform var(--t-med);
}
.bib-drive-card::before {
  content: ''; position: absolute; inset: 0;
  opacity: 0; transition: opacity var(--t-med);
}
.bib-drive-card.hys::before { background: linear-gradient(135deg, rgba(30,138,88,.08), transparent 60%); }
.bib-drive-card.log::before { background: linear-gradient(135deg, rgba(59,110,240,.08), transparent 60%); }
.bib-drive-card.mec::before { background: linear-gradient(135deg, rgba(181,34,68,.08),  transparent 60%); }
.bib-drive-card:hover { transform: translateY(-3px); }
.bib-drive-card:hover::before { opacity: 1; }
.bib-drive-card.hys:hover { border-color: rgba(30,138,88,.4);  box-shadow: 0 0 40px rgba(30,138,88,.1),  0 12px 40px rgba(0,0,0,.4); }
.bib-drive-card.log:hover { border-color: rgba(59,110,240,.4); box-shadow: 0 0 40px rgba(59,110,240,.1), 0 12px 40px rgba(0,0,0,.4); }
.bib-drive-card.mec:hover { border-color: rgba(181,34,68,.4);  box-shadow: 0 0 40px rgba(181,34,68,.1),  0 12px 40px rgba(0,0,0,.4); }

/* Ícono Google Drive */
.bib-drive-icon {
  width: 64px; height: 64px; flex-shrink: 0;
  background: rgba(255,255,255,.06);
  border: 1px solid var(--c-border-md);
  border-radius: var(--r-md);
  display: grid; place-items: center;
  position: relative; z-index: 1;
}
.bib-drive-icon svg { width: 32px; height: 28px; }

/* Texto */
.bib-drive-body { flex: 1; min-width: 0; position: relative; z-index: 1; }
.bib-drive-label {
  font-size: 10px; font-weight: 700; letter-spacing: 2px;
  text-transform: uppercase; color: var(--c-text-3); margin-bottom: 6px;
}
.bib-drive-title {
  font-family: var(--font-display);
  font-size: 22px; color: var(--c-text-1); margin-bottom: 8px;
}
.bib-drive-desc { font-size: 13.5px; color: var(--c-text-2); line-height: 1.6; max-width: 480px; }

/* Botón Abrir Drive */
.bib-drive-btn {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-body); font-size: 14px; font-weight: 600;
  padding: 13px 26px; border-radius: var(--r-full);
  white-space: nowrap; flex-shrink: 0;
  position: relative; z-index: 1;
  transition: transform var(--t-med), box-shadow var(--t-med), filter var(--t-med);
}
.bib-drive-btn svg { width: 15px; height: 15px; stroke: currentColor; }
.bib-drive-btn.hys { background: linear-gradient(135deg, #0c3d28, #1e8a58); color: #fff; }
.bib-drive-btn.log { background: linear-gradient(135deg, var(--c-blue-deep), var(--c-blue-mid)); color: #fff; }
.bib-drive-btn.mec { background: linear-gradient(135deg, #5c1020, #b52244); color: #fff; }
.bib-drive-btn:hover { transform: translateY(-2px); filter: brightness(1.15); box-shadow: 0 8px 24px rgba(0,0,0,.35); }

@media (max-width: 700px) {
  .bib-drive-card { flex-direction: column; align-items: flex-start; padding: 28px 24px; gap: 20px; }
  .bib-drive-btn  { width: 100%; justify-content: center; }
}
