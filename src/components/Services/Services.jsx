import React from 'react'
import ServiceBlock from './ServiceBlock'
import { DollarSign, Smile, ShoppingCart, Truck } from 'lucide-react'



const serviceBlock = [
    {
        title: "Original Products",
        descreption: "We provide money back guarantee of the product are not original",
        icon: <DollarSign />
    },
    {
        title: "Satisfaction Guarantee",
        descreption: "If you’ve been with us for a while, we know how hard",
        icon: <Smile />

    },
    {
        title: "Fast Delivery",
        descreption: "Our products will be delivered within 48 hours.",
        icon: <ShoppingCart />
    },
    {
        title: 'Fast & Free Shipping',
        descreption: "All payments are securely processed by Paypal and Stripe.",
        icon: <Truck />
    }
]


function Services() {
    return (
        <>
            <div className='flex h-36 w-full justify-around items-center -m-2 sm:flex-col sm:space-y-4 md:space-y-0 md:flex-row'>
                <h2 className='font-bold text-3xl md:w-1/2 sm:w-full'>We Provide best <br className='sm:hidden md:block'/> customer experiences</h2>
                <div className=" w-1 h-full bg-black sm:hidden md:block" ></div>
                <p className='text-gray-500'>We ensure our customers have the best shopping experience</p>
            </div>

            <div className="flex md:space-x-12 mt-20 md:flex-row sm:flex-col sm:space-x-0 md:space-y-0 sm:space-y-12">
                {serviceBlock.map((service, index) => {
                    return <ServiceBlock key={index} Icon={service.icon} title={service.title} descreption={service.descreption} />
                })}
            </div>

        </>

    )
}

export default Services
