import React from 'react'
import { MoveRight } from 'lucide-react'

function CarouselItem({ background, header }) {
    return (
        <div className='flex flex-col items-center justify-center space-y-16 mt-8 relative p-5 w-[80%] h-[500px]' >
            <img src={background} alt="" className='absolute z-[-1] w-[100%] md:h-[100%] top-0 left-0 rounded-lg opacity-50 sm:h-93' />
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-black to-slate-500 text-center '>{header}</h1>
            <button className='btn flex items-center justify-center space-x-4'>
                <span>Shop Now </span>
                <MoveRight />
            </button>
        </div>
    )
}

export { CarouselItem }
