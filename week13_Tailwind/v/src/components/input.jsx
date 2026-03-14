
 import React from 'react'
 
  export const input = (  {disabled , 
    children ,
    onClick,
    variant }
    ) => {

   


   return (

<span onCLick ={onClick } className = {'rounded-2xl text-4xl px-2 py-2 text-white cursor-pointer bg-blue-500'}>

    <input type={text}  placeholder= { placeholder} 
     className = " bg-blue-500 outline-none  "></input>

</span>

   )
 }
 
 export default input
 