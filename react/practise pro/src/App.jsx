import { useState } from 'react'
import Nav from './components/Nav'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Product from './components/Product'
import Footer from './components/Footer'
import Home from './components/Home'
import { Route ,Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Routes>
      <Route path='' element={<Home/>}> </Route>
      <Route path='/product' element={<Product />}>  

      </Route>

    </Routes>
    

    <Footer />
    </>
  )
}

export default App
