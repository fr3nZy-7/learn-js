// dates


let myDate = new Date()

// console.log(myDate);    
// console.log(myDate.toString());    
// console.log(myDate.toISOString());    
// console.log(myDate.toDateString());    
// console.log(myDate.toLocaleString());    
// console.log(typeof myDate);    

let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // month starts form 0 index
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());

let myCreatedDate1 = new Date("2023-01-14")
// console.log(myCreatedDate1);

let myTimeStamp = Date.now()

console.log(myTimeStamp); // mili secs from 1st Jan 1970 mid night

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDay);  
console.log(newDate.getMonth + 1);   // month starts at 0 index


newDate.toLocaleString("default",{
    weekday:"long"
    
})