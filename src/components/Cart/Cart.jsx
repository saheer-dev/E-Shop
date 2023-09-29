import React, { useContext } from 'react'
import { productsApi } from '../ContextApi.jsx/Api';
import { Link, NavLink } from 'react-router-dom';

export default function Cart() {

    const products = useContext(productsApi);
    console.log(products);



  return (
    <div>

      <div className='w-[30vw] h-[90vh] bg-black flex flex-col gap-7 p-10'>
        <div className='flex items-center justify-between w-[30vw]'>
        <Link to="/"> <h1 className=' text-3xl text-white font-bold'>E-SHOP</h1></Link>
        </div>
    
      <NavLink to="/"  className='text-lg font-serif text-white'>Home</NavLink>
        <NavLink to="/Shop"  className='text-lg font-serif text-white' >Shop</NavLink>
        <NavLink to="/About"  className='text-lg font-serif text-white'>About</NavLink>
        <NavLink to="/Contact"  className='text-lg font-serif text-white'>Contact</NavLink>
        <NavLink to="/Journal"  className='text-lg font-serif text-white'>Journal</NavLink>

      </div>





      
    </div>
  )
}
