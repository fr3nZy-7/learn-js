/* MASTER JS OBJECTS AND BROWSER EVENTS / web events */



// dynamically type or statically typed?? 
// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. 
// You can assign different types of values to a variable during its lifetime.





// primitive => call by value
// when called a copy is shared and any change in it affects the copy 
/* 
7 categories/types

1. String
2. number
3. boolean
4. null
5. undefined 
6. Symbol
7. BigInt
*/



const score = 100
const score1 = 100.43
//both are number.. there is no concept of a separate float datatype


const isLoggedIn = false     //boolean
const outsideTemp = null; // null


let userEmail;   
let userEmail1 = undefined;   
// both are undefined


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)  // false Symbols are unique

const bigNumber = 56412356412312364546512345123456456123465564123456  // 56412356412312364546512345123456456123465564123456n
console.log(bigNumber);



// Refernce types (non primitive) => call by refernce
// reference gets allocated in memory for these datatypes

/*
1. array
2. Objects
3. Functions
*/

//array
const heroes = ["Shaktiman","Naagraj", "Doga"]


//object
let myObj = {
name: "Amey",
age: 22
}

//function
//you can treat a function like a variable
const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof myFunction)
console.log(myFunction)

//https://262.ecma-international.org/5.1/#sec-11.4.3
