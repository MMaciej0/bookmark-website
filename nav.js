const menuToggler = document.querySelector(".mobile-menu-toggle");
const nav = document.querySelector(".primary-navigation");
const logo = document.querySelector(".logo");

menuToggler.addEventListener("click", () => {
  // disable scrolling when menu is open
  document.body.classList.toggle("overflow");

  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    menuToggler.setAttribute("aria-expanded", true);
    logo.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    menuToggler.setAttribute("aria-expanded", false);
    setTimeout(() => logo.setAttribute("aria-expanded", false), 400);
  }
});
