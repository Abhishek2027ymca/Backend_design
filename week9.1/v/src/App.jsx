// Import the useState hook from react
import { useState, useEffect } from "react";
import { PostComponent } from './post';
import { set } from 'mongoose';

// Create a function component named App that will be rendered in the root element
function App() {
const [CurrentTab , setCurrentTab] = useState(1);

const [tabData , settabData ] = useState({}) // an empty json 




useEffect(function () {
  console.log("save the request fomr tje backedn to sab the datat " + CurrentTab)
fetch("https://jsonplaceholder.typicode.com/todos/1" + CurrentTab).then(
  async res =>{
    const json = await res.json();
    settabData(json);
  }
)
  
   

}, [CurrentTab]);




return  <div>

<button onClick =  { function (){
  setCurrentTab(1)
}}   style = {{ color : CurrentTab == 1 ? "red" : "black"}}>

  Todo#1
  </button> 
<button onClick =  { function (){
  setCurrentTab(2)
}}   style = {{ color : CurrentTab == 2 ? "red" : "black"}}>

  Todo2
  </button> 
<button onClick =  { function (){
  setCurrentTab(3)
}}   style = {{ color : CurrentTab == 3 ? "red" : "black"}}>

  Todo3
  </button> 

<br />
{tabData.title}


</div>  

}
  
  



  
// Export App Component to use it in other components
export default App;