// we will be creating diffrent route with help of reactr roter dom libeary 
// single page application
import './App.css'
import { BrowserRouter, Routes, Route  , Link , useNavigate, redirect} from "react-router-dom";

function App() {
 

  return (

   <div>
   <BrowserRouter>
   <Link to = "/"> Allen</Link>
   <Link to = "/neet/online-coaching-class-11"> Class 11</Link>
   
   <Link to = "/neet/online-coaching-class-12">   12</Link>
    
   
   <Routes>
       {/* this is the end point , and element iss the coneten of that endpoint */}
    <Route path = "/neet/online-coaching-class-11"  element = {<Class11Prg/>}/>
    <Route path = "/neet/online-coaching-class-12"  element = {<Class12Prg/>} />
<Route   path = "/"  elements = {<Landing/>}/>
<Route   path = "*"  elements = {<ERROr />}/>


   </Routes>

   </BrowserRouter>

   </div>
  )
}

function Class11Prg(){
  return <div>

    neet program for class 11th 
  </div>
}
function Class12Prg(){
  const navigate =useNavigate();

function redirectUSer(){
  navigate("/")
}


  return( <div>
    <Button onClick = {redirectUSer}> click to return back </Button>
    neet program for class1th 
  </div>)
}
function Landing(){
  return <div>
Welcome to Allen  </div>
}


export default App
