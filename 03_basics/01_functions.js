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

/* -------------------------------- */

// the ... spread operator is also called a rest operator.. it is called rest or spread based on the context where it is going to be used

function calcCartPrice(val1, val2,...num){  // if we give val1 and val2 new params and pass more than 3 arguments.. first 2 arguments are assigned to val1, val2 and 3rd onwards all get clubbed in an array 

    return num

}

console.log(calcCartPrice(2,5,69,58,"abv"));  // we passed multiple values in the function and used the ... rest operator on one variable..
// this returns an array


const user1 = {
    username: "Amey",
    salary:10000000
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and salary is ${anyObj.salary}`);  // this has issue if we change the obj property salary to ctc.. then we get undefined as type checking is not being done here
}

handleObject(user1)
handleObject({username:"Tambe", salary:"2020202"}) // you can pass the object directly to a fucntion like this


const myNewArray = [200,400,600,800]

function return2ndValue(getArray){
    return getArray[1]
}

console.log(return2ndValue(myNewArray));
console.log(return2ndValue(["abc",3,"pqr"])); // passing an array directly
