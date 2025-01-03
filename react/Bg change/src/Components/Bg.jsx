import React, { useState } from 'react'
import { changeColor } from './helper';

const Bg = () => {
    const [color,setColor] = useState();
    function Chnage(){
        let c = changeColor()
        setColor(c)
    }
    setInterval(Chnage,2000)

      return (
   <> <div className='' style={{backgroundColor:color}}>hii</div>
   <button onClick={Chnage}>changeColor</button>
    </>
  )
}

export default Bg