let num = "35asda";

console.log(typeof num);

let Num = Number(num);

console.log(typeof Num);
console.log(Num); // Output: NaN which means Not a Number

// "35" => 35
// "35abc" => NaN
// null => 0
// true => 1

let isLoggedIn = "true";
console.log(Boolean(isLoggedIn)); 

// "true" => true
// "false" => true
// 1 and other then zero => true
// 0 => false
// null => false
// undefined => false
// String => true if it has any character otherwise false