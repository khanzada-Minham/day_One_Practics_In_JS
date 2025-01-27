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

let totalPrices = products.map((item)=> ({
    name: item.name,
    Total_Product_Prices : item.count * item.price
}))
// console.log(totalPrices);



