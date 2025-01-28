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



