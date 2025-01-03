import React, { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../Assets/assets";
export const Playercontext = createContext();
const PlayerContextProvider = (props) => {
  const audioref = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  
  
  const [time,setTime]=useState({
    currentTime:{
      second:0,
      minute : 0

    },
    totalTime:{
      second: 0,
      minute: 0
    }
  })
  useEffect(() => {
    setTimeout(() => {
        audioref.current.ontimeupdate = () => {
            seekBar.current.style.width = (Math.floor(audioref.current.currentTime / audioref.current.duration * 100)) + "%"
            setTime({
                currentTime: {
                    second: Math.floor(audioref.current.currentTime % 60),
                    minute: Math.floor(audioref.current.currentTime / 60)
                },
                totalTime: {
                    second: Math.floor(audioref.current.duration % 60),
                    minute: Math.floor(audioref.current.duration / 60)
                }
            })
        }
    })
})
const Seekhandle=(event)=>{
  const seekWidth =event.nativeEvent.offsetX;
  const totalWidth =seekBg.current.offsetWidth;
  const newTime =(seekWidth/totalWidth)*audioref.current.duration;
  audioref.current.currentTime=newTime;
  
}
  const play = () => {
    audioref.current.play();
    setPlayStatus(true);
    console.log("p1s");
    
  };
  const pause = () => {
    audioref.current.pause();
    setPlayStatus(false);
    console.log("p2");
  };
  const playWithId =async (id) =>{
    await setTrack(songsData[id]);
    await audioref.current.play();
    setPlayStatus(true);
  }
  const previous=async()=>{
    if(track.id < 0){
      await setTrack(songsData[track.id-1])
     await audioref.current.play();
    
     setplayStatus(true)
    }
    
 }
 const next=async()=>{
   if( track.id < songsData.length-1)
    await audioref.current.play();
  await setTrack(songsData[track.id+1])
    setplayStatus(true)
  
   }
   

  const contextValue = {
    audioref,
    seekBar,
    seekBg,
    play,
    pause,
    track,setTrack,
    playStatus,
    setPlayStatus,
    playWithId,
    time, setTime,
    Seekhandle,
    previous,next
  };
  return (
    <Playercontext.Provider value={contextValue}>
      {props.children}
    </Playercontext.Provider>
  );
};

export default PlayerContextProvider;
