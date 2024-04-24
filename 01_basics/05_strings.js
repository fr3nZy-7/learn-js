const name = "TAMBE"
const repoCount = 3

console.log(name + repoCount + " value")
// avoid using this syntax as its not readable

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//this is called string interpolation.. makes code more readable
// modern way
//we can easily add any methods along with the variables like name.toupper etc etc


const gameName = new String("Amey-Tambe")
//using new key word and String class we are creating a new object.. using the String constructor we are passing the value of a string.. same thing happens in the simple way too const name = "amey"
// string stores it as a key value pair.. 0th key has value A, 1st key has value m etc etc
/*
0:"A"
1:"m"
2:"e"
3:"y"

*/

console.log(name[2])
console.log(gameName[3])
console.log(gameName.__proto__) // all methods are inside the prototype.. but its not necessary to use the methods this way
console.log(gameName.toUpperCase());
console.log(gameName.length)

const newString = gameName.substring(0,4)
console.log(newString);

//const anotherString = gameName.slice(0,4)
const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "          Amey   "
console.log(newStringOne.trim())



const url = "https://amey.com/new%20page"

console.log(url.replace("%20", "___"));

console.log(url.includes("tambe"))

console.log(url.split("/"));