function sayMyName() {
    console.log("M");
    console.log("I");
    console.log("N");
    console.log("H");
    console.log("A");
    console.log("M");

}
//sayMyName()   // Call the Function.


function AddTwoNumbr(One, Two) {
    console.log(`${One} + ${Two} = ${One + Two}`);
}
AddTwoNumbr(15, 7)  // Call the Function.

function chackReturnValue(Three, Fore) {
    return `${Three} + ${Fore} = ${Three + Fore}` // Return the value Of Function.
}

let Result = chackReturnValue(45, 9);
console.log("Result :", Result);

function logInMassage(username = `Gest`) {
    if (!username) {
        console.log(`Just Enter the name..`);
        return
    }
    return `${username} Just logged In..`
}
const result = logInMassage('Minham');
console.log(result);


function caculate_Cart_Price(...num){
    return num
}
const cart_Prices_Result = caculate_Cart_Price(44,900,751,20,58); // Calculate the Prices in Total
const calculate_cart_Prices_result = cart_Prices_Result.reduce((total,Prices)=>{
    console.log(`Prices :${Prices}`);
    return Prices + total
},0)
console.log(`Total Prices ${calculate_cart_Prices_result}`);





function handleObject(anyObject){
    console.log(`User is ${anyObject.name} & Age is ${anyObject.age}`);  // handle The Object in Function
}
handleObject({
    name: 'Minham',
    age: 25
})

const newArray = [100,200,300]

function handleArray(anyArray){
    return anyArray[1]
}
console.log(handleArray(newArray)); // handle The Array in Function
