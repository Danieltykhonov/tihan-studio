const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");
const menuLinks = menu.querySelectorAll("a");

function openMenu() {
  burger.classList.add("is-open");
  menu.classList.add("is-open");
  burger.setAttribute("aria-expanded", "true");
  burger.setAttribute("aria-label", "Close menu");
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  burger.classList.remove("is-open");
  menu.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("no-scroll");
}

burger.addEventListener("click", () => {
  if (menu.classList.contains("is-open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close after clicking a link
menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

// Close with the Esc key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.classList.contains("is-open")) {
    closeMenu();
  }
});

// Close if the screen is resized to desktop width
window.matchMedia("(min-width: 768px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});
