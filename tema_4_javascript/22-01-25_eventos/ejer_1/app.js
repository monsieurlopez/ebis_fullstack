const PLANETA1 = window.prompt("Introduce el nombre de un planeta de nuestro sistema solar:").toLocaleLowerCase()
const PLANETA2 = window.prompt("Introduce otro nombre de un planeta de nuestro sistema solar:").toLocaleLowerCase()
const PLANETA3 = window.prompt("Introduce el último nombre de un planeta de nuestro sistema solar:").toLocaleLowerCase()

const PLANETAS_USUARIO = [PLANETA1, PLANETA2, PLANETA3]

if (PLANETA1 === PLANETA2 && PLANETA1 === PLANETA3 && PLANETA2 === PLANETA3) {
    window.alert("Al menos dos planetas son iguales. Introduce tres diferentes por favor.")
    window.location.reload()
}

let listaPlanetas = []
for (let i = 0; i < sistemaSolar.length; i++) {
    listaPlanetas.push(sistemaSolar[i].nombre)
}

let noExisten = []
for (let i = 0; i < PLANETAS_USUARIO.length; i++) {
    const verificacion = listaPlanetas.includes(PLANETAS_USUARIO[i])
    if (!verificacion) {
        noExisten.push(PLANETAS_USUARIO[i])
    }
}

if (noExisten.length > 0) {
    for (i = 0; i < noExisten.length; i++) {
        window.alert(`El planeta ${noExisten[i]} no existe en nuestro sistema solar.`)
    }
    window.alert("Escribe de nuevo tres planetas que existan.")
    window.location.reload()
}

const SECTION = document.getElementById("section_planetas")
let fichas_planetas = ""
for (i = 0; i < PLANETAS_USUARIO.length; i++) {
    sistemaSolar.forEach((planeta, index) => {
        if (planeta.nombre === PLANETAS_USUARIO[i]) {
            fichas_planetas +=
            `
                <div id="card_planeta_${planeta.nombre}" class="card">
                    <img src="${planeta.imagen}" class="card-img-top" alt="imagen del planeta">
                    <h2> ${planeta.nombre} </h2>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Color:</strong> ${planeta.color}</li>
                        <li class="list-group-item"><strong>Temperatura:</strong> ${planeta.temperatura}</li>
                    </ul>
                    <button id="boton_${planeta.nombre}" class="btn_planeta" onclick="cambiarColor('${planeta.nombre}', '${planeta.fondo}')"> Click! </button>
                </div>
            `
        }
    })
}

SECTION.innerHTML = fichas_planetas

function cambiarColor(card, fondo) {
    const CARD_SELECCIONADA = document.getElementById(`card_planeta_${card}`)
    CARD_SELECCIONADA.style.backgroundColor = fondo
    if (fondo !== "white") CARD_SELECCIONADA.style.color = "white"
}




