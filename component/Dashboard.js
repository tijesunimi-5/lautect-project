import Button from "../layout/button";
import Link from "next/link";
import {
  FaCartPlus,
  FaRegEnvelope,
  FaRegUser,
  FaShoppingCart,
} from "react-icons/fa";
import React from "react";

const Dashboard = () => {
  

  const turnOff = () => {
    const dashboard = document.querySelector(".dashboard");
    const shop = document.querySelector(".shop");
    const close = document.querySelector('.close');
    const menu = document.querySelector('.menu')

    dashboard.style.display = "none";
    shop.style.display = "block";
    close.style.display = 'none';
    menu.style.display = 'block'
  };
  return (
    <div className="dashboard hidden absolute w-full h-[100vh] bg-[#F2EDE4] z-20">
      <div className="flex flex-col pt-16 w-full">
        <li className="flex text-2xl font-semibold pl-6 border-b border-[#592B20] pb-2 z-10">
          <FaRegUser size={26} />
          Welcome, Guest
        </li>
        <Link
          href="/shop"
          className="flex text-3xl font-semibold pl-6 border-b border-[#592B20] pb-2 z-10 pt-5"
          onClick={turnOff}
        >
          <FaCartPlus className=" mt-1 mr-1" />
          Collection
        </Link>

        <Link
          href="#contact"
          className="flex  text-3xl font-semibold pl-6 border-b border-[#592B20] pt-5 pb-2"
          onClick={turnOff}
        >
          <FaRegEnvelope size={29} className=" mt-1 mr-1" />
          Contact Us
        </Link>

        <Link
          href={"/cart"}
          className="flex  text-3xl font-semibold pl-6 border-b border-[#592B20] pt-5 pb-2"
          onClick={turnOff}
        >
          <FaShoppingCart className=" mt-1 mr-1" />
          Cart
        </Link>
      </div>

      <div className="absolute bottom-2 text-center w-full flex justify-center border-t border-[#592B20] pt-4">
        <Link href={"/register/login"} className="mr-9 " onClick={turnOff}>
          <Button>Login</Button>
        </Link>
        <Link href={"/register/signup"} onClick={turnOff}>
          <Button>Sign up</Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
