import React from 'react'
import ButtonArrow from '../ButtonArrow'
import BestSeller from '../../assets/ShopCategorie/bestseller.jpg'
import Men from '../../assets/ShopCategorie/man.jpg'
import Women from '../../assets/ShopCategorie/women.jpg'
import Casual from '../../assets/ShopCategorie/casual.jpg'


const categories=[
    {
        img : BestSeller,
        title: "Best Seller"
    },
    {
        img : Men, 
        title:"Shop Men"
    },
    {
        img : Women , 
        title:"Shop Women"
    },
    {
        img : Casual, 
        title:"Shop Casual"
    }
]

function Picks() {
  return (
    <div className='flex justify-around items-center  mt-16 md:space-x-6 sm:flex-col sm:space-x-0 sm:space-y-8 md:space-y-0 md:flex-row' >
        {categories.map((categorie,index)=> {
            return (
            <div className='relative md:w-1/4 h-96 bg-no-repeat bg-cover rounded-md sm:w-full ' key={index} style={{backgroundImage:`url(${categorie.img})`}} >
                {/* <img src={categorie.img} alt="" className='aboslute top-0 left-0 w-full h-full'/> */}
                <ButtonArrow title={categorie.title} classProp="absolute top-[80%] left-[50%] transform -translate-x-1/2" />
            </div>)
        })}
    </div>
  )
}

export default Picks
