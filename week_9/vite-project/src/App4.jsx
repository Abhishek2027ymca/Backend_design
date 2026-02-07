import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount(c => c + 1);
  }

  function decrease() {
    setCount2(c => c - 1);
  }

  return (
    <div>
      <Counter count={count} count2={count2} />
      <button onClick={increase}>Increase count</button>
      <button onClick={decrease}>Decrease count2</button>
    </div>
  );
}

// Child Component
function Counter(props) {

  // Effect 1: runs only once
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  }, []);

  // Effect 2: runs when count changes
  useEffect(() => {
    console.log("count has changed");

    return () => {
      console.log("cleanup inside second effect");
    };
  }, [props.count]);

  return (
    <div>
      Counter1 {props.count} <br />
      Counter2 {props.count2} <br />
    </div>
  );
}

//propsn ins simple words
//







// import { useState, useEffect } from "react";

// function App() {
//   const [showTimer, setShowTimer] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShowTimer(!showTimer)}>
//         {showTimer ? "Stop Timer" : "Start Timer"}
//       </button>

//       {showTimer && <Timer />}
//     </div>
//   ); 
// }

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   console.log("render");

//   useEffect(() => {
//     console.log("mounted");

//     const id = setInterval(() => {
//       setSeconds(s => s + 1);
//     }, 1000);

//     return () => {// for stoping the timer 
//       console.log("unmounted");
//       clearInterval(id);
//     };
//   }, []);

//   return <h2>Seconds: {seconds}</h2>;
// }

// export default App;
