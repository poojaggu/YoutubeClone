import React from 'react'




const Button = ({item}) => {
  return (
    <div className='ml-3'>

        <button className='bg-gray-200 h-7 w-16 rounded-md text-stone-600 font-serif '>{item}</button>

    </div>
  )
}

export default Button