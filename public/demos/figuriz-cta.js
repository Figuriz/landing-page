/*
 * Contacto de Figuriz en las demos y bocetos (public/demos/<slug>/index.html).
 * Agrega una franja arriba y, en las demos, una tarjeta al final con el WhatsApp de Figuriz.
 * Se carga con <script src="/demos/figuriz-cta.js" defer></script> antes de </body>.
 * Si regenerás las demos con build.py, sumá esa línea a la plantilla.
 */
(function () {
  "use strict";

  // Mismo número que figura en llms.txt y en el sitio (NEXT_PUBLIC_WHATSAPP_NUMBER).
  var WHATSAPP = "5492494495524";
  var SITIO = "https://figuriz.com";

  var RUBROS = {
    "demo-pedidos": "distribuidoras",
    "demo-fabrica": "fábricas de alimentos",
    "demo-corralon": "corralones y ferreterías",
    "demo-taller": "talleres mecánicos",
    "demo-cabanas": "cabañas y hoteles",
    "demo-restaurante": "restaurantes",
    "demo-salon": "salones de eventos",
    "demo-inmobiliaria": "inmobiliarias",
    "demo-consultorio": "consultorios",
    "demo-veterinaria": "veterinarias",
    "demo-repuestos": "casas de repuestos",
    "demo-usados": "agencias de usados",
    "demo-agronomia": "agronomías",
    "demo-acopio": "acopios y cooperativas",
    "demo-transporte": "expresos y logística",
    "demo-gimnasio": "gimnasios"
  };

  var partes = location.pathname.split("/").filter(Boolean);
  var slug = partes[partes.indexOf("demos") + 1] || "";
  var esDemo = Object.prototype.hasOwnProperty.call(RUBROS, slug);

  var para = "";
  try {
    para = (new URLSearchParams(location.search).get("para") || "").trim().slice(0, 60);
  } catch (e) {}

  var negocioBoceto = (document.title.split("·")[0] || "").trim();

  var mensaje = esDemo
    ? "¡Hola! Vi la demo para " + RUBROS[slug] + " en figuriz.com" +
      (para ? " (la preparada para " + para + ")" : "") +
      " y me interesa para mi negocio. ¿Podemos charlar?"
    : "¡Hola! Vi el boceto de página" + (negocioBoceto ? " de " + negocioBoceto : "") +
      " en figuriz.com y quiero saber más.";

  var wa = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(mensaje);

  var css =
    ".fgz-strip{background:#0C0C10;color:#EEEAE3;font:500 13.5px/1.35 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;position:relative;z-index:25}" +
    ".fgz-strip-in{max-width:1120px;margin:0 auto;padding:8px 16px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}" +
    ".fgz-strip a{color:inherit}" +
    ".fgz-strip .fgz-txt{flex:1 1 220px;min-width:0}" +
    ".fgz-strip .fgz-txt b{color:#fff}" +
    ".fgz-btn{display:inline-flex;align-items:center;gap:6px;background:#C1121F;color:#fff!important;text-decoration:none;font:700 13px/1 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;padding:8px 12px;border-radius:99px;white-space:nowrap}" +
    ".fgz-btn:hover{background:#A00F1A}" +
    ".fgz-btn:focus-visible,.fgz-link:focus-visible{outline:2px solid #fff;outline-offset:2px}" +
    ".fgz-btn svg{width:15px;height:15px;flex:none}" +
    ".fgz-card{max-width:1120px;margin:8px auto 24px;padding:0 16px;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}" +
    ".fgz-card-in{background:#0C0C10;color:#EEEAE3;border-radius:16px;padding:20px;display:flex;flex-direction:column;gap:10px;border-left:4px solid #C1121F}" +
    ".fgz-card h2{margin:0;font:800 20px/1.2 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#fff}" +
    ".fgz-card p{margin:0;font-size:14.5px;line-height:1.45;opacity:.85}" +
    ".fgz-card .fgz-row{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:4px}" +
    ".fgz-card .fgz-btn{font-size:14.5px;padding:11px 16px}" +
    ".fgz-link{color:#EEEAE3;font-size:14px;text-underline-offset:3px}";

  var icono =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3Z"/></svg>';

  function iniciar() {
    if (document.querySelector(".fgz-strip")) return;

    var estilo = document.createElement("style");
    estilo.textContent = css;
    document.head.appendChild(estilo);

    var franja = document.createElement("div");
    franja.className = "fgz-strip";
    franja.setAttribute("role", "region");
    franja.setAttribute("aria-label", "Figuriz");
    franja.innerHTML =
      '<div class="fgz-strip-in">' +
      '<span class="fgz-txt">' +
      (esDemo
        ? '<b>Demo de <a href="' + SITIO + '">Figuriz</a></b> con datos de ejemplo. ¿Lo querés para tu negocio?'
        : '<b>Boceto hecho por <a href="' + SITIO + '">Figuriz</a>.</b> ¿Te gusta? Lo ajustamos con tus fotos.') +
      "</span>" +
      '<a class="fgz-btn" href="' + wa + '" target="_blank" rel="noopener">' + icono + "Escribinos</a>" +
      "</div>";
    document.body.insertBefore(franja, document.body.firstChild);

    if (!esDemo) return;

    var tarjeta = document.createElement("section");
    tarjeta.className = "fgz-card";
    tarjeta.setAttribute("aria-label", "Contacto con Figuriz");
    tarjeta.innerHTML =
      '<div class="fgz-card-in">' +
      "<h2>¿Te sirve para " + (para ? escapar(para) : "tu negocio") + "?</h2>" +
      "<p>Lo armamos con tus productos, tus clientes y tu forma de trabajar. Arrancamos por una parte chica, con precio cerrado y por escrito.</p>" +
      '<div class="fgz-row">' +
      '<a class="fgz-btn" href="' + wa + '" target="_blank" rel="noopener">' + icono + "Hablar por WhatsApp</a>" +
      '<a class="fgz-link" href="' + SITIO + '/demos">Ver demos de otros rubros</a>' +
      "</div></div>";

    var main = document.querySelector("main");
    if (main && main.parentNode) {
      main.parentNode.insertBefore(tarjeta, main.nextSibling);
    } else {
      document.body.appendChild(tarjeta);
    }
  }

  function escapar(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
