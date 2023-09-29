import React, { useState } from 'react'
import SideBar from './SideBar'
import All_Products from './All_Products'


export default function Shop() {
  const[srt,setSrt]=useState("all")

 
  return (
    <div className=''>
        <div className='flex'>
          <SideBar
           sorting={a=>setSrt(a)}/>
            <All_Products sort={srt}/>
              </div>    
               </div>
  )
}