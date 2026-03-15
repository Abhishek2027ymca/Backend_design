// let x = 1 ;
// // ts
// let t: number = 1 ;

// console.log(x);

// // step 1 is to conevert ts file to  js
// //

// function greet ( fnn : string | number){
//     console.log("Hello " + fnn)
// }

// greet("Abhishek")
// greet(123)

function sum(a: number, b: number): number {
  return a + b;
}

let ans = sum(2, 3);

console.log(ans);

function checkAge(age: number) {
  if (age < 18) {
    console.log("You are a minor");
  } else {
    console.log(" good to go ");
  }
}

checkAge(12);

// number + string is string

// delayed call

function delayedCall(fn : ()=>void) {  // a little ,ore infor of  function 
    // empty param with return type  of void 
  setTimeout(fn, 1000);
}

delayedCall(function () {
  console.log("This is a delayed call");
});


//  fopr evry ts file we need to compile it to js file and then run it using node js
// for index.ts  index.js file will be generated and we can run it using node index.js
//
// BIOW HOW DO WEE AVOID THESE JS FILE  TO BE NPT TPO UPLAODE IN TTO GITHUB 
// AS WE ONLY NEED TO UPLOAD TS FILES IN GITHUB  AND NOT JS FILES

// use rootdir and out dir in tsconfig.json file to specify the input and output directory for ts files and js files respectively

// input filede is src and output filede is dist

// now put dist in gitignore file to avoid uploading js files in github


function nam (name : string)  
{
  console.log("Hello" + name)

}

  nam("Abhishek")