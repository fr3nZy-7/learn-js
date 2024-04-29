//arrays

const myArray1 = [0,1,2,3,4,5, true, "Amey"] // its ok to have other type of elements too, they have have array inside array and object inside array too
//Array are resizeable in JAvaScript
//using copy operation on array will create a shallow copy.. that is it will create a copy which will share the reference.. so changes on copy will affect original

const myArray = [0,1,2,3,4,5]

const newArr = new Array(1, 2,34,5)

//array mehtods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

//myArray.unshift("0x")  // insert at 1st
//myArray.shift()  // delete 1st

//console.log(myArray.includes(3));  //boolean output if the value is present in the array or not
//console.log(myArray.indexOf(12)) // gives the index of the value.. if value is not present then returns -1
//console.log(myArray);

// const newArr1 = myArray.join()  // binds the two arrays and makes the newArr1 as a string

// console.log(myArray);
// console.log(newArr1);
// console.log(typeof myArray);
// console.log(typeof newArr1);

// slice and splice

console.log("A ", myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B ",myArray);

const myn2 = myArray.splice(1,3)
console.log(myn2)
console.log("C ",myArray)

// slice goest from the index mentioned to the end-1 .. does not include the end index mentioned
// slice DOES NOT affect the original array


//Splice goes from the index mentioned to the end includes the end index mentioned
//SPLICE affects the original array


