import Button from "@/layout/button";
import Link from "next/link";
import React from "react";

const Header = () => {
  // const header = () => {
  //   const nav = document.querySelector(".nav");

  //   nav.style.display = "none";
  // };
  // const navOn = () => {
  //   const nav = document.querySelector(".nav");

  //   nav.style.display = "block";
  // };
  return (
    <header className="fixed w-full h-12 right-0 left-0 top-0 bg-[#F2EDE4] lg:h-12 z-20 border-b border-[#592B20]">
      <div className="flex justify-between mt-1">
        <div
          
          className="header  cursor-pointer text-2xl font-bold ml-2 lg:ml-36 lg:text-3xl lg:font-bold lg:mt-1"
        >
          <Link href={"/"}>Lautech Fashion</Link>
        </div>

        <div className="nav hidden lg:flex lg:pt-2">
          <ul className="flex flex-row text-xl font-medium">
            <li className="lg:mr-10">
              <a href="#collection">Collection</a>
            </li>
            <li className="lg:mr-10">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="lg:mr-16  lg:mt-1 mr-1 ">
          <Button>
            <Link href={"/shop"}  className="">
              Shop Now
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
