import React, { useState } from 'react'

export default function Random() {
   const[count,setCount]=useState(0);
   const[count1,setCount1]=useState(0);
   const[count2,setCount2]=useState(0);

   function loot(){
   
    setCount(parseInt(Math.random()*10));
    setCount1(parseInt(Math.random()*10));
    setCount2(parseInt(Math.random()*10));
    
     
    console.log(count);
    console.log(count1);
    console.log(count2);
    
    
    
     
 }
 function result(){
    const lot=15
    const sum=count+count1+count2;
    if(15==sum){
        console.log("hurray");
        
    }
    else{
        console.log("luck");
        
    }

 }
 console.log(result);
 
   
   
    
      return (
    <>
   <button onClick={loot}>hey</button>
   <p>{count}</p>
   <p>{count1}</p>
   <p>{count2}</p>
 <button onClick={result}>luck</button>
    </>
  )
}
