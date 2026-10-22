# Auditoría Fase 1 — SFFContables

**Fecha:** 2026-10-21  
**URL auditada:** https://agent-6acc7e80f7fe4f610b--gorgeous-kelpie-9244d2.netlify.app/  
**Canónico declarado:** https://www.sffcontables.com/  
**Estado:** Puerta 1 — pendiente de aprobación

## Resumen ejecutivo

El preview es una landing densa (≈121 KB HTML monolítico, 16 secciones) con buena intención de confianza y WhatsApp, pero con sobrecarga de navegación y herramientas, placeholders visibles, voz inconsistente, riesgo legal en cifras/leyes, y SEO incompleto. La producción canónica es otra versión más corta y también lleva `noindex`.

### Línea base (evidencia)

| Métrica | Valor |
|---------|-------|
| Lighthouse Performance | **55** |
| Lighthouse Accessibility | **94** |
| Lighthouse Best Practices | **100** |
| Lighthouse SEO | **69** |
| LCP / FCP / SI | 9.2 s / 9.2 s / 15.9 s |
| CLS / TBT | 0 / 0 ms |
| Pantallazos | `baseline/baseline-{375,768,1440}.png` |
| Inventario | `baseline/INVENTORY.md` |

---

## Hallazgos por eje

### 1. Diseño visual

| Sev. | Hallazgo | Evidencia | Corrección propuesta |
|------|----------|-----------|----------------------|
| Medio | Tipografía genérica (Arial + Cormorant SC solo en logo): no transmite firma editorial | `font-family: Arial` dominante | Design system Fase 2: serif titulares + sans UI |
| Medio | Estética híbrida: verde petróleo serio + ilustraciones tipo startup/fintech | Hero SVG “ESTADO DE RESULTADOS”, dashboard emprendimiento | Ilustración sobria tipo informe; menos “app” |
| Menor | Muchos estilos inline; sin tokens; radios 999px (pills) vs bordes rectos mezclados | HTML monolítico | Variables CSS, radios 4–8 px |
| Menor | Acento terracota `#B4512C` en ivory `#F3ECE0` = 4.3:1 (falla AA texto pequeño) | Lighthouse color-contrast | Oscurecer acento o agrandar/peso |

**Veredicto:** Se acerca a firma seria en color, pero se diluye hacia plantilla/producto digital por densidad y widgets.

### 2. Arquitectura y UX

| Sev. | Hallazgo | Evidencia | Corrección propuesta |
|------|----------|-----------|----------------------|
| Crítico | Nav ≈10 enlaces + Portal + Agendar: alta carga cognitiva | Snapshot nav | 5–6 ítems máx. en home; resto en páginas o footer |
| Crítico | Home acumula: dashboard emprendimiento, calculadoras, vivienda, blog, revista, timeline, chatbot | 16 `<section>` | Conservar / agrupar / mover / eliminar (ver matriz abajo) |
| Medio | CTAs WhatsApp ×≈22 menciones + sticky + “Agendar” + chatbot | Grep wa.me / WhatsApp | 1 CTA primario + sticky + form; resto contextual |
| Medio | `/calculadoras` y `/portal` existen pero la home duplica calculadoras | Páginas 200 OK | Home: teaser; detalle en `/calculadoras` |

**Matriz YAGNI (propuesta):**

