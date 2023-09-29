import React from 'react'
import { Link } from 'react-router-dom'

export default function Journal() {
  return (
    <div className='w-[40vw] pl-6 gap-8'>
       <div> <h1 className="text-5xl font-bold w-[100vw] h-[4rem] mt-2">Journal</h1></div>
       <div className='gap-6 flex flex-col'>
        <p className='text-lg'> <span className='font-semibold'>E-Shop</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis delectus vitae, aliquid sit iure dolorum commodi eum numquam voluptate!</p>
      <Link to="/Shop"><button className='bg-black text-white w-52 h-12'>Continue Shopping</button></Link> 
       </div>
      
    </div>
  )
}
