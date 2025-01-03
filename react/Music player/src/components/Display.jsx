import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Screen from "./Screen";
import Album from "./Album";
import { See } from "./See";
import { albumsData } from "../Assets/assets";

const Display = () => {
  const displayref = useRef();
  const displaylocation = useLocation();
  const isalbum = displaylocation.pathname.includes("about");
  console.log(displaylocation);
  const albumid = isalbum ? displaylocation.pathname.slice(-1) : "";
  const bgcolor = albumsData[Number(albumid)].bgColor;
  useEffect(() => {
    if (isalbum) {
      displayref.current.style.background = `linear-gradient(${bgcolor},#121212)`;
    } else {
      displayref.current.style.background = `#121212`;
    }
  });

  return (
    <div ref={displayref} className="w-[100%]  overflow-scroll">
      <Routes>
        <Route path="" element={<Screen />}></Route>
        <Route path="/about/:id" element={<Album />}></Route>
       < Route path="/see-all" element={<See/>}></Route>
      </Routes>
    </div>
  );
};

export default Display;
