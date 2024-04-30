// objects can be declared as follows - literal and constructor ( creates like a singleton)

// constructor(singleton) --> Object.create()


//Object Literals
const mySymbol = Symbol("key1")

const user = {
    name:"Amey",     // key and value system
    "full name": "Amey Tambe",
    [mySymbol]:"mykey1",  // we declare/add symbol as a property like this.. if we dont add it inside [] then it will be considered like a normal property not a symbol
    age:33,
    location:"Pune",
    email:"amey@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(user.email);
console.log(user["email"]);  // we can access the properties of object using these 2 ways.. the 2nd way is usefull when properies are declared like  full name
console.log(user["full name"]); // the keys are considered as strings by compiler, we can give numbers as keys as well
console.log(user[mySymbol]);

user.email = "Amey@amazon.com"
// Object.freeze(user)     // freeze the object and do not allow to make changes to it
user.email = "amey@msn.com"

console.log(user.email);

console.log(user);  // see symbol output with and without [] bracket

user.greeting = function(){
    console.log(`Hello JS USER!,${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting); // this will return function reference back.. function can be invoked by giving a (parathesis)
