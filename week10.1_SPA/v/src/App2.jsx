
// basic boiler plate for react router dom
import { React , useRef } from "react";
import { useState } from "react";


  function App() {
     
    // A clock with a start an dstop avribel 

    
    const[ curretTime , setCurrentTime] = useState(0);
    
    // let timer = 0  ; , i can use it as it will reintialixe its vbaue to 0 after evry stop 

    const timer = useRef(); 
    // this variable will not reintialixe its value after every stop
    function startTimer() {
        
        // return a number 
       let valu =   setInterval(() => {
            setCurrentTime((prev) => prev + 1);
        }, 1000);
        timer.current = valu; // cureent valu of time os geetings oteed 
    }

    function stopTimer() {
        clearInterval(timer.current);
        // here timer.current is the value of timer which is getting updated after every start
    }
        

return (
    <div>
        {curretTime}
        <button  onClick = {startTimer}> Start </button>
        <button onClick={ stopTimer}> Stop </button>
    </div>
)
  }


  


   export default App;




   // if we want to start a clock , jsut call the set interval 
   // but when we need to stop the clock at a particulur time 
   // wheere should we store that variable so that it can run from the exact time 
   // wehn we clikc start agaun 
