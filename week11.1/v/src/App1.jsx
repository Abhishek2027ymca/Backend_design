

 import { useState , useEffect } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'
import { usePostTitle } from './Hook/usefetch'
 

 
 function App() {

// // &&___________DO TIS FETCHING LOGIC OR USE SEPRATE  CUSTOM HOOKS IN A SEPARTE FOLDER
//  async function getPost( ){
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); 
//     const json = await response.json();
    
//     setPost(json)
// }

// // now i will use an use effect  sothta changes in post will get reflected
// useEffect(() => {
//     getPost();

// } , [])


const title = usePostTitle();


   return (
     <>
        <div>
            {title }
        </div>
     </>
   )
 }
 
 

 
 export default App
 