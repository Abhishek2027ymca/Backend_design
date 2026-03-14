import React from 'react'

export function Otp (){



  return (
    <div  className = "flex justify-center    ">
      <Subotpbox/>
      <Subotpbox/>
      <Subotpbox/>
      <Subotpbox/>
      <Subotpbox/>
      <Subotpbox/>
    </div>
  )
}


function Subotpbox(){

    return <div >
<input type="text"  className= " outline-none m-1 w-[40px]  h-[50px] rounded-2xl  bg-blue-400  text-white px-4" ></input>
    </div>
}

export default Otp;
