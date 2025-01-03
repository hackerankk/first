import React, { useContext } from 'react'
import {Playercontext} from'../Context/Playercontext'
import { assets } from '../Assets/assets'


import {albumsData , songsData }from'../Assets/assets'
const Player = () => {
  const {playStatus,play,pause,track,setTime ,time,seekBar,Seekhandle,seekBg,previous,next} = useContext(Playercontext);
  return (
   <>
  <div className="h-[10%] bg-black flex justify-between items-center text-white px-4"> 
<div className=" hidden lg:flex items-center gap-4">
<img src={track.image} alt="" className='w-12'/>
<div className="">
  <p>{track.name}</p>
  <p>{track.desc.slice(0,12)}</p>
</div>
</div>
<div className="flex flex-col items-center">
  <div className="flex gap-3">
    <img  className=" w-6 cursor-pointer" src={assets.shuffle_icon} alt="" />
    <img onClick={previous}  className=" w-6 cursor-pointer" src={assets.prev_icon} alt="" />
  {!(playStatus)?(
 <img  onClick={play} className=" w-6 cursor-pointer" src={assets.play_icon} alt="" />
  ):(
<img  onClick={pause} className=" w-6 cursor-pointer" src={assets.pause_icon} alt="" />
 ) }
   
    <img  onClick={next} className=" w-6 cursor-pointer" src={assets.next_icon} alt="" />
    <img  className=" w-6 cursor-pointer" src={assets.loop_icon} alt="" />
  </div>
  <div className="flex justify-center items-center gap-4">
  <p>{time.currentTime.minute}:{time.currentTime.second}</p>
    <div onClick={Seekhandle} ref={seekBg} className="w-[35vw] h-[5px] bg-[#43404075] ">
    <div ref={seekBar} className="w-[10vw] bg-green-600 h-full"></div>
    </div>
 

    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
  </div>
    </div>
    <div className="flex justify-center items-center gap-3">
      <img className='w-6' src={assets.play_icon} alt="" />
      <img className='w-6' src={assets.mic_icon} alt="" />
      <img className='w-6' src={assets.queue_icon} alt="" />
      <img className='w-6' src={assets.speaker_icon} alt="" />
      <img className='w-6' src={assets.volume_icon} alt="" />
   <div className="w-20 bg-slate-50 h-1 rounded"></div>
      <img className='w-6' src={assets.mini_player_icon} alt="" />
      <img className='w-6' src={assets.zoom_icon} alt="" />
    </div>
</div>
   </>
  )
}

export default Player