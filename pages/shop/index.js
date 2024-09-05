import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/layout/productCard";
import Button from "@/layout/button";

const Shop = () => {
  

  return (
    <div className="lg:w-full flex flex-col ">
      <div id="collection" className="lg:h-[100vh] lg:w-full lg:pt-10">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row pt-10 m-auto ml-6">
            <ProductCard>
              <div className="h-[200px] overflow-hidden">
                <img
                  src="/dcloth.jpg"
                  className="h-[200px] w-full transition-all hover:scale-[1.1]"
                />
              </div>

              <div className="flex justify-between pt-6 mb-4 font-medium">
                <span className="pl-1">Roundnecks</span>
                <span className="pr-1">Price: #5000</span>
              </div>

              <Button>Buy</Button>
            </ProductCard>

            <ProductCard>
              <div className="h-[200px] overflow-hidden">
                <img
                  src="/dclothh.jpg"
                  className="h-[200px] w-full transition-all hover:scale-[1.1]"
                />
              </div>

              <div className="flex justify-between pt-6 mb-4 font-medium">
                <span className="pl-1">Roundnecks </span>
                <span className="pr-1">Price: #5000</span>
              </div>

              <Button>Buy</Button>
            </ProductCard>

            <ProductCard>
              <div className="h-[200px] overflow-hidden">
                <img
                  src="/dcloth.jpg"
                  className="h-[200px] w-full transition-all hover:scale-[1.1]"
                />
              </div>

              <div className="flex justify-between pt-6 mb-4 font-medium">
                <span className="pl-1">Roundnecks </span>
                <span className="pr-1">Price: #5000</span>
              </div>

              <Button>Buy</Button>
            </ProductCard>

            <ProductCard>
              <div className="h-[200px] overflow-hidden">
                <img
                  src="/dclothh.jpg"
                  className="h-[200px] w-full transition-all hover:scale-[1.1]"
                />
              </div>

              <div className="flex justify-between pt-6 mb-4 font-medium">
                <span className="pl-1">Roundnecks </span>
                <span className="pr-1">Price: #5000</span>
              </div>

              <Button>Buy</Button>
            </ProductCard>

            <ProductCard>
              <div className="h-[200px] overflow-hidden">
                <img
                  src="/dcloth.jpg"
                  className="h-[200px] w-full transition-all hover:scale-[1.1]"
                />
              </div>

              <div className="flex justify-between pt-6 mb-4 font-medium">
                <span className="pl-1">Roundnecks </span>
                <span className="pr-1">Price: #5000</span>
              </div>

              <Button>Buy</Button>
            </ProductCard>
          </div>

          <div className="flex flex-col lg:flex-row pt-10 m-auto ml-6">
            <ProductCard>
              <div className="h-[200px] overflow-hidden">
                <img
                  src="/dcloth.jpg"
                  className="h-[200px] w-full transition-all hover:scale-[1.1]"
                />
              </div>

              <div className="flex justify-between pt-6 mb-4 font-medium">
                <span className="pl-1">Roundnecks</span>
                <span className="pr-1">Price: #5000</span>
              </div>

              <Button>Buy</Button>
            </ProductCard>

            <ProductCard>
              <div className="h-[200px] overflow-hidden">
                <img
                  src="/dclothh.jpg"
                  className="h-[200px] w-full transition-all hover:scale-[1.1]"
                />
              </div>

              <div className="flex justify-between pt-6 mb-4 font-medium">
                <span className="pl-1">Roundnecks </span>
                <span className="pr-1">Price: #5000</span>
              </div>

              <Button>Buy</Button>
            </ProductCard>

            <ProductCard>
              <div className="h-[200px] overflow-hidden">
                <img
                  src="/dcloth.jpg"
                  className="h-[200px] w-full transition-all hover:scale-[1.1]"
                />
              </div>

              <div className="flex justify-between pt-6 mb-4 font-medium">
                <span className="pl-1">Roundnecks </span>
                <span className="pr-1">Price: #5000</span>
              </div>

              <Button>Buy</Button>
            </ProductCard>

            <ProductCard>
              <div className="h-[200px] overflow-hidden">
                <img
                  src="/dclothh.jpg"
                  className="h-[200px] w-full transition-all hover:scale-[1.1]"
                />
              </div>

              <div className="flex justify-between pt-6 mb-4 font-medium">
                <span className="pl-1">Roundnecks </span>
                <span className="pr-1">Price: #5000</span>
              </div>

              <Button>Buy</Button>
            </ProductCard>

            <ProductCard>
              <div className="h-[200px] overflow-hidden">
                <img
                  src="/dcloth.jpg"
                  className="h-[200px] w-full transition-all hover:scale-[1.1]"
                />
              </div>

              <div className="flex justify-between pt-6 mb-4 font-medium">
                <span className="pl-1">Roundnecks </span>
                <span className="pr-1">Price: #5000</span>
              </div>

              <Button>Buy</Button>
            </ProductCard>
          </div>
        </div>
      </div>

      <div id="contact" className="lg:relative lg:w-full lg:h-[70vh] h-[80vh] ">
        <form className="flex flex-col bg-[#F2EDE4] mt-20 lg:w-[900px] lg:h-[350px] lg:ml-20 lg:rounded-xl">
          <div className="bg-white h-10 ml-2 lg:w-[555px] lg:h-10 lg:ml-6 mt-3 flex">
            <label
              htmlFor="name"
              className="pt-1 pr-2 pl-1 font-medium text-xl"
            >
              Name:{" "}
            </label>
            <input
              id="name"
              type="text"
              className="bg-[#592B20] w-[290px] lg:w-[490px] text-white font-normal pl-2"
            />
          </div>

          <div className="bg-white h-10 ml-2 lg:w-[555px] lg:h-10 lg:ml-6 mt-3 flex">
            <label
              htmlFor="email"
              className="pt-1 pr-3 pl-1 font-medium text-xl"
            >
              Email:{" "}
            </label>
            <input
              id="name"
              type="email"
              className="bg-[#592B20] w-[290px] lg:w-[490px] text-white font-normal pl-2"
            />
          </div>

          <div className="mt-6 flex ml-2 lg:ml-6">
            <label htmlFor="text" className="font-medium text-xl">
              Message:{" "}
            </label>
            <textarea
              id="text"
              rows={7}
              className="lg:w-[500px] w-[275px] bg-[#592B20] text-white pl-2"
            />
          </div>

          <div className="text-center mt-3">
            <Button>Send</Button>
          </div>
        </form>

        <img
          src="/dcloth.jpg"
          className="hidden lg:flex lg:w-[450px] lg:h-[350px] lg:absolute lg:top-0 lg:right-6 lg:mt-20"
        />
      </div>

      <footer className="flex justify-between bg-[#592B20] w-full h-8 text-white font-semibold">
        <div className="pl-2">Lautech Fashion</div>
        <div>2023/2024 project</div>
        <div className="pr-2">Iyanuoluwa</div>
      </footer>
    </div>
  );
};

export default Shop;
