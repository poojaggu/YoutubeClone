import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  
  const isMenuVisible = useSelector((store) => store.app.isMenuVisible)
  
  
  if(!isMenuVisible) return null


  return (
    <div className='p-5 m-3 shadow-lg w-48'>
      <ul className='m-2'>
         <li><Link to="/">Home</Link></li> 
         <li>Shorts</li>
         <li>Subscriptions</li>
  
      </ul>

      <ul className='m-2 shadow-md'>
         <li>Library</li>
         <li>History</li>
         <li>Watch Later</li>
  
      </ul>
      

      <h1 className='m-2 '>Explore</h1>
      <ul className='m-2'>
         <li>Trending</li>
         <li>Shopping</li>
         <li>Movies</li>
         <li>Live</li>
         <li>Gaming</li>
         <li>News</li>
         <li>Sports</li>
      </ul>
      <h1 className='m-2'>More from YouTube</h1>
      <ul className='m-2'>
         <li>YouTube Premium</li>
         <li>YouTube Studio</li>
         <li>YouTube Music</li>
         <li>YouTube Kids</li>
         
      </ul>
     
      <h1 className='m-2'>Settings</h1>
      <h1 className='m-2'>Report history</h1>
      <h1 className='m-2'>Help</h1>
      <h1 className='m-2'>Send feedback</h1>

    </div>
  )
}

export default Sidebar