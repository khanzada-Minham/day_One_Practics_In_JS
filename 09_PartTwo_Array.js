const supperHeros = ["Batman", "Spider-Man", "Superman"];
const dcHeros = ["Thor", "Ironman"];

// supperHeros.push(dcHeros);
// console.log(supperHeros);

let anotherHeros = supperHeros.concat(dcHeros);
console.log(anotherHeros);

const allNewHeros = [...supperHeros, ...dcHeros];  // Spread Operator same to Concat , tow Array join   
console.log(allNewHeros);


let anotherArray = [1, 2, 3, [4, 5, 6], 7, [10, 11, [8, 9]]];
let realAnotherArray = anotherArray.flat(Infinity); // Flat Mathod join in One Array;
console.log(realAnotherArray);


let practiceArrayOne = "Minham";
console.log(Array.isArray(practiceArrayOne)); // Chack the value is Array ?
console.log(Array.from(practiceArrayOne)); // Convert the Array..
console.log(Array.from({name:'Minham',age: '45',length:2}));    // Interesting...


const playerOne = 100;
const playerTwo = 200;
const playerThree = 300;

let playerFore = (Array.of(playerOne,playerTwo,playerThree)); // Create the new Array .
console.log(playerFore); // Create Array from value

