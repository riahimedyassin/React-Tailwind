import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header'
import Top from '../components/Top/Top'
import Brands from '../components/Brands/Brands'
import Services from '../components/Services/Services'
import Picks from '../components/Picks/Picks'
import Featured from '../components/Featured/Featured'
import Contact from '../components/Contact/Contact'


function Home() {
  return (
    <>
        <Top />
        <NavBar/>
        <div className="px-6">
        <div className="m-20">
        <Header />
        <h1 className='text-3xl mt-36'>Brands</h1>
        <Brands />
        
          <Services/>
          <h1 className='text-3xl mt-36'>Currated Picks</h1>
          <Picks />
          <h1 className='text-3xl mt-36'>Featured Products</h1>
          <Featured/>
          <Contact />
        </div>

        </div>
        
    </>
  )
}

export default Home
