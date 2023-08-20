import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import toast, { Toaster } from 'react-hot-toast';
import { FaCartShopping } from "react-icons/fa6";



function Card_products({ products }) {
  const { addCart } = useContext(CartContext);
  // console.log(products);
  return (
    
    <div   className="flex flex-col rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <Link to={`/product/${products.id}`}>
      <img
        className="p-10  rounded-md h-64 xl:h-64 w-full"
        src={products.image}
        alt={products.title}
      />

      <div className="mt-1 p-2">
        <h2 className="text-black">{products.title}</h2>
        <p className="mt-1 text-sm text-slate-400 capitalize">
          {products.category}
        </p>
      </div>
      </Link>
      

      <div className="mt-auto flex items-end justify-between">
        <p className="text-lg font-bold text-gray-700">{products.price} $</p>

        <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          <button className="text-sm" onClick={()=> addCart(products,products.id)}>Add to cart</button>
          
        </div>
      </div>
      
    </div>

    
  );
}

export default Card_products;
