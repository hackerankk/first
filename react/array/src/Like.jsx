import React, { useState } from "react";

// function name(e) {
//     e.preventDefault();
//   console.log(e);
// }


export default function Like() {
const [i ,setI]=useState(0)
    function count(){
       setI(i+1);
       
        
        console.log(i);
        
    }
  return (
    <>
    <p>{i}</p>
          <button onClick={count}>count </button>
        
     

      
    </>
  );
}
