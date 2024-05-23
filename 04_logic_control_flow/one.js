
/* conditions 
Less than <
Greater than >
Less than or equal to <= 
Greater than or equal to >= 
is equal to ==
Not equal to !=
Is equalt to But checks datatype as well ===
Is not equal to and checks the datatype as well !==
Logical AND &&
Login OR ||
*/

// if statement
// if(condition){ // condition should be true then only it goes in the block

// }

// we can have nested if too.. that is if inside an if

// an else block runs when the if condition is false

let var1 = 10

if(var1 == 10){ // this block get executed when the condition is true
    console.log("Variable is equal to 10");
} else {
    // this block get executed when the above if condition is false
    console.log("Variable is Not equal to 10");
}

// variables declared inside this if or else block will be relevant to that block

// Short hand notation
const balance = 1000;

if(balance>500) console.log("test"),console.log("test2");
// console.log("test2"); can be written here as well but no ; in the above statement only ,.. 
// since there is no {} it is called an implicit scope. relavant to one line only. We can execute multiple statements in single line by adding a comma and then writting statements adn ends with ;
// knowledge purpose only do not write this type of code it unreadable


//Nested If and else 

if (balance<500) {
    console.log("Balance is less than 500");
} else if(balance < 750){
    console.log("Balance is less than 750");
} else if(balance < 900){
    console.log("Balance is less than 900");
} else{
    console.log("Balance is 1000 or above");
}

const userLoggedIn = true;
const debitCard=true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User is logged in");
}

if(userLoggedIn && debitCard){
    console.log("Allow to purchase course");
}
