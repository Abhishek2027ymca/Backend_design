import { useState , useEffect } from 'react'



//  this is  not a simple function  we simply calle it custom hook
export function usePostTitle(){
  const [post , setPost] = useState({})

 async function getPost( ){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); 
    const json = await response.json();
    
    setPost(json)
}

// now i will use an use effect  sothta changes in post will get reflected
useEffect(() => {
    getPost();

} , [])


// now i will return thta json titile formt he dunction
return post.title 
}