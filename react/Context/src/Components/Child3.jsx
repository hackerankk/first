import React, { useContext } from 'react'
import { VikasContext } from '../Context.jsx/VikasContext'

export const Child3 = () => {
    const {name}= useContext(VikasContext)
    console.log(name);

    
  return (
    <div>{name}</div>
  )
}
