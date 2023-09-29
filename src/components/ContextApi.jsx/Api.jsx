import React, { createContext, useEffect, useState } from 'react'


const productsApi = createContext();

export default function Api(props) {

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
    <div>
      <productsApi.Provider value={products}>{props.children}</productsApi.Provider>
      
    </div>
  )
}

export {Api,productsApi}