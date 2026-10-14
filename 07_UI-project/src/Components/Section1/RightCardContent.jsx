import React from 'react'

const RightCardContent = (props) => {
  return (
     <div>
           <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit esse quicorporis error quos sapiente.</p>
           <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
            <button className=' text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            
           </div>

        </div>
  )
}

export default RightCardContent
