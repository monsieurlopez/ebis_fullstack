//* Definición type
type Person = {
    name: string,
    year_birthday: number,
    city: string
}

//* Declaración de variables
const Raquel = {
    name: "Raquel",
    year_birthday: 1990,
    city: "Madrid"
}

const Sergio = {
    name: "Sergio",
    year_birthday: 1988,
    city: "Cambo-les-Bains"
}

//* Creación de la función
function getPersonInfo (currentYear: number, persona: Person) : void {
    const AGE : number = currentYear - persona.year_birthday;
    console.log(`${persona.name} tiene ${AGE} años y vive en ${persona.city}.`);
}

//* LLamadas a la función
getPersonInfo(2025, Raquel) // Raquel tiene 35 años y vive en Madrid.
getPersonInfo(2025, Sergio) // Sergio tiene 37 años y vive en Cambo-les-Bains.