//* Declaración enum
const enum Medallas {
    First = "Oro",
    Second = "Plata",
    Third = "Bronce"
}

//* Creación de la función
function showMedal(clasificacion: Medallas) : void {
    console.log(`Has ganado la medalla de ${clasificacion}`)
}

//** Llamadas a la función
showMedal(Medallas.First)
showMedal(Medallas.Second)
showMedal(Medallas.Third)