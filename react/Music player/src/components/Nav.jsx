import React from 'react'
import { assets } from '../Assets/assets'
import { useNavigate } from 'react-router-dom'
export const Nav = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="flex justify-between w-[100%] h-[9%] mt-4" >
<div className="flex gap-1">
  <div onClick={()=> navigate(-1)} className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
    <img  className="w-5"src={assets.arrow_left} alt="" />
    </div>
    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
    <img onClick={()=> navigate(1)} className="w-5"src={assets.arrow_right} alt="" />
    </div>
</div>
<div className="flex gap-1">
  <div className="w-40 h-10 bg-white text-black flex justify-center items-center rounded-full text-[16px] ">
    <p>Explore Premium</p>
  </div>
  <div className="bg-black text-white w-24 h-10 flex justify-center items-center rounded-full text-[16px]">
    <p>Install App</p>
  </div>
  <div className="w-8 h-8 flex justify-center items-center bg-[#8f468f] text-[#3a123a] rounded-full font-bold">
    <p>D</p>
  </div>
</div>
</div>
{/* music all podcast */}
<div className=" flex gap-2">
  <div className="w-16 h-10 bg-white text-black rounded-full flex justify-center items-center">
    <p>All</p>
  </div>
  <div className="flex justify-center items-center bg-black text-white w-20 h-10 rounded-full">
    <p>Music</p>
  </div>
  <div className="flex justify-center items-center bg-black text-white w-20 h-10 rounded-full">
    <p>Podcast</p>
  </div>
</div>
    </>
  )
}
export default Nav;
