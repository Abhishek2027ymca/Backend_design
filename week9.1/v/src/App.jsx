// Import the useState hook from react
import { useState } from 'react';
import { PostComponent } from './post';

// Create a function component named App that will be rendered in the root element
function App() {
const [post , setPost] = useState([]); // initial value is an empty array

const postComponent = post.map((post) => <PostComponent 
name = {post.name}
subtitle = {post.subtitle}
time = {post.time}
image = {post.image}
description = {post.description}

/>);


function addPost(){
  setPost([...post , {name: "abhishek", subtitle: "completed 500 leetcode questions", time: "today", image: "https://imgs.search.brave.com/HR4XL7q_XpiQSqNwAl17jYkdNBrGw-fKdXxJlCr-uls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDc3ODM3Ni9waG90/by9jbG9jay02LW9j/bG9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTZKUXI5/UFdPYmVuY2lOMHVj/QkgycXJFeWd5WlY4/VUdDem1UQ1pVRnVE/cz0", description: "today is a very lucky day from me as i ahve c= have completed 500 question on leetcode "}])
}



 return (
        <div style={{ background: "#b4c8d0", minHeight: "100vh" }}>
            {/* Add a button that will call the addPost function when clicked  */}
            <button onClick={addPost} style={{
                padding: 10,
                margin: 10,
                borderRadius: 5,
                cursor: "pointer",
            }}>Add post</button>

            {/* Display the postComponents */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>{postComponent}</div>
            </div>
        </div>
    );
}

  
  
  
// Export App Component to use it in other components
export default App;