// while
// entry controlled loop
// if condition is not met the control does not got to the loop

let i =0;
while (i<=10) {
    console.log(`The value of i is ${i}`);
    i+=2; // similar to cpp
}

let myArray = ["Flash","Batman","Superman"]
let arr = 0
while (arr< myArray.length) {
    console.log(myArray[arr]);
    arr++;
}

// do while
// exit controlled
// always executes at least once

let score = 11 // if its value is 1 then it executes from 1 to 9.. if its 11 it will execute it once for the 1st time.. check the condition and since condition is false it will exit.. 

do {
    console.log(`the score is ${score}`);
    score++
} while (score < 10);