import React from 'react'

function Input({ width, height, Icon }) {
    const styles = ["w-auto", height,"bg-gray-100","flex-grow","focus:outline-none","p-2"].join(" ")
    return (
        <div className='flex bg-gray-100 items-center rounded-lg px-2'>
            {Icon}
            <input type="text" className={styles} placeholder='Search'/>
        </div>
    )
}

export default Input
