(function () {
  const sectors = [
    {
      id: "logistica",
      nombre: "Logística de última milla y courier",
      sector: "Transporte",
      crecimiento: "+10.4%",
      inversion: "media",
      resumen:
        "Impulsado por el comercio electrónico y la posición logística de Panamá. Requiere operación ágil, control de costos y cumplimiento tributario claro.",
    },
    {
      id: "ecommerce",
      nombre: "Tienda en línea y comercio electrónico",
      sector: "Comercio",
      crecimiento: "+8.8%",
      inversion: "baja",
      resumen:
        "Barrera de entrada más baja, pero exige aviso de operación, facturación correcta y control de inventarios/plataformas de pago.",
    },
    {
      id: "mayorista",
      nombre: "Importación y distribución mayorista",
      sector: "Comercio",
      crecimiento: "+8.8%",
      inversion: "alta",
      resumen:
        "Mayor capital de trabajo e inventarios. Conviene modelar flujo de caja, ITBMS y estructura societaria desde el inicio.",
    },
    {
      id: "construccion",
      nombre: "Servicios para la construcción",
      sector: "Construcción",
      crecimiento: "+4.5%",
      inversion: "media",
      resumen:
        "Proyectos por avance, contratos y costos por obra. La contabilidad por proyecto evita sorpresas en rentabilidad.",
    },
    {
      id: "restaurante",
      nombre: "Restaurante, cafetería o franquicia",
      sector: "Hoteles y restaurantes",
      crecimiento: "+4.1%",
      inversion: "alta",
      resumen:
        "El costeo de menú, las licencias municipales y la planilla son críticos. Acompañamos los trámites y el orden financiero.",
    },
    {
      id: "turismo",
      nombre: "Turismo de experiencias y hospedaje boutique",
      sector: "Hoteles y restaurantes",
      crecimiento: "+4.1%",
      inversion: "media",
      resumen:
        "Temporadas, registro turístico y obligaciones según el tipo de hospedaje. Evalúe cumplimiento antes de invertir.",
    },
    {
      id: "alimentos",
      nombre: "Alimentos procesados y manufactura ligera",
      sector: "Manufactura",
      crecimiento: "+3.6%",
      inversion: "media",
      resumen:
        "Permisos, costos de producción y capital de trabajo. Útil proyectar punto de equilibrio con números reales.",
    },
    {
      id: "agro",
      nombre: "Agroindustria con valor agregado",
      sector: "Agro",
      crecimiento: "+2.9%",
      inversion: "media",
      resumen:
        "Ciclos largos y logística. La estructura tributaria y de costos debe diseñarse con calma.",
    },
  ];

  const list = document.getElementById("sectorList");
  const title = document.getElementById("detailTitle");
  const body = document.getElementById("detailBody");
  const meta = document.getElementById("detailMeta");
  const cta = document.getElementById("detailCta");
  let filter = "todas";
  let selected = sectors[0].id;

  function renderList() {
    const items = sectors.filter((s) => filter === "todas" || s.inversion === filter);
    list.innerHTML = items
      .map(
        (s) => `
      <button type="button" class="choice-card${s.id === selected ? " is-selected" : ""}" data-id="${s.id}">
        <strong>${s.nombre}</strong>
        <span>${s.sector} · Crecimiento ref. ${s.crecimiento} · Inversión ${s.inversion}</span>
      </button>`
      )
      .join("");

    list.querySelectorAll(".choice-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        selected = btn.getAttribute("data-id");
        renderList();
        renderDetail();
        document.getElementById("sectorDetail")?.focus();
      });
    });
  }

  function renderDetail() {
    const s = sectors.find((x) => x.id === selected) || sectors[0];
    title.textContent = s.nombre;
    body.textContent = s.resumen;
    meta.innerHTML = `
      <div><dt style="font-size:0.8rem;color:var(--color-ink-muted)">Sector</dt><dd style="margin:0;font-weight:700">${s.sector}</dd></div>
      <div><dt style="font-size:0.8rem;color:var(--color-ink-muted)">Crecimiento de referencia</dt><dd style="margin:0;font-weight:700">${s.crecimiento}</dd></div>
      <div><dt style="font-size:0.8rem;color:var(--color-ink-muted)">Nivel de inversión (orientativo)</dt><dd style="margin:0;font-weight:700;text-transform:capitalize">${s.inversion}</dd></div>`;
    cta.href =
      "https://wa.me/50767387942?text=" +
      encodeURIComponent(
        `Hola Marjoris, me interesa orientación para abrir un negocio de: ${s.nombre}.`
      );
  }

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filter = btn.getAttribute("data-filter");
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const visible = sectors.filter((s) => filter === "todas" || s.inversion === filter);
      if (!visible.some((s) => s.id === selected) && visible[0]) selected = visible[0].id;
      renderList();
      renderDetail();
    });
  });

  const style = document.createElement("style");
  style.textContent =
    ".filter-btn.is-active{border-color:var(--color-accent);background:var(--color-accent-soft);color:var(--color-primary)}";
  document.head.appendChild(style);

  renderList();
  renderDetail();
})();