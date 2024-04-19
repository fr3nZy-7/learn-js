const accountId =144553
let accountEmail = "amey@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed

accountEmail = "at@gmial.com"
accountPassword = "12324433121"
accountCity = "Mumbai"

console.log(accountId);
/*
prefer not to use ar
because of issue in block scope and functional scope

*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);