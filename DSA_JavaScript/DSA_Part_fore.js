// let arr = [];
// arr[0] = 110;
// arr[1] = 100;
// arr[2] = 20;
// arr[3] = 300;
// arr[4] = 40;
// arr[5] = 50;
// arr[7] = 62;
// console.log(arr);


// let arr = new Array(3);
// arr[0] = 110;
// arr[1] = 100;
// arr[2] = 20;
// arr[3] = 300;
// arr[4] = 40;
// arr[5] = 50;
// // arr[5] = 500;
// console.log(arr);


// let arr = new Array(5);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt("Enter the number : "));
// }
// console.log(arr);


// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log("Sum of all elements in the array is : " + sum); 

// let arr = [0,100,20,30,40,50,60,71,83,95,1100];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log("Maximum number in the array is : " + max);


// let arr = [10,25,45,92,75,5,41,3];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i];
//     }
// }
// console.log("Minimum number in the array is : " + min);


// let arr = [10, 25, 45, 75, 75, 75, 75, 75];
// let max = Math.max(arr[0], arr[1]);
// let smax = Math.min(arr[0], arr[1]);
// for (let i = 2; i < arr.length; i++) {
//     const element = arr[i];
//     if (element > max) {
//         smax = max;
//         max = element;
//     }
//     else if (element > smax && element != max) {
//         smax = element;
//     }
// }
// console.log("Maximum number in the array is : " + max);
// console.log("Second Maximum number in the array is : " + smax);