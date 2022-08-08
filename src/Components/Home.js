import React from 'react'
import Popular from './Popular'
import Veggie from './Veggie'

function Home() {
  return (
    <div className="home">
        <Veggie />
        <Popular />
    </div>
  )
}

export default Home