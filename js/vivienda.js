(function () {
  const precio = document.getElementById("precio");
  const precioOut = document.getElementById("precioOut");
  const region = document.getElementById("region");
  const titulo = document.getElementById("viviendaTitulo");
  const body = document.getElementById("viviendaBody");
  const lista = document.getElementById("viviendaLista");

  function money(n) {
    return "B/. " + Number(n).toLocaleString("es-PA");
  }

  function update() {
    const p = Number(precio.value);
    const reg = region.value;
    precioOut.textContent = money(p);

    const bullets = [];
    if (p <= 120000) {
      titulo.textContent = "Perfil: vivienda de menor valor";
      body.textContent =
        "En este rango suele haber más espacio para beneficios de transferencia e inmueble, sujetos a requisitos de vivienda nueva o principal. La región seleccionada puede influir en programas de interés preferencial.";
      bullets.push("Priorice validar exenciones de ITBI aplicables a vivienda nueva.");
      bullets.push("Evalúe inscripción como patrimonio familiar tributario si será vivienda principal.");
    } else if (p <= 200000) {
      titulo.textContent = "Perfil: rango intermedio";
      body.textContent =
        "Es frecuente que exista un tramo con tratamiento reducido sobre el excedente en transferencia, y reglas distintas de inmueble según catastro. Conviene modelar el expediente antes de firmar.";
      bullets.push("Revise qué porción del precio podría quedar sujeta a tasa plena o reducida.");
      bullets.push("Confirme con el banco si aplica interés preferencial en su región (" + (reg === "1" ? "Panamá / Oeste" : "Colón / resto") + ").");
    } else {
      titulo.textContent = "Perfil: valor alto";
      body.textContent =
        "Los beneficios suelen ser más acotados. Aun así, la estructura del impuesto de inmueble y la documentación correcta evitan pagos indebidos o rechazos de trámite.";
      bullets.push("Enfoque en catastro, patrimonio familiar (si aplica) y calendario de pagos.");
      bullets.push("Solicite revisión del expediente antes de escriturar.");
    }

    bullets.push("SFFContables arma el expediente y da seguimiento hasta la aplicación del beneficio, cuando proceda.");
    lista.innerHTML = bullets.map((b) => "<li>" + b + "</li>").join("");
  }

  precio.addEventListener("input", update);
  region.addEventListener("change", update);
  update();
})();