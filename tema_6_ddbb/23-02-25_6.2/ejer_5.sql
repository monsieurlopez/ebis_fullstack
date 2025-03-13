/** TEMA 4: FUNCIONES **/
/* Ejercicio 1: Creación de Funciones */

-- Dado el esquema de la tabla empleados --

CREATE TABLE empleados (
    id_empleado INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    salario DECIMAL(10,2)
);

-- Crea una función llamada calcular_impuesto que reciba un salario y devuelva el impuesto calculado como el 10% del salario --

DELIMITER $$

    CREATE FUNCTION calcular_impuesto(p_salario DECIMAL(10,2))
    RETURNS DECIMAL(10,2) DETERMINISTIC
    BEGIN
        RETURN p_salario * 0.10;
    END$$

DELIMITER ;

-- Utiliza la función en una consulta para mostrar el impuesto correspondiente a cada empleado --

INSERT INTO empleados (nombre, salario) VALUES ('Sergio', 20000);
INSERT INTO empleados (nombre, salario) VALUES ('Miguel', 25000);

SELECT nombre, salario, calcular_impuesto(salario) FROM empleados;

/* Ejercicio 2: Funciones */
-- Crea una función que reciba un id de empleado y devuelva su nombre --

DELIMITER $$

    CREATE FUNCTION obtener_nombre_empleado(p_id_empleado INT)
    RETURNS VARCHAR(100) DETERMINISTIC
    BEGIN
        DECLARE v_nombre VARCHAR(100);
        SELECT nombre INTO v_nombre
        FROM empleados
        WHERE id_empleado = p_id
        LIMIT 1;
        RETURN v_nombre;
    END$$

DELIMITER ;

-- Uso de la función --
SELECT obtener_nombre_empleado(1); /* Devuelve Sergio */
SELECT obtener_nombre_empleado(2); /* Devuelve Miguel */




