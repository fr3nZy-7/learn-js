

// var c =300
let a = 300
if(true){
    let a = 10
    const b = 20
     // c = 30
     console.log(a);
}



// console.log(a);
// console.log(b);
// console.log(c);

console.log(a);

// core scope is different than that of global scope run locally via node command
/*
Global Scope: The global scope in Node.js refers to variables and functions that are accessible from any module or file within the same Node.js process. 
Variables declared without the var, let, or const keywords at the top level of a Node.js file are automatically added to the global scope.
For example:


// app.js
globalVar = 10; // This variable is added to the global scope
Module Scope: Each file in Node.js has its own scope, often referred to as the module scope or file scope. 
Variables and functions declared within a file are scoped to that file and are not accessible from other files unless explicitly exported.
For example:

// module1.js
let moduleVar = 20; // This variable is scoped to module1.js
// module2.js
console.log(moduleVar); // This will throw a ReferenceError because moduleVar is not defined in module2.js

*/