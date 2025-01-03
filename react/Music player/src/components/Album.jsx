import React from "react";
import Nav from "./Nav";
import { albumsData, assets, songsData } from "../Assets/assets";
import { useParams } from "react-router-dom";
import { Playercontext } from "../Context/Playercontext";
import { useContext } from "react";
const Album = () => {
  const { id } = useParams();
  console.log(id);
  const albumData = albumsData[id];
const {playWithId} = useContext(Playercontext);
  return (
    <>
      <Nav />
      <div className="flex gap-8 mt-7 text-white">
        <img src={albumData.image} alt="" />
        <div className="">
          <p className="text-3xl">playlist</p>
          <h1 className="text-6xl">{albumData.name}</h1>
          <h4 className="mt-4">{albumData.desc}</h4>
          <p className="flex mt-8 items-center gap-2">
            <img className="w-10" src={assets.spotify_logo} alt="" />
            <p>spotify</p>
            <p>.15,548,5489 saves</p>
            <p>About 2hr30min</p>
            <p>.13 new entries</p>
          </p>
        </div>
      </div>
      
      <div className="">
        <div className=" text-white grid grid-cols-4 ml-12">
          <p>title</p>
          <p>album</p>
          <p>data added</p>
          <img  className='w-8'src={assets.clock_icon} alt="" />
       
        </div>
        <hr  className="mx-12 my-6 border-solid "/>
          {
            songsData.map((item,index)=> (
                <div onClick={()=> playWithId(item.id)} 
                key={index} className=" ">
                    <p className="text-white grid grid-cols-4 gap-4 ml-12">
                        <img className="w-28 my-4" src={item.image} alt="" />

                        <b>{item.name}</b>
                        <p>5 days ago</p>
                        <p>{item.duration}</p>

                    </p>
                </div>
            ))
          }
        
      </div>
    </>
  );
};

export default Album;
