import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Screen from './Screen'



const Content = () => {
  return (
    <Routes>
        <Route path='about/:id' element={<Screen/>}></Route>
        </Routes>

  )
}

export default Content