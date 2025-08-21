import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      // Si ya está, actualiza la cantidad
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    } else {
      // Si no está, lo agrega
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((product) => product.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((product) => product.id === itemId);
  };

  const cartTotal = () => {
     return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const cartTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0).toFixed(2);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cartTotal, cartTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};