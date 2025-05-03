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

// let arr = [1, 2, 3, 4, 5];
// let k = 3;
// k = k % arr.length;
// for (let j = 0; j < k; j++) {
//     let copy = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = copy;
// }
// console.log(arr);


// let arr = [1, 2, 3, 4, 5];
// let copy = new Array(arr.length);
// let k = 2;
// k = k % arr.length;
// for (let i = 0; i < arr.length; i++) {
//     copy[i] = arr[(i + k) % arr.length];
// }
// console.log(copy);

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// k = k % arr.length;
// function revers(i, j) {
//    while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//    }
// }
// revers(0, k - 1);
// revers(k , arr.length - 1);
// revers(0, arr.length - 1);
// console.log(arr);


// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// k = k % arr.length;
// for (let j = 0; j < k; j++) {
//     let copy = arr[arr.length - 1];
//     for (let i = arr.length - 1; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[0] = copy;
// }
// console.log(arr);

// let arr = [1,2,3,4,5];
// let temp = new Array(arr.length);
// let k = 3;
// k = k % arr.length;
// for (let i = 0; i < arr.length; i++) {
//     temp[(i + k) % arr.length] = arr[i]
// }
// console.log(temp);

// let arr = [1, 2, 3, 4, 5];
// let k = 3;
// k = k % arr.length;
// function revers(i, j) {
//     while (i < j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }
// revers(0, arr.length - 1);
// revers(0, k - 1);
// revers(k, arr.length - 1);
// console.log(arr);



// old practice;

// let arr = [1, 20, 3, 40, 5, 60];
// let i = 0;
// let j = arr.length - 1;
// while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr);


// let arr = [10, 20, 30, 40, 50, 60];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }   
// }
// console.log(min);

// let arr = [1,1,2,3,3,4,5,5,6];
// let j = 1;
// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] !== arr[i+1]) {
//         arr[j] = arr[i + 1];
//         j++;
//     }
// }
// console.log(arr);


// Remove Duplicates from Sorted Array;
/*
let arr = [0, 1, 1, 2, 2, 3, 3];
let j = 1;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
        arr[j] = arr[i + 1];
        j++;
    }
}
console.log(arr);
*/

// let arrayOne = [2, 5, 6];
// let arrayTwo = [1, 3, 4, 7];
// let temp = new Array(arrayOne.length, arrayTwo.length);
// let i = 0;
// let j = 0;
// let k = 0;
// while (i < arrayOne.length && j < arrayTwo.length) {
//     if (arrayOne[i] < arrayTwo[j]) {
//         temp[k] = arrayOne[i];
//         i++;
//         k++
//     }
//     else {
//         temp[k] = arrayTwo[j];
//         k++;
//         j++;
//     }
// }
// while (j < arrayTwo.length) {
//     temp[k] = arrayTwo[j];
//     k++;
//     j++;
// }
// while (i < arrayOne.length) {
//     temp[k] = arrayOne[j];
//     k++;
//     j++;
// }
// console.log(temp);





// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8,9];
// let temp = new Array(arr1.length, arr2.length);
// let i = 0,
// j = 0,
// k = 0;
// while (i< arr1.length && j< arr2.length) {
//     if (arr1[i] < arr2[j]) {
//         temp[k] = arr1[i];
//         k++;
//         i++;
//     }
//     else{
//         temp[k] = arr2[j];
//         k++;
//         j++;
//     }
// }
// while (j < arr2.length) {
//     temp[k] = arr2[j];
//     k++;
//     j++;
// }
// while (i < arr1.length) {
//     temp[k] = arr1[i];
//     k++;
//     i++;
// }
// console.log(temp);

// let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8];
// let j = 1;
// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] !== arr[i + 1]) {
//         arr[j] = arr[i + 1];
//         j++
//     }
// }
// console.log(arr);


// let arr = [0, 2, 4, 6, 8];
// let arr1 = [1, 3, 5, 7, 9];
// let temp = new Array(arr.length, arr1.length);
// let i = 0,
//     j = 0,
//     k = 0;
// while (i < arr.length && j < arr.length) {
//     if (arr[i] < arr1[j]) {
//         temp[k] = arr[i];
//         k++;
//         i++;
//     }
//     else {
//         temp[k] = arr1[j];
//         k++;
//         j++;
//     }
// }
// while (j < arr1.length) {
//     temp[k++] = arr1[j++];
// }
// while (i < arr.length) {
//     temp[k++] = arr[i++];
// }
// console.log(temp);


// var merge = function (nums1, m, nums2, n) {
//     let i = m - 1;
//     let j = n - 1;
//     let k = m + n - 1;

//     while (j >= 0) {
//         if (i >= 0 && nums1[i] > nums2[j]) {
//             nums1[k] = nums1[i];
//             i--;
//         } else {
//             nums1[k] = nums2[j];
//             j--;
//         }
//         k--;
//     }
// };
// let nums1 = [1, 2, 3, 0, 0, 0];
// let nums2 = [2, 5, 6];
// merge(nums1, 3, nums2, 3);
// console.log(nums1);


// function merge(nums1, m, nums2, n) {
//     let i = m - 1;
//     let j = n - 1;
//     let k = m + n - 1;
//     while (j >= 0) {
//         if (i >= 0 && nums1[i] > nums2[j]) {
//             nums1[k] = nums1[i];
//             i--;
//         }
//         else {
//             nums1[k] = nums2[j];
//             j--;
//         }
//         k--;
//     }
// };
// let nums1 = [1, 2, 3, 0, 0, 0];
// let nums2 = [2, 5, 6];
// merge(nums1, 3, nums2, 3)
// console.log(nums1);

// let arr = [1, 10, 4, 5, 9, 3, 7, 6, 8, 2];
// for (let i = 0; i < arr.length; i++) {
// for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//     }
// }
// }
// console.log(arr);

