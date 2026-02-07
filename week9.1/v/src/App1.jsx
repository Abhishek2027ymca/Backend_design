
// templete 

import { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(1);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  // TODO: useEffect here
useEffect(  function (){
    console.log(" intial value")
fetch("https://jsonplaceholder.typicode.com/users/" + currentUser).then(
    async res => {
        const json = await res.json();
        // i stored the dtata i got from the api 
        // and stored  th ejson  in the userdata 

        setUserData(json); // i need to csla  the function which is  carrying 
    }
)

// need to add the clean up logoic here 


} , [currentUser])



  return (
    <div>
      <button
        onClick={() => setCurrentUser(1)}
        style={{ color: currentUser === 1 ? "red" : "black" }}
      >
        User 1
      </button>

      <button
        onClick={() => setCurrentUser(2)}
        style={{ color: currentUser === 2 ? "red" : "black" }}
      >
        User 2
      </button>

      <button
        onClick={() => setCurrentUser(3)}
        style={{ color: currentUser === 3 ? "red" : "black" }}
      >
        User 3
      </button>

      <hr />

      
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>City: {userData.address?.city}</p>
        </div>
      
    </div>
  );
}

export default App;

