import { useState } from 'react' 
import './App.css'
import { useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {increment,decrement , resetvalue , incrementByAmount} from './feature/Counter/counterSlice'
 // i need to import these reducer function to dispatch them in app component

function App() {

  const [amount , setAmount] = useState(0)// this is local state , jo ki component ke andar hi use hota hai , aur jab bhi change hota hai to component re-render hota hai , aur naya value milta hai

    // use se;ector hook se state ko access kr sakte hai , aur jab bhi state change hoti hai to component re-render hota hai , aur naya value milta hai
      const count = useSelector((state) => state.counter.value) ;
  // for each action to sipatch i need use dispatch hook 
  const dispatch = useDispatch();

  function handleIncrementClick(){
     dispatch(increment()) // disptach ke enadr that reducer function ko call krta hai , aur uske andar action object pass krta hai , jisme type hota hai ki konsa action hai , aur payload hota hai ki kya data pass krna hai

  }

  function handleDecrementClick(){
    dispatch(decrement()) // empty [payload] because i dont need to pass any data to decrement action
  } 


  function reset(){
    dispatch(resetvalue())
  }

  function incrementByAmountt(amount){
  dispatch(incrementByAmount(amount))

  }


  return (
    <>
    <div className = "App"  >

      <button onClick={handleIncrementClick}>+</button>
      <p>Count :{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <br/>
      <input type="text" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <br/>
      
      <button onClick={() => dispatch(incrementByAmountt(amount))}>Increment by Amount</button>
    </div>
    </>
  )
}

export default App
