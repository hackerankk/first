import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './Components/Child1' 
import { Routes,Route } from 'react-router-dom'
import { Child3 } from './Components/Child3'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Child1 />
     <Routes>
<Route path='/home' element={< Home/>}/>
     </Routes>
    </>
  )
}

export default App
