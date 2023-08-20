import React, { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import store from "../assets/store.png";

function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { cartAmount } = useContext(CartContext);

  return (
    <div className="bg-white fixed w-full z-20 py-4 px-10 shadow-2xl">
      <div className="container flex justify-between items-center mx-auto h-full">
        <Link to={"/"} className="flex items-center">
          <img src={store} alt="logo" className="w-[30px]" />
          <p className="font-bold capitalize ms-2 text-xl">FakeStore</p>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" cursor-pointer flex relative"
        >
          {" "}
          <FaCartShopping className="text-2xl hover:text-primary" />
          {/* <div className=" bg-accent absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {cartAmount}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
