import React from "react";
import { assets, albumsData, songsData } from "../Assets/assets";
import { Nav } from "./Nav";
import Card from "./card";
import Card2 from "./Card2";
import { useNavigate } from "react-router-dom";

const Screen = () => {
  const See=useNavigate();
  return (
    <>
      <div className="w-[100%] text-white overflow-y-scroll">
        <Nav />
        {/* heading */}
        <div className="text-3xl font-bold  mt-4 mb-4 ">
          <p>Featured Charts</p>
        </div>
        <div className="flex gap-1">
          {albumsData.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              name={item.name}
              des={item.desc}
              id={item.id}
            />
          ))}
        </div>
        <div className="flex justify-between mx-4">
          <p className="text-2xl my-7">today's Biggest hits</p>
          <p onClick={()=>See('/see-all')} className="text-green-700 underline capitalize cursor-pointer"> see all</p>
        </div>
        <div className="flex gap-1 over flow-hidden">
          {songsData.map((item, index) => (
            <Card2
              key={index}
              image1={item.image}
              name1={item.name}
              des1={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Screen;
