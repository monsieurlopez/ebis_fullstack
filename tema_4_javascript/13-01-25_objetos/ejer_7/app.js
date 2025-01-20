const PLANETA1 = window.prompt("Introduce el nombre de un planeta de nuestro sistema solar:").toLocaleLowerCase()
const PLANETA2 = window.prompt("Introduce otro nombre de un planeta de nuestro sistema solar:").toLocaleLowerCase()
const PLANETA3 = window.prompt("Introduce el último nombre de un planeta de nuestro sistema solar:").toLocaleLowerCase()

const PLANETAS_USUARIO = [PLANETA1, PLANETA2, PLANETA3]

if (PLANETA1 !== PLANETA2 && PLANETA1 !== PLANETA3 && PLANETA2 !== PLANETA3) {
    console.log("Todos los planetas son diferentes")
} else {
    window.alert("Al menos dos planetas son iguales. Introduce tres diferentes por favor.")
    window.location.reload()
}

let listaPlanetas = []
for (planetas in sistemaSolar) {
    listaPlanetas.push(planetas)
}

let noExisten = []
for (let i = 0; i < PLANETAS_USUARIO.length; i++) {
    const verificacion = listaPlanetas.includes(PLANETAS_USUARIO[i])
    if (!verificacion) {
        noExisten.push(PLANETAS_USUARIO[i])
    }
}

console.log(noExisten)

if (noExisten.length > 0) {
    for (i = 0; i < noExisten.length; i++) {
        window.alert(`El planeta ${noExisten[i]} no existe en nuestro sistema solar.`)
    }
    window.alert("Escribe de nuevo tres planetas que existan.")
    window.location.reload()
}
