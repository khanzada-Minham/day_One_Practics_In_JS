const score = 100;
console.log(score);

const balance = new Number(400);
console.log(balance);
console.log(balance.toFixed(1)); // 400.0;

let anotherNumber = 123.8954;
console.log(anotherNumber.toPrecision(3)); // 124;


const hundrads = 1000000;
console.log(hundrads.toLocaleString('en-IN')); // 1,000,000


// ++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++



console.log(Math);
console.log(Math.abs(-5)); // nagetive value change ;
console.log(Math.round(5.8)); // rounded the value ;
console.log(Math.floor(5.9)); // floor the value ;
console.log(Math.min(5, 9, 4, 3, 2, 7)); // minimum value
console.log(Math.max(5, 9, 4, 3, 2, 7));  // maxsemum value

// console.log(Math.floor(Math.random() * 10) + 1);

let min = 10;
let max = 20;
let finalResult = Math.floor(Math.random() * (max - min + 1)+ min);
console.log(finalResult); 