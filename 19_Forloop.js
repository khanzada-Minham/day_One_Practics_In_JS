// For Loop & Iterations

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log(`5 is best number`);
    }
    // console.log(element);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Onw to Teen : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop value ${j} and inner loop ${i}`);
        // console.log(`${i} x ${j} = ${j*i}`);
    }  
}

const  myArray = ['Flash','Batman','superman']

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


for (let i = 0; i < 20; i++) {
    if(i == 7){
        // console.log('I am 7');
        break;
    }
    // console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if(i == 6){
        // console.log('I am 6');
        continue;
    }
    // console.log(i);
}

let onScore = 10

for (let i = 0; i < onScore; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(`*`);
    }
}