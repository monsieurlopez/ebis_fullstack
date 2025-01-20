const FECHA_NACIMIENTO = window.prompt("Introduce tu fecha de nacimiento (dd-mm-yyyy):")
let fechaFormateada = FECHA_NACIMIENTO.split("-").join("").split("")
const NOMBRE = window.prompt("Introduce tu nombre:").toLocaleLowerCase().split("")
const APELLIDO = window.prompt("Introduce tu apellido:").toLocaleLowerCase().split("")
const INPUT_GENERO = window.prompt("Introduce tu genero: M para masculino y F para femenino").toLocaleLowerCase()

const PERSONA = {
    nombre: NOMBRE,
    apellido: APELLIDO,
    fechaNacimiento: fechaFormateada
}

const primeraLetra = NOMBRE[0]
const ultimaLetra = APELLIDO[APELLIDO.length - 1]
const ultimoDigitoFecha = Number(fechaFormateada[fechaFormateada.length - 1])
const GENERO = INPUT_GENERO === "m" ? "masculino" : "femenino"

console.log(`Nombre del superhéroe: ${letraNombre[primeraLetra][GENERO]} ${letraApellido[ultimaLetra][GENERO]} ${fechaNacimiento[`num${ultimoDigitoFecha}`][GENERO]}`)