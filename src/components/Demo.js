import React, { useState } from 'react'
import {findPrime} from '../utils/constants'
import { useMemo } from 'react'
import Demo1 from './Demo1'

const Demo = () => {
    const [x,setX] = useState(0)
    const [isDark,setisDark] = useState(true)
    const iSTrue = "border border-black shadow-xl bg-slate-300"

    const getPrime = useMemo(() =>  findPrime(x),[x])
  return (
    <div className='flex'>
    
    

    <div className={(isDark && iSTrue)} >
    <input type="number" onChange={(e) => setX(e.target.value)} className='border border-black ' />
    <button className='border border-red' onClick={() => (setisDark(!isDark) , console.log(isDark))}>toggle</button>
     <h1 className='text-teal-700'>PrimeValue :{getPrime}</h1>
    </div>

    <Demo1/>
    </div>
  )
}

export default Demo