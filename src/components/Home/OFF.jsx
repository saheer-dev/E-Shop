import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/OFF.jpg'

export default function OFF() {
  return (
    <div className='ml-20 w-[90vw] h-[30rem] flex items-center justify-center mt-32 border-2 border-black/5 overflow-hidden'>
   <div className='object-contain overflow-hidden'>
   <Link to="/Shop"> <img className='w-[85vw] h-[26rem]' src={img} alt="" /></Link>
    </div>
      
    </div>
  )
}
