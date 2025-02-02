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



//      Stack-Memory => (Primitive-Data-Type) used to Stack-Memory 'copy-Value' the variable;
//      Heap-Memory =>  (Non-Primitive-Data-Type) used to Heap-Mamory 'Original-Value' change;

//      Stack-Memory:

let myEmailName = "Minhamkhanzada4455@gmail.com";
let changeTheMyEmailName = myEmailName;
changeTheMyEmailName = "MinhamHussain@gmail.com";

console.log('myEmailName =>',myEmailName);
console.log('changeTheMyEmailName =>',changeTheMyEmailName);



//      Heap-Memory: 

let studentOne = {
    name: "Minham",
    age: 30,
    attendance: true
}

let studentTwo = studentOne;
studentTwo.age = 24;
console.log(studentOne);
console.log(studentTwo);
