!function(){const t=document.querySelectorAll(".header-list a"),e=document.querySelector(".menu-mobile"),n=document.querySelectorAll(".menu-mobile > div"),o=document.querySelector(".navega");function r(t){"#apresentacao"!=t.target.getAttribute("href")&&"#contato"!=t.target.getAttribute("href")&&"#projetos"!=t.target.getAttribute("href")||(t.preventDefault(),o.classList.remove("ativo"),n.forEach((t=>{t.classList.remove("ativo")})))}e.addEventListener("click",(function(){o.classList.toggle("ativo"),n.forEach((t=>{t.classList.toggle("ativo")}))})),t.forEach((t=>{t.addEventListener("click",r)}))}(),function(){const t=document.querySelector(".slide"),e=document.querySelector(".slide-list"),n=[...e.children].map((e=>{const n=function(e){const n=(t.offsetWidth-e.offsetWidth)/2;return-(e.offsetLeft-n)}(e);return{position:n,element:e}})),o={finalPosition:0,startX:0,moviPosition:0,moviment:0},r={prev:0,actual:0,next:0};function i(t){e.style.transition=t?"0.3s":""}function s(t){const i=n[t];[...e.children].forEach((t=>{t.classList.remove("ativo")})),e.children[t].classList.add("ativo"),function(t){const e=n.length-1;r.prev=t?t-1:void 0,r.actual=t,r.next=t==e?void 0:t+1}(t),a(i.position),o.finalPosition=i.position}function a(t){o.moviPosition=t,e.style.transform=`translate3d(${t}px, 0, 0)`}function c(t){a(function(t){const e=1.5*(o.startX-t);return o.moviment=e,o.finalPosition-e}("mousemove"==t.type?t.clientX:t.changedTouches[0].clientX))}function l(e){i(!1);const n="mousedown"==e.type?"mousemove":"touchmove";"mousedown"==e.type?(e.preventDefault(),o.startX=e.clientX):"touchstart"==e.type&&(o.startX=e.changedTouches[0].clientX),t.addEventListener(n,c)}function u(e){const n="mouseup"==e.type?"mousemove":"touchmove";t.removeEventListener(n,c),o.finalPosition=o.moviPosition,i(!0),o.moviment>120&&null!=r.next?null!=r.next&&s(r.next):o.moviment<-120&&null!=r.prev?null!=r.prev&&s(r.prev):s(r.actual)}s(1),t.addEventListener("mousedown",l),t.addEventListener("mouseup",u),t.addEventListener("touchstart",l),t.addEventListener("touchend",u)}(),function(){function t(t){if(console.log(t.target.getAttribute("href")),"#apresentacao"==t.target.getAttribute("href")||"#contato"==t.target.getAttribute("href")||"#projetos"==t.target.getAttribute("href")){const t=this.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}}document.querySelectorAll(".navega a").forEach((e=>{e.addEventListener("click",t)}))}(),function(){const t=document.querySelectorAll(".fade");window.addEventListener("scroll",(function(){t.forEach((t=>{t.getBoundingClientRect().top-.88*window.innerHeight<0&&t.classList.add("ativo")}))}))}(),function(){const t=document.querySelectorAll(".tabs li"),e=document.querySelectorAll(".conteudo > div");function n(n){const o=n.currentTarget.getAttribute("data-target"),r=document.getElementById(o);t.forEach((t=>{t.classList.remove("ativo")})),n.currentTarget.classList.add("ativo"),e.forEach((t=>{t.classList.remove("ativo")})),r.classList.add("ativo")}t.forEach((t=>{t.addEventListener("click",n)}))}(),function(){const t=document.querySelectorAll(".perfil-icons li"),e=document.querySelector(".arrow"),n=t[1];e.addEventListener("mouseover",(function(){n.classList.add("ativo")})),e.addEventListener("mouseout",(function(){setTimeout((()=>{n.classList.remove("ativo")}),1200)}))}(),function(){const t=document.querySelector(".projeto-drop"),e=document.querySelector(".drop-list");function n(){e.classList.remove("ativo")}t.addEventListener("mouseover",(function(){e.classList.add("ativo")})),t.addEventListener("mouseout",n),t.addEventListener("click",n)}(),function(){const t=document.querySelector(".card"),e=document.querySelector(".container-3d"),n=document.querySelector(".coffee > img"),o=document.querySelector(".circle"),r=document.querySelector(".infos h1");function i(e){let n=(window.innerWidth/2-e.pageX)/22,o=-(window.innerHeight/2-e.pageY)/22;t.style.transform=`rotateY(${n}deg) rotateX(${o}deg)`}function s(e){let n=(window.innerWidth/2-e.changedTouches[0].clientX)/25,o=-(window.innerHeight/2-e.changedTouches[0].clientY)/25;t.style.transform=`rotateY(${n}deg) rotateX(${o}deg)`}e.addEventListener("click",(function(t){e.addEventListener("mousemove",i),r.style.transform="translateZ(100px)",n.style.transform="translateZ(200px) rotateZ(45deg)"})),e.addEventListener("mouseleave",(function(){e.removeEventListener("mousemove",i),t.style.transform="rotateY(0deg) rotateX(0deg)",t.style.transition="all 0.5s ease",o.style.boxShadow="none",r.style.transform="translateZ(0px)",n.style.transform="translateZ(0px) rotateZ(0deg)"})),e.addEventListener("mouseenter",(()=>{t.style.transition="none"})),e.addEventListener("touchstart",(function(o){e.addEventListener("touchmove",s),r.style.transform="translateZ(100px)",n.style.transform="translateZ(200px) rotateZ(45deg)",t.style.transition="none"})),e.addEventListener("touchend",(function(){e.removeEventListener("touchmove",s),t.style.transform="rotateY(0deg) rotateX(0deg)",t.style.transition="all 0.5s ease",o.style.boxShadow="none",r.style.transform="translateZ(0px)",n.style.transform="translateZ(0px) rotateZ(0deg)"}))}(),function(){const t=document.querySelector(".animatedText");let e="SEJA BEM VINDO!",n=0,o=100;function r(){let r=e.split("");t.innerHTML="";const i=setInterval((()=>{t.innerHTML+=r[n],n++,n===e.length&&clearInterval(i)}),o)}setTimeout((()=>{e="ESPERO QUE GOSTE!",n=0,o=150,r()}),6e3),r()}();