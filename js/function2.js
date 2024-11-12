const menuServiceDiv = document.getElementById("menuservice");

var cuenta = 0;
var foto = 0;

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
    "Descubre los beneficios de Obamacare y asegúrate de tener acceso a servicios médicos de calidad sin comprometer tu bolsillo.";
});

const menu2 = document.getElementById("menu2");

menu2.addEventListener("mouseover", function () {
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service2.jpg";
  const titlesubmenu = document.getElementById("titlesubmenu");
  titlesubmenu.innerHTML = "MEDICARE";
  const descripcionsubmenu = document.getElementById("desmenu");
  descripcionsubmenu.innerHTML =
    "Prepárate para disfrutar de una jubilación plena y sin preocupaciones con Medicare.";
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
    "Protege a tus seres queridos y asegura su futuro. Obtén la tranquilidad de saber que tu legado está seguro.";
});

const menu5 = document.getElementById("menu5");

menu5.addEventListener("mouseover", function () {
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service5.jpg";
  const titlesubmenu = document.getElementById("titlesubmenu");
  titlesubmenu.innerHTML = "P&Oacute;LIZAS ACCIDENTALES";
  const descripcionsubmenu = document.getElementById("desmenu");
  descripcionsubmenu.innerHTML =
    "Desde pequeños percances hasta eventos imprevistos, asegúrate de estar cubierto en cualquier situación.";
});

const menu6 = document.getElementById("menu6");

menu6.addEventListener("mouseover", function () {
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service10.jpg";
  const titlesubmenu = document.getElementById("titlesubmenu");
  titlesubmenu.innerHTML = "PLANES DE DESCUENTO PARA INDOCUMENTADOS";
  const descripcionsubmenu = document.getElementById("desmenu");
  descripcionsubmenu.innerHTML =
    "Los planes de descuento para indocumentados  son una opción asequible para acceder a atención médica.";
});

const menu7 = document.getElementById("menu7");

menu7.addEventListener("mouseover", function () {
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service11.jpg";
  const titlesubmenu = document.getElementById("titlesubmenu");
  titlesubmenu.innerHTML = "P&Oacute;LIZAS DE AUTOS";
  const descripcionsubmenu = document.getElementById("desmenu");
  descripcionsubmenu.innerHTML =
    "Las pólizas de auto, protegen a los propietarios de vehículos contra pérdidas financieras por accidentes, robo, daños y lesiones a terceros.";
});

const menu8 = document.getElementById("menu8");

menu8.addEventListener("mouseover", function () {
  const imgService = document.getElementById("imgservice");
  imgService.src = "/img/service12.png";
  const titlesubmenu = document.getElementById("titlesubmenu");
  titlesubmenu.innerHTML = "P&Oacute;LIZAS DE HOME";
  const descripcionsubmenu = document.getElementById("desmenu");
  descripcionsubmenu.innerHTML =
    "Las pólizas de hogar, o seguros de vivienda, protegen tu propiedad y su contenido contra pérdidas financieras causadas por incendios, robos, vandalismo, desastres naturales y responsabilidad civil.";
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

function cambiarefecto2() {
  if (foto == 0) {
    const elementfoto = document.getElementById("imagencarmen");
    elementfoto.classList.remove("animate__animated", "animate__fadeIn");
    elementfoto.classList.add("animate__animated", "animate__fadeIn");
    elementfoto.src = "img/carmen/carmen22.jpeg";
    const elementfoto2 = document.getElementById("imagencarmen2");
    elementfoto2.classList.remove("animate__animated", "animate__fadeIn");
    elementfoto2.classList.add("animate__animated", "animate__fadeIn");
    elementfoto2.src = "img/carmen/carmen22.jpeg";

    setTimeout(() => {
      elementfoto.classList.remove("animate__animated", "animate__fadeIn");
      elementfoto2.classList.remove("animate__animated", "animate__fadeIn");
    }, 3000);

    foto = 1;
    return;
  }

  if (foto == 1) {
    const elementfoto = document.getElementById("imagencarmen");
    elementfoto.classList.remove("animate__animated", "animate__fadeIn");
    elementfoto.classList.add("animate__animated", "animate__fadeIn");
    elementfoto.src = "img/carmen/carmen33.jpeg";
    const elementfoto2 = document.getElementById("imagencarmen2");
    elementfoto2.classList.remove("animate__animated", "animate__fadeIn");
    elementfoto2.classList.add("animate__animated", "animate__fadeIn");
    elementfoto2.src = "img/carmen/carmen33.jpeg";

    setTimeout(() => {
      elementfoto.classList.remove("animate__animated", "animate__fadeIn");
      elementfoto2.classList.remove("animate__animated", "animate__fadeIn");
    }, 3000);
    foto = 2;
    return;
  }

  if (foto == 2) {
    const elementfoto = document.getElementById("imagencarmen");
    elementfoto.classList.remove("animate__animated", "animate__fadeIn");
    elementfoto.classList.add("animate__animated", "animate__fadeIn");
    elementfoto.src = "img/carmen/carmen44.jpeg";
    const elementfoto2 = document.getElementById("imagencarmen2");
    elementfoto2.classList.remove("animate__animated", "animate__fadeIn");
    elementfoto2.classList.add("animate__animated", "animate__fadeIn");
    elementfoto2.src = "img/carmen/carmen44.jpeg";

    setTimeout(() => {
      elementfoto.classList.remove("animate__animated", "animate__fadeIn");
      elementfoto2.classList.remove("animate__animated", "animate__fadeIn");
    }, 3000);
    foto = 3;
    return;
  }

  if (foto == 3) {
    const elementfoto = document.getElementById("imagencarmen");
    elementfoto.classList.remove("animate__animated", "animate__fadeIn");
    elementfoto.classList.add("animate__animated", "animate__fadeIn");
    elementfoto.src = "img/carmen/carmen55.jpeg";
    const elementfoto2 = document.getElementById("imagencarmen2");
    elementfoto2.classList.remove("animate__animated", "animate__fadeIn");
    elementfoto2.classList.add("animate__animated", "animate__fadeIn");
    elementfoto2.src = "img/carmen/carmen55.jpeg";

    setTimeout(() => {
      elementfoto.classList.remove("animate__animated", "animate__fadeIn");
      elementfoto2.classList.remove("animate__animated", "animate__fadeIn");
    }, 3000);
    foto = 4;
    return;
  }

  if (foto == 4) {
    const elementfoto = document.getElementById("imagencarmen");
    elementfoto.classList.remove("animate__animated", "animate__fadeIn");
    elementfoto.classList.add("animate__animated", "animate__fadeIn");
    elementfoto.src = "img/carmen/carmen11.jpeg";
    const elementfoto2 = document.getElementById("imagencarmen2");
    elementfoto2.classList.remove("animate__animated", "animate__fadeIn");
    elementfoto2.classList.add("animate__animated", "animate__fadeIn");
    elementfoto2.src = "img/carmen/carmen11.jpeg";

    setTimeout(() => {
      elementfoto.classList.remove("animate__animated", "animate__fadeIn");
      elementfoto2.classList.remove("animate__animated", "animate__fadeIn");
    }, 3000);
    foto = 0;
    return;
  }
}

let contador = 0;
let maxEjecuciones = 100; // Ejecutar 5 veces
let intervalId = setInterval(() => {
  cambiarefecto();
  cambiarefecto2();
  contador++;
  if (contador >= maxEjecuciones) {
    clearInterval(intervalId);
  }
}, 10000);

function instagram() {
  window.open("https://instagram.com/01.asistentevirtual", "_blank");
}
