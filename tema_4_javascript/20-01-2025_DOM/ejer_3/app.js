const NOMBRE = prompt("Escribe tu nombre completo:")
const EDAD = Number(prompt("Escribe tu edad:"))

//Ejemplo hecho con if / else
const SALUDO = document.createElement("p")
if (EDAD < 18) {
    SALUDO.innerHTML = `Hola ${NOMBRE}, eres menor de edad.`
} else {
    SALUDO.innerHTML = `Hola ${NOMBRE}, eres mayor de edad.`
}

//Ejemplo hecho con switch
const SALUDO2 = document.createElement("p")
switch (EDAD) {
    case EDAD < 18:
        SALUDO2.innerHTML = `Hola ${NOMBRE}, eres menor de edad.`
        break
    default:
        SALUDO2.innerHTML = `Hola ${NOMBRE}, eres mayor de edad.`
        break
}

//Ejemplo con condicional ternario
const SALUDO3 = document.createElement("p")
EDAD < 18
    ? SALUDO3.innerHTML = `Hola ${NOMBRE}, eres menor de edad.` 
    : SALUDO3.innerHTML = `Hola ${NOMBRE}, eres mayor de edad.`


const CONTAINER = document.getElementById("container_section")
CONTAINER.appendChild(SALUDO)
CONTAINER.appendChild(SALUDO2)
CONTAINER.appendChild(SALUDO3)