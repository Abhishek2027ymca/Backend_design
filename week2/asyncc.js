//  sintex 
//  function read file ( file name , encoding , call back function )
//  call back function = function ( error , data ) 
//  error = if there is an error in reading the file 
//  data = if the file is read successfully 




//  const fs = require('fs');

// //   function print(error , data){
// //     console.log(data);
// //   }


//    fs.readFile('a.txt' , 'utf-8' , print);  //async call back function
// // started a.txt and then modecv on to the next  call 

//    fs.readFile('b.txt' , 'utf-8' , print); //async call back function
// // started to red b.txt and then moved on to the next call


// console.log("done");
// this will be printed first as readfile is async
// so it will not wait for the file to be read 
// it will move to the next line of code  
    

//importing the fs module
const fs = require('fs');

function print(err,data){

    if(err){
        console.log("error");
        return;
    }

    else{
        console.log(data);
    }

}

// third param is the name if the funcrion  not the actual prama 

fs.readFile('a.txt' , 'utf-8' , print);  //async call back function
fs.readFile('b.txt' , 'utf-8' , print);  //async call back function




//  cleaner code 