import { useState } from 'react'
import './App.css'
import Slider from './components/Slider'
import Player from './components/Player'
import Display from './components/Display'
import { useContext } from 'react'
import { Playercontext } from './Context/Playercontext'

function App() {
  const [count, setCount] = useState(0)
const {audioref,track}=useContext(Playercontext);
  return (
    <>
      <div className="h-screen bg-[#121212] overflow-auto">
        <div className="h-[90%]  flex ">
        <Slider />
      <Display/>
 </div>
        <Player  />
       <audio src={track.file} ref={audioref}></audio>
      </div>
      
    </>
  )
}

export default App
