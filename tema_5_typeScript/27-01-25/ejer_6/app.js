function printHumanReadableDate(fecha) {
    var fechaFormateada;
    if (fecha instanceof Date) {
        fechaFormateada = fecha;
    }
    else {
        fechaFormateada = new Date(fecha);
    }
    var opciones = { weekday: 'long', day: 'numeric', month: 'long' };
    var FECHA_DESEADA = fechaFormateada.toLocaleDateString('es-ES', opciones);
    console.log(FECHA_DESEADA);
}
printHumanReadableDate(new Date()); // viernes, 7 de febrero
printHumanReadableDate("2025-01-15T11:56:03.673Z"); //miércoles, 15 de enero
printHumanReadableDate("2025-01-15T11"); // Invalid date
printHumanReadableDate("Hola"); // Invalid date
