import { useState } from 'react'
import Card from './Componets/Card'
import Like from './Like'
import Toogle from'./componets/Toogle'



function App() {
  const [count, setCount] = useState(0)

 let fruit=["apple","ball"]
  return (

    <>
    <div className="cards">
<Card title="card1"y={fruit} price={1000}/>
<Card title="card2"y={fruit} price={2000}/>
<Card  title="card3"y={fruit} price={3000} />
<Toogle/>
</div>
<Like/>
    </>
  )
}

export default App
