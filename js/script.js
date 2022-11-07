function initBurgerMenu() {
  const linksMenu = document.querySelectorAll(".header-list a");
  const mobileMenu = document.querySelector(".menu-mobile");
  const linhas = document.querySelectorAll(".menu-mobile > div");
  const mobileLista = document.querySelector(".navega");

  function toggleMenu() {
    mobileLista.classList.toggle("ativo");
    linhas.forEach((linha) => {
      linha.classList.toggle("ativo");
    });
  }
  // Evento de click no menu hamburguer
  mobileMenu.addEventListener("click", toggleMenu);

  function linkClick(e) {
    e.preventDefault();
    mobileLista.classList.remove("ativo");
  }
  // Remoção do menu após o click em algum link
  linksMenu.forEach((link) => {
    link.addEventListener("click", linkClick);
  });
}

initBurgerMenu();

const slide = document.querySelector(".slide");
const slideLista = document.querySelector('.slide-list')

const dist = {
  finalPosition: 0,
  startX: 0,
  moviPosition: 0,
  moviment: 0,
};

function moveSlide(pos){
  dist.moviPosition = pos
  slideLista.style.transform = `translate3d(${pos}px, 0, 0)`
}

function updatePosition(clientX){
  const movimento = dist.startX - clientX
  return dist.finalPosition - movimento
}

function onMove(e) {
  const posição = updatePosition(e.clientX)
  moveSlide(posição)
}

function onStart(e) {
  e.preventDefault();
  dist.startX = e.clientX
  slide.addEventListener("mousemove", onMove);
}

function onEnd() {
  slide.removeEventListener("mousemove", onMove);
  dist.finalPosition = dist.moviPosition
}

slide.addEventListener("mousedown", onStart);
slide.addEventListener("mouseup", onEnd);
