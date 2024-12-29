// Primitive DataType

// 7 Types => String , Number ,Boolearn , Null , Undefined ,Symbol, BigInt;

const score = 106; // number
const scoreValue = 103.95; // number
const isLoggedIn = false; // boolearn
const outSideTemp = null; // null
let email; // undefined



const id = Symbol('102'); // symbol
const anotherId = Symbol('102'); // symbol
console.log(id === anotherId); // Result is n't same;


// Reference (Non Primitive)

// => Array, Object,  Function

const supperHeros = ["Superman","Batman","Spider-Man"]; // Array
const person = {
    name: "Minham",  // Object
    age: 30,
}

function printName() {    // Function
    console.log(person.name);   
}
printName() // call the ,Function