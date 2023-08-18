import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/sidebarContext";
import { BsArrowLeftShort } from "react-icons/bs";
import { CartContext } from "../context/cartContext";
import Cart_item from "./cart_item";

function Sidebar() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { cart,setCart,cartAmount,total } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[50vw] xl:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex mt-10 items-center gap-2">
        <BsArrowLeftShort
          className="text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <p className="font-bold"> Shopping Cart {cartAmount} </p>
      </div>
      <div className="border-b h-[1px] border-gray-200 py-2 w-full"></div>
      <div className="h-3/4 overflow-y-auto">
        {cart.map((item) => {
          return <Cart_item item={item} key={item.id}/>;
        })}
      </div>
      <div >
        <div>
            <div>
                <span>Total :</span> $ {total}
            </div>
            <button className="btn btn-error btn-sm" onClick={()=> setCart([])}>
                Clear Cart
            </button>

        </div>

      </div>
    </div>
  );
}

export default Sidebar;
