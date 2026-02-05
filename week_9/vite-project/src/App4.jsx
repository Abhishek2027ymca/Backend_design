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
