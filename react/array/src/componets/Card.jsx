import React from 'react'
import  './card.css'

export default function card({y,title,price}) {
  const s=y.map((t)=>{
    return <li>{t}</li>
    
  })
  const bg={backgroundColor:"blue"};
  const back={backgroundColor:"green"}
   const dis=price>1000 ?<p style={bg}>discount 5%</p> :null;
   const back1=price>1000?back:null;
    

  return (
    
   <div className="card" style={back1}>
    <p> {title}</p>
      <p>{price}</p>
    <p>{s}</p>
    {dis}
   </div>
  )
}
