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
        <div className='flex space-x-12 mt-36'>
            {products.map((product, index) => {
                return (
                    <div className='rounded-md relative w-1/3 h-[700px]'>
                        <img src={product.img} alt="" className='w-full h-1/2 rounded-lg' />
                        <p className='absolute bg-red-500 text-white top-2 left-2 p-1 rounded-md w-14 text-center '>SALE</p>
                        <div className="flex justify-between mt-6">
                            <div className=''>
                                <p >
                                    <span className='text-lg'>{product.name}</span>
                                    
                                </p>
                                <p><span className='text-2xl font-bold'>{product.price} </span>
                                {product.discount ? <div className='bg-gray-500 line-through decoration-gray-500 text-lg'></div> : <></>}
                                </p>
                            </div>
                            <div className="bg-slate-900 p-2  w-1/6 rounded-lg flex items-center justify-center">
                                    <ShoppingCart color='white' />
                            </div>
                        </div>
                        
                    </div>
                )
            })}

        </div>
    )
}

export default Featured
