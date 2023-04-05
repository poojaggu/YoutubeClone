import React from 'react'
import Button from './Button'

const buttonNames = ["All","Gaming","Songs","Live","Socket","Cricket","Music","Sands","Tamil","Telugu","Football","Hockey","Tennis","Chess"]

const Buttonlist = () => {
  return (
    <div className='flex py-3 m-5  w-auto'>
      {buttonNames.map((item,index) => <Button item={item} key={index} /> )}


    </div>
  )
}

export default Buttonlist