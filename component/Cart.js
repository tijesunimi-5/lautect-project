// components/Cart.js
import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center mt-40 font-bold text-3xl">The cart is empty</p>
      ) : (
        <ul className="mt-20 flex flex-row w-[1500px] flex-wrap">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex w-[320px] ml-1  lg:mt-0 flex-col text-center overflow-hidden lg:w-[250px] lg:h-[300px] rounded-lg bg-[#f2ede4] lg:ml-10 mt-20"
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
