import React from 'react'

export default function Nav(props) {
  return (
    <div>
      <h5>{props.title}</h5>
      <img src={props.src} alt="" />
    </div>
  )
}
