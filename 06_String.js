const myName = "Minham";
const repoCount = 11; 
// String Interpolation
console.log(`Hello My name is ${myName.toUpperCase()} and total my GitHub Repo is ${repoCount}.`);


const gameName = new String("Clock_Game");
console.log('gameName',gameName);
console.log('gameName => [0]',gameName[0]);
console.log('gameName => [0]',gameName.__proto__); // StringMethod & ProtoType,
console.log(gameName.length); // StringLength
console.log(gameName.toUpperCase()); // churacterUpperCase
console.log(gameName.toLowerCase()); // characterLowerCase
console.log(gameName.charAt(5)); // Which character Posetion ("_")
console.log(gameName.indexOf('G')); // which index posetion ('6')

let newStringGameName = gameName.substring(0,5); // not included full String
console.log('newStringGameName',newStringGameName);

let anotherStringGameName = gameName.slice(6,7); // Slice the String,
console.log('anotherStringGameName',anotherStringGameName);


const newStringOne = "      MINHAM KHANZADA       ";
console.log(newStringOne.trim()); // Trim the String
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const Url = "https://Minhamkhanzada.com/Home%20Page"; // Replace %20;
console.log(Url.replace('%20', '')); 
console.log(Url.includes('%')); // Chack This String ("%");


let fullEmail = 'Minham Khanzada'; 
console.log(fullEmail.split(' ')); // Convert To Array;


