const NUM1 = Number(prompt("Escribe un número:"))
const NUM2 = Number(prompt("Escribe otro número:"))

const SUMA = `<p id="suma">SUMA: ${NUM1} + ${NUM2} = ${NUM1 + NUM2} </p>`
const RESTA = `<p id="resta">RESTA: ${NUM1} - ${NUM2} = ${NUM1 - NUM2} </p>`
const MULTIPLICACION = `<p id="multiplicacion">MULTIPLICACION: ${NUM1} * ${NUM2} = ${NUM1 * NUM2} </p>`
const DIVISION = `<p id="division">DIVISION: ${NUM1} / ${NUM2} = ${(NUM1 / NUM2).toFixed(2)} </p>`
const RESTO = `<p id="resto">RESTO: ${NUM1} % ${NUM2} = ${NUM1 % NUM2} </p>`

const OPERACIONES = ["suma", "resta", "multiplicacion", "division", "resto"]

const HTML =
    `
        <h1> OPERACIONES MATEMÁTICAS </h1>
        ${SUMA}
        ${RESTA}
        ${MULTIPLICACION}
        ${DIVISION}
        ${RESTO}
    `

const ELEMENT = document.createElement("div")
ELEMENT.innerHTML = HTML
const CONTAINER = document.getElementById('container_section')
CONTAINER.appendChild(ELEMENT)

OPERACIONES.forEach((operacion, index) => {
    const COLORES = ["green", "yellow", "white", "purple", "brown"]
    const COLORES_FONDO = ["black", "pink", "blue", "gold", "coral"]
    let elemento = document.getElementById(operacion)
    elemento.style.color = COLORES[index]
    elemento.style.backgroundColor = COLORES_FONDO[index]
})
