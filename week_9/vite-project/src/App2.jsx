import { useState , useEffect } from "react";
function App() {
  return <div>
     <Counter></Counter>
  </div>;
 
}
//! we need to create a ceate a stopwat 
// ^^^^ we will use mounting , rerendering , unmounting
// mounting means 
function Counter() {
  const [count, setCount] = useState(0);

//   setInterval(function () {
//     setCount(count + 1);
//   }, 500);     // this  will amke the code break 
// as react will rernder eveytime the component , 
// whenevr counter value is upadted 





  return (
    <div>
      <h1 id="text">{count}</h1>
    </div>
  );
}


export default App