/** JOINS **/
/* Ejercicio 1: Realizar un INNER JOIN para mostrar los pedidos de cada cliente en un sistema de compras */

SELECT
    c.id_cliente,
    c.nombre AS cliente,
    p.nombre AS producto
FROM
    clientes c
INNER JOIN
    pedido pe ON c.id_cliente = pe.id_cliente
INNER JOIN
    pedido_producto_ref ppr ON pe.id_pedido = ppr.id_pedido
INNER JOIN
    producto p ON ppr.id_producto = p.id_producto
ORDER BY
    c.id_cliente,
    pe.id_pedido;

/* Ejercicio 2: Usar un LEFT JOIN para listar todos los productos, incluyendo aquellos que no tienen pedidos */

SELECT
    p.id_producto,
    p.nombre AS producto,
    COUNT(pp.id_pedido) AS num_pedidos
FROM
    producto p
LEFT JOIN
    pedido_producto_ref pp ON p.id_producto = pp.id_producto
GROUP BY
    p.id_producto;


/* Ejercicio 3: Crear una consulta con múltiples joins, uniendo clientes, pedidos y productos */

SELECT
    c.id_cliente,
    c.nombre AS nombre_cliente,
    p.id_pedido,
    p.fecha_pedido AS fecha_pedido,
    pr.id_producto,
    pr.nombre AS nombre_producto
FROM
    clientes c
INNER JOIN
    pedido p ON c.id_cliente = p.id_cliente
INNER JOIN
    pedido_producto_ref ppr ON p.id_pedido = ppr.id_pedido
INNER JOIN
    producto pr ON ppr.id_producto = pr.id_producto;
