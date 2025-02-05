//* Declaration function
function addAllThisNumbers(num1 : number, num2 : number, ...restOfNumbers : number[]): void {
    if ([num1, num2, ...restOfNumbers].every(param => typeof param === 'number')) {
        console.log(num1 + num2 + restOfNumbers.reduce((total, num) => total + num, 0);
    } else {
        console.log("Todos los parámetros deben ser números.");
    }
}
// Llamamaos a la función
addAllThisNumbers(5, 7) // resultado: 12
addAllThisNumbers(99, 100, 199) // resultado: 298
//addAllThisNumbers(101, 2, "abc") // resultado: ?? //Este nos daría error por incluir un string
addAllThisNumbers(99, 100, 199, 15, 17, 223, -100) // resultado: 553