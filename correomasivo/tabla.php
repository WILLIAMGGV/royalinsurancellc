<?php
include('config.php');
$QueryInmuebleDetalle = ("SELECT * FROM clients");
$resultadoInmuebleDetalle = mysqli_query($con, $QueryInmuebleDetalle);

echo '<table class="table  table-hover table-bordered">
<thead class="thead-dark">
  <tr>
    <th> # </th>
    <th class="text-center"></th>
    <th>Email</th>
  </tr>
</thead>
<tbody>';

$i = 1;
while ($dataClientes = mysqli_fetch_array($resultadoInmuebleDetalle)) {
    echo '<tr>
      <td>';
    echo $i;
    echo '<input type="checkbox" id="correos" name="correo[]" class="CheckedAK" correo="' . $dataClientes['correo'] . '" value="' . $dataClientes['correo'] . '" />
      </td>
      <td class="text-center text-red-500 font-bold">

         <span onclick="eliminarcorreo(' . htmlspecialchars($dataClientes['id'], ENT_QUOTES, 'UTF-8') . ')" class="text-red font-bold cursor-pointer">Eliminar</span>
</td>
      <td>' . $dataClientes['correo'] . '</td>

    </tr>';
    $i++;
}
echo '</tbody>
</table>';
