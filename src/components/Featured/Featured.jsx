import React from 'react'
import BestSeller from '../../assets/ShopCategorie/bestseller.jpg'
import Men from '../../assets/ShopCategorie/man.jpg'
import Women from '../../assets/ShopCategorie/women.jpg'
import { ShoppingCart } from 'lucide-react'


const products = [
    {
        name: "Autumn Dress",
        price: "58$",
        discount: "85$",
        img: BestSeller
    },
    {
        name: "Autumn Dress",
        price: "58$",
        discount: "85$",
        img: Men
    },
    {
        name: "Autumn Dress",
        price: "58$",
        discount: "85$",
        img: Women
    }
]



function Featured() {
    return (
        <div className='flex md:space-x-12 mt-36 sm:flex-col sm:space-x-0 md:flex-row'>
            {products.map((product, index) => {
                return (
                    <div className='rounded-md relative md:w-1/3 sm:h-[400px] md:h-[600px] sm:w-full' key={index}>
                        <img src={product.img} alt="" className='w-full h-1/2 rounded-lg' />
                        <p className='absolute bg-red-500 text-white top-2 left-2 p-1 rounded-md w-14 text-center '>SALE</p>
                        <div className="flex justify-between mt-6">
                            <div className=''>
                                <p >
                                    <span className='text-lg'>{product.name}</span>
                                    
                                </p>
                                <div><span className='text-2xl font-bold'>{product.price} </span>
                                {product.discount ? <div className='bg-gray-500 line-through decoration-gray-500 text-lg'></div> : <></>}
                                </div>
                            </div>
                            <div className="bg-slate-900 p-2  w-1/6 rounded-lg flex items-center justify-center">
                                    <ShoppingCart color='white' />
                            </div>
                        </div>
                        <hr className='bg-black mt-12 sm:block md:hidden' />
                    </div>
                )
            })}

        </div>
    )
}

export default Featured
