// if Statemint

// LessThen  <, 
// GraterThen >,
// lessThan Equal  <=,
// GreaterThen Equal  >=,
// Equal  ==,
// Not Equal  !=,
// Not  !,
// And  &&,
// Or  ||,

const temperature = 40;

if (temperature < 40) {
    console.log(`Temperature is lessthan 50 `);
}
else {
    console.log(`Temperature Grather then  50 `);
}

const score = 400;
if (score > 100) {
    let power = "flay"
    console.log(`User Power: ${power}`);
}

const balance = 1000;
// if(balance > 500) console.log(`User has enough balance to buy a product` );

if (balance < 500) {
    console.log(`less than 500`);
}
else if (balance < 750) {
    console.log(`less than 750`);
}
else if (balance < 900) {
    console.log(`less than 900`);
}
else {
    console.log(`Balance is greater than 950`);
}

const userLoggedIn = true;
const debitCard = true;
const loggedInGoogle = false;
const loggedInEmail = true;

if(userLoggedIn && debitCard){
    console.log(`Allow to bay course`);
}
if (loggedInGoogle || loggedInEmail) {
    // if(loggedInGoogle == true ){
    //     console.log(`User LoggedIn Google`);
    //     console.log(`User is LoggedIn`);
    // }
    // else{
    //     console.log(`User LoggedIn Email`);
    //     console.log(`User is LoggedIn`);
    // }
    console.log(`User is LoggedIn`);
}
