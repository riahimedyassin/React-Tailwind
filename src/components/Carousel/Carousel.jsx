import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'

function Carousel({ children }) {
    const [index, setIndex] = useState(0)
    const handleNext = () => {
        index < children.length - 1 ? setIndex((prev) => prev + 1) : index
    }
    const handlePrev = () => {
        console.log(index)
        index > 0 ? setIndex((prev) => prev - 1) : index
    }

    return (
        <div className='flex justify-center items-center relative flex-col w-full  md:space-y-16 sm:space-y-6 h-[500px] '>
            {children[index]}
            <div className='space-x-9'>
                <button onClick={handlePrev}>
                    <ArrowLeft color='gray' />
                </button>
                <button onClick={handleNext}>
                    <ArrowRight color='gray' />
                </button>
            </div>

        </div>
    )
}

export default Carousel
