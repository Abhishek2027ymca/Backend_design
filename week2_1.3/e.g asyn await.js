
// //!!!!!!!!!   SUPER IMP E.G ??????????
// // it it an async fucntion  , task one 
// // 
// //   , will retiunr a promise 
// function taskOne() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Task One complete");
//       resolve("Result One");
//     }, 1000);
//   });
// }
 

// // anothr async function task two
// function taskTwo() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Task Two complete");
//       resolve("Result Two");
//     }, 1500);
//   });
// }



// async function runSequential() {
//   console.log("Start Sequential");

//   let result1 = await taskOne();   // waits until finished
//   console.log("Got:", result1);

//   let result2 = await taskTwo();   // waits after taskOne
//   console.log("Got:", result2);

//   console.log("End Sequential");
// }
 

// runSequential();





console.log('script start');

async function async1() {
  console.log('async1 start');       // (2) runs immediately
  await async2();                    // (3) suspends async1 after calling async2
  console.log('async1 end');         // (5) runs later, as a microtask
}

async function async2() {
  console.log('async2');             // (3.1) runs synchronously when called
  return 'done';                     // resolves immediately
}

async1();
console.log('script end');           // (4) runs before async1 continuation
