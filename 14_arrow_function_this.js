const user = {
    username: 'Minham Hussain',
    prices: 999,
    wellcomeMassage: function () {
        console.log(`${this.username} , Wellcome to webside`); // this crrunt context,
    }
}
user.wellcomeMassage()
user.username = "Sam"
user.wellcomeMassage()

const chai = (num1, num2) => (num1 + num2) // This is arrow Function & Implicit Return
const arrowFunction = () => ({name:'Minham'}) // This is arrow with Object Function & Implicit Return
console.log(chai(7, 1));
console.log(arrowFunction());
