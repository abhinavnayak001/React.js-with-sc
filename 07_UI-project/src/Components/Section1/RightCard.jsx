import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-70 rounded-4xl overflow-hidden  relative'>
        <img className='h-full w-80 object-cover' src={props.img}
         alt="" />
      <div className='absolute top-0 left-0 h-full p-8  flex-col flex   justify-between '>
        <h2 className='bg-white text-2xl font-semi-bold rounded-full h-8 w-8 flex justify-center items-center'>{props.id+1}</h2>
       
        <RightCardContent id={props.id} color={props.color} tag={props.tag}/>

        </div>
    </div>
  )
}

export default RightCard
