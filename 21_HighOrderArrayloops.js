//  For of loop ;

const arr = [0, 1, 2, 3, 4, 5, 6];
for (const element of arr) {
    // console.log(element);
}

const greeting = "Hello Words"
for (const greet of greeting) {
    if (greet === " ") {
        continue
    }
    //  console.log(`Each chai is ${greet}`);
}

const map = new Map();
map.set('PK', 'Pakistan');
map.set('USA', 'United States Of America');
map.set('FR', 'France');
// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} : ${value}`);
}

const MyObj = {
    name: 'John',
    age: 25,
    city: 'New York',

}
for (const [key, value] of Object.entries(MyObj)) {
    // console.log(`${key} : ${value}`); 
}

// For In Loop;

const Obj = {
    name: 'John',
    age: 25,
    city: 'New York',
}
for (const key in Obj) {
    //    console.log(`${key} : ${Obj[key]}`);
}

const newArray = ['js', 'rb', 'py', 'java', 'cpp'];
for (const key in newArray) {
    // console.log(`${newArray[key]}`);
}

// ForEach Loop

const coding = ["javaScript", "Python", "java", "rube", "C++"];
// coding.forEach((items, index) => console.log(items, index));


const myCoding = [
    { name: 'javaScript', price: 250 },
    { name: 'Python', price: 300 },
    { name: 'rube', price: 350 }
]
let onLoopValues = myCoding.forEach((items) => { // not return value
    console.log(items);
})
console.log(onLoopValues);