/*
Singleton - Object; 
Note => : Singleton is that when you create any Object With , A constructor then are crated as a Singleton Object.
Objcet.create this Syntex.
*/

// Object - Literals

const mySymbol = Symbol ("ObjectPractices")

const js_student = {
    name: "Atif",
    "full name": "Atif Aslam",
    [mySymbol]: "key1",
    age: 20,
    location : "Hyderabad",
    email : "Example_pk_gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Tuesday","Friday"]   
}

console.log(js_student["name"]);
console.log(js_student["full name"]);
console.log(js_student.email);
console.log(js_student[mySymbol]);
console.log(js_student.isLoggedIn);


js_student.isLoggedIn = true;
console.log(js_student.isLoggedIn);

// Object.freeze(js_student)  // Object is Freeze don't change Object;
js_student.location = "Banglore"
console.log(js_student.location);
console.log(js_student);

js_student.greeting = function(value){
    console.log(`${value} , Welcome to my website`);
}

js_student.greeting = function(){
    console.log(`${this.isLoggedIn} , Welcome to my website`);
}
console.log(js_student.greeting());
