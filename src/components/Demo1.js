import React, { useState,useRef } from 'react'




const Demo1 = () => {

    const refValue = useRef(0) 
    console.log("render")
  

    let x = 0
    const [y,setY] = useState(0)
    
  return (
    <div className='ml-5 p-5 border border-black w-96'>
     <h1>{x}</h1>
     <button onClick={() =>{
      refValue.current = refValue.current+1
      console.log(refValue.current)
    }
      } className='border border-green-500'>Add Ref</button>
     <button onClick={() =>setY(y+1)} className='border border-green-500'>Add y</button>
     <h1>{y}</h1>
     <h1>ref:{refValue.current}</h1>


    </div>
  )
}

export default Demo1