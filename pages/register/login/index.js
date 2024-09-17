// import FormCard from "@/layout/formCard";
import Link from "next/link";
import React from "react";

const index = () => {
  

  return (
    <div className="pt-32 pl-6 text-center w-full h-[99.9vh]">
      <h1 className="text-3xl font-bold uppercase text-center pr-6 underline text-[#592B20]">
        Login
      </h1>

      <div className="lg:mt-10 lg:w-full lg:text-center flex lg:justify-center">
        <div className="flex w-[350px] ml-[-10px] pl-5 mt-9 lg:mt-0 flex-col text-center overflow-hidden lg:w-[550px] lg:h-[350px] rounded-lg bg-[#f2ede4] lg:ml-10">
          <form>
            <div className="flex mt-6 mb-6 lg:pl-6 lg:pt-10">
              <label htmlFor="name" className="text-xl font-medium pr-2">
                Email:
              </label>
              <input
                id="name"
                type="email"
                className="w-[250px] bg-[#592B20] lg:w-[450px] pl-2"
                required
              />
            </div>

            <div className="flex lg:pl-6">
              <label className="font-medium text-xl pr-2">Password:</label>
              <input
                id="password"
                type="password"
                className="w-[218px] bg-[#592B20] pl-2 lg:w-[420px]"
                required
              />
            </div>

            <div className="mt-20 lg:mt-16">
              <button>Login</button>
            </div>

            <div className="mt-6">
              You don't have an account?{" "}
              <Link
                href={"/register/signup"}
                className="underline text-[#592B20]"
              >
                signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
