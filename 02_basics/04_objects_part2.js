// const tinderUser = new Object()  // this declarationmakes it a singleton object
const tinderUser = {}  // this declaration makes it non singleton object


tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Amey",
            lastname : "Tambe"
        }
    }
}

console.log(regularUser.fullName)
console.log(regularUser.fullName.userFullName)
console.log(regularUser.fullName.userFullName.lastname)

const object1 = {1:"A", 2:"B"}
const object2 = {3:"C", 4:"D"}

const object3 = {object1,object2} // this will not merge the objects it will add the obj1 and iobj2 as ojects inside obj3.. just like we saw in array

console.log(object3);

const object4 = {1:"A", 2:"B"}
const object5 = {3:"C", 4:"D"}

const object6 = Object.assign({},object4, object5) // adding {} before object4 and obj5 in assign is optional but is best practice.. check object assign mdn documentation.. its syntax is target, source.. so its better to have the {} so that target is this object

console.log(object6);

// nowadays we use spread that is the dot dot dot ... operator to merge objects too

const object7 = {1:"A", 2:"B"}
const object8 = {3:"C", 4:"D"}

const object9 = {...object7,...object8}
console.log(object9);

const users = [  // in real life we may get an array of objects from backend
    {
        id:1,
        email:'h@gmail.com'
    },
    {
        id:2,
        email:'a@gmail.com'
    },
    {
        id:3,
        email:'c@gmail.com'
    }
]

console.log(users);
// we may access it as 
console.log(users[1].email)
// its good that we get it as an array as then we can use this in a loop and go through the data inside the object
console.log(Object.keys(tinderUser));  // returns an array of all the keys inside the object
console.log(Object.values(tinderUser));  
console.log(Object.entries(tinderUser)); // returns an array having all the key and values as array inside an array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // what if we are looping through the object and want to check if a property is there or not.. this return a boolean stating the said prperty is present in the object or not