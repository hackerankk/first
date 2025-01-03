import { useState } from 'react'
import Random from './Components/Random'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Random/>
    </>
  )
}

export default App
