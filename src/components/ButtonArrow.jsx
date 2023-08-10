import React from 'react'
import { MoveRight } from 'lucide-react'


function ButtonArrow({title,classProp=""}) {
  const styles=`${classProp} btn flex items-center justify-center space-x-4`
  return (
    <button className={styles} >
      <span>{title}</span>
      <MoveRight />
    </button>
  )
}

export default ButtonArrow
