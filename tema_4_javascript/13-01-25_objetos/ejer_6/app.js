const PERSONA = window.prompt("Introduce el nombre de la persona que buscas:")

let arrayNombres = []
for (const clave in personas) {
    arrayNombres.push(personas[clave].name)
}
const PERSONA_SIN_ESPACIOS = PERSONA.split(" ").join("")
const EXISTE = arrayNombres.includes(PERSONA)

let foto, nombre, colorFondo 
let atributos = []
if (EXISTE) {
    foto = personas[PERSONA_SIN_ESPACIOS]["picture"]
    nombre = personas[PERSONA_SIN_ESPACIOS]["name"]
    atributos = [personas[PERSONA_SIN_ESPACIOS]["age"], personas[PERSONA_SIN_ESPACIOS]["email"], personas[PERSONA_SIN_ESPACIOS]["address"]]
    colorFondo = personas[PERSONA_SIN_ESPACIOS]["eyeColor"]

    document.getElementById("foto_persona").src = foto
    document.getElementById("nombre_persona").innerHTML = nombre
    document.getElementById("edad_persona").innerHTML = atributos[0]
    document.getElementById("email_persona").innerHTML = atributos[1]
    document.getElementById("direccion_persona").innerHTML = atributos[2]

    document.body.style.backgroundColor = colorFondo
} else {
    document.getElementById("card_persona").style.display = "none"
    const MENSAJE = `No existe el nombre ${PERSONA} en nuestra base de datos.`
    const ELEMENT_MENSAJE = document.createElement("p")

    ELEMENT_MENSAJE.textContent = MENSAJE

    document.getElementById("section_persona").append(ELEMENT_MENSAJE)
}
