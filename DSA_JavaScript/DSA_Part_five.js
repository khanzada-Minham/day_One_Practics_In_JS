// let fullName = "Minham";
// let fullName = "        Minham";
// console.log(fullName.length)
// console.log(fullName.slice(1,5))
// console.log(fullName.slice(-4,fullName.length))
// console.log(fullName.substring(2))
// console.log(fullName.concat(' ', 'Khanzada', ' ', 'Rajput'));
// console.log(fullName.trim());
// console.log(fullName.charAt(2));
// console.log(fullName.charCodeAt(4));
// console.log(fullName.split('').reverse().join(''));
// console.log(fullName.lastIndexOf('h'));
// console.log(fullName.includes('h'));


// let fullName = "Minham";
// let rev = '';
// for (let i = fullName.length -1; i >= 0; i--) {
//     rev += fullName.charAt(i)
// }
// console.log(rev);

// if (rev == fullName) {
//     console.log(`Pallindrome`);
// }
// else{
//     console.log(`No Pallindrome`);
// }

// let fullName = "Minham";
// let isPallindrome = true
// let i = 0;
// let j = fullName.length - 1;
// while (i<j) {
//     if (fullName.charAt(i) != fullName.charAt(j)) {
//         isPallindrome = false;
//         break;
//     }
//     i++
//     j--
// }
// if (isPallindrome) {
//     console.log('Pallindrome');
// }
// else{
//     console.log(fullName);
//     console.log('No Pallindrome'); 
// }


// let fullName = "Minham";
// let rev = '';
// for (let i = fullName.length -1; i >= 0; i--) {
//     rev += fullName.charAt(i)
// }
// console.log(rev);


// let string = 'Hello Word!';
// let arr = string.split('');
// let i = 0;
// let j = arr.length - 1;

// while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// string = arr.join('');
// console.log(string);


// let fullName = 'MiNhAm KhAnZaDa';
// let toggal = '';
// console.log(fullName);
// for (let i = 0; i < fullName.length; i++) {
//     let chr = fullName.charCodeAt(i);
//     if (chr >= 65 && chr <= 90) {
//         toggal += String.fromCharCode(chr + 32);
//     }
//     else if (chr >= 97 && chr <= 122) {
//         toggal += String.fromCharCode(chr - 32);
//     }
// }
// console.log(toggal);


// let fullName = "MiNhAm";
// let toggal = '';
// for (let i = 0; i < fullName.length; i++) {
//     let chr = fullName.charCodeAt(i);
//     if (chr >= 65 && chr <= 90) {
//         toggal += String.fromCharCode(chr + 32);
//     }
//     else if (chr >= 97 && chr <= 122) {
//         toggal += String.fromCharCode(chr - 32);
//     }
// }

// console.log(toggal);




// let fullName = 'MiNhAm';
// let toggal = '';

// for (let i = 0; i < fullName.length; i++) {
//     let chr = fullName.charCodeAt(i);
//     if (chr >= 65 && chr <= 90) {
//         toggal+= String.fromCharCode(chr + 32);
//     }
//     else if(chr >= 97 && chr <= 122){
//         toggal+= String.fromCharCode(chr - 32);
//     }
// }
// console.log(toggal);


// let a = 'hello';
// let newArr = new Array(128).fill(0);
// for (let i = 0; i < a.length; i++) {
//     let index = a.charCodeAt(i);
//     newArr[index] = newArr[index]+1
// }
// for (let i = 0; i < newArr.length; i++) {
//    if (newArr[i]>0) {
//     console.log(`${String.fromCharCode(i)} Times ${newArr[i]}`);

//    }
// }

// let Fname = "Minham Hussain";
// let noSpace = "";

// for (let i = 0; i < Fname.length; i++) {
//     if (Fname[i] !== " ") {
//         noSpace+= Fname[i]
//     }   
// }
//   console.log(noSpace);



// let Fname = "Minham Hussain";
// Fname = [...Fname];
// let k = 0;
// for (let i = 0; i < Fname.length; i++) {
//     if (Fname[i] !== " ") {
//         Fname[k] = Fname[i];
//         k++;
//     }
// }
// Fname.length = k;
// Fname = Fname.join(""); 

// console.log(Fname); 



// let Fname = "Minham hussain";
// let onSpace = "";
// for (let i = 0; i < Fname.length; i++) {
//     if (Fname[i] !== " ") {
//         onSpace += Fname[i]
//     }
// }
// console.log(onSpace);


// let Fname = "Minham Hussain";
// let counter = 0;
// Fname = [...Fname];
// for (let i = 0; i < Fname.length; i++) {
//     if (Fname[i] !== " ") {
//         Fname[counter] = Fname[i];
//         counter++
//     }
// }
// Fname.length = counter;
// Fname = Fname.join('');
// console.log(Fname);

// let Fname = 'Minham hussain';
// let str = Fname.toLowerCase().replace(/\s+/g, ''); 
// let newArr = new Array(128).fill(0);
// let prinded = new Set();

// for (let i = 0; i < str.length; i++) {
//     let index = str.charCodeAt(i);  
//     newArr[index] = newArr[index] + 1;
// }

// for (let i = 0; i < str.length; i++) {
//     let chr = str[i];
//     let index = str.charCodeAt(i);
//     if (!prinded.has(chr)) {
//         console.log(`${chr} Times ${newArr[index]}`);
//         prinded.add(chr);
//     }
// }


// let Fullname = "Minham";
// let Fname = Fullname.toLowerCase();
// let newArr = new Array(128).fill(0);
// for (let i = 0; i < Fname.length; i++) {
//     let index = Fname.charCodeAt(i);
//     newArr[index] = newArr[index] + 1;
// }
// for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] > 0) {
//         console.log(`${String.fromCharCode(i)} Times ${newArr[i]}`);
//     }
// }

// let Fullname = "Minham";
// let Fname = Fullname.toLowerCase();
// let newArr = new Array(128).fill(0);
// for (let i = 0; i < Fname.length; i++) {
//     let index = Fname.charCodeAt(i);
//     newArr[index] = newArr[index] + 1
// }
// for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] > 0) {
//         console.log(`${String.fromCharCode(i)} Times ${newArr[i]}`);
//     }
// }