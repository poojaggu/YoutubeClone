import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from "react-router-dom";
import { disableMenu } from '../utils/appSlice'
import Commentscontainer from './Commentscontainer';
import Livechat from './Livechat';

const Watchpage = () => {
    const dispatch = useDispatch()

    const  [searchParams] = useSearchParams();
   console.log(searchParams)

    useEffect(() => {
      dispatch(disableMenu())
    })
  return (
    <div>
    <div className='py-3 m-5 flex'> 
      
    <iframe width="950" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
     
      <div className='flex flex-col-reverse overflow-y-scroll w-96 ml-5 h-[500px] '>
      <Livechat/>
      </div>
      
   
    </div>
    <Commentscontainer/>
    </div>
  )
}

export default Watchpage