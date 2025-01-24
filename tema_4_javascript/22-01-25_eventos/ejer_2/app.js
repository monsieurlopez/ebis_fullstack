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
let letrasComunes = [];

/**
 * Function: cardGeneratorComun
 * Muestra unas tarjetas determinadas por la coincidencia del texto introducido y los nombres de las personas
 * @param {string} texto texto introducido para buscar las personas
 */
function cardGeneratorComun(texto) {
    if (texto === "all") {
        letrasComunes = newPersonas
    } else {
        letrasComunes = [];

        //Coincidencias entre texto y nombres de las personas
        for (let i = 0; i < newPersonas.length; i++) {
            if (newPersonas[i].nombre.toLowerCase().includes(texto.toLowerCase())) {
                letrasComunes.push(newPersonas[i]);
            }
        }
    }

    if (letrasComunes.length === 0) {
        SECTION.innerHTML = ""
    } else {
        //Generación de tarjetas
        let tarjetas = "";
        for (let i = 0; i < letrasComunes.length; i++) {
            tarjetas += `
                <div id="tarjeta_${i}" class="tarjeta">
                    <img src="${letrasComunes[i].imagen}" alt="imagen de ${letrasComunes[i].nombre}" class="img_tarjeta">
                    <h1>${letrasComunes[i].nombre}</h1>
                    <p><strong>Edad:</strong> ${letrasComunes[i].edad}</p>
                    <p><strong>Email:</strong> ${letrasComunes[i].email}</p>
                    <p><strong>Direccion:</strong> ${letrasComunes[i].direccion}</p>
                    <p><strong>Color de ojos:</strong> ${letrasComunes[i].color_ojos}</p>
                </div>
            `;
            SECTION.innerHTML = tarjetas;
        }

        // Cambiar el color de fondo de las tarjetas
        for (let i = 0; i < letrasComunes.length; i++) {
            const DIV_TARJETA = document.getElementById(`tarjeta_${i}`);
            DIV_TARJETA.style.backgroundColor = letrasComunes[i].color_ojos;
        }

    }
}

function createButtonSearch() {
    const DIV_BOX = document.createElement("div");
    DIV_BOX.innerHTML = `
        <input type="text" placeholder="Texto aquí" id="text_input" class="input">
        <button id="btn_buscar" onclick="search()" class="button">Buscar</button>
    `;
    SECTION.appendChild(DIV_BOX);

    DIV_BOX.style.position = "absolute";
    DIV_BOX.style.top = "0";
    DIV_BOX.style.left = "0";
    DIV_BOX.style.backgroundColor = "grey";
    DIV_BOX.style.padding = "10px";
}

function siguienteEjercicio() {
    const TEXTO = window.prompt("Escribe un texto:");
    cardGeneratorComun(TEXTO);

    setTimeout(() => {
        ultimoEjercicio();
    }, 6000);
}

function ultimoEjercicio() {
    SECTION.innerHTML = "";
    createButtonSearch()
}

setTimeout(() => {
    siguienteEjercicio();
}, 6000);

function search() {
    let inputText = document.getElementById("text_input").value;
    if (!inputText) inputText = "all";
    cardGeneratorComun(inputText);
    createButtonSearch()
    inputText = ""
}


