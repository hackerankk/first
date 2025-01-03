import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './Nav.css'
// import head from './header.jsx'
import Nav from './Nav.jsx'
// import headerlogo from './assets/header.jpg'

function App() {


  return (
    <>
  <Nav/>
    <nav codeware='codeware'/>
    <Nav title="first" src="../public/vite.svg" des='new'/>
    <Nav title='two' src='../public/vite.svg' des='neew'/>
    <Nav title='three' src='../public/vite.svg' des='neew'/>
    </>
  )
}

export default App
