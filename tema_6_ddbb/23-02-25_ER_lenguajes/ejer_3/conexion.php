<?php
$host = "localhost";
$bbdd_name = "ebis_crud";
$user = "root";
$pass = "";

$conexion = new mysqli($host, $user, $pass, $bbdd_name);

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
?>