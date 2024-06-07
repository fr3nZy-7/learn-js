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

console.log('-------------------------');
console.log('Excercise');
console.log('-------------------------');

let patient = [
    {
      "_id": "patient1",
      "name": "John Doe",
      "age": 30,
      gender: "Male",
      "contact_info": {
        "phone": "123-456-7890",
        "email": "john.doe@example.com"
      }
    },
    {
      "_id": "patient2",
      "name": "Jane Smith",
      "age": 25,
      "gender": "Female",
      "contact_info": {
        "phone": "987-654-3210",
        "email": "jane.smith@example.com"
      }
    },
    {
      "_id": "patient3",
      "name": "Alice Johnson",
      "age": 40,
      "gender": "Female",
      "contact_info": {
        "phone": "555-123-4567",
        "email": "alice.johnson@example.com"
      }
    },
    {
      "_id": "patient4",
      "name": "Bob Brown",
      "age": 35,
      "gender": "Male",
      "contact_info": {
        "phone": "444-555-6666",
        "email": "bob.brown@example.com"
      }
    },
    {
      "_id": "patient5",
      "name": "Charlie Green",
      "age": 28,
      "gender": "Male",
      "contact_info": {
        "phone": "333-444-5555",
        "email": "charlie.green@example.com"
      }
    },
    {
      "_id": "patient6",
      "name": "Daisy White",
      "age": 32,
      "gender": "Female",
      "contact_info": {
        "phone": "222-333-4444",
        "email": "daisy.white@example.com"
      }
    },
    {
      "_id": "patient7",
      "name": "Ethan Black",
      "age": 45,
      "gender": "Male",
      "contact_info": {
        "phone": "111-222-3333",
        "email": "ethan.black@example.com"
      }
    },
    {
      "_id": "patient8",
      "name": "Fiona Blue",
      "age": 38,
      "gender": "Female",
      "contact_info": {
        "phone": "666-777-8888",
        "email": "fiona.blue@example.com"
      }
    },
    {
      "_id": "patient9",
      "name": "George Red",
      "age": 50,
      "gender": "Male",
      "contact_info": {
        "phone": "777-888-9999",
        "email": "george.red@example.com"
      }
    },
    {
      "_id": "patient10",
      "name": "Hannah Yellow",
      "age": 29,
      "gender": "Female",
      "contact_info": {
        "phone": "888-999-0000",
        "email": "hannah.yellow@example.com"
      }
    }
  ]
  
let malePatient = patient.filter((pt)=>pt.gender==="Male");
console.log(malePatient);

let patientFrom888 = patient.filter((pt)=>{
    return pt.contact_info.phone.includes("888-")
})

console.log(patientFrom888);

let malePatientFrom888 = patient.filter((pt)=>{
    if(pt.gender==="Male" && pt.contact_info.phone.includes("888-") )
        return pt
})

console.log(malePatientFrom888);