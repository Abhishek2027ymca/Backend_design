import { useState, useEffect } from 'react'



//  this is  not a simple function  we simply calle it custom hook
// export function usePostTitle() {
//     const [post, setPost] = useState({})

//     async function getPost() {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const json = await response.json();

//         setPost(json)
//     }

//     // now i will use an use effect  sothta changes in post will get reflected
//     useEffect(() => {
//         getPost();

//     }, [])


//     // now i will return thta json titile formt he dunction
//     return post.title
// }

/// lets amke  it more genenric 


export function useFetch(url) {
    const [post, setPost] = useState({})

    async function getPost() {
        const response = await fetch(url);
        const json = await response.json();

        setPost(json)
    }


    //  whheevr the the function get mounte dfirst time , it will eun the getpost fn 
    // no need to render evry  time 
    useEffect(() => {
        getPost();
// as it has no dependecy array
    }, [])


    // now i will return thta json titile formt he dunction
    return post
} 


// usefetch  with refetch 