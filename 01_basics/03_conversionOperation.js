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

/*----------------OPERTAIONS-------------------------*/

let value = 3
let negvalue = -value
console.log(negvalue)


console.log(2+2);   // addition
console.log(2-2);   // Substraction
console.log(2*2);   // Multiplication
console.log(2/2);   // division
console.log(2%2);   // modulo -> getting remainder
console.log(2**3);  // 2 raised to 3.. 2 to the power 3.. = 8

let str1 = "Hello"
let str2 = " Amey"

let str3 = str1 + str2

console.log(str3);


console.log("1" + 2);  // converts to string
console.log(1 + "2");  // converts to string
console.log("1" + "2"); // is a string
console.log("1" + 2 + 2); //  converts to string as it starts with string
console.log(1 + 2 + "2");  // converts to string.. but solves te maths 1+2=3 first and concatenates 3 and 2 to give 32

// explantion in ecma script documentation >> abstract conversion  > type conversion


console.log(true); // gives true
console.log(+true); // gives 1 as it converts to number since + is present.. and true is 1 
console.log(+""); // gives 0 as empty string is null and type casted to number


let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100;
gameCounter++
console.log(gameCounter);

