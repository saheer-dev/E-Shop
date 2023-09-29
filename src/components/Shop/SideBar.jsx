import React, { useEffect, useState } from 'react'

export default function SideBar(props) {

    const [products, setProduct] = useState([]);
 

    const getApi = () => {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setProduct(json);
        });
    };
    useEffect(() => {
      getApi();
    }, []);

  return (
    <div className='w-[26vw] flex flex-col gap-12 pl-7'>
      <h2 className="text-4xl font-bold w-[100vw] h-[4rem] pl-6 mt-2">Products</h2>

  
        <div>
            <h2 className='text-xl font-semibold'>Shop by Category</h2>
                 <div onClick={ ()=> props.sorting("all") } className='flex flex-col w-[25vw] gap-7'>
                    <p className='pl-2 w-[17vw] h-12 border-b-2 border-black/25 items-center flex text-lg text-black/70 hover:text-black hover:border-b-2 hover:border-black'>All Products</p>
                </div>

            
            {products.map(m => (
                <div onClick={ ()=> props.sorting(m) } className='flex flex-col w-[25vw] gap-7'>
                    <p className='pl-2 w-[17vw] h-12 border-b-2 border-black/25 items-center flex text-lg text-black/70 hover:text-black hover:border-b-2 hover:border-black'>{m}</p>
                </div>

            )) }
        </div>

        <div>
            <h2 className='text-xl font-semibold'>Shop by Color</h2>
           
                <div className='flex flex-col w-[25vw]'>
                    <p className='w-[17vw] h-12 border-b-2 border-black/25 items-center flex text-lg text-black/70 gap-3 hover:text-black hover:border-b-2 hover:border-black'> 
                    <span className='w-3 h-3 rounded-full bg-green-600'></span> Green</p>

                    <p className='w-[17vw] h-12 border-b-2 border-black/25 items-center flex text-lg text-black/70 gap-3 hover:text-black hover:border-b-2 hover:border-black'> 
                    <span className='w-3 h-3 rounded-full bg-gray-500'></span> Gray</p>

                    <p className='w-[17vw] h-12 border-b-2 border-black/25 items-center flex text-lg text-black/70 gap-3 hover:text-black hover:border-b-2 hover:border-black'> 
                    <span className='w-3 h-3 rounded-full bg-red-600'></span> Red</p>

                    <p className='w-[17vw] h-12 border-b-2 border-black/25 items-center flex text-lg text-black/70 gap-3 hover:text-black hover:border-b-2 hover:border-black'> 
                    <span className='w-3 h-3 rounded-full bg-yellow-500'></span> Yellow</p>

                    <p className='w-[17vw] h-12 border-b-2 border-black/25 items-center flex text-lg text-black/70 gap-3 hover:text-black hover:border-b-2 hover:border-black'> 
                    <span className='w-3 h-3 rounded-full bg-blue-600'></span> Blue</p>
                </div>
        </div>

        <div>
            <h2 className='text-xl font-semibold'>Shop by Price</h2>
           
                <div className='flex flex-col w-[25vw]'>
                    <p className='p-3 w-[17vw] h-12 border-b-2 border-black/25 items-center flex text-lg text-black/70 gap-3 hover:text-black hover:border-b-2 hover:border-black'>$0.00 - $49.99</p>

                    <p className='p-3 w-[17vw] h-12 border-b-2 border-black/25 items-center flex text-lg text-black/70 gap-3 hover:text-black hover:border-b-2 hover:border-black'>$50.00 - $99.99</p>

                    <p className='p-3 w-[17vw] h-12 border-b-2 border-black/25 items-center flex text-lg text-black/70 gap-3 hover:text-black hover:border-b-2 hover:border-black'> $100.00 - $199.99</p>

                    <p className='p-3 w-[17vw] h-12 border-b-2 border-black/25 items-center flex text-lg text-black/70 gap-3 hover:text-black hover:border-b-2 hover:border-black'>$200.00 - $399.99</p>

                    <p className='p-3 w-[17vw] h-12 border-b-2 border-black/25 items-center flex text-lg text-black/70 gap-3 hover:text-black hover:border-b-2 hover:border-black'>$400.00 - $599.99</p>
                </div>
        </div>
      
    </div>
  )
}
