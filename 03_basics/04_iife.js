// Immediately Invoked Fucntion Expressions (IIFE)


function chai() {
    console.log("DB Connected");
}

chai(); // should end function with ; in general to be safe
// above is a normal function definition and then execution

// for iife the syntax is 
//()();  // where first () is fucntion definition and second () is execution

(function chai() {
    // this is a named iife as this function has a name chai
    console.log("DB Connected");
})(); // IMP NOTE - IIFE fucntion should be ended with a ';' as the function doesnt know where the context ends.. if you write another fucntion immediately after iffe function without ending it with a ; then you will get an error

// can also eb written as an arrow function

(() => {
    console.log("DB Connection2")
})();

((name) => {
    // this is an unnamed iife as it doesnt have a name.. unlike chai in line 14 above that has a name and is a named iife
    console.log(`${name}  DB Connection2`)
})("Amey"); // since 1st () is the definition it may have paramters e.g. and since send () is execution you can pass the arguments from here e.g Amey





/* 
IIFE stands for Immediately Invoked Function Expression. It is a JavaScript design pattern used to create a function expression and immediately execute it.

Here's a basic example of an IIFE:

(function() {
    // Code inside the IIFE
    console.log("This is an IIFE");
})();
In this example, the function is defined inside parentheses (function() { ... }), creating a function expression. The trailing () immediately invokes the function, causing it to execute immediately after it is defined.

IIFEs are often used to create a new scope for variables, preventing them from polluting the global scope. They are also commonly used in modular JavaScript code and for encapsulating code to avoid naming conflicts.


*/