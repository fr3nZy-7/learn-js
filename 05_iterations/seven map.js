const myNums = [1,2,3,4,5,6,7,8,9,10]

const myNewNums = myNums.map((num)=> num+10) // map also returns values

console.log(myNewNums);

// chaining in map

const myNewNum2 = myNums
                    .map((num)=>num*10) // the output of this map gets forwarded to the next map.. so here it multiplies the values by 10
                    .map((num)=>num+1)  // then adds 1 and so on and so forth
                    .filter((num)=>num>=40)
                    .filter((num)=>num<95)

console.log(myNewNum2);

// The map method in JavaScript is a built-in array method that creates a new array populated with the results of calling a provided function on every element in the calling array. It doesn't modify the original array but returns a new array.
// syntax
//const newArray = array.map(callback(currentValue[, index[, array]])[, thisArg])

//example
const numbers = [1, 4, 9];
const roots = numbers.map(num => Math.sqrt(num));
console.log(roots); // Output: [1, 2, 3]

/* 
Common Use Cases
1. Transforming Data: Convert data from one form to another.
2. Extracting Properties: Extract specific properties from objects in an array.
3. Formatting Data: Format data to a different structure.


Important Points
The map method does not execute the function for array elements without values.
The map method does not change the original array.
If the callback function returns undefined, the new array will contain undefined at the corresponding index.


*/