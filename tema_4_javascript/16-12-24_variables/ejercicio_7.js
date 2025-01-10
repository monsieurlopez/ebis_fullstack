//Ejercicio 7: Operadores de comparación

const a = 5
const b = "5"

console.log(a == b) //true
console.log(a === b) //false
console.log(a != b) //false
console.log(a !== b) //true

//En las comparaciones debiles [ == y != ] no compara tipos, mientras que en las comparaciones estrictas [ === y !== ] compara valor y tipo de dato, por lo que es mejor utilizar
//este segundo tipo de comparación para evitar errores