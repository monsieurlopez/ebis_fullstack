//Ejercicio 8: Operadores lógicos

let esMayorDeEdad = true
let tieneLicencia = false
let puedeConducir = esMayorDeEdad && tieneLicencia

console.log(puedeConducir) // False --> puedeConducir devuelve false porque esMayorDeEdad es true pero tieneLicencia es false

esMayorDeEdad = true
tieneLicencia = true
puedeConducir = esMayorDeEdad && tieneLicencia

console.log(puedeConducir) // True --> puedeConducir devuelve true porque esMayorDeEdad es true y tieneLicencia es true

let tieneCarnetProvisional = true
let acceso = tieneLicencia || tieneCarnetProvisional

console.log(acceso) // True  --> acceso devuelve true porque al menos una de las condiciones es true, aunque en este caso sean las dos trues