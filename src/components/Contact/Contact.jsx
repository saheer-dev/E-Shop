import React from 'react'

export default function Contact() {
  return (
    <div className='w-[30vw] pl-6 gap-8'>
       <div> <h1 className="text-5xl font-bold w-[100vw] h-[4rem] mt-2">Contact</h1></div>
       <div className='gap-9 flex flex-col p-4'>
        <h2 className='text-3xl font-semibold'>Fill up a Form</h2>
        
       <div className='flex flex-col'>
       <label className='font-semibold text-xl' htmlFor="Name">Name</label>
        <input className='border-b-2 border-black/20 p-2' type="text" placeholder='Enter your name here' />
       </div>

       <div className='flex flex-col'>
       <label className='font-semibold text-xl' htmlFor="Email">Email</label>
        <input className='border-b-2 border-black/20 p-2' type="text" placeholder='Enter your email here' />
       </div>

       <div className='flex flex-col'>
       <label className='font-semibold text-xl' htmlFor="Messages">Messages</label>
        <input className='border-b-2 border-black/20 h-16' type="text" placeholder='Enter your Messages here' />
       </div>

        <button className='bg-black text-white w-44 h-12'>Post</button>
        
       </div>
      
    </div>
  )
}