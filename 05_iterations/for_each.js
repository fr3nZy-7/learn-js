// for each loop.. most like we will use this only

// syntax 

// array.forEach(element => {
    
// });

const coding  = ["js","rb", "py", "java","cpp"]
// there are multiple things that got added in an array via prototype.. forEach , map, length etc and more got added to arrays 

coding.forEach(function (item) { console.log(item);})  // forEach requires a call back funtion.. the callback function doesnt have a name.. because the fucntion is running inside the array
console.log('-------------------------');

// now arrow fucntions can also be used here as a callback fucntion
coding.forEach((key)=>{console.log(key)})
console.log('-------------------------');


function printMe(item){
    console.log(item); // a fucntion that just prints.. we can pass the REFERENCE of the fucntion. 
}

coding.forEach(printMe) // we are not executing the function.. just PASSING THE REFERECNE
console.log('-------------------------');

coding.forEach( (item, index, arr) => {console.log(item, index, arr);})
console.log('-------------------------');
// the for each loop has access to the values within the Array, the index of the array as well as the complete array
// this is useful for the scenarios where there are objects inside an array. that is myArrayOfObjects = [ {obj1}, {obj2}, {obj3} ...  ]

const myCodeing = [
    {
        langName: "JavaScript",
        langFile: "js"
    },
    {
        langName: "Java",
        langFile: "java"
    },
    {
        langName: "Python",
        langFile: "py"
    }
]

myCodeing.forEach((item)=>{  /// here we have the access of the obejct.. and since we are calling it item then we can access each object using item.property
    console.log(item.langName);
})