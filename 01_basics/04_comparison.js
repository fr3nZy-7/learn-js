// console.log(2 < 1)
// console.log(2 > 1)
// console.log(2 <= 1)
// console.log(2 >= 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1);
// console.log("02" > 1);


console.log(null > 0);  //false
console.log(null < 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true

/* The reason is that an equality check == and comparisons <, >, <=, >=, work differently.
Comparisons convert null to a number, treating it as zero.
Hence null >= 0 is true and null > 0 is false */

console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined == 0);


/*  above writing the above type of comparison write clean code*/ 


// === strict check.. it not only compares value it also checks the datatype

console.log("2" == 2);
console.log("2" === 2);
console.log("a" == "A");
console.log("a" === "A");
