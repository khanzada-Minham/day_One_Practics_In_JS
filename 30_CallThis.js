function SetUserName(username) {
    this.username = username
}

function createUser(username,email,password){
    SetUserName.call(this,username);
    this.email = email;
    this.password = password
}
const user = new createUser('Minham','Minham@gmail.com','#$45fsd64%#');
// console.log(user);
