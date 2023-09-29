import React from 'react'

export default function Pagination({totalPosts, postsPerPage, setCurrentPage}) {
 let pages = [];
 for( let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++ ){
    pages.push(i)
    // console.log(i);

    console.log(totalPosts);
    
 }


  return (
    <div className='flex gap-6'>
        {
            pages.map((page ,index) => (
                 <button onClick={ () => setCurrentPage(page)}  className='bg-slate-100/20 hover:bg-slate-600 hover:text-white px-4 py-2 rounded-md border-[2px] border-slate-500'
                  key={index}>{page} </button>
            )
        )}
      
    </div>
  )
}
