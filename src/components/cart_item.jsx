import React, { useContext } from "react";
import { FaXmark,FaMinus,FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";


function Cart_item({ item }) {
  const {removeCart,plusAmount,minusAmount} = useContext(CartContext)  
  return (
    <div className="flex    border-b border-gray-200 w-full">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/products/${item.id}`}>
          <img src={item.image} alt={item.title} className="max-w-[80px]" />
        </Link>
        <div className="flex flex-col w-full ">
          <div className="flex justify-between mb-2  items-start">
            <Link to={`/product/${item.id}`} className=" font-medium  max-w-[240px]">
              {item.title}
            </Link>
            
            <div className="cursor-pointer text-xl" onClick={()=> removeCart(item.id)}>
            <FaXmark className="text-gray-700 hover:text-red-500  transition"/>  
            </div>
          </div>

          <div className="flex  items-center gap-x-2 h-[36px] text-sm">
                <div className="flex items-center border-gray-500">
                    <span className="cursor-pointer rounded-l bg-primary py-2 px-3 duration-100 hover:bg-secondary hover:text-white text-xs" onClick={()=> minusAmount(item.id)}> <FaMinus/> </span>
                    <span className=" cursor-default  bg-gay-200 py-1 px-4 "> {item.amount} </span>
                    <span className="cursor-pointer rounded-r bg-primary py-2 px-3 duration-100 hover:bg-secondary hover:text-white text-xs" onClick={()=> plusAmount(item.id)}> <FaPlus/> </span>
              </div>
                <div className="flex w-full">$ {item.price}</div>
                <div className="w-full flex justify-end font-medium">$ {item.price * item.amount} </div>
        </div>

        </div>

       

      </div>
    </div>
  );
}

export default Cart_item;
