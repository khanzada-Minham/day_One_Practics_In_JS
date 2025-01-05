// const tinderUser = new Object();  // this is another way to create the Object,

const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.age = 30;

// console.log(tinderUser);

const regularUser = {
    email: 'example_pk@gmail.com',
    fullname: {
        userFullname: {
            first_name: 'Aliyan',
            last_name: 'Hussain'
        },
    },
}
// console.log(regularUser);

const studentOne = {
    name1: 'John',
    age2: 20,
    marks3: 95
}

const studentTwo = {
    name: 'Jane Brother',
    age: 17,
    marks: 85
}

//const Brother_Result = Object.assign({} ,studentOne, studentTwo);  // Connect the two Objects ,but not same Object Keys,
const Brother_Result = { ...studentOne, ...studentTwo } // Connect the two Objects ,but not same Object Keys,
// console.log(Brother_Result);


const user = [
    {
        id: 1,
        name: 'John',
        age: 30
    },
    {
        id: 2,
        name: 'John',
        age: 31
    },
    {
        id: 3,
        name: 'John',
        age: 32
    },
]

// console.log(user)

const tinderUser_Practices = Object.keys(tinderUser); // Convert Result is return Object_Keys in Array 😎
// const tinderUser_Practices1 = Object.entries(tinderUser); 
console.log(tinderUser.hasOwnProperty('fulname')) // hasOwnProperty is chack the object value return the answer is true & false,



const course = {
    courseName: 'React Js',
    coursePrice: 1000,
    courseInstructor: 'Minham_Khanzada'
}

// console.log(course.courseInstructor);

const { courseInstructor : Instructor, coursePrice : Price, courseName } = course

console.log(Instructor); // Object destructuring syntex In.
console.log(Price); // Object destructuring syntex In.
console.log(courseName);

