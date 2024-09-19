// pages/cart.js
import React from "react";
import { useCart } from "../../component/context/CartContext";
import Cart from "../../component/Cart";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Cart cartItems={cart} />
    </div>
  );
};

export default CartPage;
