import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/Ecommerce-assets/assets/frontend_assets/assets";
function Navbar() {
  return (
    <>
      <div className=" mt-4 mx-7 justify-between items-center flex ">
        <div className="">
          {" "}
          <img className="w-24" src={assets.logo} alt="" />
        </div>
        <div className="flex gap-5">
          <NavLink className=" items-center flex flex-col" to="">
            <p> Home</p> <hr className="hidden border-none  h-1 w-4 bg-black" />
          </NavLink>

          <NavLink className=" items-center flex flex-col" to="/collection">
            <p>Collection</p>
            <hr className="hidden border-none  h-1 w-4 bg-black" />
          </NavLink>

          <NavLink className=" items-center flex flex-col" to="/about">
            <p>About us </p>{" "}
            <hr className="hidden  border-none h-1 w-4 bg-black" />
          </NavLink>
        </div>

        <div className="flex gap-3 items-center">
          <div className="">
            {" "}
            <input className="w-28" type="text" />
          </div>
          <div className="w-5">
            <img src={assets.search_icon} alt="" />
          </div>
          <div className="w-5">
            <img src={assets.profile_icon} alt="" />
          </div>
          <div className="relative">
            <div className="w-5">
              <img src={assets.cart_icon} alt="" />
            </div>
            <div className="absolute right-[-4px] bottom-[-7px] rounded-full bg-black text-[8px] px-[3px] py-[2px] text-white">
              10
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
