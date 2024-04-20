let score = undefined

console.log(typeof score);

console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" gets converted to 33
// "33abc" converts to NaN.. Not a Number
// Boolean value get converted to 1 or 0
// undefined => NaN
// "amey" => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 becomes true, 0 becomes false
// "" empty string is false.. not empty strings is true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);