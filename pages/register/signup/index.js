// import FormCard from "layout/formCard";
import Link from "next/link";
import React, { useRef } from "react";

const index = () => {
  return (
    <div className="pt-32 pl-6 text-center w-full h-[99.9vh] lg:w-full">
      <h1 className="text-3xl font-bold uppercase text-center pr-6 underline text-[#592B20]">
        Sign up
      </h1>

      <div className="lg:w-full lg:text-center lg:flex lg:justify-center lg:mt-10">
        <div className="flex w-[350px] ml-[-10px] pl-4 mt-9 lg:mt-0 flex-col text-center overflow-hidden lg:w-[550px] lg:h-[350px] rounded-lg bg-[#f2ede4] lg:ml-10">
          <form className="w-full h-full">
            <div className="flex mt-6 mb-6 lg:pl-6">
              <label htmlFor="name" className="text-xl font-medium pr-2">
                Name:
              </label>
              <input
                id="name"
                type="text"
                className="w-[250px] bg-[#592B20] lg:w-[450px]"
                required
              />
            </div>

            <div className="flex mb-8 lg:pl-6">
              <label className="font-medium text-xl pr-3" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                type="email"
                className="w-[250px] bg-[#592B20] lg:w-[450px]"
                required
              />
            </div>

            <div className="flex lg:pl-6">
              <label htmlFor="password" className="font-medium text-xl pr-2">
                Password:
              </label>
              <input
                id="password"
                type="password"
                className="w-[218px] bg-[#592B20] lg:w-[419px]"
                required
              />
            </div>

            <div className="mt-20">
              <button className="bg-[#592B20] text-white pr-4 pl-4 h-9 pt-1 rounded-md font-medium">
                Sign-up
              </button>
            </div>

            <div className="mt-6">
              Do you have an account already?{" "}
              <Link
                href={"/register/login"}
                className="underline text-[#592B20]"
              >
                login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
