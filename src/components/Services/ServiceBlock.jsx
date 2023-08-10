import React from 'react'

function ServiceBlock({Icon,title,descreption}) {
  return (
    <div className='flex flex-col space-y-4 justify-center w-1/4'>
        <div className="bg-gray-200 rounded-md flex items-center justify-center p-2 h-16 w-16">
            {Icon}
        </div>
        <h1 className='font-bold text-xl'>{title}</h1>
        <p className='text-gray-500'>{descreption}</p>
    </div>
  )
}

export default ServiceBlock
