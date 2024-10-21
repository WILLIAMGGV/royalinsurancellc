<?php
function Conectarse()
{
    $link = mysqli_connect("localhost", "root", ""); // added third parameter for password (empty string in this case)
    if (!$link) {
        echo "Error conectando a la base de datos.";
        exit();
    }
    if (!mysqli_select_db($link, "royal")) { // added $link as first parameter
        echo "Error seleccionando la base de datos.";
        exit();
    }
    return $link;
}
