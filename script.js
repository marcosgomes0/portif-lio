const linksMenu = document.querySelectorAll(".header-list a");
const mobileMenu = document.querySelector(".menu-mobile");
const linhas = document.querySelectorAll(".menu-mobile > div");
const mobileLista = document.querySelector(".navega");





function toggleMenu() {
  mobileLista.classList.toggle("ativo");
  linhas.forEach(linha=>{
    linha.classList.toggle('ativo')
  })
}

["click", "touchstart"].forEach((eventos) => {
  mobileMenu.addEventListener(eventos, toggleMenu);
});

function linkClick(e) {
  e.preventDefault()
  mobileLista.classList.remove("ativo");
}

linksMenu.forEach((link) => {
  link.addEventListener("click", linkClick);
});
