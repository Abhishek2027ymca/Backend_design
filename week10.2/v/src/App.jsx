import { useState } from 'react'
import './App.css'

function App() {
  return <div>
    <LightBulb />
  </div>
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true)
// 
  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function BulbState({bulbOn}) {
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}
//now  bubl state has bulbon as a prop which it takes feom light bulb ?
// yes, light bulb has the state and it passes it down to bulb state as a prop.
// same is true fro toggle bulb state, it has the state and the set state function as a prop which it takes from light bulb and then it can use it to toggle the state of the bulb.
function ToggleBulbState({bulbOn, setBulbOn}) {
// take prop from light bulb of both value and the function to update the value and then use it to toggle the state of the bulb.
  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
    
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App



// _________ IMP_______________
//📦 Think Like This

// When you write:

// <LightBulb isOn={isLightOn} />  == 


// You are creating:

// {
//   isOn: isLightOn
// }
{/* <LightBulb isOn={isLightOn} />  == <LightBulb {isOn} /> */}

// And React passes it to the component.