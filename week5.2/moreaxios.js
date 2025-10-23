// axios is a method  to hit a backend serve r

 const  axios = require("axios")

 async function main(){

    const response = await axios.get(" https://jsonplaceholder.typicode.com/todos/1")
  // it will automaticalyy identify that  the data is json 

  console.log(response.data);
  

 }
 main()