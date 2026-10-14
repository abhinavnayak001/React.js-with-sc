import React from 'react'
import Section01 from './Components/Section1/Section01'
import Section02 from './Components/Section2/Section02'

const App = () => {
const Users = [
  {
    img:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60' ,
    color:'blue',
    intro:'' ,
    tag:'Satisfied'
  },
  {
     img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60' ,
     color:'teal',
     intro:'' ,
    tag:'Underderved'
  },
 
{
  img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600",
  color:'green',
  intro: "",
  tag: "Underbanked"
},

  {

    img: 'https://plus.unsplash.com/premium_photo-1669592892297-9635e5c15f36?w=600&auto=format&fit=crop&q=60',
    color:'black',
    intro:'' , 
    tag:'struggle'
  }
]

  return (
    <div>
      <Section01 Users={Users}/>
      <Section02/>
    </div>
  )
}

export default App
