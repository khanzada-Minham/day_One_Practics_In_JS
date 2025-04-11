// for(i = 0 ;i < 6001; i++){
//     console.log(`${i} Hello`);   
// }

// 1 - 22;
// for(i = 1 ; i < 23; i++){
//     console.log(i);
// }

// 23 - 54

// for(i = 23; i < 55; i++){
//     console.log(i);
// }

// 200 - 100;
// for(i = 20; i >= 10; i--){
//     console.log(i);
// }

// var i = 1
// for(; i <= 10; i++){
//     console.log(i);
// }
// console.log(`Fail ${i}`);


// let n = 20;
// let sum = 0
// for(let i = 0; i <= n; i++){
//     sum += i 
// }
// console.log(sum);


// let n = 1000;

// for (let i = 0; i <= Math.floor(n / 2); i++) {
//     if (n % i === 0) {
//         console.log(i);
//     }
// }

// let primNumber = true;
// let n = 83
// for(let i = 2; i <= Math.floor(n/2); i++){
//     if(n % i === 0){
//         primNumber = false;
//         break;
//     }
// }
// console.log(primNumber);

// let primNumber = true;
// let n = 4
// // console.log(prim(n));

// // function prim(n) {
// //     if(n<=1) return false;
// //     if(n == 2) return true;
// //     if(n%2 == 0) return false;
// //     for(let i = 3; i<Math.floor(Math.sqrt(n));i+=2){
// //         if(n%i == 0) return false;
// //     }
// //     return true;
// // }

// function prim(n){
//     if(n <= 1) return false;
//     if(n == 2) return true;
//     if(n%2 == 0) return false;
//     for(let j = 3; j <= Math.floor(Math.sqrt(n)); j+=2){
//         if(n%j == 0 ) return false;
//     }
//     return true;
// }

// console.log(prim(83));

// let n = 123456789;
// let sum = 0
// while(n > 0){
//     let rem = n % 10;
//     n = Math.floor(n/10);
//     sum += rem;
// }
// console.log(sum);


// let n = 123456789;
// let sum = 0;
// while(n > 0){
//     let rem = n%10;
//     n = Math.floor(n/10);
//     sum += rem
// }

// console.log(sum);


// let num = 12345;
// let rev = 0;
// while( num > 0){
//     let rem = num % 10;
//     num = Math.floor(num / 10); 
//     rev = rev *10 + rem; 

// }
// console.log(rev);


