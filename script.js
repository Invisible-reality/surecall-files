// Mobile Menu

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll Animation

const sections = document.querySelectorAll(".about-section, .secondsection");

function revealSections() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (sectionTop < window.innerHeight - revealPoint) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Typing Animation (Hero Headline)

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const typedTarget = document.getElementById("typed-heading");
const heroPhrases = [
  "Solutions, Debit orders, Debt collection, Insurance and smart Add-ons",
];

function typeHeadline(el, text, speed = 55) {
  if (!el) return;

  if (prefersReducedMotion) {
    el.textContent = text;
    return;
  }

  let i = 0;
  el.textContent = "";

  (function typeChar() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    }
  })();
}

window.addEventListener("DOMContentLoaded", () => {
  typeHeadline(typedTarget, heroPhrases[0]);
});

// Move Second Picture Into Place On Scroll

const aboutImage = document.querySelector(".about-image");

if (aboutImage) {
  if (prefersReducedMotion) {
    aboutImage.classList.add("in-view");
  } else if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            imageObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 },
    );

    imageObserver.observe(aboutImage);
  } else {
    // Fallback for older browsers
    aboutImage.classList.add("in-view");
  }
}

