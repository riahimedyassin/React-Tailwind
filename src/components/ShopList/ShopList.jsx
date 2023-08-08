import React from 'react'

function ShopList({visiblity}) {
    return (
        <>
            <ul className='absolute left-96 top-24 bg-gray-100 w-96 h-96 transition ease-in-out delay-75 z-10 rounded-lg p-5'  hidden={visiblity}>
                <li>Hola</li>
                <li>Hola</li>
                <li>Hola</li>
            </ul>
        </>
    )
}

export default ShopList
