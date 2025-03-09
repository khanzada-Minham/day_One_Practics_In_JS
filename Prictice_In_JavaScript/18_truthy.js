// Falsy Value;

// false ,0 , -0 , BigInt : 0n , "" , null , undefined , NaN;


// Truthy Value:

// "0", "false" , " " , [] , {} , function(){};

const userEmail = "M@khanzada.ai";
if(userEmail != ''){
    console.log(`Got User Email`);
}
else{
    console.log(`Don't have user Email `);
}

const emptyArray = [];
if(emptyArray.length === 0){
    console.log(`Array is empty`);
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log(`Object is empty` );
}
// Nullish Coalescing Operator (??) :null undefined;


let vel1;
// vel1 = 5 ?? 10;
// vel1 = null ?? 10;
vel1 = undefined ?? 10;
console.log(vel1); 

// Terniary Operator (?);
// Condition ? true : false;

const icePrices = 100;
icePrices <= 80 ? console.log(`less then 80`) : console.log(`more then 80` );
