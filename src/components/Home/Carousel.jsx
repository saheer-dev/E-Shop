import React from "react";
import { Splide,SplideSlide} from "@splidejs/react-splide";
import img from "../../assets/Carousel/image1.webp"
import img2 from "../../assets/Carousel/image2.webp"
import img3 from "../../assets/Carousel/image3.webp"
import { Link } from "react-router-dom";


import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';  
import { ArrowUUpLeft, Truck } from "@phosphor-icons/react";
 
export default function Carousel() {

  return (
    
    <div>
     
        <Splide options={ {
    rewind: true,
    autoplay:true ,
    pauseOnHover : false,
    gap   : '1rem',
  } }  >

            
            <SplideSlide> <Link to="/Shop"><img src={img} alt="" /></Link></SplideSlide>
            <SplideSlide> <Link to="/Shop"><img src={img2} alt="" /></Link></SplideSlide>
            <SplideSlide> <Link to="/Shop"><img src={img3} alt="" /></Link></SplideSlide>
         
        </Splide>
       



        <div className="w-[100vw] justify-between flex p-8 font-thin">

        <div className="flex gap-2 items-center w-48 justify-center hover:shadow-lg hover:shadow-black/20">
           <p className="font-bold text-lg">2</p>
             <p className="text-sm">Two year warattanty</p>
                </div>


        <div className=" w-44 justify-center flex gap-2 items-center hover:shadow-lg hover:shadow-black/20">
          <Truck size={20} weight="fill" />
            <p className="text-sm">Free shipping</p>
               </div>

        <div className="flex items-center w-60 justify-center gap-2 hover:shadow-lg hover:shadow-black/20">
          <ArrowUUpLeft size={20} weight="fill" />
            <p className="text-sm">Return policy in 30 days</p>
               </div>

               

                 

                 

                 

        </div>
       
      </div>
  )
};


