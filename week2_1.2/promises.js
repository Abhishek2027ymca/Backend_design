


console.log("hello one");
 setTimeout( function() {
    console.log("hello two ");
 }, 3000);  // ye asynchronous hein iska waith  nhi karge a to get execute /
 // next  pe ove on karge a


 console.log("hello three");
 
// fom promise class 
  let promise = new Promise(function(resolve, reject) {
    console.log(" hello from promise constructor");
    
    resolve(444);

})


// function(resolve, reject) {
//     console.log(" hello from promise constructor");}

let pr = new Promise(  )


