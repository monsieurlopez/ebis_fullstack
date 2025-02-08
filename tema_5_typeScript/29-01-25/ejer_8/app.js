//* Declaración de variables
var Raquel = {
    name: "Raquel",
    year_birthday: 1990,
    city: "Madrid"
};
var Sergio = {
    name: "Sergio",
    year_birthday: 1988,
    city: "Cambo-les-Bains"
};
//* Creación de la función
function getPersonInfo(currentYear, persona) {
    var AGE = currentYear - persona.year_birthday;
    console.log("".concat(persona.name, " tiene ").concat(AGE, " a\u00F1os y vive en ").concat(persona.city, "."));
}
//* LLamadas a la función
getPersonInfo(2025, Raquel); // Raquel tiene 35 años y vive en Madrid.
getPersonInfo(2025, Sergio); // Sergio tiene 37 años y vive en Cambo-les-Bains.
