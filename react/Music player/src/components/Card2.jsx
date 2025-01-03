import React, { useContext } from 'react'
import { Playercontext } from '../Context/Playercontext';


const Card2 = ({image1,name1 ,des1 ,id}) => {
  const {playWithId} =useContext(Playercontext);
  console.log(id);
  
  return (
  <>
  <div onClick={()=> playWithId(id)} className="flex flex-col items-center hover:bg-[#ffffff38]">
   <img  className='w-32'src={image1} alt="" />
   <h2 className='text-lg'>{name1}</h2>
   <p className='text-sm'>{des1}</p>
  </div>
  </>
  )
}

export default Card2;