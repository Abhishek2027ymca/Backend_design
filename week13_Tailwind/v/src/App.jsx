import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hello Tailwind! 🎨
        </h1>
        <p className="text-gray-600 mb-6">
          Your Tailwind CSS is working perfectly!
        </p>
        
        {/* Counter display */}
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-2xl font-semibold text-center">Count: {count}</p>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={() => setcount(count + 1)}
            className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Increment
          </button>
          <button 
            onClick={() => setcount(0)}
            className="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
