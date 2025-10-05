
// to run all three parallel , by context swithing 
// functiojnal argument  = means a passing a function asn a argument  for another function 


  // functional argumamnen t
  function add(a,b){
    return a+b;
}   
 
function sub(a,b){
    return a-b;
}               
function mult(a,b){
    return a*b;
}

function calc(a,b,func){
    const ans = func(a,b);
    return ans  ; 
 }

let  ans1 = calc(5,2,add);
let  ans2 = calc(5,2,sub);
let  ans3 = calc(5,2,mult); 
console.log(ans1,ans2,ans3);

// this is sync  or async ?
// this is async  becasue it will take some time to read the file
// so it will not wait for the file to be read 
// it will move to the next line of code

// bormal code  are async
// but if we use readfilesync  it will be sync 
// it will wait for the file to be read 
// and then move to the next line of code