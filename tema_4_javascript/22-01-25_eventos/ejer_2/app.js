//Guarda los objetos en un único array
let newPersonas = [];
for (let i = 0; i < personas.length; i++) {
  let persona = {
    nombre: personas[i].name,
    imagen: personas[i].picture,
    edad: personas[i].age,
    email: personas[i].email,
    direccion: personas[i].address,
    color_ojos: personas[i].eyeColor,
  };
  newPersonas.push(persona);
}

//Muestra la información de una sola persona en el navegador
const PERSONA = newPersonas[0];
Object.entries(PERSONA).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

/*
Crear un div centrado tanto vertical como horizontalmente que tenga los siguientes datos:
    -Foto de la persona
    -<h1></h1> con el nombre
    -<p></p> con los diferentes atributos
    -Background-color con el color de ojos
*/
const SELECCION = Number(window.prompt("Escribe un numero del 0 al 6:"))
const DIV = document.createElement("div");
DIV.id = "div_persona"

const SECTION = document.getElementById("section_personas")
SECTION.appendChild(DIV)

if (SELECCION >= 0 && SELECCION <= 6) {
    const CARD =
    `
        <img src="${newPersonas[SELECCION].imagen}" alt="imagen de ${newPersonas[SELECCION].nombre}">
        <h1>${newPersonas[SELECCION].nombre}</h1>
        <p><strong>Edad:</strong> ${newPersonas[SELECCION].edad}</p>
        <p><strong>Email:</strong> ${newPersonas[SELECCION].email}</p>
        <p><strong>Direccion:</strong> ${newPersonas[SELECCION].direccion}</p>
        <p><strong>Color de ojos:</strong> ${newPersonas[SELECCION].color_ojos}</p>
    `
    DIV.innerHTML = CARD
    DIV.style.backgroundColor = newPersonas[SELECCION].color_ojos
} else {
    window.alert("El número seleccionado no corresponde a ninguna persona. Intentalo de nuevo.")
    window.location.reload()
}

//Pide al usuario un texto, muestra la información de las personas cuyo nombre contenta el texto escrito
let letrasComunes = []
function siguienteEjercicio() {
    let texto = window.prompt("Escribe un texto:")
    for (let i = 0; i < newPersonas.length; i++) {
        if (newPersonas[i].nombre.toLowerCase().includes(texto.toLowerCase())) {
            letrasComunes.push(newPersonas[i])
        }
    }

    let tarjetas = ""
    for (let i = 0; i < letrasComunes.length; i++) {
        tarjetas +=
        `
            <div id="tarjeta_${i}" class="tarjeta">
                <img src="${letrasComunes[i].imagen}" alt="imagen de ${letrasComunes[i].nombre} class="img_tarjeta">
                <h1>${letrasComunes[i].nombre}</h1>
                <p><strong>Edad:</strong> ${letrasComunes[i].edad}</p>
                <p><strong>Email:</strong> ${letrasComunes[i].email}</p>
                <p><strong>Direccion:</strong> ${letrasComunes[i].direccion}</p>
                <p><strong>Color de ojos:</strong> ${letrasComunes[i].color_ojos}</p>
            </div>
        `
        SECTION.innerHTML = tarjetas
    }
    for (let i = 0; i < letrasComunes.length; i++) {
        const DIV_TARJETA = document.getElementById(`tarjeta_${i}`)
        DIV_TARJETA.style.backgroundColor = letrasComunes[i].color_ojos
    }
}

//SECTION.innerHTML = tarjetas

setTimeout(() => {
    siguienteEjercicio()
}, 6000)


