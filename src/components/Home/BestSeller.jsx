import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { CaretRight, Heart,ShareFat,ShoppingCart,} from "@phosphor-icons/react";
import "../../style/style.css"

export default function BestSeller() {
  const [products, setProduct] = useState([]);
 
 

  const getApi = () => {
    fetch("https://fakestoreapi.com/products")
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
    <div className="w-[100] h-[30rem] mt-12 ">
      <h2 className="text-4xl pl-7">Our Bestsellers</h2>
      <div  id="img">
        <Splide
          options={{
            rewind: true,
            autoplay: true,
            fixedWidth: "20rem",
            fixedHeight: "25rem",
            pauseOnHover: false,
            gap: "1rem",
          }}
        >
          {
          products.filter(a=>a.category=="women's clothing").map((e) => (
            <SplideSlide>
              <div className="relative overflow-hidden" id="op">
                <div className="h-[18rem] w-[20rem] overflow-hidden">
                <img
                className=" border-2 border-black/5 p-4 h-[18rem] w-[22rem] object-contain overflow-hidden"
                src={e.image}
                alt=""/>

                </div>
         

              <div id="show_div" className=" z-10 w-[20rem]  gap-3 absolute  top-[12rem] left-0 flex flex-col justify-end bg-slate-100">
                  <p className="flex items-center justify-end gap-2 border-b-2 border-black/10 hover:border-b-2 hover:border-black">
                    Compare <ShareFat size={24} color="#030303" weight="fill" />
                  </p>
                  <p className="flex items-center justify-end gap-2 border-b-2 border-black/10 hover:border-b-2 hover:border-black">
                    Add to Cart{" "}
                    <ShoppingCart size={24} color="#030303" weight="fill" />
                  </p>
                  <p className="flex items-center justify-end gap-2 border-b-2 border-black/10 hover:border-b-2 hover:border-black">
                    View Details{" "}
                    <CaretRight size={24} color="#030303" weight="fill" />
                  </p>
                  <p className="flex items-center justify-end gap-2 border-b-2 border-black/10 hover:border-b-2 hover:border-black">
                    Add to Wish List{" "}
                    <Heart size={24} color="#030303" weight="fill" />
                  </p>
              </div>
              </div>

              <div className="w-80 h-40 gap-2 flex flex-col mt-4">
                <h1 className="text-sm font-semibold w-48"> {e.title} </h1>
                <p className="text-lg font-semibold">${e.price}.00 </p>
              </div>
      


            </SplideSlide>
          ))}
        </Splide>
      </div>
      
               
     


    </div>
  );
}
