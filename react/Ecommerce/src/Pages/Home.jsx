import React from 'react'
import Herosection from '../Components/Herosection'
import LatestCollection from '../Components/LatestCollection'

function Home() {
  return (
    <>
    <div className="mx-7">
    <Herosection />
    <LatestCollection/>
    </div>
    </>
  )
}

export default Home