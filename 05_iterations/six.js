const coding  = ["js","rb", "py", "java","cpp"]

const values = coding.forEach((item) => {
    console.log(item);
    return item; // for each doesnt return anything
})

console.log(values) // doesnt return anything.. we get undefined

// What if want to conditional check the value or return it simply?
const myOldNums = [1,2,3,4,5,6,7,8,9,10]
const myNewNums = []
myOldNums.forEach((i)=>{
    if(i>4){
        myNewNums.push(i)
    }
})
console.log(myNewNums);

// for we can use filters

console.log('-------------------------');

const myNums = [1,2,3,4,5,6,7,8,9,10]

const myNewNum = myNums.filter((num)=>(num>4)) // filter also requires a callback function and a condition.. items that satisfy the condition are retuned  by filter
//Filter returns values unlike forEach which does not return a value.. here its written in a single line auto return.. refer line 32 onwards

console.log(myNewNum);


// callback functions can also be written as follows
const myNewNum2 = myNums.filter((num)=>{if(num>2)return num}) // multiple/single lines explicitly writing return statement
const myNewNum3 = myNums.filter((num)=>{return num>8}) // multiple/signle lines explicitly writing return statement
const myNewNum4 = myNums.filter((num)=> num>6) // in a single line .. auto return
console.log(myNewNum2);
console.log(myNewNum3);
console.log(myNewNum4);



