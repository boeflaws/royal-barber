// ============================================================
// CONFIGURACIÓN: cambia este número por el WhatsApp real.
// Formato internacional, solo dígitos, sin "+" ni espacios.
// Ejemplo para Marruecos: 212612345678
// El valor actual es PROVISIONAL y no corresponde a ningún negocio real.
// ============================================================
const WHATSAPP_NUMBER = "212600000000";

function waLink(text) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
}

// Todos los elementos con data-wa abren WhatsApp con ese mensaje
document.querySelectorAll("[data-wa]").forEach(function (el) {
  el.href = waLink(el.dataset.wa);
  el.target = "_blank";
  el.rel = "noopener";
});

// Formulario: compone el mensaje y abre WhatsApp
document.getElementById("sendWa").addEventListener("click", function () {
  var name = document.getElementById("name").value.trim();
  var service = document.getElementById("service").value;
  var when = document.getElementById("when").value.trim();

  var msg = "Hola, soy " + (name || "un cliente") +
    " y quiero reservar: " + service + "." +
    (when ? " Preferiría: " + when + "." : "");

  window.open(waLink(msg), "_blank", "noopener");
});

// Menú móvil
var menuBtn = document.getElementById("menuBtn");
var nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  var open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});
