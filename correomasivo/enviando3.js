function enviarcorreomasivo() {
  var checkboxes = document.getElementsByName("correo[]");
  var seleccionados = [];

  var totala = 0;

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      seleccionados.push(checkboxes[i].value);
    }
  }

  document.getElementById("totalaenviar").value = seleccionados.length;
  document.getElementById("cola").value = 0;

  if (seleccionados.length > 0) {
    for (let i = 0; i < seleccionados.length; i++) {
      const element = seleccionados[i];
    }
  } else {
    alert("No hay correos Seleccionados.");
    return;
  }

  enviar();
}

function eliminarcorreo(id) {
  conexion1 = crearXMLHttpRequest();
  conexion1.onreadystatechange = cargaeliminar;
  conexion1.open("GET", "eliminarcorreop.php?id=" + id, true);
  conexion1.send(null);
}

function cargaeliminar() {
  var error2 = conexion1.responseText;

  if (conexion1.readyState == 4) {
    if (parseInt(error2) == 20) {
      lista();
    }
  }
}

function registraremail() {
  var email = document.getElementById("emailnew").value.toLowerCase(); // Convertir a minúsculas
  // Expresión regular para validar el formato del correo electrónico
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    conexion1 = crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaregistrar;
    conexion1.open("GET", "registraremail.php?email=" + email, true);
    conexion1.send(null);
  } else {
    alert("ESTE EMAIL ES INCORRECTO: " + email);
  }
}

function enviar() {
  var email = "williamggv@gmail.com";
  var asunto = "ejemplo del mensaje";

  var mensaje = "ESTE ES UN NUEVO MENSAJE A ENVIAR";

  var checkboxes = document.getElementsByName("correo[]");
  var cola = document.getElementById("cola").value;

  var total = 0;

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      total = total + 1;
      if (parseInt(total) - 1 == parseInt(cola)) {
        alert(checkboxes[i].value);

        email = checkboxes[i].value;

        document.getElementById("cola").value = parseInt(cola) + 1;

        conexion1 = crearXMLHttpRequest();
        conexion1.onreadystatechange = cargarenviar;
        conexion1.open(
          "GET",
          "enviarEmail.php?email=" +
            email +
            "&asunto=" +
            asunto +
            "&mensaje=" +
            mensaje,
          true
        );
        conexion1.send(null);

        return;
      }
    }
  }
}

function cargarenviar() {
  var detalles4 = document.getElementById("descripcion");

  var error2 = conexion1.responseText;

  if (conexion1.readyState == 4) {
    if (parseInt(error2.substring(0, 2)) == 20) {
      var colita = document.getElementById("cola").value;
      var totalaenviar = document.getElementById("totalaenviar").value;

      if (parseInt(colita) == parseInt(totalaenviar)) {
        detalles4.innerHTML = "Correos Enviados";
      } else {
        enviar();
      }
    } else {
      detalles4.innerHTML = error2;
    }
  } else {
    var colita = document.getElementById("cola").value;
    var totalaenviar = document.getElementById("totalaenviar").value;
    detalles4.innerHTML = "Enviando " + colita + "/" + totalaenviar;
  }
}

function cargaregistrar() {
  var detalles4 = document.getElementById("guardando");

  var error2 = conexion1.responseText;

  if (conexion1.readyState == 4) {
    if (parseInt(error2) == 20) {
      detalles4.innerHTML = "Guardado con Exito";
      setTimeout(() => {
        document.getElementById("emailnew").value = "";

        detalles4.innerHTML = "";
        lista();
      }, 1000);
    }
  } else {
    detalles4.innerHTML = "guardando...";
  }
}

function lista() {
  conexion2 = crearXMLHttpRequest();
  conexion2.onreadystatechange = cargalista;
  conexion2.open("GET", "tabla.php", true);
  conexion2.send(null);
}
function cargalista() {
  var error2 = conexion2.responseText;

  var detalles4 = document.getElementById("cargatabla");

  if (conexion2.readyState == 4) {
    detalles4.innerHTML = error2;
  }
}

function addEvent(elemento, nomevento, funcion, captura) {
  if (elemento.attachEvent) {
    elemento.attachEvent("on" + nomevento, funcion);
    return true;
  } else if (elemento.addEventListener) {
    elemento.addEventListener(nomevento, funcion, captura);
    return true;
  } else return false;
}

function crearXMLHttpRequest() {
  var xmlHttp = null;
  if (window.ActiveXObject) xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  else if (window.XMLHttpRequest) xmlHttp = new XMLHttpRequest();
  return xmlHttp;
}
