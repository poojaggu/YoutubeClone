import React, { useEffect, useState } from 'react'
import Chatmessage from './Chatmessage'
import { useDispatch,useSelector } from 'react-redux'
import { addMessage } from '../utils/Chatslice'
import Generate,{makeid} from '../utils/helper'


const Livechat = () => {
  
    const [userChatText,setUserChatText] = useState("")
    

    const dispatch = useDispatch()
    const chatMessages = useSelector((store) => store.chat.messages)

   const getSubmitted = (event) => {
      event.preventDefault()
     dispatch(addMessage({
        name:"Jagadeesh",
        message:userChatText,
     }))
     setUserChatText("")
   }

    useEffect(() => {

        const timer = setInterval(() => {
            dispatch(addMessage({
                name:Generate(),
                message:makeid(15)
            }))
        },1000)

        return (() => {
            clearInterval(timer)
        })
    })
  return (
    <>
    <div>


   
   <div>
  {chatMessages.map((item,index) =>  <Chatmessage name={item.name} message={item.message} key={index}/>)}


  
   </div>
    <div>
    <form className='w-full px-3' onSubmit={(e) => getSubmitted(e)}>
     <input type="text" className='border border-black w-72' onChange={(e) => setUserChatText(e.target.value)} value={userChatText}/>
     <button className='border border-black bg-orange-300 rounded-md w-12 ml-2' onClick={(e) => getSubmitted(e)}>Add</button>


   </form>

    </div>
     
   </div>
   </>
  ) 

  
}

export default Livechat