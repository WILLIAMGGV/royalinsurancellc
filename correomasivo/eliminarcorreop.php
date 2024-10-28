<?php
include("conex.php");
$link = Conectarse();

$id = $_GET["id"];

// Escapar el ID para evitar inyecciones SQL
$id = mysqli_real_escape_string($link, $id);

// Realizar la consulta de eliminación
$result = mysqli_query($link, "DELETE FROM clients WHERE id='$id'");

echo "20";
