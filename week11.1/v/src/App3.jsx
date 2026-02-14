

// ____implememntation of debouncing and it uses
// debounding menas guch mili sec ka delay before calling /fetching for the api 
// while the user is still in typing mod e 
// e.g on amamzon search  , we get recomendation on each word we are typing  it is diue to , after evry word achange theru  is an api callll int he abckend 
// debouncing means wee need some sort os time delay before this api caall , to get the relt s
// as search abckend will be an axpemnsive function 





 import { useState , useEffect } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'
import { useFetch } from './Hook/usefetch'
 

 

 function App() {

    function sendDatatobackend(){
        fetch("")
    }

    const debouncefn = useDebounce() // is is a hook


   return (
     <>
 <input type="text "  onchange ={debouncefn} />
     </>
   )
 }
 
 

 
 export default App
 