/* =================================================================
   CHRISTINA & TIMO · HOCHZEITSWEBSITE
   Vanilla JavaScript — keine Bibliotheken nötig.

   Funktionen:
   1. Smooth Scroll für CTA-/Navigations-Links
   2. FAQ-Accordion (zugänglich, mit aria-expanded)
   3. Dezente Fade-Up-Animation beim Scrollen
   4. Microsoft-Forms-Platzhalter automatisch ausblenden,
      sobald ein <iframe> eingebettet wurde
   ================================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ===============================================================
     1 · SMOOTH SCROLL
     Für alle internen Links (#anker). data-scroll am Hero-Button
     wird mit abgedeckt, da es ebenfalls ein #-Link ist.
     =============================================================== */
  var navOffset = 70; // Höhe der sticky-Navigation berücksichtigen

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var targetId = link.getAttribute("href");
      if (targetId === "#" || targetId.length < 2) return;

      var target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });


  /* ===============================================================
     2 · FAQ-ACCORDION
     Jede Frage ist ein <button>. Beim Klick wird die Antwort
     auf/zugeklappt und aria-expanded aktualisiert.
     =============================================================== */
  var faqButtons = document.querySelectorAll(".faq__question");

  faqButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var item = button.parentElement;          // .faq__item
      var answer = item.querySelector(".faq__answer");
      var isOpen = button.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        // schließen
        button.setAttribute("aria-expanded", "false");
        answer.style.maxHeight = null;
      } else {
        // öffnen — maxHeight auf tatsächliche Inhaltshöhe setzen
        button.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // Bei Größenänderung offene Panels neu berechnen (z.B. Drehung Smartphone)
  window.addEventListener("resize", function () {
    document.querySelectorAll('.faq__question[aria-expanded="true"]').forEach(function (button) {
      var answer = button.parentElement.querySelector(".faq__answer");
      answer.style.maxHeight = answer.scrollHeight + "px";
    });
  });


  /* ===============================================================
     3 · FADE-UP BEIM SCROLLEN
     Elemente mit der Klasse .reveal bekommen .is-visible,
     sobald sie in den Sichtbereich kommen (IntersectionObserver).
     =============================================================== */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);  // nur einmal animieren
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback für sehr alte Browser: sofort sichtbar
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }


  /* ===============================================================
     4 · MICROSOFT-FORMS-PLATZHALTER STEUERN
     Sobald im Anmeldebereich ein <iframe> vorhanden ist,
     wird der Platzhalter automatisch ausgeblendet.
     -> Du musst also nur den iframe einfügen, sonst nichts.
     =============================================================== */
  var rsvpForm = document.querySelector(".rsvp__form");
  if (rsvpForm) {
    var iframe = rsvpForm.querySelector("iframe");
    var placeholder = document.getElementById("rsvpPlaceholder");

    if (iframe) {
      // iframe für einheitliches Styling vorbereiten
      iframe.classList.add("rsvp__iframe");
      if (placeholder) placeholder.style.display = "none";
    }
  }

});
