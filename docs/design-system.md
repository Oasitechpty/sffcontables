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

**Decisión recomendada: Alternativa 1 (Bosque institucional).** Conserva el verde ya asociado a SFF, cambia el terracota por **latón/oro apagado** (más informe financiero que startup) y fondos marfil.

---

## Alternativa 1 — Bosque institucional *(recomendada)*

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-primary` | `#0E2A2B` | Header, hero, footer |
| `--color-primary-deep` | `#0A2122` | Hover oscuro |
| `--color-surface` | `#F7F4EE` | Fondo página |
| `--color-surface-elevated` | `#FFFFFF` | Cards |
| `--color-ink` | `#142423` | Texto principal |
| `--color-ink-muted` | `#3A4F4E` | Texto secundario |
| `--color-accent` | `#8B6914` | CTA / acento único |
| `--color-accent-soft` | `#E8D5A3` | Badges suaves |
| `--color-border` | `#D9D2C5` | Bordes |
| `--color-success` | `#1B5E45` | Éxito |
| `--color-warning` | `#8A5A00` | Aviso |
| `--color-error` | `#9B2C2C` | Error |
| `--color-focus` | `#8B6914` | Anillo de foco |

### Contraste AA (Alternativa 1)

| Par | Ratio | Norma |
|-----|-------|-------|
| `#F7F4EE` / `#0E2A2B` | 13.81:1 | AA ✓ |
| `#142423` / `#F7F4EE` | 14.64:1 | AA ✓ |
| `#3A4F4E` / `#F7F4EE` | 7.94:1 | AA ✓ |
| `#FFFFFF` / `#8B6914` | 5.09:1 | AA ✓ (CTA) |
| `#0E2A2B` / `#E8D5A3` | 10.46:1 | AA ✓ |

---

## Alternativa 2 — Marino contable

| Token | Hex |
|-------|-----|
| Primary | `#0F172A` |
| Accent | `#A16207` |
| Background | `#F8FAFC` |
| Ink | `#020617` |
| Muted | `#475569` |

Contraste: blanco/`#0F172A` 17.85:1; `#A16207`/`#F8FAFC` 4.71:1; blanco/`#A16207` 4.92:1 — todos AA.

Usar si se prefiere look banca internacional; rompe más con el verde actual.

---

## Tipografía

| Rol | Familia | Justificación |
|-----|---------|---------------|
| Titulares | **Source Serif 4** | Editorial, serio, legible en web; menos “legal ancient” que EB Garamond |
| Cuerpo / UI | **Source Sans 3** | Pareja coherente (Adobe Source), UI clara, `tabular-nums` |
| Fallback | `Georgia, "Times New Roman", serif` / `system-ui, sans-serif` | |

**Escala:** 12 / 14 / 16 / 18 / 22 / 28 / 36 / 48  
**Cuerpo:** 17–18 px · line-height 1.6 · medida 60–75 ch  
**Cifras:** `font-variant-numeric: tabular-nums`

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
