const url = `https://jsonplaceholder.typicode.com/users`;
const response = await fetch(url)
const data = await response.json()
console.log(data);
