import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import  Input  from '../Input/Input' 
import { Search, ShoppingBasket, User } from 'lucide-react'
import ShopList from '../ShopList/ShopList'
function NavBar() {
    const [isVisible,setIsVisible]=useState(true)
    const toggleShop=() => {
        setIsVisible(!isVisible)
    }
  return (
    <nav className="h-32 w-full  flex items-center justify-between px-24 relative">
        <img src={Logo} alt="" className='h-8 w-24' />
        <ShopList visiblity={isVisible}/>
        <ul className='flex space-x-6 w-auto cursor-pointer'>
            <li onClick={toggleShop} >Shop</li>
            <li>Most wanted</li>
            <li>New arrival</li>
            <li>Brands</li>
        </ul>
        <div className='flex space-x-4 items-center '>
            <Input Icon={<Search color='gray'/>} height="h-12" />
            <User/>
            <ShoppingBasket/>
        </div>

    </nav>
  )
}

export default NavBar
