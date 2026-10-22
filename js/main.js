(function () {
  const menuBtn = document.getElementById("menuBtn");
  const siteNav = document.getElementById("siteNav");

  if (menuBtn && siteNav) {
    menuBtn.addEventListener("click", () => {
      const open = siteNav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 959px)").matches) {
          siteNav.classList.remove("is-open");
          menuBtn.setAttribute("aria-expanded", "false");
          menuBtn.setAttribute("aria-label", "Abrir menú");
        }
      });
    });
  }

  document.querySelectorAll(".accordion__trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panelId = btn.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);
      if (!panel) return;
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      panel.classList.toggle("is-open", !expanded);
    });
  });

  const waForm = document.getElementById("contactForm");
  if (waForm) {
    waForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre")?.value.trim() || "";
      const empresa = document.getElementById("empresa")?.value.trim() || "";
      const servicio = document.getElementById("servicio")?.value || "";
      const correo = document.getElementById("correo")?.value.trim() || "";
      const pais = document.getElementById("pais")?.value || "";
      const mensaje = document.getElementById("mensaje")?.value.trim() || "";

      if (!nombre || !mensaje) {
        alert("Por favor complete nombre y mensaje.");
        return;
      }

      const text = [
        "Hola SFFContables, escribo desde la web.",
        `Nombre: ${nombre}`,
        empresa ? `Empresa: ${empresa}` : "",
        servicio ? `Servicio: ${servicio}` : "",
        correo ? `Correo: ${correo}` : "",
        pais ? `País: ${pais}` : "",
        `Mensaje: ${mensaje}`,
      ]
        .filter(Boolean)
        .join("\n");

      window.open(
        "https://wa.me/50767387942?text=" + encodeURIComponent(text),
        "_blank",
        "noopener"
      );
    });
  }
})();