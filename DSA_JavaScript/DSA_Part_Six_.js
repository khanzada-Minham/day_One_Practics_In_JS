// ..........................................................Array.....................................................
//  Left Rotation By 1 Element;

/*
let arr = [11, 22, 33, 44, 55, 66];
let copy = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
arr[arr.length - 1] = copy;
console.log(arr);

let arr = [1, 2, 3, 4, 5, 6, 7];
let copy = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
arr[arr.length - 1] = copy;
console.log(arr);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let copy = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
arr[arr.length] = copy;
console.log(arr);

*/

// Right Rotation By 1 Element;

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let copy = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = copy;
console.log(arr);


let arr = [2, 3, 4, 5, 6, 7, 1];
let copy = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = copy;
console.log(arr);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let copy = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = copy;
console.log(arr);

*/

//  Left Rotation By 2 Element;
/*
let arr = [1, 2, 3, 4, 5];
let counter = 2;
for (let j = 0; j < counter; j++) {
    let copy = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = copy
}
console.log(arr);

let arr = [1, 2, 3, 4, 5];
let k = 5
k = k % arr.length;
let counter = 0;
for (let j = 0; j < k; j++) {
    let copy = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = copy;
}
console.log(arr);
*/

// Right Rotation By 2 Element;
/*
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 1;
for (let j = 0; j < k; j++) {
    let copy = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = copy;
}
console.log(arr);
*/

// Right & Left Rotation By K Times with extra space;
/*
let arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length);
let k = 2;
k = k % arr.length;
for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length];    
}
console.log(temp);


let arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length);
let k = 2;
k = k % arr.length;
for (let i = 0; i < arr.length; i++) {
    temp[(i + k) % arr.length] = arr[i];
}
console.log(temp);
let k = 2;
k = k % arr.length;
for (let j = 0; j < k; j++) {
    let copy = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = copy;
}
console.log(arr);


let arr = [1,2,3,4,5];
let temp = new Array(arr.length);
let k = 2;
k = k % arr.length;
for (let i = 0; i < arr.length; i++) {
    temp[(i + k) % arr.length] = arr[i]  
}
console.log(temp);

*/
// Left Rotation By Three Approches;
/*
let arr = [1, 2, 3, 4, 5];
let k = 2;
k = k % arr.length;
for (let j = 0; j < k; j++) {
    let copy = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = copy;
}
console.log(arr);

let arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length);
let k = 3;
k = k % arr.length;
for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length];
}
console.log(temp);

let arr = [1, 2, 3, 4, 5];
let k = 2;
k = k % arr.length;
function revers(i, j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}
revers(0, k - 1);
revers(k, arr.length - 1);
revers(0, arr.length - 1);
console.log(arr);

*/

// Right Rotation By Three Approches;
/*
let arr = [1, 2, 3, 4, 5];
let k = 3;
k = k % arr.length;
for (let j = 0; j < k; j++) {
    let copy = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = copy;
}
console.log(arr);


let arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length);
let k = 3;
k = k % arr.length;
for (let i = 0; i < arr.length; i++) {
    temp[(i + k) % arr.length] = arr[i];
}
console.log(temp);

let arr = [1, 2, 3, 4, 5];
let k = 3;
k = k % arr.length;
function revers(i, j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}
revers(0, arr.length - 1);
revers(0, k - 1);
revers(k, arr.length - 1);
console.log(arr);

*/

// Right & Left Rotation By K Times not used extra space;
/*
let arr = [1, 2, 3, 4, 5];
let k = 3;
k = k % arr.length
function revers(i, j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++
        j--
    }
}
revers(0, k - 1)
revers(k, arr.length - 1)
revers(0, arr.length - 1)
console.log(arr);

let arr = [1, 2, 3, 4, 5];
let k = 3;
k = k % arr.length;
function revers(i , j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}
revers(0 , arr.length - 1);
revers(0 , k - 1);
revers(k , arr.length - 1);
console.log(arr);
*/