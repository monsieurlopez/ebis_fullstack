<?php
include "conexion.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id_cliente = $_POST['id'];
    $email = $_POST['email'];

    $stmt = $conexion->prepare("UPDATE clientes SET email = ? WHERE id = ?");
    $stmt->bind_param("si", $email, $id_cliente);

    if ($stmt->execute()) {
        header("Location: index.php");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conexion->close();
?>
