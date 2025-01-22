const MENSAJE = `
    ¿Qué operación deseas realizar?

    ➡️ Suma. Pulsa 1️⃣
    ➡️ Resta. Pulsa 2️⃣
    ➡️ Multiplicación. Pulsa 3️⃣
    ➡️ División. Pulsa 4️⃣
    ➡️ Resto. Pulsa 5️⃣

`
const SELECCION = Number(prompt(MENSAJE))
let num1, num2
if (SELECCION < 1 || SELECCION > 5) {
    window.alert("La opción seleccionada es incorrecta. Intentalo de nuevo.")
    window.location.reload()
} else {
    num1 = Number(prompt("Escribe un número:"))
    num2 = Number(prompt("Escribe otro número:"))
}

let html

switch (SELECCION) {
    case 1:
        html = `<p id="suma">SUMA: ${num1} + ${num2} = ${num1 + num2} </p>`
        break
    case 2:
        html = `<p id="resta">RESTA: ${num1} - ${num2} = ${num1 - num2} </p>`
        break
    case 3:
        html = `<p id="multiplicacion">MULTIPLICACION: ${num1} * ${num2} = ${num1 * num2} </p>`
        break
    case 4:
        html = `<p id="division">DIVISION: ${num1} / ${num2} = ${(num1 / num2).toFixed(2)} </p>`
        break
    case 5:
        html = `<p id="resto">RESTO: ${num1} % ${num2} = ${num1 % num2} </p>`
        break
}

const ELEMENT = document.createElement("div")
ELEMENT.innerHTML = html
const CONTAINER = document.getElementById('container_section')
CONTAINER.appendChild(ELEMENT)
