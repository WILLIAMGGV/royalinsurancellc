const menuServiceDiv = document.getElementById("menuservice");

var cuenta = 0;

menuServiceDiv.addEventListener("mouseover", function () {
  console.log("El mouse está sobre el div de servicios");
  document.getElementById("submenu").classList.remove("hidden");
  document.getElementById("titleservice").classList.add("font-bold");
});

menuServiceDiv.addEventListener("mouseout", function () {
  console.log("El mouse ha salido del div de servicios");
  document.getElementById("submenu").classList.add("hidden");
  document.getElementById("titleservice").classList.remove("font-bold");
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service1.jpg";
});

const menu1 = document.getElementById("menu1");

menu1.addEventListener("mouseover", function () {
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service1.jpg";
  const titlesubmenu = document.getElementById("titlesubmenu");
  titlesubmenu.innerHTML = "OBAMACARE";
  const descripcionsubmenu = document.getElementById("desmenu");
  descripcionsubmenu.innerHTML =
    "Sonríe con confianza y cuida tus ojos. Nuestros seguros dentales y de visión te ofrecen una cobertura completa para mantener tu bienestar bucal y visual.";
});

const menu2 = document.getElementById("menu2");

menu2.addEventListener("mouseover", function () {
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service2.jpg";
  const titlesubmenu = document.getElementById("titlesubmenu");
  titlesubmenu.innerHTML = "MEDICARE";
  const descripcionsubmenu = document.getElementById("desmenu");
  descripcionsubmenu.innerHTML =
    "Sonríe con confianza y cuida tus ojos. Nuestros seguros dentales y de visión te ofrecen una cobertura completa para mantener tu bienestar bucal y visual.";
});

const menu3 = document.getElementById("menu3");

menu3.addEventListener("mouseover", function () {
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service3.jpg";
  const titlesubmenu = document.getElementById("titlesubmenu");
  titlesubmenu.innerHTML = "PLANES DE SEGURO DENTAL Y VISI&Oacute;N";
  const descripcionsubmenu = document.getElementById("desmenu");
  descripcionsubmenu.innerHTML =
    "Sonríe con confianza y cuida tus ojos. Nuestros seguros dentales y de visión te ofrecen una cobertura completa para mantener tu bienestar bucal y visual.";
});

const menu4 = document.getElementById("menu4");

menu4.addEventListener("mouseover", function () {
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service4.jpg";
  const titlesubmenu = document.getElementById("titlesubmenu");
  titlesubmenu.innerHTML = "P&Oacute;LIZAS DE VIDA";
  const descripcionsubmenu = document.getElementById("desmenu");
  descripcionsubmenu.innerHTML =
    "Sonríe con confianza y cuida tus ojos. Nuestros seguros dentales y de visión te ofrecen una cobertura completa para mantener tu bienestar bucal y visual.";
});

const menu5 = document.getElementById("menu5");

menu5.addEventListener("mouseover", function () {
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service5.jpg";
  const titlesubmenu = document.getElementById("titlesubmenu");
  titlesubmenu.innerHTML = "P&Oacute;LIZAS ACCIDENTALES";
  const descripcionsubmenu = document.getElementById("desmenu");
  descripcionsubmenu.innerHTML =
    "Sonríe con confianza y cuida tus ojos. Nuestros seguros dentales y de visión te ofrecen una cobertura completa para mantener tu bienestar bucal y visual.";
});

const menu6 = document.getElementById("menu6");

menu6.addEventListener("mouseover", function () {
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service6.jpg";
  const titlesubmenu = document.getElementById("titlesubmenu");
  titlesubmenu.innerHTML = "PLANES DE DESCUENTO PARA INDOCUMENTADOS";
  const descripcionsubmenu = document.getElementById("desmenu");
  descripcionsubmenu.innerHTML =
    "Sonríe con confianza y cuida tus ojos. Nuestros seguros dentales y de visión te ofrecen una cobertura completa para mantener tu bienestar bucal y visual.";
});

const menu7 = document.getElementById("menu7");

menu7.addEventListener("mouseover", function () {
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service7.jpg";
  const titlesubmenu = document.getElementById("titlesubmenu");
  titlesubmenu.innerHTML = "P&Oacute;LIZAS DE AUTOS";
  const descripcionsubmenu = document.getElementById("desmenu");
  descripcionsubmenu.innerHTML =
    "Sonríe con confianza y cuida tus ojos. Nuestros seguros dentales y de visión te ofrecen una cobertura completa para mantener tu bienestar bucal y visual.";
});

const menu8 = document.getElementById("menu8");

menu8.addEventListener("mouseover", function () {
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service8.jpg";
  const titlesubmenu = document.getElementById("titlesubmenu");
  titlesubmenu.innerHTML = "P&Oacute;LIZAS DE HOME";
  const descripcionsubmenu = document.getElementById("desmenu");
  descripcionsubmenu.innerHTML =
    "Sonríe con confianza y cuida tus ojos. Nuestros seguros dentales y de visión te ofrecen una cobertura completa para mantener tu bienestar bucal y visual.";
});

function cambiarefecto() {
  if (cuenta == 0) {
    const element2 = document.getElementById("imagenfondo");
    const element3 = document.getElementById("titleslider");
    const element4 = document.getElementById("descripcionslider");
    const element5 = document.getElementById("titleslider2");
    const element6 = document.getElementById("descripcionslider2");
    element2.classList.remove("fondo1");
    element2.classList.add("fondo2");

    setTimeout(() => {}, 3000);
    cuenta = 1;
    return;
  }

  if (cuenta == 1) {
    const element2 = document.getElementById("imagenfondo");
    const element3 = document.getElementById("titleslider");
    const element4 = document.getElementById("descripcionslider");
    const element5 = document.getElementById("titleslider2");
    const element6 = document.getElementById("descripcionslider2");
    element2.classList.remove("fondo2");
    element2.classList.add("fondo3");

    setTimeout(() => {}, 3000);
    cuenta = 2;
    return;
  }

  if (cuenta == 2) {
    const element2 = document.getElementById("imagenfondo");
    const element3 = document.getElementById("titleslider");
    const element4 = document.getElementById("descripcionslider");
    const element5 = document.getElementById("titleslider2");
    const element6 = document.getElementById("descripcionslider2");
    element2.classList.remove("fondo3");
    element2.classList.add("fondo4");

    setTimeout(() => {}, 3000);
    cuenta = 3;
    return;
  }

  if (cuenta == 3) {
    const element2 = document.getElementById("imagenfondo");
    const element3 = document.getElementById("titleslider");
    const element4 = document.getElementById("descripcionslider");
    const element5 = document.getElementById("titleslider2");
    const element6 = document.getElementById("descripcionslider2");
    element2.classList.remove("fondo4");
    element2.classList.add("fondo1");

    setTimeout(() => {}, 3000);
    cuenta = 0;
    return;
  }
}

let contador = 0;
let maxEjecuciones = 25; // Ejecutar 5 veces
let intervalId = setInterval(() => {
  cambiarefecto();
  contador++;
  if (contador >= maxEjecuciones) {
    clearInterval(intervalId);
  }
}, 10000);

function instagram() {
  window.open("https://instagram.com/01.asistentevirtual", "_blank");
}
