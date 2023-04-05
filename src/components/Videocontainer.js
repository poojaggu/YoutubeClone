import React, { useEffect, useState } from 'react'
import {vidoeListApi} from '../utils/constants'
import Videocard from './Videocard'
import { Link } from 'react-router-dom'

const Videocontainer = () => {

  const [videoList,setVideoList] = useState([])
  

  useEffect(() => { 
    const getVideoData = async () => {
       const response = await fetch(vidoeListApi)
       const jsonData = await response.json()       
       setVideoList(jsonData.items)

    }
   getVideoData()

  },[])

  return (
    <div className='flex flex-wrap'>
        {videoList.map((item) => <Link to={"/watch?v="+item.id} key={item.id}><Videocard info={item} /></Link>  )}
      
    </div>
  )
}

export default Videocontainer