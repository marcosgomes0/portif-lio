// Função responsável pelo funcionamento do menu hamburguer
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
    linhas.forEach((linha) => {
      linha.classList.remove("ativo");
    });
  }
  // Remoção do menu após o click em algum link
  linksMenu.forEach((link) => {
    link.addEventListener("click", linkClick);
  });
}
initBurgerMenu();


// Função responsável pelo slide na sessão de design 
function initSlide() {
  const slide = document.querySelector(".slide");
  const slideLista = document.querySelector(".slide-list");

  const arrayImg = [...slideLista.children].map((element) => {
    const position = slidePosition(element);
    return {
      position,
      element,
    };
  });

  const dist = {
    finalPosition: 0,
    startX: 0,
    moviPosition: 0,
    moviment: 0,
  };

  const slidePositions = {
    prev: 0,
    actual: 0,
    next: 0,
  };

  function slidePosition(element) {
    const margin = (slide.offsetWidth - element.offsetWidth) / 2;
    return -(element.offsetLeft - margin);
  }

  function slideIndex(index) {
    const last = arrayImg.length - 1;
    slidePositions.prev = index ? index - 1 : undefined;
    slidePositions.actual = index;
    slidePositions.next = index == last ? undefined : index + 1;
  }

  function slideTransition(active) {
    slideLista.style.transition = active ? "0.3s" : "";
  }

  function changeSlide(index) {
    const activeSlide = arrayImg[index];
    const scale = [...slideLista.children];
    scale.forEach((item) => {
      item.classList.remove("ativo");
    });
    slideLista.children[index].classList.add("ativo");
    slideIndex(index);
    moveSlide(activeSlide.position);
    dist.finalPosition = activeSlide.position;
  }
  changeSlide(1);

  function nextSlide() {
    if (slidePositions.next != undefined) {
      changeSlide(slidePositions.next);
    }
  }

  function prevSlide() {
    if (slidePositions.prev != undefined) {
      changeSlide(slidePositions.prev);
    }
  }

  function autoChangeSlide() {
    if (dist.moviment > 120 && slidePositions.next != undefined) {
      nextSlide();
    } else if (dist.moviment < -120 && slidePositions.prev != undefined) {
      prevSlide();
    } else {
      changeSlide(slidePositions.actual);
    }
  }

  function moveSlide(pos) {
    dist.moviPosition = pos;
    slideLista.style.transform = `translate3d(${pos}px, 0, 0)`;
  }

  function updatePosition(clientX) {
    const movimento = (dist.startX - clientX) * 1.5;
    dist.moviment = movimento;
    return dist.finalPosition - movimento;
  }

  function onMove(e) {
    const pointerPosition =
      e.type == "mousemove" ? e.clientX : e.changedTouches[0].clientX;
    const posição = updatePosition(pointerPosition);
    moveSlide(posição);
  }

  function onStart(e) {
    console.log(e);
    slideTransition(false);
    const movetype = e.type == "mousedown" ? "mousemove" : "touchmove";
    if (e.type == "mousedown") {
      e.preventDefault();
      dist.startX = e.clientX;
    } else if (e.type == "touchstart") {
      dist.startX = e.changedTouches[0].clientX;
    }

    slide.addEventListener(movetype, onMove);
  }

  function onEnd(e) {
    const movetype = e.type == "mouseup" ? "mousemove" : "touchmove";
    slide.removeEventListener(movetype, onMove);
    dist.finalPosition = dist.moviPosition;
    slideTransition(true);
    autoChangeSlide();
  }

  slide.addEventListener("mousedown", onStart);
  slide.addEventListener("mouseup", onEnd);
  slide.addEventListener("touchstart", onStart);
  slide.addEventListener("touchend", onEnd);
}
initSlide();

// Função responsável pelo scroll suave dentro na página a partir do clik em um link no header
function initScroll() {
  function scrollSuave() {
    const id = this.getAttribute("href");
    const tag = document.querySelector(id);
    tag.scrollIntoView({
      behavior: "smooth",
    });
  }

  const links = document.querySelectorAll(".navega a");
  links.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });
}
initScroll();

