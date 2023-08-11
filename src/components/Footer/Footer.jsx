import React from 'react'

function Footer() {
    return (
        <footer className="w-[100%] md:h-72 bg-[#191919] text-white md:px-6 py-4 sm:px-2 sm:h-auto">
            <div className="w-[100%] h-[80%] flex justify-around md:space-x-24 md:flex-row sm:flex-col md:space-y-0 sm:space-y-6 sm:space-x-0 items-center">
                <div className="md:w-2/5 space-y-4 sm:w-full sm:text-center">
                    <h2 className='font-bold text-3xl '>Zara</h2>
                    <p>Specializes in providing high quality stylish prodcuts for your wardrobe</p>
                </div>
                <div className="md:w-3/5 flex space-x-12 sm:w-full items-center justify-center">
                    <ul className='list-inside list-none space-y-2 w-1/4'>
                        <li className='font-bold'>SHOP</li>
                        <li>All Collections</li>
                        <li>Winter Edition</li>
                        <li>Discount</li>
                    </ul>
                    <ul className='list-inside list-none space-y-2 w-1/4'>
                        <li className='font-bold'>COMPANY</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Affiliates</li>
                    </ul>
                    <ul className='list-inside list-none space-y-2 w-1/4'>
                        <li className='font-bold'>SUPPORT</li>
                        <li>FAQs</li>
                        <li>Cookie Policy</li>
                        <li>Terms of Use</li>
                    </ul>

                    <div className="md:w-1/4 space-y-2">
                        <p className='font-bold'>Payment Methods :</p>
                        <p>Paypal</p>
                        <p>MasterCard</p>
                        <p>D17</p>
                    </div>
                </div>
            </div>
            <hr className='sm:mt-6 md:mt-0' />
            <div className='w-full flex items-center justify-center h-[20%] sm:mt-4 md:mt-0'>&copy; 2021 ZARA. All rights reserved.</div>
        </footer>
    )
}

export default Footer
