// Import the useState hook from react
import { useState, useEffect } from "react";
import { PostComponent } from './post';
import { set } from 'mongoose';

// Create a function component named App that will be rendered in the root element
function App() {
const [count , setCount] = useState(1);

function increaseCount(){
  setCount(count => count + 1);
}



useEffect(function () {

  console.log(" above setinterval")
  let id = setInterval( increaseCount , 1000);

// logic for cleanup
// cleanup means  we are  we need to addd a retrurn fynction 
// so that 
   return () => {
      console.log("interval cleared");
      clearInterval(id);
    };

}, []);

useEffect(function () {

  console.log(" above setinterval" , count)

}, [count]);




return  <div>
 
 {count}

</div>  

}
  
  



  
// Export App Component to use it in other components
export default App;