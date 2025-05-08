<?php
$name = "Sergio";
$surname = "Lopez";
$age = 37;

echo "<strong> #Ejercicio 1: </strong> <br>";
echo "Mi nombre es $name $surname y tengo $age años";
echo "<br>";
echo "<br>";

echo "<strong> #Ejercicio 2: </strong> <br>";
for ($i=0; $i <= 10; $i++) {
    echo $i;
    echo "<br>";
}
echo "<br>";
echo "<br>";

echo "<strong> #Ejercicio 3: </strong> <br>";
for ($i=0; $i <= 10; $i++) {
    $randonNumber = rand(-15, 15);
    if ($randonNumber > 0) {
        echo "El número $randonNumber es positivo";
    } elseif ($randonNumber < 0) {
        echo "El número $randonNumber es negativo";
    } else {
        echo "El número es cero";
    }
    echo "<br>";
}
echo "<br>";
echo "<br>";
echo "<strong> #Ejercicio 4: </strong> <br>";
$randonNumber = rand(1, 7);
echo "El número es $randonNumber";
echo "<br>";
switch ($randonNumber) {
    case 1:
        echo "Hoy es Lunes";
        break;
    case 2:
        echo "Hoy es Martes";
        break;
    case 3:
        echo "Hoy es Miércoles";
        break;
    case 4:
        echo "Hoy es Jueves";
        break;
    case 5:
        echo "Hoy es Viernes";
        break;
    default:
        echo "Ya ha llegado el fin de semana";
        if ($randonNumber == 6) {
            echo "<br> Hoy es Sábado";
        } else {
            echo "<br> Hoy es Domingo";
        }
        break;
}
echo "<br>";
echo "<br>";
echo "<strong> #Ejercicio 5: </strong> <br>";
function calcularFactorial($n) {
    if ($n < 0) {
        return "no está definido para números negativos.";
    }

    $resultado = 1;
    for ($i = 1; $i <= $n; $i++) {
        $resultado *= $i;
    }
    return "es: " . $resultado;
}

// Ejemplo de uso
$randonNumber = rand(-5, 15);
echo "El factorial de $randonNumber " . calcularFactorial($randonNumber);
?>
