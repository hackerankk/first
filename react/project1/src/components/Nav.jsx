import React, { useContext } from 'react'
import { NameContext } from '../context/NameContext'

const Nav = () => {
  const {delivery}=useContext(NameContext)
  console.log(delivery)
  return (
    <div>Nav</div>
  )
}

export default Nav