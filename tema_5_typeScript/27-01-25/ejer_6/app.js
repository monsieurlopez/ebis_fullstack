function printHumanReadableDate(fecha) {
    var locale = "ES";
    var options = { weekday: 'long', day: 'numeric', month: 'long' };
    var fechaFormateada;
    if (fecha instanceof Date) {
        fechaFormateada = fecha;
    }
    else {
        fechaFormateada = new Date(fecha);
        if (isNaN(fechaFormateada.getTime())) {
            console.log("Formato de fecha no valido.");
            return;
        }
    }
    var FECHA_DESEADA = new Intl.DateTimeFormat(locale, options).format(fechaFormateada);
    console.log(FECHA_DESEADA);
}
printHumanReadableDate(new Date()); // viernes, 7 de febrero
printHumanReadableDate("2025-01-15T11:56:03.673Z"); //miércoles, 15 de enero
printHumanReadableDate("2025-01-15T11"); // Formato de fecha no valido.
printHumanReadableDate("Hola"); // Formato de fecha no valido.
