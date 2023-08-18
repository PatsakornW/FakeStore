import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproducts(res.data);
      
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>;
}

export default ProductsProvider;
