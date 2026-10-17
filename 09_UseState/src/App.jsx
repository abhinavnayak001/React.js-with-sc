import React, { useState } from 'react'

const App = () => {
  const[Num ,setNum]= useState({user:'Abhinav', age:19})
  function btnClicked() {
    const newNum= {...Num};
    newNum.user = 'sarthak'
    setNum(newNum)
  }

  return (
    <div>
      <h1>{Num.user},{Num.age}</h1>
      <button onClick={btnClicked}>click</button>
     
    </div>
  )
}

export default App
