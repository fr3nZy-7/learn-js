const userEmail = "amey@google.com"  // is assumed to be true
// const userEmail = ""  is assumed to be false
// const userEmail = []

if(userEmail){  // here we didnt check for a true value like if(userEmail == "amey@google.com").. this would be a check for true.. but we just had esrEmail in the condition.. 
    //since it was not an empty string it assumed that the value is true this assumption makes it truthy and empty string assumed as falsey
    console.log(`Got the user email - ${userEmail}`);
} else{
    console.log("Dpesnt have user email");
}

/* truthy and falsey values

Falsey values
false,0,-0, BigInt 0n, "", null, undefined, NaN

truthy values  (any thing that is not falsey is truthy)
true,1,
"0" (this is not an empty string), 
"false" (not an empty string), 
" " (has space, not an empty string)
[] empty array
empty object
function(){} empty function, no params, no code in the block


the follwoing conditions also return true
false == 0
0 == ""
false == ""

*/
const userEmai1 = []
if(userEmail.length ===0){ // we are checking the length of an empty array here
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){ // here Object.keys(emptyObj) returns in an array fromat.. then we checked the length of the array. since object is empty the returning array is also empty
    console.log("Objectis empty");
}

