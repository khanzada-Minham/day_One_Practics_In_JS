// Array Method Practices:

const onNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
onNum.forEach((items) => {
    sum += items
})
// console.log(sum);


const letters = ['a', 'b', 'c', 'a', 'c', 'b', 'a', 'd'];
const counter = {};
letters.forEach((items) => {
    if (counter[items]) {
        counter[items]++
    }
    else {
        counter[items] = 1
    }
})
// console.log(counter);


const onNumber = [1, 2, 3, 4, 5];
let totalnumber = onNumber.map((items, index) => {
    return items + index;
})
// console.log(totalnumber);


const products = [
    {
        name: "laptop",
        price: 1000,
        count: 5
    },
    {
        name: "phone",
        price: 500,
        count: 10
    },
    {
        name: "watch",
        price: 200,
        count: 20
    },
    {
        name: "headphones",
        price: 300,
        count: 15
    }
]

let totalPrices = products.map((item) => ({
    name: item.name,
    totalPrices: item.price * item.count
}))
// console.log(totalPrices);


const numbers = [1, 2, 3, 4, 5, 6];
let newNumber = numbers.filter((item) => item > 3)
// console.log(newNumber);

let even = numbers.filter((items) => {
    // console.log(`items  ${items % 2 === 0}`);
    if (items % 2 === 0) {
        return items
    }
})
// console.log(even);


const another_Number = [1, 2, 3, 4, 1, 5, 3, 4, 6, 7, 1, 3, 5];
let not_Dublicat_Number = another_Number.filter((items, index, arr) => {
    return arr.indexOf(items) === index
})
// console.log(not_Dublicat_Number);




const addNum = [10, 2, 3, 4, 5, 6, 7];
let add = addNum.reduce((acc, value) => {
    return acc + value
})
// console.log(add);


let max = addNum.reduce((acc, items) => {
    if (acc > items) {
        return acc
    }
    else {
        return items
    }
}, -Infinity)

// console.log(max);


const Store = [
    {
        name: "laptop",
        price: 1000,
        count: 5
    },
    {
        name: "phone",
        price: 500,
        count: 10
    },
    {
        name: "watch",
        price: 200,
        count: 20
    },
    {
        name: "headphones",
        price: 300,
        count: 15
    }
]

let ProductsStore = Store.reduce((acc, items) => {
    return acc + items.price * items.count
}, 0)
// console.log(ProductsStore);

//                   0  1  2  3  4
const sliceNumber = [1, 2, 3, 4, 5];
const sliceNum = sliceNumber.slice(1, 4);
// console.log(sliceNum);


const participants = ['Minham', 'Ateeq', 'kelari', 'Ghazi', "Shaheer"];
const winner = participants.slice(1, 4);
// console.log(winner);


const spliceNumber = [1, 2, 3, 4, 5];
let deleted = spliceNumber.splice(1, 3, 6, 7)
// console.log(deleted);
// console.log(spliceNumber);

const namesArr = ['Minham', 'Aliyan', "Sanan", "Ghazi", 'Kealri', 'Mohir'];
namesArr.sort()
// console.log(namesArr);


const number_Sorting = [74, 10, 5, 90, 102, 1, 30, 8, 2, 7, 6, 101, 1, 1];
number_Sorting.sort(sortingArray);
function sortingArray(a, b) {
    return a - b
}
let result = number_Sorting.filter((items, index, arr) => {
    return arr.indexOf(items) === index;
})
// console.log(result);


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const arr4 = arr1.concat(arr2, arr3, 10)
// console.log(arr4);


const filNumber = [1, 2, 3, 4, 5, 6, 7];
filNumber.fill(0, 1, 5);
// console.log(filNumber);

function fillNum(x) {
    return Array(x).fill(0).map((items, index) => {
        return index + 1
    })
}
// console.log(fillNum(10))

const StudentName = ["Minham", "Aliyan", "Sanan", "Mohir"];
const chackName = StudentName.includes("Aliyan");

// console.log(chackName);


const fruits = ['Apple', 'Oringe', 'Mango'];
const chackFruits = fruits.includes('Oringe');
if (chackFruits) {
    // console.log('Yuppy!')
}
else {
    console.log(`Sad... Let's buy the Oringe`)
}
// console.log(chackFruits);


const countires = ['Pakistan', 'Romain', 'USA'];
let resultCountires = countires.join(', ')
// console.log(`I want to visit : ${resultCountires}`);

const reversNum = [1, 2, 3, 4, 5, 6];
let resultReversNum = reversNum.concat().reverse();
// console.log(resultReversNum);


const reversString = "Hello Word!";

let resultReversString = reversString.split(' ').reverse().join('');
// console.log(resultReversString);


const PuchNumber = [];
PuchNumber.push(10, 5, 7, 9, 4, 1);
PuchNumber.sort(PuchNumberSort);
function PuchNumberSort(a, b) {
    return a - b
}
// console.log(PuchNumber);

const popNumber = [1, 2, 3, 4, 5, 6];
// popNumber.pop();
// popNumber.pop();
let ResultPopNumber = popNumber.pop();
// console.log(ResultPopNumber);


const unshiftNumber = [1, 2, 3, 4, 5, 6];
unshiftNumber.unshift(10)
// console.log(unshiftNumber);
