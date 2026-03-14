import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className =' grid  grid-cols-1  sm:grid-cols-12 '  >
    <div  className ='col-span-1  sm:col-span-5 bg-red-300'   >
 hi
    </div>
    <div  className ='col-span-1  sm:col-span-5 bg-green-300  text-2xl rounded-2xl '  >
 hi
    </div>
    <div  className ='col-span-1  sm:col-span-2 bg-blue-300'  >
 hi
    </div>
 
</div>
  )
}

export default App
