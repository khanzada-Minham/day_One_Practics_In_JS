// const promiceOne = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log(`Async Task is Completed`);
//         return resolve('Minham')
//     },1000)
// })
// promiceOne.then((items)=>{
//     console.log('Task is completed',items)
// })

// result = {
//     "name": "John",
//     "age": 30,
//     "city": "New York",
//     "email": "Minham@gmail.com"
// }
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(`Async Task is Completed`);
//         return resolve(
//             {email_address: result.age,}
//         )
//     },1000)
// }).then((responce)=>{
//     console.log('Task is completed',responce)
// })


// const promiceThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         return resolve({
//             "name": "John",
//             "age": 30,
//             "city": "New York",
//             "email": "Minham@gmail.com"
//         })
//     },1000)
// })
// promiceThree.then((result)=>{
//     console.log(result)
// })


// const promiceFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             return resolve({
//                 "name": "John",
//                 "age": 30,
//             })
//         } else {
//             return reject('Error : Something went wrong')
//         }
//     }, 1000)
// })
// promiceFour
//     .then((result) => {
//         console.log(result);
//         return result.name;
//     })
//     .then((items) => {
//         console.log(`${items}`)
//     })
//     .catch((Error) => {
//         console.log(Error)
//     }).finally(() => {
//         console.log('Finally')
//     })


// const promiceFive = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let error = true;
//         if (!error) {
//             return resolve({
//                 "name": "JavaScript",
//                 "Prices": 1200,
//             })
//         }else{
//             return reject('Error : JS went wrong')
//         }
//     },1000)
// })
// async function consumerPromiceFive(){
//    try {
//     let responces = await promiceFive;
//     console.log(responces)
//    } catch (error) {
//     console.log(error);

//    }
// } 
// consumerPromiceFive()


// async function getAllUser() {
//   try {
//     const responces = `https://jsonplaceholder.typicode.com/users`;
//     const response = await fetch(responces);
//     const data = await response.json();
//     data.forEach(element => {
//         console.log(element);
//     });
//   } catch (error) {
//     console.log(`Error`);
//   }
// }
// getAllUser()


// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((responce) => {
//         return responce.json()
//     }).then((result) => {
//         console.log(result);
//     }).catch((Error) => {
//         console.log(`Error ${Error}`);
//     })


// await new Promise(async (resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             "name": "JavaScript",
//             "Prices": 1200,
//         })
//     }, 1000)
// }).then((result) => {
//     return result
// }).then((values) => {
//     console.log(values)
// }).catch((err) => {
//     console.log(err)
// })