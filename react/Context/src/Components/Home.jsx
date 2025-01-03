import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const Haribhai= useLocation();
    console.log(Haribhai);
    
  return (
    <div>Home</div>
  )
}

export default Home