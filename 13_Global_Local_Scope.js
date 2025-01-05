{ } // This is Scope

let a = 40; // this is Globle Scope ,Globle Scope is using to block Scope but ,Block Scope variable not using to Globle Scope.. 

if (true) { // this is block Scope
    let a = 10;
    const b = 20;
    var c = 30; // not using Block Scope
    console.log("INNER", a);

}

console.log(a);
// console.log(b);
// console.log(c);

