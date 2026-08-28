// =========================================================
// Mobilmeny — öppna/stäng navigationen
// =========================================================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Stäng menyn när man klickar på en länk (bra på mobil)
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// =========================================================
// Animera kompetens-staplarna när de blir synliga
// =========================================================
const skillFills = document.querySelectorAll(".skill__fill");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

skillFills.forEach(fill => skillObserver.observe(fill));

// =========================================================
// Kontaktformulär (utan backend — visar bara en bekräftelse)
// =========================================================
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  // Här skulle du normalt skicka datan till en server eller tjänst
  // (t.ex. Formspree, EmailJS) eftersom GitHub Pages inte kör backend-kod.
  formStatus.textContent = `Tack ${name}! Meddelandet är redo att skickas (koppla ett formulär-API för att faktiskt skicka det).`;
  contactForm.reset();
});

// =========================================================
// Uppdatera årtalet i footern automatiskt
// =========================================================
document.getElementById("year").textContent = new Date().getFullYear();
