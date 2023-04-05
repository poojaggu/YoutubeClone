import React from 'react'

const Chatmessage = ({name,message}) => {
  return (
    <div className='flex align-middle m-3 shadow-sm py-3 bg-slate-400 '>
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="menu" className='h-5 mt-1' />
   
            <span className='ml-3 font-bold'>{name}</span>
            <span className='ml-3'>{message}</span>
        
    </div>
  )
}

export default Chatmessage