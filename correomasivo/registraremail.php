<?php
include("conex.php");
$link = Conectarse();

$email = $_GET["email"];

mysqli_query($link, "INSERT INTO clients (correo) VALUES ('$email')");

echo "20";
