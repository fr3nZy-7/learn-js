// functions

function sayMyName(){   // function name is function reference 
    // function definition inside { }
    console.log("Amey");
}

sayMyName()  //fucntion execute


function addTwoNumbers(num1, num2){ // has two paramters
    console.log( num1 + num2)
}

addTwoNumbers() // returns NaN as arguments were not passed
addTwoNumbers(3,4)

// parameters are in function definitio.. arguments are fucntion execution

// we can store output of a fucntion in a variable too

const result = addTwoNumbers(4,8);
console.log(`Result: ${result}`);   // gives undefined as result was not defined in the above line.. it was not defined as the function did not return anything

function addTwoNums(num1, num2){ 
   // let result = num1 + num2
   // return result
    //  return num1 + num2  // be written like this too
    return (num1 + num2) // return is the last statement of a fucntion.. after return the next lines do not get executed
}

const newResult = addTwoNums (1,2);
console.log(`New Result: ${newResult}`); // function returned a value hence new result got assigned the value and it returns the expected numbers


function loginUserMsg(username)
// you can give default value here like this
//function loginUserMsg(username = "Default user")  if username is not passed it will pick default user.. if passed then default value will get overridden
{
    if(username===undefined)  
    // can also be written as
    // if(!username)  
    {
        console.log("Please enter name");
    }
    else {
        return `${username} just logged in.`
    }
    
}

console.log(loginUserMsg("Amey"))
console.log(loginUserMsg())  // return undefined just logged in.. as username variable was not defined didnt get a value .. giving empty string ("") will retun just logged in