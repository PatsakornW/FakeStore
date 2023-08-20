import React, { createContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartAmount, setcartAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
      
    }, 0);
    setTotal(total);
  });

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setcartAmount(amount);
    }
  }, [cart]);

  function removeCart(id) {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  }

  function plusAmount(id) {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    addCart(cartItem, id);
  }

  function minusAmount(id) {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeCart(id);
    }
  }

  function addCart(products, id) {
    toast.success('Successfully added!')

    const newItem = { ...products, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        removeCart,
        setCart,
        plusAmount,
        minusAmount,
        cartAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
