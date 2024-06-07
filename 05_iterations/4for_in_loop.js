// for in loop

const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in myObject) { // for in will work at other places too.. but generally used for objects
    console.log(key); // will return just he keys
}

for (const key in myObject) {
    console.log(`${key} is the file extension of ${myObject[key]}`);   

}


const programming = ["js","rb", "py", "java","cpp"]

for (const key in programming) {
    console.log(key);    
    console.log(programming[key]);    

}
// in for in loop the keys are picked for an array.. that is 0 to N.. but in for of loop the key values are picked

// for in for map ??

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); // doenst give an output. map is not iteratble via this loop

}


    
