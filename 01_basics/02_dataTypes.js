"use strict";   // treat all JS code as a newer version of js 
/* in older days js didnt have classes modules etc and the js standard org didnt want the newer js changes to affect older code.
so if we write use strict like this on the code it tells the engine to treat this as the newer version of js code */




// alert("Hello"); alert(3+8); we are using nodejs not browser hence this wont work      // JS engine is inside the browser

console.log(3
    +
    2
)  //code readability should be high


//  https://tc39.es js documentation

let name = "Amey"
let age = 33
let isLoggedIn = false
let state

// primitive data type
// numer = > 2 to the power 53 is the range for int
// bigInt
// string = > " "
// boolean = > true or false
// null -> is data type and a standalone value both.. datatype of null is an object 
// undefined = > has the datatype as undefined
// symbol = > when we use to identify a unique component


// Object

console.log(typeof null) // we get object
console.log(typeof undefined)   // we get undefined
console.log(typeof name)  // string
