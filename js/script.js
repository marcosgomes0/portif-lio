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
    slideLista.style.transition = active ? "transform 0.3s" : "";
  }

  function changeSlide(index) {
    const activeSlide = arrayImg[index];
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

function initScroll() {
  function scrollSuave() {
    const id = this.getAttribute("href");
    const tag = document.querySelector(id);
    const altura = tag.getBoundingClientRect().top;
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

function initEnterAnimation() {
  const sessões = document.querySelectorAll(".fade");

  
  function windowScroll() {
    sessões.forEach((sessão)=> {
      const altura = sessão.getBoundingClientRect().top - (window.innerHeight) * 0.825
      if(altura < 0){
        console.log('foi')
        sessão.classList.add('ativo')
      }
    })
  }
    // const apre = document.querySelector('.apre-container')
    // const altura = apre.getBoundingClientRect().top - (window.innerHeight)*0.7
    // if(altura < 0){
    //   apre.classList.add('ativo')
    // }
    

  window.addEventListener("scroll", windowScroll);
}

initEnterAnimation();
