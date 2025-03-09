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

function One() {
    const username = "Minham";

    function Two() {
        let minhamPhone = 'Iphone'
        console.log(username);
    }
    // console.log(minhamPhone);  //   Throw the Error not acces in scope
    // Two()
}

// One()



if (true) {
    let username = "MINHAM";
    if (username === "MINHAM") {
        let age = 20;
        console.log(username);
    }
    //console.log(age); // Throw the Error not acces in scope
}
// console.log(username);



function addTwoNumber(num) {
    return num + 1
}
console.log(addTwoNumber(10)); // 11


const addNumber = function (num) {
    return num + 10
}
console.log(addNumber(10)); // 20