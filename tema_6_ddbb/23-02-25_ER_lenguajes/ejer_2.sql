/** DQL: **/
/* Consultar los productos, ordenalos por precio y obten los 5 primeros */
SELECT producto.nombre, producto.precio
FROM producto
ORDER BY producto.precio ASC
LIMIT 5

/* Contar cuántos pedidos se realizaron en el mes actual */
SELECT COUNT(*) pedidos
FROM pedido
WHERE MONTH(fecha_pedido) = MONTH(CURDATE())
AND YEAR(fecha_pedido) = YEAR(CURDATE());

/** TCL: **/
/*Realizar dos operaciones de inseccion en una tabla y hacer rollback, comprobar los datos */
START TRANSACTION;

INSERT INTO producto (id_producto, nombre, precio, stock) VALUES (NULL, 'Smartphone Apple', 899.99, 50);
INSERT INTO producto (id_producto, nombre, precio, stock) VALUES (NULL, 'Tablet Samsung', 999.99, 30);

ROLLBACK;

SELECT * FROM producto;

/*Realizar un commit después de varias operaciones de inserción en una tabla */
START TRANSACTION;

INSERT INTO producto (id_producto, nombre, precio, stock) VALUES (NULL, 'Smartphone Apple', 899.99, 50);
INSERT INTO producto (id_producto, nombre, precio, stock) VALUES (NULL, 'Tablet Samsung', 999.99, 30);

COMMIT;

SELECT * FROM producto;

/** DCL: **/
/* Crear un usuario nuevo y asignar permisos de lectura y escritura en la tabla "productos" */
CREATE USER 'admin'@'localhost' IDENTIFIED BY '1234'; /*Creación de usuario*/
USE tienda_ebis; /* Acceso a la base de datos donde queremos dar permisos */
GRANT SELECT, INSERT, UPDATE, DELETE ON producto TO 'admin'@'localhost'; /*Asignación de permisos*/
FLUSH PRIVILEGES; /*Actualización de permisos*/
SHOW GRANTS FOR 'admin'@'localhost'; /*Comprobación de permisos*/

/** PL/SQL: **/
/*Escribir una funcion que dado un producto, muestre el número de veces que se ha vendido dicho producto*/
/* Definición de la función */
DELIMITER $$

CREATE FUNCTION contar_pedidos_producto(p_id_producto INT) 
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE total_pedidos INT;
    SELECT COUNT(DISTINCT pp.id_pedido) INTO total_pedidos
    FROM pedido_producto_ref pp
    WHERE pp.id_producto = p_id_producto;
    RETURN total_pedidos;
END$$

DELIMITER ;
/* Uso de la función */
SELECT
    p.nombre AS producto,
    contar_pedidos_producto(p.id_producto) AS num_pedidos
FROM
    producto p;

