import React, { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext({
  cart: { items: [], total: 0 },
  addToCart: () => {},
  removeFromCart: () => {},
});

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0 });

  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: [...prevCart.items, product],
      total: prevCart.total + product.price * product.quantity,
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.filter((item) => item.id !== productId);
      const updatedTotal = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);

      Swal.fire({
        title: "Producto eliminado",
        text: "El producto ha sido eliminado del carrito.",
        icon: "success",
      });

      return {
        ...prevCart,
        items: updatedItems,
        total: updatedTotal,
      };
    });
  };

  const contextValue = { cart, addToCart, removeFromCart };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
