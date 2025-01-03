import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
  <>
  <div className="main">
    <div className="nav flex justify-between m-[1rem]">
      <div className="left flex items-center">
        <div className="logo w-[4rem]">
          <img src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg" alt="" />
          </div>
          <div className="navitem">
            <Link to="/product" className='mr-[1rem]'>Product</Link>
            <Link to ="/Industrites"className='mr-[1rem]'>industries</Link>
            <Link to ="/customer"className='mr-[1rem]'> Customer</Link>
            <Link to="/learning"className='mr-[1rem]'>learning</Link>
            <Link to="/support"className='mr-[1rem]'>Support</Link>
            <Link to ="/more">More</Link>
        </div>
          
        </div>
        <div className="right flex gap-5">
          <div className="items flex flex-col">
            <Link to="/contact">contact us</Link>
            <Link to="797979779">79797979</Link>
             </div>
             <div className="">
              <p>login</p>
             </div>
             <div className="try w-[8rem] text-center pt-[9px] text-[19px] bg-[#2e844a] text-white rounded-xl">
              <h5>try for free</h5>
             </div>
        </div>
      </div>
    </div>

  </>
  )
}

export default Nav