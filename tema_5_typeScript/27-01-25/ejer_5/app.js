var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//* Declaration function
function addAllThisNumbers(num1, num2) {
    var restOfNumbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restOfNumbers[_i - 2] = arguments[_i];
    }
    if (__spreadArray([num1, num2], restOfNumbers, true).every(function (param) { return typeof param === 'number'; })) {
        console.log(num1 + num2 + restOfNumbers.reduce(function (total, num) { return total + num; }, 0));
    }
    else {
        console.log("Todos los parámetros deben ser números.");
    }
}
// Llamamaos a la función
addAllThisNumbers(5, 7); // resultado: 12
addAllThisNumbers(99, 100, 199); // resultado: 298
addAllThisNumbers(101, 2, "abc"); // resultado: ??
addAllThisNumbers(99, 100, 199, 15, 17, 223, -100); // resultado: 553
