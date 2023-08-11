import React from 'react'
import ButtonArrow from '../ButtonArrow'
import Picture from '../../assets/pic.png'


function Contact() {
  return (
    <div className='bg-[#191919] flex rounded-lg md:h-96 sm:w-full sm:h-56'>
        <img src={Picture} alt="" className='w-1/2 rounded-lg'  />
        <div className="w-2/3 flex flex-col md:space-y-12 p-5 sm:space-y-4">
            <h3 className='text-gray-500 font-bold sm:text-sm md:text-lg'>LIMITED OFFER</h3>
            <h1 className='text-white md:text-5xl sm:text-xl'>35% of this friday <br/> and get special gift</h1>
            <span className='w-1/4'><ButtonArrow  title="Grab it now"/></span>
        </div>
    </div>
  )
}

export default Contact
