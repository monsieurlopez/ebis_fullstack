type DateInput = string | Date

function printHumanReadableDate (fecha : DateInput) : void {
    let locale : string = "ES"
    let options: object = { weekday: 'long', day: 'numeric', month: 'long' };

    let fechaFormateada : Date;
    if (fecha instanceof Date) {
        fechaFormateada = fecha
    } else {
        fechaFormateada = new Date(fecha)
        if (isNaN(fechaFormateada.getTime())) {
            console.log("Formato de fecha no valido.");
            return;
        }
    }

    const FECHA_DESEADA = new Intl.DateTimeFormat(locale, options).format(fechaFormateada);
    console.log(FECHA_DESEADA)
}

printHumanReadableDate(new Date()) // viernes, 7 de febrero
printHumanReadableDate("2025-01-15T11:56:03.673Z") //miércoles, 15 de enero
printHumanReadableDate("2025-01-15T11") // Formato de fecha no valido.
printHumanReadableDate("Hola") // Formato de fecha no valido.

