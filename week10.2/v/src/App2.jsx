import  CountContextProvider  from "./BcP.jsx";

import { useContext } from "react";


const App = () => {
  return <div>
    <Parent />
  </div>
};


function Decrease({ count, setCount }) {
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}


function Incrase({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value({ count }) {
  return <p>Count: {count}</p>;
}


function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}


export default App;


