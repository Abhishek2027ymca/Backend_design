import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//____ creating a custom hooks , fn only whcih start with use and uses anoher hooks , and rhen retunr some valu
function useCounter(){ // it is a state mamangment hook 
  const [count , setCount] = useState(0);
  // now defined a function insede it 
function increaseCount(){
  setCount(c=>c+1);
  // setCount(count+1) alos corrct 
}

return {
  count : count ,
  increaseCount : increaseCount
}
   
}

function App() {
  // const [count, setCount] = useState(0)
// destructuree the logic of custom hook

  return (
    <>
       <div>
        {/* <button onClick =  { increaseCount}> Increase {count}</button> */}
        <Counter1></Counter1>
        <Counter1></Counter1>
       </div>
    </>
  )
}


function Counter1(){
  // a fresh state variable is being created 
  const { count ,increaseCount}= useCounter(1);

return <div>
  <button onClick = {increaseCount}>
Count {count}
  </button>
</div>

}

export default App
