# Design System — SFFContables

**Proyecto:** SFFContables (CPA · Panamá)  
**Enfoque:** Híbrido A+B+C — home lean (A), herramientas satélite (B), Marjoris como rostro CPA de la firma (C)  
**Voz:** Firma en “nosotros”; Marjoris Rodríguez Pineda, CPA, contacto directo  
**Stack visual:** Minimalismo / Swiss + Trust & Authority (UI UX Pro Max)  
**Motion:** 150–250 ms; `prefers-reduced-motion` → sin animación

---

## Análisis de color (formalidad contable)

| Dirección | Referencia de mercado | Lectura |
|-----------|----------------------|---------|
| Marino + latón | Banca / finanzas tradicionales (UI UX Pro Max: Banking) | Máxima formalidad “Big Four” |
| Verde petróleo + latón | Evolución del brand actual `#0E2A2B` | Formal, distintivo, no fintech |
| Azul brillante / gradientes | SaaS startup | **Evitar** — poco serio para CPA |

**Decisión aplicada (2026-10-21): Alternativa 2 — Marino moderno** (UI UX Pro Max: Authority navy + trust gold). Más formal y contemporánea para firmas contables.

---

## Paleta activa — Marino + ámbar

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-primary` | `#0F172A` | Hero, footer |
| `--color-primary-soft` | `#1E293B` | Paneles |
| `--color-surface` | `#F8FAFC` | Fondo |
| `--color-surface-elevated` | `#FFFFFF` | Cards / header |
| `--color-ink` | `#0F172A` | Texto |
| `--color-ink-muted` | `#475569` | Secundario |
| `--color-accent` | `#B45309` | CTA |
| `--color-accent-soft` | `#FFEDD5` | Badges |
| `--color-border` | `#E2E8F0` | Bordes |
| `--color-focus` | `#1E3A8A` | Foco |

### Tipografía activa (moderna, sin apilar letras)

| Rol | Familia |
|-----|---------|
| Titulares | **Outfit** (letter-spacing negativo suave) |
| Cuerpo | **Work Sans** |

**Anti-hacinamiento:** sin `text-transform: uppercase` + tracking amplio; eyebrows en frase normal; measure ~34–42 ch; nav corta (5 ítems); copy breve.

---

## Forma y estilo

- Radios: **6 px** (botones/inputs), **8 px** (cards)
- Sombras: `0 1px 2px rgba(14,42,43,.06)` máx.
- Rejilla 8 px · contenedor **max-width: 1120px** (≈1200 con padding)
- Iconos: SVG lineales 1.5–1.75 stroke (Heroicons-style); **sin emojis**
- Foto: solo `images/marjoris.jpg` (real); sin stock
- Gráficos: limpios, tipo informe (barras/líneas sobrias)

---

## Componentes (estados)

### Botón primario
Normal `#8B6914` texto blanco → Hover `#6F5410` → Focus ring 2px offset → Activo scale 0.98 → Disabled opacity 0.45

### Botón secundario
Borde `#0E2A2B` / fondo transparente → Hover fondo `#0E2A2B` texto claro

### Botón texto
Subrayado offset; color ink; hover accent

### Card
Fondo blanco, borde 1px `#D9D2C5`, padding 24px, radio 8px

### Formulario
Label visible; input 16px min; borde; focus ring accent; error borde `#9B2C2C` + mensaje

### Acordeón FAQ
Botón full-width; `aria-expanded`; panel con padding

### Insignia CPA
Chip borde primary, texto small caps / tracking

### Footer
Primary bg; enlaces muted claros; aviso Ley 81 + enlace privacidad

### Calculadora / dashboard
Misma tipografía tabular; disclaimers “estimación orientativa”; CTA “Consultar con Marjoris” → WhatsApp

---

## Movimiento

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Transiciones por defecto: `150–200ms ease`.

---

## Arquitectura de páginas

| Página | Rol |
|--------|-----|
| `/` | Home lean: hero, confianza, firma+Marjoris, servicios, casos, proceso, planes, FAQ, contacto |
| `/emprender.html` | Dashboard reestructurado (amigable) |
| `/calculadoras.html` | Herramientas fiscales |
| `/vivienda.html` | Simulador exoneraciones |
| `/portal.html` | Portal clientes (existente, chrome unificado) |

Nav home: Inicio · Servicios · Casos · Herramientas (dropdown/página) · Contacto + CTA WhatsApp

---

## Copy rules

- No “abogados” / “grupo de abogados”
- Firma: “nosotros / SFFContables”
- Marjoris: contacto CPA visible (foto + WhatsApp)
- Dudas legales/tasas → WhatsApp Marjoris (no afirmar sin verificación)
- Placeholders visibles **prohibidos** en build final (`[NÚMERO]`, `[MES]`)
- Años: “Desde 2012” (alineado a trayectoria), no “+8 años”
