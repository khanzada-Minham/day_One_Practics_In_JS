let score = "33abc";
console.log(typeof score);
console.log(score);


let valueInNumber = Number(score);
if (valueInNumber) { // Strick Chack , NAN Shouldn't be.
    console.log(typeof valueInNumber); // String Convert to number;
    console.log(valueInNumber);
}


// "33" => 33,
// "33abc" => NAN,
// true => 1,
// false => 0,
// "abc" => NAN,
// null => 0;
// undefined => NAN;




let isLoggedIn = "";

let booleanIsLogged = Boolean(isLoggedIn);
console.log(booleanIsLogged);

// 1 => True,
// 0 => false,
// "" => false,
// "abc" => true,


let anotherNumber = 45;
let convertNumberToString = String(anotherNumber);
console.log(typeof convertNumberToString);

console.log("****************************************Operation**********************************************");


// ****************************************Operation**********************************************



let value = 45;
let negativeValue = -value;
console.log(negativeValue);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 3);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);


console.log((3 + 4) * 5 % 3);

console.log(+true);

let gameScore = 100;
gameScore++
console.log(gameScore);

let x = 3;
const y = x++
console.log(`valueOf X ${x} and valueOf y ${y}`);

let z = 3;
const w = ++z
console.log(`valueOf Z ${z} and valueOf w ${w}`);
