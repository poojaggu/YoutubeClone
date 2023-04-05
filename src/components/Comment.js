import React from 'react'

const Comment = ({info}) => {
    const {name,comment} = info
  return (
    <div className='flex m-2 bg-gray-300 border'> 
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="img" className='h-6 mt-1'/>
        <div className='px-2 ml-2'>
            <h4 className='text-sm font-bold'>{name}</h4>
            <p className='text-sm'>{comment}</p>
        </div>

    </div>
  )
}

export default Comment