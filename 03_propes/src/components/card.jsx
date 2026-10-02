import React from 'react'

const card = (propes) => {
  console.log();
  
  return (
    
         <div className='parent'>
      <div className='card'>
        <img src={propes.img} alt="" />
        <h1>{propes.user},{propes.age}</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quos!</p>
        <button>view profile</button>
      </div>
      
    </div>
      
    
  )
}

export default card
