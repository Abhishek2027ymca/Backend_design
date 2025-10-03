
// const c  = 11 ;// does not vhage itself value

// var a = 1 ;
// console.log(a);

// let name = "John" ;
// let age = 23 ;

// console.log(name +  age );

// let ismarried = false ;

// if (ismarried == true){
//     console.log( yes  );

// }

// const per1 = "nd";
// const  gen2 = "male";
 
// // ana rray of object 
// const per  = [
//     {
//     first :"raman ",
//     gende : "male"
// }
//    , {
//     first :"ram ",
//     gende : "male"
// }, {
//     first : "am",
//     gende : "female"
// }

// ]

// creatinf the obejct and its  relatd csunobject 

// for( let i = 0 ; i<per.length ; i++){
// if (per[i]["gende" ] == "male"){


//     console.log(per[i]["first"])
    
// }
 

// }


// function sum(a,b){
//      return a + b;

// }


// let  ans  = sum(5 , 20);
// console.log(ans);
// acces some  elemnt or a file from the system 
// this is importing a file via fs 
const fs = require("fs");

const content = fs.readFileSync("a.txt", "utf-8");     //  waiting till its completion as asyncfile read 
 console.log(content);

 // fs is an external library , which stands for file system    
 

 // this is asynchronous  as readfile will not wait for it to complete  
const content2 = fs.readFile("b.txt","utf-8",(err,data)=>{
console.log(data);
})