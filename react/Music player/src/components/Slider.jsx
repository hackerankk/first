import React from 'react'
import {assets} from "../Assets/assets"
import { useNavigate } from 'react-router-dom'

 
const Slider = () => {
  const home=useNavigate();
  return (
    <>
   
   <div className="w-[28%] h-full p-2 flex text-white flex-col  lg:flex gap-1">
    <div onClick={()=>home('')} className="bg-[#242424] h-[15%] rounded flex flex-col justify-around text-xl ">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img className='w-6' src={assets.home_icon} alt="" />
            <p className='font-bold'>Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img src={assets.search_icon} className='w-6' alt="" />
          <p className='font-bold'> Search</p>
        </div>

  
    </div>
    {/* 85% slider */}
    <div className=" bg-[#242424] h-[85%]  ">
      {/* Library Container start */}
      <div className= "p-4 flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <img className='w-6' src={assets.stack_icon} alt="" />
          <p className='font-bold'>Your Library</p>
        </div>
        <div className="flex gap-3">
          <img className='w-6' src={assets.arrow_icon} alt="" />
          <img className ='w-6'src={assets.plus_icon} alt="" />
        </div>
      </div>
      {/* library container end  */}
    {/* playlist start*/}
    <div className=" flex flex-col justify-start pl-4 pt-4 h-[25%] bg-[#424242] m-2 mt-3 rounded gap-1">
      <p className='font-bold'>Create Your first  playlist</p>
      <p  className='text-sm text-[#d3cbcb]'>its easy we'll help you</p>
      {/* playlist button */}
      <div className="bg-white text-black flex items-center justify-center h-[25%] rounded-full w-[45%] mt-2">
        <p>create playlist</p>
      </div>
        
      </div>
      <div className="flex flex-col justify-start pl-4 pt-4 h-[25%] bg-[#424242] mt-3 m-2 rounded gap-1">
      <p className='font-bold'>let's find some podcast to follow</p>
      <p className='text-sm text-[#d3cbcb]'>we'll keep you updated on new epsiode</p>
      {/* playlist button */}
      <div className="bg-white text-black text-center h-[35%] flex  items-center justify-center rounded-full w-[55%] mt-2">
        <p>Browse podcasts</p>
      </div>
        
      </div>
    </div>
    

    </div>
{/* right side */}
{/* head */}

    
     </> 
  )
}

export default Slider