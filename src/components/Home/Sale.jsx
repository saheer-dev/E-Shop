import React from 'react'
import img1 from "../../assets/Sales/sale1.webp"
import img2 from "../../assets/Sales/sale2.webp"
import img3 from "../../assets/Sales/sale3.webp"
import { Link } from 'react-router-dom'


export default function Sale() {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center  mt-20 gap-8'>
        <div className='w-[40vw] h-[100vh] overflow-hidden object-cover mt-6'> <Link to="/Shop"> <img className='h-[91vh]' src={img1} alt="" /></Link>  </div>
          <div className='flex flex-col'>
            <div className='w-[45vw] h-[50vh] overflow-hidden object-cover p-3'><Link to="/Shop">  <img src={img2} alt="" /></Link>  </div>
              <div className='w-[45vw] h-[50vh] overflow-hidden object-cover p-3'> <Link to="/Shop"> <img src={img3} alt="" /></Link>  </div>
                </div>
                   </div>
  )}
