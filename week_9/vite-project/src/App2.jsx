import { useState , useEffect } from "react";
function App() {   // an app comempoentn which rendder sthe  counter compoentn itself 
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


// WRAPPING THIS MUSH CODE IN UUSE EFFECT WILL AMKE SURE THAT NO MANY HOW MANY RENDER HAPPEMND 
// THIS PARTICULAR CODE  WILL NOT RUN AGAINA AND AGAIN 
console.log("counter");
// ^^^^^ mounted component
useEffect(function(){   //this useEffect will run only once
    // wull take a function as an argumen, and a dependency array
     setInterval(function () {
     setCount( count => count + 1);
       }, 1000);
       console.log("mounted")   // YE ANDAR KA LOGIC BAAR BAAR RUBN NHI HOGA , DIRING RERENDER 
}, []);




  return (
    <div>
      <h1 id="text">{count}</h1>
    </div>
  );
}


export default App