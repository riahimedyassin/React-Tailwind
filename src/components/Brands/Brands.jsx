import React from 'react'
import Gucci from '../../assets/brands/gucci.png'
import Channel from '../../assets/brands/channel.png'




function Brands() {
    const brands = [Gucci,Channel]
    return (
        <div className='mb-40'>
            <div className='flex items-center justify-center space-x-36  w-full mt-12'>
                
                {brands.map((brand,index)=> {
                    return <img src={brand} className='w-12 h-10' key={index}/>
                })}
                {brands.map((brand,index)=> {
                    return <img src={brand} className='w-12 h-10' key={index}/>
                })}
                {brands.map((brand,index)=> {
                    return <img src={brand} className='w-12 h-10' key={index}/>
                })}
            </div>
        </div>
    )
}





export default Brands
