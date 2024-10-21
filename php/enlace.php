<?php
$mysqli = mysqli_connect("localhost", "root", "");
mysqli_set_charset($mysqli, "utf8");

if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
