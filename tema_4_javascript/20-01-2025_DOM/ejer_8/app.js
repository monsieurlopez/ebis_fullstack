const EDAD = Number(window.prompt("Escribe tu edad:"))

const DIV = document.createElement("div")
document.getElementsByTagName("section")[0].appendChild(DIV)
DIV.style.textAlign = "center"
DIV.style.marginTop = "1rem"

if (EDAD < 18) {
    const RESPUESTA_NEGATIVA1 = `<p> Respuesta: Eres menor de edad, no puedes alquilar un coche. </p>`
    DIV.innerHTML = RESPUESTA_NEGATIVA1
} else {
    const CARNET = window.prompt("Pulsa S si tienes carnet de conducir o N si no lo tienes.").toLowerCase();

    if (CARNET === "n") {
        const RESPUESTA_NEGATIVA2 = `<p> Respuesta: No tienes carnet de conducir, no puedes alquilar un coche. </p>`
        DIV.innerHTML = RESPUESTA_NEGATIVA2
    } else if (CARNET === "s") {
        const NOMBRE_COMPLETO = window.prompt("Escribe tu nombre completo:")
        const CIUDAD_RECOGIDA = window.prompt("Escribe la ciudad de recogida del vehiculo:")
        const DIAS_ALQUILER = Number(window.prompt("Escribe el número de dias que quieres alquilar el coche:"))

        const PRECIO_ALQUILER = DIAS_ALQUILER * 25
        const MENSAJE = `
            <p><strong>Nombre:</strong> ${NOMBRE_COMPLETO}</p>
            <p><strong>Ciudad de recogida:</strong> ${CIUDAD_RECOGIDA}</p>
            <p><strong>Días de alquiler:</strong> ${DIAS_ALQUILER}</p>
            <p><strong>Precio a pagar:</strong> ${PRECIO_ALQUILER}€</p>
        `
        DIV.innerHTML = MENSAJE
    } else {
        const RESPUESTA_NEGATIVA3 = `<p>Has pulsado una tecla incorrecta y se ha interrumpido el proceso.</p> <p>Deberas empezar de nuevo a introducir los datos.</p>`
        DIV.innerHTML = RESPUESTA_NEGATIVA3
        setTimeout(()=>{
            window.location.reload()
        },4000)
    }

}