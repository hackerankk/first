import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Placeorder from './Pages/Placeorder'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
function App() {
  

  return (
    <div className='px-16'>
    <Navbar/>
        <Routes >
      <Route path='/' element={<Home/>}></Route>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/placeorder' element={<Placeorder/>}/>
      <Route path='/login' element={<Login/>}/>

      
    </Routes>
    </div>
  )
}

export default App
