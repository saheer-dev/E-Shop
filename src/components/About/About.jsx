import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='w-[40vw] pl-6 gap-8'>
       <div> <h1 className="text-5xl font-bold w-[100vw] h-[4rem] mt-2">About</h1></div>
       <div className='gap-6 flex flex-col'>
        <p className='text-lg'> <span className='font-semibold'>E-Shop</span> is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
      <Link to="/Shop"><button className='bg-black text-white w-52 h-12'>Continue Shopping</button></Link> 
       </div>
      
    </div>
  )
}
