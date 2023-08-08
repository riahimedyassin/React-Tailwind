import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header'
import Top from '../components/Top/Top'

function Home() {
  return (
    <>
        <Top />
        <NavBar/>
        <div className="px-6">
        <Header />
        </div>
        
    </>
  )
}

export default Home
