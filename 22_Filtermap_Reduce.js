// Filter_Map&Reduce;

const onNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filter_Value = onNumber.filter((x) => {
    return x >= 5
})
// console.log(filter_Value);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBook = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
})
// console.log(userBook);


// Map Method

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let addNumber = myNumber.map((x)=>{
//     return x + 10;
// })

const addNumber = myNumber.map((add) => {
    return add * 10
}).map((add) => {
    return add + 1
}).filter((FL) => FL >= 60)
// console.log(addNumber);


// Reduce Method;


let onArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = onArray.reduce((acc, cur) => {
    // console.log(`Accumulator : ${acc} + ${cur}`);
    return acc + cur
}, 15)
// console.log(sum);


let shoppingCart = [
    {
        id: 1,
        itemName: "js Cores",
        price: 2999
    },
    {
        id: 2,
        itemName: "py Cores",
        price: 1999
    },
    {
        id: 3,
        itemName: "Mobile dev Cores",
        price: 5999
    },
    {
        id: 4,
        itemName: "Data Sintices Cores",
        price: 12999
    },
]

let totalPrice = shoppingCart.reduce((acc,crr)=>(acc + crr.price),0)
console.log(totalPrice);