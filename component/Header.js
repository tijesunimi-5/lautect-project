import Button from "../layout/button";
import Link from "next/link";
import React from "react";
import { FaBars, FaMinusCircle } from "react-icons/fa";

const Header = () => {
  

  const menu = () => {
    const dashboard = document.querySelector(".dashboard");
    const shop = document.querySelector(".shop");
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.close');

    dashboard.style.display = "block";
    menu.style.display = 'none';
    close.style.display = 'block'
    shop.style.display = "none";
  };

  const close = () => {
    const menu = document.querySelector('.menu')
    const dashboard = document.querySelector('.dashboard')
    const shop = document.querySelector(".shop");
    const close = document.querySelector('.close')

    menu.style.display = 'block';
    close.style.display = 'none'
    dashboard.style.display = 'none'
    shop.style.display = 'block'
  }

  const logo = () => {
    const dashboard = document.querySelector(".dashboard");
    const close = document.querySelector('.close');
    const menu = document.querySelector('.menu')

    dashboard.style.display = "none";
    close.style.display = 'none';
    menu.style.display = 'block'
  };
  return (
    <header className="fixed w-full h-12 right-0 left-0 top-0 bg-[#F2EDE4] lg:h-12 z-40 border-b border-[#592B20]">
      <div className="flex justify-between mt-1">
        <div className="header flex justify-center cursor-pointer text-2xl font-bold ml-2 lg:ml-36 lg:text-3xl lg:font-bold lg:mt-1">
          <FaBars className="menu flex pt-1 mt-1 lg:hidden" onClick={menu} />
          <FaMinusCircle className="close hidden pt-1 mt-1 lg:hidden" onClick={close} />
          <Link href={"/"} onClick={logo}>
            Lautech Fashion
          </Link>
        </div>

        <div className="nav hidden lg:flex lg:pt-2">
          <ul className="flex flex-row text-xl font-medium">
            <li className="lg:mr-10">
              <Link href="/shop#collection">Collection</Link>
            </li>
            <li className="lg:mr-10">
              <Link href="/shop#contact">Contact Us</Link>
            </li>
            <li>
              <Link href={"/cart"}>Cart</Link>
            </li>
          </ul>
        </div>

        <div className="lg:mr-16  lg:mt-1 mr-1 flex">
          <Button>
            <Link href={"/shop"} className="">
              Shop Now
            </Link>
          </Button>

          <div className="hidden lg:flex ml-6">
            <Link href={"/register/signup"}>
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
