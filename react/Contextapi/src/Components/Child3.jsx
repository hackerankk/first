import React, { useContext } from 'react'
import VikasContext from '../Context/VikasContext';

const Child3 = () => {
    const {name} =useContext(VikasContext)
    console.log(name);
    
  return (
    <div>Child3</div>
  )
}

export default Child3