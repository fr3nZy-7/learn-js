// for of loop

const numbers = [1,2,3,4,5]

// for (const iterator of object) { // the object here is a broader term not specifically an object. can be used for arrays and strings as well
    
// }

for (const num of numbers) { // generally we give num of numners, greet of greetings, index of array so that its easier / more readable.. we can simple go with i and j as well
    console.log(num);
}

const greeting = "Hello World!"

for (const greet of greeting) {
    if(greet == " ") continue; // to skip printign space.. writting in short hand scope of the if statement
    console.log(`Each char is ${greet}`);
}

// maps data type.. 
// Holds key value pair. and remembers the original insersion order of the keys.
// any value can be used as either a key or a value.. it can be both objects and primitive values
// a key has to be unique in the map
// will always hold unique values
//map inherits some things indirectly from object super class via protype chain
//Map itself is a distinct built-in object with its own unique properties and methods.

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

console.log(map);

for (const key of map) {
    console.log(key); // each map entry that is the key value pair will be return as an array.. What if we want to destructure the array returned???
}

for (const [key, value] of map) {
    console.log(key + " represents " + value); 
}

// for of on Object

const myObj = {
    'game1' : 'NFS',
    'game2' : 'PES'

}

// for (const key of myObj) {
//     console.log(key); // we get error... object is not iteratable
    
// }

