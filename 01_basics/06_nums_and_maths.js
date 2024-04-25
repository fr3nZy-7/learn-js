const score = 400
console.log(score)


//explicitly defining a variable as number
const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 1123.556952
console.log(otherNumber.toPrecision(5)); 

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-In")); // by default uses US comma system

/*_________MATHS_________*/
console.log(Math);  //The Math namespace object contains static properties and methods for mathematical constants and functions.

// console.log(Math.abs(-5));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.2));
// console.log(Math.floor(4.6));
// console.log(Math.min(2,3,4,5,1,9));
// console.log(Math.max(2,3,4,5,1,9));

console.log(Math.random()) // value will always be random and between 0 and and 1
console.log((Math.random()*10) + 1) 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min)