| Bloque | Acción | Motivo |
|--------|--------|--------|
| Hero + credenciales | Conservar | Confianza + conversión |
| Quiénes somos / Ley 81 | Conservar (compactar) | Credibilidad |
| Servicios | Conservar | Core |
| Industrias | Conservar o fusionar con servicios | Prueba de expertise |
| Calculadoras (embed) | Mover a `/calculadoras` + teaser | Reduce ruido en home |
| Dashboard emprendimiento | Eliminar o página “Emprender” | Riesgo “potencial de rendimiento”; no es CPA core |
| Vivienda / simulador | Conservar (sección o página) | Diferenciador claro |
| Metodología (4 pasos) | Conservar compacto | Reduce fricción |
| Timeline trayectoria | Conservar acortado o página “Trayectoria” | Prueba; hoy compite con +8 años |
| Credenciales / foto | Conservar | Confianza |
| Casos | Conservar (3–4) | Prueba social sin nombres |
| Planes / acompañamiento | Conservar 3–4 cards | Clarifica oferta |
| Blog FAQ | Conservar acordeón corto | SEO + objeciones |
| Revista | Eliminar o “próximamente” sin placeholder | `[MES 2026]` visible |
| Chatbot diagnóstico | Mover/simplificar o unificar con form WhatsApp | Compite con CTA principal |
| Formulario contacto | Conservar | Conversión |

**Orden ideal home:** Hero → Confianza (CPA/Ley 81) → Servicios → Prueba (casos + trayectoria breve) → Proceso → Planes → FAQ → Contacto/WhatsApp. Herramientas (calculadoras, vivienda) como entradas secundarias.

### 3. Contenido y credibilidad

| Sev. | Hallazgo | Evidencia | Corrección propuesta |
|------|----------|-----------|----------------------|
| Crítico | Placeholder `Idoneidad CPA N.º [NÚMERO]` | Footer | Completar o quitar número hasta tenerlo |
| Crítico | Placeholder revista `[MES 2026]` | Sección blog/revista | Quitar revista o fecha real |
| Crítico | `+8 años` vs trayectoria `2012 – hoy` (~14 años) | Trust bar + timeline JS | Alinear cifra a criterio único (años CPA / finanzas / firma) |
| Crítico | Leyes citadas deben verificarse: Ley 546/2026, Ley 468/2025, Ley 513/2026 + tasas 2026 | Simulador vivienda, caso pasantías | Lista PENDIENTE + fuente oficial o retirar |
| Medio | Voz mixta: “grupo/nosotros” vs “he resuelto/cuénteme” | `#nosotros` vs `#casos` | Elegir voz firma o persona (pregunta Puerta 1) |
| Medio | “Contadores y abogados” sin nombres de abogados | Title, hero, chips | Aclarar estructura o nombrar equipo legal |
| Medio | “Potencial de rendimiento” en dashboard | Badge `#dPot` | Si se mantiene: disclaimer más visible; mejor quitar métrica |
| Menor | Disclaimers “estimación orientativa” existen (bien) | Calculadoras / vivienda | Mantener y unificar wording |

### 4. Conversión

| Sev. | Hallazgo | Evidencia | Corrección propuesta |
|------|----------|-----------|----------------------|
| Medio | Propuesta de valor diluida entre muchas ofertas | Hero genérico + 6+ servicios + herramientas | Hero: 1 promesa + 1 CTA WhatsApp |
| Medio | CTAs en competencia (Agendar / WA / sticky / chatbot / form) | UI | Jerarquía: primario WA, secundario servicios |
| Menor | Form envía a WhatsApp (bien para fricción baja) pero campo correo sin `<label for>` | `#correo` | Label + mensaje de qué pasa con los datos |
| Menor | Falta prueba social cuantitativa real (sin inventar) | — | Logos clientes solo con permiso; o “referencias a solicitud” (ya hay) |

### 5. Accesibilidad (WCAG 2.2 AA)

| Sev. | Hallazgo | Evidencia | Corrección propuesta |
|------|----------|-----------|----------------------|
| Medio | Fallos de contraste: `#B4512C`/`#F3ECE0` 4.3; `#7A8C8A`/`#fff` 3.53; texto claro `#D6E2DE`/`#A9BDB9` sobre ivory en números grandes | Lighthouse | Ajustar tokens en design system |
| Medio | `label-content-name-mismatch` en timeline y botón sticky (aria-label ≠ texto visible) | Lighthouse | Alinear nombres accesibles |
| Menor | Input `#correo` sin `label for="correo"` | HTML | Añadir label |
| Menor | Menú móvil OK (`aria-expanded`); botones 44px en varios controles | markup | Mantener y auditar todos los targets |

