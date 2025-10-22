
const axios = require('axios');

////  making a simmple get request 

async function getdata() {

    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        console.log("get response :");
        console.log(response.data);
    }

    catch (error) {
        console.log(" erroe.messsage");

    }

}




 // making a post request 

 // always use an asyn function 
 // request ka jawaba aane mein time lag sakta 


 async function postdata(){

    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {

    title : " hello axios ",
    body : " this is a test post ",
     userid: 1
        })

        console.log( " your post request is ");
        console.log(response.data);

        
        
    }
catch (error) {
    console.error("Error posting data:", error.message);
  }


 }

 getdata();
postdata();



/// note karne wali baat hein ki server pe run kar rha  hein to  app.listen needed hein other wise directly run it  , inorder to rubn it in terminal 
