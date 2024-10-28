function enviarcorreomasivo() {
  var email = "williamggv@gmail.com";
  var asunto = "ejemplo del mensaje";

  var mensaje =
    "Este es el mensaje de prueba que deseamos enviar por el correo masivo";

  var checkboxes = document.getElementsByName("correo[]");
  var seleccionados = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      seleccionados.push(checkboxes[i].value);
    }
  }

  if (seleccionados.length > 0) {
    for (let i = 0; i < seleccionados.length; i++) {
      const element = seleccionados[i];
      alert(element);
    }
  } else {
    alert("No hay checkboxes marcados.");
  }

  conexion1 = crearXMLHttpRequest();
  conexion1.onreadystatechange = cargarenviar;
  conexion1.open(
    "GET",
    "enviarEmail2.php?email=" +
      email +
      "&asunto=" +
      asunto +
      "&mensaje=" +
      mensaje,
    true
  );
  conexion1.send(null);
}

function cargarenviar() {
  var detalles4 = document.getElementById("error");

  var error2 = conexion1.responseText;

  if (conexion1.readyState == 4) {
    if (parseInt(error2) == 20) {
      detalles4.innerHTML =
        '<font color="red">Los Datos son Incorrectos</font>';
    } else {
      detalles4.innerHTML = error2;
    }
  } else {
    detalles4.innerHTML = "Cargando... ";
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
