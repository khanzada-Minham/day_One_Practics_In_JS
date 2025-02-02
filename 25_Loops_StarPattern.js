let a = 5;
let OneString = "";

for (let i = 0; i < a; i++) {
    for (let j = 0; j < a; j++) {  
        OneString += "*"      
    }
    OneString += "\n"
}
// console.log(OneString);

let b = 5;
let TwoString = "";

for (let i = 1; i < b; i++) {
    for (let j = 0; j < i; j++) {
        TwoString += "*"
    }
    TwoString += "\n"
}
// console.log(TwoString);


let c = 6;
let threeString = "";

for (let i = 1; i <= c; i++) {
    for (let j = 0; j < i; j++) {
        if(i === c){
            threeString += "*"
        }
        else{
            if(j == 0 || j == i - 1){
                threeString += "*"
            }
            else{
                 threeString += " "
            }
        }
    }
    threeString += "\n"
}
// console.log(threeString);