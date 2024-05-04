// https://www.youtube.com/watch?v=9ksqBa8_txM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=23

const user = {
    username : "Amey",
    fees : 999,
    
    welcomeMsg : function(){
        console.log(`Hi ${this.username}!! Welcome to the websote`);   // this keyword refers to the current context.. in this case this.username is going to refer to Amey
        console.log(this);   // refers to the current context.. in this case refers to the object.. this console.log will get executed in line 12 and 15 will give the object as the output
    }
}

user.welcomeMsg()
user.username = "Sam"
user.welcomeMsg()


console.log(this); // here there is no context.. but since we are running the code locally using node.. we get an empty object as the output.. as its context is nothing but inside node
// now if we run the same statement in browser console then we will get the output as window object.. this is because the highest context is the window object

// function chai() {
//     let username = "Tambe"
//     console.log(this.username)  // gives undefined.. as we are allowed to use this for an object only
// }

// chai() // gives multiple things related to engine as the context

// const chai = function() {
//     let username = "Neha"
//     console.log(this.username);

// }
// chai() // gives undefined

/*-------------- ARROW FUNCTION ---------*/

const chai = () => {
    let username = "Amey"
    console.log(this); // gives {}
}

chai()



// arrow function basic syntax
// () => {}

// you can hold the arrow function inside a name
const addTwo = (num1, num2) => {
    return num1+num2
}// this is the basic definition of arrow function..
console.log( addTwo(5,6))

// implicit return example of arrow function

const addThree = (num1, num2) => (num1 + num2)  // remove the curly braces {}.. remove return and bring it in same line.. this is implict return.. writing return is compulsory if we use curly braces { } in arrow fucntion
// for numbers or strings you can write without ( ).. that is num1+num2 but not in ().. but if you WANT TO RETURN OBJECT.. then wrap it inside ({}) like this
console.log(addThree(5,2))


// arrow fucntion implicit return of an object and output of params
const addFour = (num1, num2) => ({username:"Amey",result:num1+num2})
console.log(addFour(2,1));  



