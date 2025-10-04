
//!!!!!!!!!   SUPER IMP E.G ??????????
function taskOne() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task One complete");
      resolve("Result One");
    }, 1000);
  });
}

function taskTwo() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task Two complete");
      resolve("Result Two");
    }, 1500);
  });
}



async function runSequential() {
  console.log("Start Sequential");

  let result1 = await taskOne();   // waits until finished
  console.log("Got:", result1);

  let result2 = await taskTwo();   // waits after taskOne
  console.log("Got:", result2);

  console.log("End Sequential");
}

runSequential();
