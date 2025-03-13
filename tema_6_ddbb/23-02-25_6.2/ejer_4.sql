/** TEMA 3: PROCEDIMIENTOS **/
/* Ejercicio 1: Creación de Procedimientos Almacenados */

-- Crea un procedimiento llamado insertar_cliente que permita insertar un nuevo cliente en la tabla clientes --
-- Dada la siguiente tabla --

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100)
);

ALTER TABLE clientes MODIFY id_cliente INT AUTO_INCREMENT; /* Para que el id se autoincremente */

/* Creación del procedimiento */
DELIMITER $$

    CREATE PROCEDURE insertar_cliente (
        IN p_nombre VARCHAR(100),
        IN p_email VARCHAR(100)
    )
    BEGIN
        INSERT INTO clientes (nombre, email)
        VALUES (p_nombre, p_email);
    END$$

DELIMITER ;


-- Llama al procedimiento para insertar un nuevo cliente --
call insertar_cliente ('Sergio Lopez', 'sergio@gmail.com' );
call insertar_cliente ('Miguel Lopez', 'miguel@gmail.com' );

/* Ejercicio 2: Procedimiento con Parámetros de Salida */

-- Crea un procedimiento que reciba un id de cliente y devuelva su nombre y email como parámetros de salida --+

DELIMITER $$
    CREATE PROCEDURE obtener_nombre_email_cliente (
        IN p_id_cliente INT,
        OUT p_nombre VARCHAR(100),
        OUT p_email VARCHAR(100)
    )
    BEGIN
        SELECT nombre, email
        INTO p_nombre, p_email
        FROM clientes
        WHERE id_cliente = p_id_cliente;
    END$$

DELIMITER ;


--Llama al procedimiento para recuperar la información de un cliente --

CALL obtener_nombre_email_cliente(1, @nombre, @email);
SELECT @nombre, @email;
