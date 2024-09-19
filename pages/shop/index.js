import React, { useState } from "react";
import fs from "fs";
import path from "path";
import Product from "layout/Product";
import { useCart } from "../../component/context/CartContext";
import Button from "layout/button";

export async function getStaticProps() {
  const filepath = path.join(process.cwd(), "data", "product.json");
  const jsonData = fs.readFileSync(filepath, "utf8");
  const products = JSON.parse(jsonData);

  const filepathi = path.join(process.cwd(), "data", "productii.json");
  const jsonDatai = fs.readFileSync(filepathi, "utf8");
  const productii = JSON.parse(jsonDatai);

  return {
    props: {
      products,
      productii,
    },
  };
}

const Shop = ({ products, productii }) => {
  const { addToCart } = useCart();

  const handleProductButtonClick = (productDetails) => {
    addToCart(productDetails);
  };

  return (
    <div className="shop lg:w-full flex flex-col ">
      <div id="collection" className="lg:h-[100vh] lg:w-full lg:pt-10">
        <div className="w-full text-center">
          <div className="flex flex-col lg:flex-row pt-10 m-auto ml-6 overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:mt-10">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onButtonClick={handleProductButtonClick}
                />
              ))}
            </div>

            <div className="flex flex-col lg:absolute lg:top-[500px] lg:flex-row">
              {productii.map((producti) => (
                <Product
                  key={producti.id}
                  product={producti}
                  onButtonClick={handleProductButtonClick}
                />
              ))}
            </div>
          </div>

          {/* <div className="hidden">
            <Cart cartItems={cart} />
          </div> */}
        </div>
      </div>

      <div
        id="contact"
        className="lg:relative lg:w-full lg:h-[70vh] h-[80vh] lg:mt-32"
      >
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

      <footer className="flex justify-between bg-[#592B20] w-full h-12 text-white font-semibold">
        <div className="pl-2">Lautech Fashion Store</div>
        <div className="pl-8">2024 , Ajimoti Victoria Iyanu</div>
        <div className="pr-2 pt-3">194853</div>
      </footer>
    </div>
  );
};

export default Shop;
