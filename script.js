const linksMenu = document.querySelectorAll(".header-list a");
const mobileMenu = document.querySelector(".menu-mobile");
const mobileLista = document.querySelector(".navega");

function toggleMenu() {
  mobileLista.classList.toggle("ativo");
}

mobileMenu.addEventListener("click", toggleMenu);

function linkClick() {
  mobileLista.classList.remove("ativo");
}

linksMenu.forEach((link) => {
  link.addEventListener("click", linkClick);
});
