import React from 'react'
import a from "../assets/react.svg"
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        <img src={a} alt="" />
        <ul className='ul'>
           <Link to="/"> <li>Home</li></Link>
           <Link to="/about"> <li>About</li></Link>
            
        </ul>
    </div>
  )
}

export default Navbar