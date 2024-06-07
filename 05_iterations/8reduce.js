const myNums = [1,2,3]

const mytotal = myNums.reduce(function (acc, currVal) {
  console.log(`acc:${acc} and current val:${currVal}`);  
  return acc + currVal
},0)

// now writing same function in arrow fucntion

const mytotal2 = myNums.reduce((acc,currval)=>acc+currval,0)

console.log(mytotal);
console.log(mytotal2);

console.log("---------------------");

const shoppingCart = [
  {
    course:"JS",
    price:5000
  },
  {
    course:"Python",
    price:1000
  },
  {
    course:"CPP",
    price:2500
  },
  {
    course:"DSA",
    price:25000
  },
]

const price = shoppingCart.reduce((acc,course)=>acc+course.price,0)
console.log(price);

/* 
The reduce method in JavaScript is a powerful array method used to reduce the array to a single value by executing a reducer function on each element of the array. 
The reduce method applies the provided function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

example -
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

callback: A function to execute on each element in the array, taking four arguments:
accumulator: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed in the array.
array (optional): The array reduce was called upon.
initialValue (optional): A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used and skipped. 
Calling reduce on an empty array without an initial value will throw a TypeError.

-- USAGE
1. Summing an Array
2. Flattening an Array of Arrays
3. Counting Instances of Values in an Object
4. Grouping Objects by a Property

Important Points
If no initialValue is provided, reduce will execute the callback function starting from the second element (index 1), skipping the first element. If initialValue is provided, reduce will start at index 0.
Calling reduce on an empty array without an initial value will throw a TypeError.
reduce can be used to implement various higher-order functions like map, filter, and flatMap.
*/