### 6. Móvil y rendimiento

| Sev. | Hallazgo | Evidencia | Corrección propuesta |
|------|----------|-----------|----------------------|
| Crítico | Performance 55; LCP/FCP 9.2 s (lab en preview) | Lighthouse | Medir también prod; reducir JS/DOM; critical CSS; diferir chatbot |
| Medio | HTML monolítico 121 KB + JS embebido grande | `index.html` | Separar CSS/JS; lazy sections |
| Menor | Foto Marjoris ≈57 KB (aceptable); fuentes Google bloqueantes posibles | Cormorant SC | `font-display: swap`; subset |
| Menor | Sticky WA puede tapar contenido en 375 | Screenshot 375 | Offset safe-area; no solapar CTAs del hero |

### 7. SEO y datos estructurados

| Sev. | Hallazgo | Evidencia | Corrección propuesta |
|------|----------|-----------|----------------------|
| Crítico | Preview: `x-robots-tag: noindex` | Lighthouse is-crawlable | Esperado en deploy preview; no usar como URL canónica |
| Crítico | Producción `sffcontables.com` responde con `robots` noindex/nofollow | Fetch prod | **Confirmar si es intencional**; si no, quitar para indexar |
| Medio | Sin JSON-LD (`AccountingService` / `ProfessionalService` / `LocalBusiness`) | Grep | Añadir schema Panamá + NAP |
| Medio | Un solo H1 OK; OG básico presente | meta tags | Completar `og:image` dimensiones; Twitter card |
| Menor | Title habla de “abogados” — alinear con realidad legal | title | Depende de pregunta de posicionamiento |

### 8. Legal y confianza

| Sev. | Hallazgo | Evidencia | Corrección propuesta |
|------|----------|-----------|----------------------|
| Crítico | No hay página/enlace claro de Política de privacidad | Solo copy Ley 81 en sección | Página o modal + enlace footer |
| Medio | Formulario y chatbot recogen datos sin aviso de tratamiento al enviar | Chat + form | Texto corto + enlace Ley 81 antes de enviar |
| Medio | Chatbot promete preparación por “contadores y abogados” | Dialog asistente | Alinear con oferta real |
| Menor | Cumplimiento Ley 81 mencionado (positivo) | Sección nosotros | Mantener y vincular a política |

---

## Enfoques de rediseño (2–3)

### A — Firma lean (home corta)
Home de 7–8 secciones; herramientas fuera.  
**Pros:** Confianza, conversión, YAGNI. **Contras:** Menos “juguetes” para SEO/tráfico.

### B — Hub institucional + herramientas (recomendado)
Home sobria de firma; `/calculadoras`, vivienda y portal como satélites.  
**Pros:** Equilibra rigor y utilidad; limpia nav. **Contras:** Más páginas a mantener.

### C — Marca personal CPA-first
Marjoris como eje; firma como respaldo.  
**Pros:** Cercanía WhatsApp. **Contras:** Debilita “grupo/abogados” si no hay equipo visible.

**Recomendación:** **B**, con voz unificada (firma en 3ª persona + Marjoris como contacto CPA), verde petróleo conservado, tipografía editorial, sin dashboard de emprendimiento en home.

---

## PENDIENTE (cliente)

- Número de idoneidad CPA  
- Fotografías adicionales (si hay)  
- Verificación oficial Ley 546/2026, 468/2025, 513/2026 y tasas 2026  
- Texto/fecha revista o decisión de retirar  
- Política de privacidad  
- Confirmar si `noindex` en producción es intencional  
- Confirmar alcance real de servicios legales / abogados  

---

## Preguntas Puerta 1 (máx. 5)

Ver mensaje de entrega al usuario.
