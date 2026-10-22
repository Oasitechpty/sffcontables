# Rediseño SFFContables — Implementation Plan

> **For agentic workers:** executing-plans (económico: sitio estático, un solo implementador).

**Goal:** Sitio estático Netlify-ready: firma lean, herramientas satélite, Marjoris como rostro CPA, preview local.

**Architecture:** HTML semántico + CSS tokens/componentes + JS mínimo. Home corta; `/emprender`, `/calculadoras`, `/vivienda`, `/portal` como satélites. WhatsApp `+507 6738-7942` como CTA primario.

**Tech Stack:** HTML5, CSS3 (custom properties), vanilla JS, Netlify static, Google Fonts Source Serif 4 + Source Sans 3.

## Global Constraints

- Voz firma (“nosotros”); sin “abogados”
- Design system Alternativa 1 (`docs/design-system.md`)
- Sin placeholders visibles; “Desde 2012”; leyes → consultar Marjoris
- Disclaimers “estimación orientativa” en calculadoras
- Responsive 375 / 768 / 1440; WCAG AA contraste
- Preview local antes de producción

## File map

| Path | Responsibility |
|------|----------------|
| `css/tokens.css` | Variables color/tipo/espacio |
| `css/base.css` | Reset, tipografía, utilidades |
| `css/components.css` | Botones, cards, forms, nav, footer |
| `js/main.js` | Menú, acordeón, form→WA, reduced-motion |
| `js/emprender.js` | Dashboard amigable |
| `js/vivienda.js` | Simulador vivienda |
| `index.html` | Home lean |
| `emprender.html` | Emprender |
| `calculadoras.html` | Calculadoras |
| `vivienda.html` | Vivienda |
| `portal.html` | Portal (chrome unificado) |
| `images/marjoris.jpg` | Foto real |
| `netlify.toml` | Publish root |

## Tests (deben fallar en baseline; pasar en final)

- [ ] Contraste AA en pares del design system
- [ ] Navegación teclado (menú, FAQ, form)
- [ ] Sin overflow horizontal a 375px
- [ ] Cero placeholders `[NÚMERO]` / `[MES`
- [ ] Cero “abogados” en copy pública
- [ ] Lighthouse ≥90 objetivo (reportar real)
- [ ] Enlaces e imágenes OK
- [ ] Preview local sirve 200

## Tasks

### Task 1: Tokens + base CSS
- [ ] Crear `css/tokens.css`, `css/base.css`, `css/components.css`
- [ ] Verificar contraste tokens vs tabla design system

### Task 2: JS compartido
- [ ] `js/main.js` menú, FAQ, WA form, focus

### Task 3: Home
- [ ] `index.html` secciones lean + foto Marjoris

### Task 4: Emprender amigable
- [ ] `emprender.html` + `js/emprender.js` (sin “potencial de rendimiento”; inversión clara + disclaimer)

### Task 5: Calculadoras + Vivienda
- [ ] Páginas con disclaimers y CTA Marjoris

### Task 6: Portal + Netlify
- [ ] Unificar chrome; `netlify.toml`

### Task 7: Verificación + serve local
- [ ] Grep placeholders/abogados; servir `npx serve`
