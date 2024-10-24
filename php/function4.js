function obtenerdatos() {
  //console.log(document.getElementById("royal_zipcode").value);
  var zipcode = document.getElementById("royal_zipcode").value;
  var encontrado = false;

  var permitidos = [
    "FL",
    "AL",
    "TX",
    "GA",
    "TN",
    "UT",
    "NC",
    "SC",
    "CA",
    "VA",
    "MI",
    "LA",
    "KY",
    "OR",
    "WA",
    "NJ",
    "NE",
    "OH",
    "MD",
    "NM",
    "NV",
    "PA",
    "WV",
    "IL",
    "AZ",
    "IN",
  ];

  console.log(permitidos);

  if (zipcode.length > 4 && /^\d+$/.test(zipcode)) {
    console.log(zipcode);
    document.getElementById("mostrarinfo").classList.add("hidden");
    document.getElementById("loading_id").classList.remove("hidden");

    try {
      fetch(
        "https://app.zipcodebase.com/api/v1/search?apikey=20dac3a0-874a-11ef-8526-cb7f3f82705a&codes=" +
          zipcode
      )
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          console.log(datos);
          if (datos.results.length == 0) {
            console.log("no hay nada");
          } else {
            for (let i = 0; i < datos.results[zipcode].length; i++) {
              if (datos.results[zipcode][i].country_code == "US") {
                console.log(datos.results[zipcode][i].city);
                console.log(datos.results[zipcode][i].state);
                console.log(datos.results[zipcode][i].state_code);
                document.getElementById("royal_state").value =
                  datos.results[zipcode][i].state_code;
                document.getElementById("royal_city").value =
                  datos.results[zipcode][i].city;

                encontrado = true;
                document.getElementById("mostrarinfo").classList.remove("mt-8");
                document.getElementById("loading_id").classList.add("hidden");

                if (permitidos.includes(datos.results[zipcode][i].state_code)) {
                  document.getElementById("mostrarinfo").innerHTML =
                    '<span><span class="text-white font-medium">State: </span><span>' +
                    datos.results[zipcode][i].state +
                    '</span></span><span><span class="text-white font-medium">City: </span><span>' +
                    datos.results[zipcode][i].city +
                    '</span></span><span><span class="text-green-500 font-medium">Disponible</span></span>';
                  document
                    .getElementById("mostrarinfo")
                    .classList.remove("hidden");
                } else {
                  document.getElementById("mostrarinfo").innerHTML =
                    '<span><span class="text-white font-medium">State: </span><span>' +
                    datos.results[zipcode][i].state +
                    '</span></span><span><span class="text-white font-medium">City: </span><span>' +
                    datos.results[zipcode][i].city +
                    '</span></span><span><span class="text-red-500 font-medium">No Disponible</span></span>';
                  document
                    .getElementById("mostrarinfo")
                    .classList.remove("hidden");
                }
              }
            }
          }
          if (encontrado == false) {
            document.getElementById("royal_state").value = "";
            document.getElementById("royal_city").value = "";
            document.getElementById("loading_id").classList.add("hidden");
            document.getElementById("mostrarinfo").classList.add("mt-8");
            document.getElementById("mostrarinfo").innerHTML =
              '<span><span class="text-red-500 font-medium">No se Encuentra en EE.UU</span></span>';
            document.getElementById("mostrarinfo").classList.remove("hidden");
          }
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    document.getElementById("royal_state").value = "";
    document.getElementById("royal_city").value = "";
    document.getElementById("mostrarinfo").classList.add("hidden");
  }
}

function guardar() {
  var name = document.getElementById("royal_name").value;
  var lastname = document.getElementById("royal_lastname").value;
  var phone = document.getElementById("royal_phone").value;
  var mail = document.getElementById("royal_mail").value;
  var comentario = document.getElementById("message").value;

  var royal_zipcode = document.getElementById("royal_zipcode").value;

  var city_info = document.getElementById("royal_city").value;
  var state_info = document.getElementById("royal_state").value;

  var tomarservices = [];
  var services = "";

  var checkbox_salud = document.getElementById("checked-salud");
  if (checkbox_salud.checked) {
    tomarservices.push("Salud");
  }

  var checkbox_carro = document.getElementById("checked-carro");
  if (checkbox_carro.checked) {
    tomarservices.push("Vehiculo");
  }

  var checkbox_dental = document.getElementById("checked-dental");
  if (checkbox_dental.checked) {
    tomarservices.push("Dental");
  }

  var checkbox_accidental = document.getElementById("checked-accidental");
  if (checkbox_accidental.checked) {
    tomarservices.push("Accidental");
  }

  for (let i = 0; i < tomarservices.length; i++) {
    if (i == tomarservices.length - 1) {
      services += tomarservices[i] + ".";
    } else {
      services += tomarservices[i] + ", ";
    }
  }

  console.log(services);
  console.log(city_info);
  console.log(state_info);

  conexion1 = crearXMLHttpRequest();
  conexion1.onreadystatechange = cargarguardar;
  conexion1.open(
    "GET",
    "php/guardar.php?name=" +
      name +
      "&lastname=" +
      lastname +
      "&phone=" +
      phone +
      "&mail=" +
      mail +
      "&comentario=" +
      comentario +
      "&state_info=" +
      state_info +
      "&city_info=" +
      city_info +
      "&zipcode=" +
      royal_zipcode +
      "&services=" +
      services,
    true
  );
  conexion1.send(null);
}

function cargarguardar() {
  var detalles4 = document.getElementById("botonguardar");

  var error2 = conexion1.responseText;

  var name = document.getElementById("royal_name").value;
  var lastname = document.getElementById("royal_lastname").value;
  var phone = document.getElementById("royal_phone").value;
  var mail = document.getElementById("royal_mail").value;
  var comentario = document.getElementById("message").value;

  var royal_zipcode = document.getElementById("royal_zipcode").value;

  var city_info = document.getElementById("royal_city").value;
  var state_info = document.getElementById("royal_state").value;

  var tomarservices = [];
  var services = "";

  var checkbox_salud = document.getElementById("checked-salud");
  if (checkbox_salud.checked) {
    tomarservices.push("Salud");
  }

  var checkbox_carro = document.getElementById("checked-carro");
  if (checkbox_carro.checked) {
    tomarservices.push("Vehiculo");
  }

  var checkbox_dental = document.getElementById("checked-dental");
  if (checkbox_dental.checked) {
    tomarservices.push("Dental");
  }

  var checkbox_accidental = document.getElementById("checked-accidental");
  if (checkbox_accidental.checked) {
    tomarservices.push("Accidental");
  }

  for (let i = 0; i < tomarservices.length; i++) {
    if (i == tomarservices.length - 1) {
      services += tomarservices[i] + ".";
    } else {
      services += tomarservices[i] + ", ";
    }
  }

  var text =
    "%F0%9F%8C%90%20%2ARoyal%20Insurance%20LLC%2A%0A%20%20%20%20%20%20%20%2A_---%3ESolicitud%20de%20Cita_%2A%0A%0A%F0%9F%91%A4%20" +
    name +
    "%20" +
    lastname +
    "%0A%F0%9F%93%B2%20%2B1" +
    phone +
    "%0A%F0%9F%87%BA%F0%9F%87%B8%20" +
    state_info +
    "%2C%20" +
    city_info +
    "%0A%F0%9F%96%A5%EF%B8%8F%20" +
    services +
    "%0A%E2%9C%89%EF%B8%8F%20" +
    comentario +
    ".%0A%0AEspero%20su%20Respuesta..%F0%9F%A4%9D";
  text = text.replace(/\s+/g, "%20");

  // window.location =
  //   "https://wa.me/584126515046?text=Hola%20a%20todos%20como%20estan%20%2Abendiciones%2A%0Aeste%20mensaje%20es%20relevant%20para%20todos%20los%20usuarios%0Adel%20congreo%0Anuevo%20remanente%F0%9F%98%8D";
  //window.location = "whatsapp://send?text=texto%20con%20URL";

  if (conexion1.readyState == 4) {
    if (parseInt(error2) == 21) {
      detalles4.innerHTML =
        '<font color="red">Los Datos son Incorrectos</font>';
    } else {
      ('<span class="flex flex-row flex-grow justify-center items-center"><svg class="w-[26px] h-[26px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/></svg><span class="pl-2 text-[20px]">Enviar Solicitud</span></span>');
      window.location = "https://wa.me/19545489316?text=" + text;
    }
  } else {
    detalles4.innerHTML =
      '<span class="flex flex-row flex-grow justify-center items-center"><svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/></svg><span class="pl-2 text-[20px]">Procesando...</span></span>';
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
