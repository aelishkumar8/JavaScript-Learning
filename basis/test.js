// How to print "Hello, World!" to the console in JavaScript by node.js 
console.log("Hello, World!");

const accountId = 144434
let accountEmail = "abe@gmail.com"
var accountPassword = "12345"
accountCity = "New York"
let accountState; // undefined

// accountId = 4        // not allowed, because accountId is a constant
console.log(accountId);
accountEmail = "hs"
accountPassword = "asdasda"
accountCity = "Los Angeles"

/*
    perfer to not use var
    because it creates the variable in the global scope
    even if it is defined inside a function or block 
*/

console.table([accountEmail, accountPassword, accountCity,accountState]);