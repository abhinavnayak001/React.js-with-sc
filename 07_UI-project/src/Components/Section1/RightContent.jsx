import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
import RightCardContent from './RightCardContent'

const RightContent = (props) => {
  console.log(props.Users);
  
  return (
    <div  id='Right'className='h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
    {props.Users.map(function (elem, idx){
      return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
    })}
  
     
    </div>
  )
}

export default RightContent
