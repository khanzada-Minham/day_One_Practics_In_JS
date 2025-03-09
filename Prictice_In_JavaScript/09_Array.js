const myArray = [0, 1, 2, 3, 4, 5] // Array In Number
console.log(myArray[0]);

const myHerous = ["SupperMan", "Badman"];//   Array In String
console.log(myHerous);


const newArray = new Array(1, 2, 3, 4, 5); // Another Array Syntax 
console.log(newArray);


//  Array Methods 

newArray.push(6)
newArray.push(7)
console.log(newArray); //Push the value of this Array  =>  Output: [1, 2, 3, 4, 5, 6];
newArray.pop()    // Remove the last value of this Array;
newArray.unshift(100) // Add the value of this Array, but add to 'started'; 
newArray.shift()    // Remove the First value of this Array;
console.log(newArray.includes(6)); // Chack this Value in Array,
console.log(newArray.indexOf(5)); // Chack value index in Array, 
console.log(newArray.indexOf(9)); // Chack value index in Array, Enter the rong value return the -value;
const anotherNewArray = newArray.join() // convert the Array value into String,
console.log(anotherNewArray);


//      Splice & Slice,

console.log('slice',newArray.slice(1,3)); // Slice the Array n't change the Real Array
console.log(newArray);
console.log('splice',newArray.splice(1,3)); // Splice Change the Original Array
console.log(newArray);


