import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState({ visible: false, message: "" });
  const [count , setCount] = useState(0);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    setCount((prevCount) => prevCount + 1); // incrementing count

    setTimeout(() => {
      setPopup({ visible: false, message: "" });
    }, 3000);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const removedItem = prevCart.find((item) => item.id === id);
      if (removedItem) {
        setCount((prevCount) => prevCount - removedItem.quantity); // Decrement count by the quantity of the removed item
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };


  const handleRemoveItem = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            // If quantity > 1, decrement the quantity
            return { ...item, quantity: item.quantity - 1 };
          } else {
            // If quantity is 1, remove the item from the cart
            return null;
          }
        }
        return item;
      }).filter(Boolean); // Remove null values (items that were removed)

      // Update the count
      setCount((prevCount) => prevCount - 1);

      return updatedCart;
    });
  };


  const clearCart = () => {
    setCart([]);
    setCount(0);
  };

  // const removeFromCart = (id) => {
  //   // alert("Item removed from cart.");
  //   setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  // };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart , count ,handleRemoveItem}}
    >
      {children}
    </CartContext.Provider>
  );
};
