const axios = require('axios/dist/node/axios.cjs'); 
const { error } = require('console');
const { title } = require('process');
// //get com Fetch
// fetch("https://jsonplaceholder.typicode.com/todos")
//  .then((response) => response.json())
//  .then((data) => {
//      console.log(data)    
//  })
//  .catch((error) =>{
//      console.log({error})
 //})
 //get com Axios
axios.get("https://jsonplaceholder.typicode.com/todos").then((response) =>{
    console.log(response.data);
})
.catch((error) =>{
    console.log(error)
});

const data = {
    title: "teste",
    content: "testando...",
    userId: 1,
};
axios.post("https://jsonplaceholder.typicode.com/todos", data);