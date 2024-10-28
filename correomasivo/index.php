<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta content="initial-scale=1, shrink-to-fit=no, width=device-width" name="viewport">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i|Roboto+Mono:300,400,700|Roboto+Slab:300,400,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
  <link rel="icon" type="image/png" href="imgs/logo-mywebsite-urian-viera.svg">

  <link rel="stylesheet" type="text/css" href="css/material.min.css">
  <link rel="stylesheet" type="text/css" href="css/home.css">

  <script src="css/cdntailwind.5"></script>
  <link
    href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css"
    rel="stylesheet" />


  <title>Enviar Correo Masivo</title>
</head>
<script src="enviando3.js"></script>

<body>

  <nav class="navbar navbar-light" style="background-color: #55468c !important;">
    <a class="navbar-brand" href="#">
      <strong style="color: #fff">CORREO MASIVO --- Creado Por: William Godoy</strong>
    </a>
  </nav>

  <div class="container mt-5">


    <h3 class="text-center mb-5" style="font-weight: 800; font-size: 35px">
      ENVIO DE CORREO MASIVO
      <hr>
    </h3>




    <?php
    include('config.php');
    $QueryInmuebleDetalle = ("SELECT * FROM clients");
    $resultadoInmuebleDetalle = mysqli_query($con, $QueryInmuebleDetalle);
    $cantidad = mysqli_num_rows($resultadoInmuebleDetalle);
    ?>


    <form action="enviarEmail.php" method="post">

      <div class="row mb-5">



      </div>

      <input type="hidden" id="totalaenviar" value="0">
      <input type="hidden" id="cola" value="0">


      <div class="flex flex-row">
        <div class="w-[300px]">
          <label for="emailnew" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electronico</label>
          <input type="text" id="emailnew" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John@gmail.com" required />
        </div>
        <button onclick="registraremail()" class="block h-10 ml-2 mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          Agregar
        </button>
        <div class="p-6 mt-2"><span class="text-md text-green-500 font-medium pt-6" id="guardando"></span></div>

      </div>


      <div class="flex flex-row">
        <div id="cargatabla" class="table-responsive mb-5 w-[50%]">
          <table class="table  table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th> # </th>
                <th class="text-center"></th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <?php
              $i = 1;
              while ($dataClientes = mysqli_fetch_array($resultadoInmuebleDetalle)) { ?>
                <tr>
                  <td>
                    <?php echo $i; ?>
                    <input type="checkbox" id="correos" name="correo[]" class="CheckedAK" correo="<?php echo $dataClientes['correo']; ?>" value="<?php echo $dataClientes['correo']; ?>" />
                  </td>
                  <td class="text-center text-red-500 font-bold">

                    <span onclick="eliminarcorreo(<?php echo htmlspecialchars($dataClientes['id'], ENT_QUOTES, 'UTF-8'); ?>)" class="text-red font-bold cursor-pointer">Eliminar</span>



                  </td>
                  <td><?php echo $dataClientes['correo']; ?></td>

                </tr>
              <?php $i++;
              } ?>
            </tbody>
          </table>
        </div>
        <div class="w-[50%] flex flex-col p-6">
          <div>
            <div>
              <input type="checkbox" onclick="marcarCheckbox(this);" />
              <label id="marcas">Marcar todos</label>
            </div>
          </div>




          <div>
            <div>
              <p id="resp"></p>
            </div>
          </div>
          <div class="mt-10">

          </div>
          <div class="w-full">
            <div>
              <input type="button" onclick="enviarcorreomasivo()" style="display: none;" name="enviarform" id="enviarform" class="bg-green-500 p-2 w-[150px] w-full rounded-lg hover:bg-green-900 hover:text-white text-lg font-medium cursor-pointer" value="Enviar Mensaje Masivo">
              <div id="descripcion" style="color: blue; font-weight: 900; font-size:larger" align="center"></div>
            </div>
          </div>
        </div>
      </div>
  </div>
  </form>

  </div>


  <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
  <script src="js/script.js"></script>

</body>

</html>