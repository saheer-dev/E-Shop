import { List, MagnifyingGlass, ShoppingCart, User, X, XCircle } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom';

export default function Navbar() {

const [modal, setModal] = useState(false);
const [modal2, setModal2] = useState(false);
const [navBar, setNavBar] = useState(false)

const toggleModal = () => {
  setModal (!modal)
}

const toggleModal2 = () => {
  setModal2 (!modal2)
}

const listClick = () =>{
  setNavBar(!navBar)
}


  return (
    <div className='w-[100vw] h-[8rem] bg-slate-200 flex flex-col' >
        <div className='w-[100vw] h-[4rem] bg-white flex p-4 items-center justify-between fixed top-0 z-50 border-b-2 border-black/30'>
           <div className='w-[100vw] text-3xl font-extrabold  flex items-center justify-between'>
           <Link to="/"> <h1 className='pl-4'>E-SHOP</h1></Link>
           <List className='md:hidden' onClick={listClick} size={25}/>
        </div>

        <div className='hidden md:flex md:gap-10 md:mr-14'>
        <NavLink to="/"  className='text-lg font-serif text-slate-500' style={({ isActive }) => ({ color: isActive ? 'black' : '' })}>Home</NavLink>
        <NavLink to="/Shop"  className='text-lg font-serif text-slate-500' style={({ isActive }) => ({ color: isActive ? 'black' : '' })}>Shop</NavLink>
        <NavLink to="/About"  className='text-lg font-serif text-slate-500' style={({ isActive }) => ({ color: isActive ? 'black' : '' })}>About</NavLink>
        <NavLink to="/Contact"  className='text-lg font-serif text-slate-500' style={({ isActive }) => ({ color: isActive ? 'black' : '' })}>Contact</NavLink>
        <NavLink to="/Journal"  className='text-lg font-serif text-slate-500' style={({ isActive }) => ({ color: isActive ? 'black' : '' })}>Journal</NavLink>
        </div>

        {navBar &&(
          <div className='absolute top-0 right-0 w-[100vw] h-[90vh] bg-black/80 flex flex-col gap-7 p-10'>
          <div className='flex items-center gap-[300px] h-[10vh] w-[100vw]'>
          <Link to="/"> <h1 className=' text-3xl text-white font-bold'>E-SHOP</h1></Link>
          <XCircle onClick={listClick} size={32} color="#fcfcfc" weight="bold" />
          </div>
      
        <NavLink to="/"  className='text-lg font-serif text-white'>Home</NavLink>
          <NavLink to="/Shop"  className='text-lg font-serif text-white' >Shop</NavLink>
          <NavLink to="/About"  className='text-lg font-serif text-white'>About</NavLink>
          <NavLink to="/Contact"  className='text-lg font-serif text-white'>Contact</NavLink>
          <NavLink to="/Journal"  className='text-lg font-serif text-white'>Journal</NavLink>
  
        </div>
        )}




     </div>


<div className=' absolute top-[4rem]'>

     <div className='w-[100vw] h-[4rem] flex items-center p-6 justify-between'>
        <div className='flex gap-1 items-center justify-center '>
          <List onClick={toggleModal2} size={20} weight="light" />
            <p>Shop by Category</p>
              </div>

              <div className='w-[26rem] h-[3rem] bg-white flex justify-center items-center rounded-lg'>
                <input className='w-[25rem] h-[2rem] p-3 rounded-lg' type="text" placeholder='Search your product here'/>
                <MagnifyingGlass  className='mr-5' size={20}  weight="bold" />  
              </div>

              <div className='flex gap-4 justify-center items-center'>
              <User onClick={toggleModal} size={23} weight="fill" />
              <Link to="/Cart"><ShoppingCart size={23} weight="fill" /></Link>
              
              </div>

              {modal && (
                 <div className='w-40 h-56 bg-black flex flex-col text-white/60 p-5 text-lg gap-4 z-40 right-2 top-32 absolute '>
                  <X onClick={toggleModal} size={23} color='white' weight="light" />
                 <p className='border-b-2 border-white/60 w-32 h-8 pl-5 justify-center hover:text-white hover:border-white'>Login</p>
                 <p className='border-b-2 border-white/60 w-32 h-8 pl-5 justify-center hover:text-white hover:border-white'>Sign Up</p>
                 <p className='border-b-2 border-white/60 w-32 h-8 pl-5 justify-center hover:text-white hover:border-white'>Profile</p>
                 <p className='border-b-2 border-white/60 w-32 h-8 pl-5 justify-center hover:text-white hover:border-white'>Others</p>
         
              </div>
              )}

                {modal2 && (
                 <div className='w-52 h-64 bg-black flex flex-col text-white/60 p-6 text-lg gap-4 z-40 top-32 absolute'>
                 <p className='border-b-2 border-white/60 w-40 h-8 pl-5 justify-center hover:text-white hover:border-white'>Accessories</p>
                 <p className='border-b-2 border-white/60 w-40 h-8 pl-5 justify-center hover:text-white hover:border-white'>Furniture</p>
                 <p className='border-b-2 border-white/60 w-40 h-8 pl-5 justify-center hover:text-white hover:border-white'>Electronics</p>
                 <p className='border-b-2 border-white/60 w-40 h-8 pl-5 justify-center hover:text-white hover:border-white'>Clothes</p>
                 <p className='border-b-2 border-white/60 w-40 h-8 pl-5 justify-center hover:text-white hover:border-white'>Bags</p>

         
              </div>
                )}
</div>

     </div>
    </div>
  )
}
