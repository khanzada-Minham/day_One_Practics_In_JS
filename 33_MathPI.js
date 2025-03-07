// const Descriptor = Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(Descriptor);


const student = {
    name: 'John',
    age: 20,
    grade: 'A',
}

Object.defineProperty(student,"name",{
    enumerable: false
})

// for (const [key,value] of Object.entries(student)) {
//     console.log(`${key} : ${value}`); 
// }
let std = Object.entries(student);
std.forEach((items)=>{
    console.log(items[0],items[1]);
})
