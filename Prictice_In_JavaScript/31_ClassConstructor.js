// ES6

class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        let result = this.password.split('').reverse().join('!');
        return `!a!i!l!q!y!e!${result}!w!n!m!`;

    }
}
let minham = new user('minahm', 'minham@pk.com', 'maheen');
// console.log(minham.encryptPassword());
// console.log(minham);

class studentOne {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    getGrade() {
        return `Your Grade is ${this.grade}`;
    }
}

class collageStudent extends studentOne {
    constructor(name, age, grade, facalty) {
        super(name, age, grade);
        this.facalty = facalty;
    }
}

let Abdulla = new collageStudent('Abdulla', 20, 'A+', 'BSIT');
// console.log(Abdulla.getGrade());


class Users {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username ${this.username}`);
    }
    static createId() {
        let num = 5;
        return `PK${Math.floor(Math.random() * 1000 + num)}`;
    }
}
let Minham = new Users('Minham')
console.log(Minham);