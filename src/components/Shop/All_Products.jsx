import React, { useEffect, useState } from "react";
import {
  ArrowsOut,
  CaretRight,
  Heart,
  List,
  ShareFat,
  ShoppingCart,
} from "@phosphor-icons/react";
import "./../../style/style.css";
import Pagination from "./Pagination";

export default function All_Products(props) {
  const [products, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const cat = props.sort;
  let catagory = [];

  if (cat == "all") {
    catagory = products.map((r) => r);
  } else {
    catagory = products.filter((f) => f.category == props.sort);
    // console.log(catagory);
  }

  return (
    <div>
      <div className="w-[70vw] flex justify-between p-2 mt-10">
        <div className="flex gap-2">
          <List size={32} weight="fill" />
          <ArrowsOut size={32} weight="fill" />
        </div>
        <div className="flex gap-6">
          <div className="flex h-8 items-center gap-5">
            <p className="text-lg font-semibold">Sort by</p>
            <select className="border-2 outline-none  w-40 h-8" name="" id="">
              <option value="Sellers">Best Sellers</option>
              <option value="Arrivals">New Arrivals</option>
              <option value="Special">Special Offers</option>
            </select>
          </div>

          <div className="flex h-8 items-center gap-5">
            <p className="text-lg font-semibold">Show by</p>
            <select
              className="border-2 w-24 h-8 outline-none "
              name=""
              id=""
              onChange={(e) => setPostsPerPage(Number(e.target.value))}
            >
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-[69vw]  grid grid-cols-3">
        {catagory
          .map((e) => (
            <div className="relative overflow-hidden" id="op">
              <div className="h-[16rem] w-[20rem] p-3 overflow-hidden">
                <img
                  className=" border-2 border-black/5 p-9 h-[18rem] w-[22rem] object-contain overflow-hidden"
                  src={e.image}
                  alt=""
                />
              </div>

              <div
                id="show_div"
                className=" z-10 w-[18rem]  gap-3 absolute  top-[14rem] left-3 flex flex-col justify-end bg-slate-100/50"
              >
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

              <div className="w-80 h-40 gap-2 flex flex-col mt-4 pl-8">
                <h1 className="text-sm font-semibold w-48"> {e.title} </h1>
                <p className="text-lg font-semibold">${e.price}.00 </p>
              </div>
            </div>
          ))
          .splice(firstPostIndex, postsPerPage)}
      </div>

      <Pagination
        totalPosts={catagory.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