// Adiciona um efeito de entrada a medida que é feito scroll pela página
function initEnterAnimation() {
  const sessões = document.querySelectorAll(".fade");

  function windowScroll() {
    sessões.forEach((sessão) => {
      const altura =
        sessão.getBoundingClientRect().top - window.innerHeight * 0.88;
      if (altura < 0) {
        sessão.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", windowScroll);
}
initEnterAnimation();


// função responsável pela navegação em tabs na parte da apresentação pessoal
function nav() {
  const tabs = document.querySelectorAll(".tabs li");
  const tags = document.querySelectorAll(".conteudo > div");

  function handleTab(e) {
    const data = e.currentTarget.getAttribute("data-target");
    const tag = document.getElementById(data);

    tabs.forEach((item) => {
      item.classList.remove("ativo");
    });

    e.currentTarget.classList.add("ativo");
    console.log(e.currentTarget);

    tags.forEach((item) => {
      item.classList.remove("ativo");
    });
    tag.classList.add("ativo");
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", handleTab);
  });
}
nav();


// função responsável por fazer a seta aparecer indicando o ícone "behance"
function seta() {
  const icons = document.querySelectorAll(".perfil-icons li");
  const arrow = document.querySelector(".arrow");
  const icon = icons[1];

  function arrowOut() {
    setTimeout(() => {
      icon.classList.remove("ativo");
    }, 1200);
  }
  function arrowActive() {
    icon.classList.add("ativo");
  }
  arrow.addEventListener("mouseover", arrowActive);
  arrow.addEventListener("mouseout", arrowOut);
}
seta();

// Adiciona o drop-menu no header do projeto

function dropMenu() {
  const projeto = document.querySelector(".projeto-drop");
  const drop = document.querySelector(".drop-list");

  function closeNav() {
    drop.classList.remove("ativo");
  }
  function navProject() {
    drop.classList.add("ativo");
  }
  projeto.addEventListener("mouseover", navProject);
  projeto.addEventListener("mouseout", closeNav);
  projeto.addEventListener("click", closeNav);
}
dropMenu();


function card3d(){

const card = document.querySelector(".card");
const container = document.querySelector(".container-3d");
const coffeeImg = document.querySelector(".coffee > img");
const circle = document.querySelector(".circle");
const title = document.querySelector(".infos h1");

  function removeMouseMove() {
  container.removeEventListener("mousemove", cardMove);
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = "all 0.5s ease";
  circle.style.boxShadow = "none";
  title.style.transform = "translateZ(0px)";
  coffeeImg.style.transform = "translateZ(0px) rotateZ(0deg)";
}

function cardMove(e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = -(window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}

function addMouseMove(e) {
  container.addEventListener("mousemove", cardMove);
  title.style.transform = "translateZ(100px)";
  coffeeImg.style.transform = "translateZ(200px) rotateZ(45deg)";
}

container.addEventListener("click", addMouseMove);
container.addEventListener("mouseleave", removeMouseMove);
container.addEventListener("mouseenter", () => {
  card.style.transition = "none";
})

function touchMove(e) {
  let xAxis = (window.innerWidth / 2 - e.changedTouches[0].clientX) / 15;
  let yAxis = -(window.innerHeight / 2 - e.changedTouches[0].clientY) / 15;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}

  function removeTouchMove() {
  container.removeEventListener("touchmove", touchMove);
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = "all 0.5s ease";
  circle.style.boxShadow = "none";
  title.style.transform = "translateZ(0px)";
  coffeeImg.style.transform = "translateZ(0px) rotateZ(0deg)";
}

function addTouchMove(e) {
  container.addEventListener("touchmove", touchMove);
  title.style.transform = "translateZ(100px)";
  coffeeImg.style.transform = "translateZ(200px) rotateZ(45deg)";
}

container.addEventListener("touchstart", addTouchMove);
container.addEventListener("touchend", removeTouchMove);

}

card3d()