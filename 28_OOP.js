const user = {
    name: 'Minham',
    age: 30,
    occupation: 'Software Engineer',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    getUserDetails(){
        return `${this.name} is ${this.age} years old working is ${this.address.city} city`;
    }

}

// console.log(user.getUserDetails());


function User(username,loginCont,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCont;
    this.isLoggedIn = isLoggedIn;
    return this;
}
let userOne = new User('Minham',5,true);
let userTwo = new User('Hussain',9,false);
console.log(userOne);
console.log(userTwo);