import React from 'react'
import ButtonArrow from '../ButtonArrow'
import Picture from '../../assets/pic.png'


function Contact() {
  return (
    <div className='bg-[#191919] flex rounded-lg h-96'>
        <img src={Picture} alt="" className='w-1/2 rounded-lg'  />
        <div className="w-2/3 flex flex-col space-y-12 p-5">
            <h3 className='text-gray-500 font-bold'>LIMITED OFFER</h3>
            <h1 className='text-white text-5xl'>35% of this friday <br/> and get special gift</h1>
            <span className='w-1/4'><ButtonArrow  title="Grab it now"/></span>
        </div>
    </div>
  )
}

export default Contact
