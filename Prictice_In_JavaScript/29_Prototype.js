let hero = ['Spiderman', 'Supperman'];
// console.log(hero.hasOwnProperty(0));


const example = {};
example.prop = 'exsists';
// console.log(example.hasOwnProperty('prop'));


function multiplay(num) {
    return num * 5
}

multiplay.power = 2

// console.log(multiplay(5));
// console.log(multiplay.power);
// console.log(multiplay.prototype);

function creanteUser(username,tex) {
    this.username = username;
    this.tex = tex;
}

creanteUser.prototype.addTex = function(){
   return  Math.round(this.tex * 1.10)
}

let Minham = new creanteUser('Minham',50);
// console.log(Minham);

let myName = "Minham   ";

String.prototype.trueLangth = function(){
    return this.trim().length
}
// console.log(myName.trueLangth());

let myHerros = ['thos','spiderman'];

let heroPower = {
    thor: 'Hammer',
    spiderman: 'sling',

    getSpiderPower(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.khanzada = function(){
    console.log('khanzada is Prasent in all Object');
}

// heroPower.khanzada()
// myHerros.khanzada()


const user = {
    name: 'Minham',
    age: 25,
}

const teacher = {
    email: 'Example@pk.com',
    __proto__: user
}

const teachingSuppot = {
    isAvailable: false
   
}
// Object.setPrototypeOf(teacher,user)
// console.log(teacher.name);


// console.log('minham          '.trueLangth());
