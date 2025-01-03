import React from "react";
import { assets } from "../assets/Ecommerce-assets/assets/frontend_assets/assets";

const Herosection = () => {
  return (
    <>
      <div className=" flex items-center border-black border-[1px] text-3xl mt-7 sm:flex-s ">
        <div className=" flex  px-32 w-1/2 flex-col">
          <div className="flex items-center gap-2 ">
            <p className="w-12 bg-black h-[3px]"></p>
            <p>Our Bestsellers</p>
          </div>
          <div className="flex">
            <p className="text-5xl"> LAtests Arrivals</p>
          </div>
          <div className="flex items-center gap-2">
            <p>shop now</p>
            <p className="w-12 bg-black h-[3px]"></p>
          </div>
        </div>
        <div className="w-1/2">
          <img src={assets.hero_img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Herosection;
