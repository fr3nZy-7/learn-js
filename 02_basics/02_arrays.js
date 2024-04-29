const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes) // the 1st array accepted the 2nd array as an element

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]); // here it prints the entire array..
// console.log(marvel_heroes[3][2]); // to access the elements inside the array element

// const all_heroes = marvel_heroes.concat(dc_heroes)  // merges the 2 arrays
// console.log(all_heroes);

const allNewHero = [...marvel_heroes,...dc_heroes] // spread operator.. merges the 2 arrays .. picks the elements individually
console.log(allNewHero);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(anotherArray);   

const realAnotherArray = anotherArray.flat(Infinity) // removes the depth (array inside array) and returns a flat array.. flat needs the level of depth as a parameter.. infinity means removes all depth.. 1 or 2 menas removes one level of array inside an array 
console.log(realAnotherArray);



console.log(Array.isArray("Amey"))
console.log(Array.from("Amey")) // makes array from the given input
console.log(Array.from({name:"Amey"})) // if from function is not able to return an array it will return empty string  [!!!!INTERESTING!!!!]


let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2,score3)); // creates a new array from given variables