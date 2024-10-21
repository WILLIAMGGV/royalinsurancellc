<?php
include("conex.php");
$link = Conectarse();

$name = $_GET["name"];
$lastname = $_GET["lastname"];
$mail = $_GET["mail"];
$phone = $_GET["phone"];
$comentario = $_GET["comentario"];
$city_info = $_GET["city_info"];
$state_info = $_GET["state_info"];
$services = $_GET["services"];
$zipcode = $_GET["zipcode"];





mysqli_query($link, "INSERT INTO solicitudes (nombres,apellidos,telefono,email,comentarios,zipcode,city_info,state_info,services) VALUES ('$name','$lastname','$mail','$phone','$comentario','$zipcode','$city_info','$state_info','$services')");

try {
    $link->commit();
    echo '20';
} catch (mysqli_sql_exception $e) {
    $link->rollback();
    echo '21';
}

echo $city_info . '<br>';
echo $state_info . '<br>';
echo $services . '<br>';
