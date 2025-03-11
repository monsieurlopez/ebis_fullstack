/** Ejercicio 1: Creación de Índices **/

--1. Dado el siguiente esquema de tabla:--

CREATE TABLE productos (
    id_producto INT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10, 2),
    categoria_id INT
);

-- Crea un índice simple sobre la columna nombre --
CREATE INDEX idx_nombre ON productos (nombre);

-- Crea un índice compuesto sobre las columnas precio y categoria_id --
CREATE INDEX idx_precio_categoria ON productos (precio, categoria_id);

-- Verifica los índices creados --
SHOW INDEXES FROM productos;

