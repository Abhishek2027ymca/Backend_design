
// implement a cli 
// e.g npm , pwd , cd 
// create a  cli that lets user  to specufy a file path and nodejs process counts the number of word inside it 
// use commander library  to use -h function  

// pacjkage .json  cinatins a ll the depnedencies 
// most impotenet section is script  in pck,json
  // whener we run npm start it will look for start script inside script section
  // we can define our own scripts also

const fs = require("fs") ;
function main(filename) {
   fs.readFile(filename, "utf-8", function (err, data) {

      let total = 0;
      for (let i = 0; i < data.length; i++) {

         if (data[i] === " ") {
            total++;

         }
      }
      // total no. of words 
      console.log(total + 1);


   })
}


main(process.argv[2])  //same as 
//main("/Users/Abhishek/Desktop/hkcourse/week4.1")


// week4.1\a.txt


// !!!!!!!!!!!! the probelm is  that ii cannnot  make  ahelper text  with the help of these
// main.index


// hence we will use the comande linrary 
