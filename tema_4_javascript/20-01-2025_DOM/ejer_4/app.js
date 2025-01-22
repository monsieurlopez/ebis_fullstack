const NOMBRE = prompt("Escribe tu nombre completo:")
const EDAD = Number(prompt("Escribe tu edad:"))

//Ejemplo hecho con if / else
const SALUDO = document.createElement("p")
if (EDAD < 18) {
    SALUDO.innerHTML = `Hola ${NOMBRE}, eres menor de edad.`
    SALUDO.style.color = "red"
} else {
    SALUDO.innerHTML = `Hola ${NOMBRE}, eres mayor de edad.`
    SALUDO.style.color = "green"
}

//Ejemplo hecho con switch
const SALUDO2 = document.createElement("p")
switch (EDAD) {
    case EDAD < 18:
        SALUDO2.innerHTML = `Hola ${NOMBRE}, eres menor de edad.`
        SALUDO2.style.color = "red"
        break
    default:
        SALUDO2.innerHTML = `Hola ${NOMBRE}, eres mayor de edad.`
        SALUDO2.style.color = "green"
        break
}

//Ejemplo con condicional ternario
const SALUDO3 = document.createElement("p")
EDAD < 18
    ? SALUDO3.innerHTML = `Hola ${NOMBRE}, eres menor de edad.`
    : SALUDO3.innerHTML = `Hola ${NOMBRE}, eres mayor de edad.`   

EDAD < 18
    ? SALUDO3.style.color = "red"
    : SALUDO3.style.color = "green"


const CONTAINER = document.getElementById("container_section")
CONTAINER.appendChild(SALUDO)
CONTAINER.appendChild(SALUDO2)
CONTAINER.appendChild(SALUDO3)