// components/Cart.js
import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center mt-40 font-bold text-3xl">The cart is empty</p>
      ) : (
        <ul className="lg:mt-20 flex lg:flex-row lg:w-[1500px] flex-wrap">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex w-[300px] text-center ml-10  mt-10 flex-col  overflow-hidden lg:w-[250px] lg:h-[300px] rounded-lg bg-[#f2ede4] lg:ml-10 lg:mt-20"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[300px] h-[200px] overflow-hidden"
              />
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
