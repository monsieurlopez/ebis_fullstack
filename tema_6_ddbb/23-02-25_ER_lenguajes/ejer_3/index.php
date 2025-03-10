<?php
include "conexion.php";

// Obtener lista de productos
$resultado = $conexion->query("SELECT * FROM productos");

// Obtener lista de clientes
$resultado_clientes = $conexion->query("SELECT * FROM clientes");

// Cerrar conexión
$conexion->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicación CRUD</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <h1>Lista de Productos</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
        </tr>
        <?php
        if ($resultado->num_rows > 0) {
            while($fila = $resultado->fetch_assoc()) {
                echo "<tr>
                        <td>" . $fila['id'] . "</td>
                        <td>" . $fila['nombre'] . "</td>
                        <td>" . $fila['precio'] . "</td>
                        <td>" . $fila['stock'] . "</td>
                      </tr>";
            }
        } else {
            echo "<tr><td colspan='4'>No hay productos disponibles</td></tr>";
        }
        ?>
    </table>

    <h2>Agregar Nuevo Producto</h2>
    <form action="insertar.php" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" required><br>
        <label for="precio">Precio:</label>
        <input type="number" name="precio" step="0.01" required><br>
        <label for="stock">Stock:</label>
        <input type="number" name="stock" required><br>
        <input type="submit" value="Agregar Producto">
    </form>

    <h1>Lista de Clientes</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
        </tr>
        <?php
        if ($resultado_clientes->num_rows > 0) {
            while($fila_cliente = $resultado_clientes->fetch_assoc()) {
                echo "<tr>
                        <td>" . $fila_cliente['id'] . "</td>
                        <td>" . $fila_cliente['nombre'] . "</td>
                        <td>" . $fila_cliente['email'] . "</td>
                      </tr>";
            }
        } else {
            echo "<tr><td colspan='4'>No hay clientes disponibles</td></tr>";
        }
        ?>
    </table>

    <h2>Actualizar Información de Cliente</h2>
    <form action="actualizar.php" method="post">
        <label for="id_cliente">ID Cliente:</label>
        <input type="number" name="id_cliente" required><br>
        <label for="email">Nuevo Email:</label>
        <input type="email" name="email" required><br>
        <input type="submit" value="Actualizar Email">
    </form>
</body>
</html>
