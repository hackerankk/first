import React, { useContext } from 'react';
import { albumsData, assets } from '../Assets/assets';
import { useNavigate } from 'react-router-dom';
import { Playercontext } from '../Context/Playercontext';


const Card = ({image, name, des,id}) => {
  const album_navigate = useNavigate();
  const {playerwithId}=useContext(Playercontext);
  return (
    <div onClick={()=>album_navigate(`/about/${id}`)} className=" text-white  flex flex-col items-center items-centerw-44 cursor-pointer p-4 rounded-lg shadow-md hover:bg-[#ffffff38] ">
    <img className='w-32'src={image} alt="" />
      <h2 className="text-lg">{name}</h2>
      <p className="text-sm">{des} </p>
     <div className="   w-[28px] h-[27px] bg-green-700  flex  items-center justify-center rounded-full   translate-x-[3rem] translate-y-[-6rem]">
     <img className='w-4 ' src={assets.play_icon} alt="" />
     </div>
    </div>
    
  );
};

export default Card;
