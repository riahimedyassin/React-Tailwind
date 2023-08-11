import React from 'react'
import Carousel from '../Carousel/Carousel'
import Wallpaper1 from '../../assets/wallpaper.jpg'
import Wallpaper2 from '../../assets/wallpaper2.webp'
import Wallpaper3 from '../../assets/wallpaper3.webp'
import { CarouselItem } from '../Carousel/CarouselItem'


function Header() {
    const Imgs = [{
        src: Wallpaper1,
        header: "Level Up your summer with our new collection"
    },
    {
        src: Wallpaper2,
        header: "Freedom Collection"
    },
    {
        src: Wallpaper3,
        header: "Level Up your summer with our new collection"
    }]
    return (
        <main className=' w-full mt-16 h-[500px] p-6  rounded-lg   sm:p-0'>
            <Carousel >
                {Imgs.map((img, index) => {
                    return <CarouselItem background={img.src} key={index} header={img.header} />
                })}

            </Carousel>
        </main>
    )
}

export default Header
