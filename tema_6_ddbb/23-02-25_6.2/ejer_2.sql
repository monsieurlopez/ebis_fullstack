/** Ejercicio 2: Uso de Índices **/

/* Explica cómo un índice puede mejorar el rendimiento de la siguiente consulta: */
SELECT * FROM productos WHERE nombre = 'Laptop';

/*
Porque permite que la base de datos busque directamente los registros de
manera más eficiente en lugar de hacer un escaneo completo de la tabla, para bases de datos y tablas
muy grandes si puede suponer una diferencia de rendimiento. Para bases de datos y tablas pequeñas
no es tan importante.
*/

/* Elimina un índice existente de la tabla productos */

DROP INDEX idx_nombre ON productos; /* Elimina el índice idx_nombre */
SHOW INDEXES FROM productos; /* Muestra los índices de la tabla productos */

