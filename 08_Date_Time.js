let myDate = new Date();
console.log(myDate.toLocaleString());
console.log(myDate.getFullYear());
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.getMilliseconds());
console.log(typeof myDate);


// const myCratedDate = new Date("1999-09-11");
const myCratedDate = new Date(1999,8,11);
console.log(myCratedDate.toLocaleString());
console.log(myCratedDate.toDateString());


let myTimeStamp = Date.now();
console.log(myCratedDate.getTime());
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getDay());

let anotherNewDateObject =  newDate.toLocaleString('default',{
    weekday: 'short',
    year: 'numeric',  // explane the shot date display example => Dec-2024-Tue
    month: 'short',
})

console.log('anotherNewDateObject',anotherNewDateObject);
