/** Ejercicio 1: Creación de vistas **/

CREATE TABLE ventas (
    id_venta INT PRIMARY KEY,
    id_producto INT,
    cantidad INT,
    total DECIMAL(10, 2),
    fecha DATE
);

-- Crea una vista llamada ventas_totales que muestre el producto_id , la suma de cantidad y el total acumulado por producto. --

CREATE VIEW ventas_totales AS
SELECT
    id_producto,
    SUM(cantidad) AS cantidad_total,
    SUM(total) AS acumulado_total
FROM ventas
GROUP BY id_producto;

SELECT * FROM ventas_totales; /* Para usar la vista creada */

/* Ejercicio 2: Actualización y Seguridad con Vistas */

-- Crea una vista que muestre solo las ventas realizadas en el último mes --

CREATE VIEW ventas_mes_actual AS
SELECT *
FROM ventas
WHERE MONTH(fecha) = MONTH(NOW())
AND YEAR(fecha) = YEAR(NOW());

-- Explica cómo las vistas pueden mejorar la seguridad de la base de datos --

/*1. Restricción para ver datos sensibles o confidenciales (enfermedades en pacientes de un hostipal, evitar ver el numero de la seguridad social del paciente)
/*2. Permisos para ver vistas pero no tablas completas (le doy a un usuario permiso para usar una vista pero no para ver la tabla completa.)
/*3. Creación de vistas personalizadas segun los empleados que quieran ver.
/*4. Ocultar ciertas partes sensibles de la base de datos. 

