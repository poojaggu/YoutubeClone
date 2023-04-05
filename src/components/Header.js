import React, { useEffect, useState } from 'react';
import {toggleMenu} from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import {cashResults} from '../utils/searchSlice'



const Header = () => {

  const dispatch = useDispatch()
  const [searchquery,setSearchQuery] = useState("")
  const [suggetions,setSuggetions] = useState([])
  const [showSuggetions,setShowSuggetions] = useState(false)

  const cashValue = useSelector((store) => store.search)



  useEffect(() => {
   
   
    const timer = setTimeout(()=>
    {if(cashValue[searchquery]){
      setSuggetions(cashValue[searchquery])
     }
     else{
      const getQueryData = async () => {
       
        const response = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchquery);
        const jsonData = await response.json()  
        setSuggetions(jsonData[1]) 
  
        dispatch(cashResults({
          [searchquery]:jsonData[1]
        }))
       
     }
     getQueryData()
      
  
      }}, 200) 

    return (() =>{
      clearTimeout(timer)
    })

  })
  

  

  const getToggleHandler = () => {
       dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col shadow-xl py-3 m-2 p-3 justify-between'>
       <div className='flex col-span-1 '>
       
       <img src=" https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg" alt="menu" className='h-9 mr-1 cursor-pointer' onClick={() => getToggleHandler()} />
       
      <a href="/"> <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="example"
          className='h-8 ml-4' /></a>  
       </div>
        <div>
          
          <input type="text" className='border border-rad rounded-l-full h-7 border-gray-950 w-96 px-1' value={searchquery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggetions(true)} onBlur={() => setShowSuggetions(false)}/>           
          <button className='border border-rad rounded-r-full bg-gray-200 border-gray-950 w-16 text-emerald-800 border-l-transparent'>Search</button>
          {showSuggetions && <div className='fixed bg-white w-96 rounded-lg   border-gray-400'>
          <ul>           
            {suggetions.map((item) => <li className='hover:bg-slate-300 rounded-sm px-2 shadow-sm'>{item}</li> )}           
          </ul> </div>}
          
          
          </div>
          
        
        <div className='flex col-span-1 justify-evenly w-60  h-16'>
   
        <img src="https://p.kindpng.com/picc/s/179-1799598_png-icon-free-download-clipart-transparent-download-post.png" alt="menu" className='h-6 mt-1' />
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="menu" className='h-6 mt-1' />
        </div>


    </div>
  )
}

export default Header