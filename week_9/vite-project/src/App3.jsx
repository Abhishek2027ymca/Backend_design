// // condiation aredndering meamsn some time i need to run the counter variable, sometiems not
// // kabhi run kare and kabhi kabhi nhi

// import { useState, useEffect } from "react";
// function App() {
//   let [countervis, setCountervis] = useState(true);

//   useEffect(function () {
//     setTimeout(function () {
//       setCountervis(countervis => !countervis);
//     }, 5000);
//   }, []);

//   return (

//     <div>
//       <p>hi this is before counter</p>
//       {countervis && <Counter></Counter>} 
//       {/* // whenver countervis is true counter will render */}
//       <p>hi this is aft er counter</p>
//     </div>

//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   // WRAPPING THIS MUSH CODE IN UUSE EFFECT WILL AMKE SURE THAT NO MANY HOW MANY RENDER HAPPEMND THIS PARTICULAR CODE  WILL NOT RUN AGAINA AND AGAIN
//   console.log("counter");
//   useEffect(function () {
    
//     console.log("mounted");

//     let clock = setInterval(function () {
//       setCount((count) => count + 1);
//     }, 1000);
// // returnig the
//     return function (){
//         console.log("unmounted");   
//       clearInterval(clock);
//     }

// }, []);  // this entire logic will run , if we have this rdependency array is  empty 

//   return (
//     <div>
//       <h1 id="text">{count}</h1>
//     </div>
//   );
// }

// export default App;
