class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email
    }
    set email(value){
        this._email = value.toUpperCase();
    }
    get password() {
        return this._password
    }
    set password(value) {
        this._password = value.split('').reverse().join('!')
    }
}
const minham = new User('Minham@pk.com', 'Maheen')
console.log(minham);