import Button from "@/layout/button";
import FormCard from "@/layout/formCard";
import Link from "next/link";
import React from "react";
import { useRef, useState } from "react";

const index = () => {
  const [success, setSuccess] = useState(false);

  const handleAction = () => {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const reqBody = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    };

    fetch("/api/userSignupDetail", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="pt-32 pl-6 text-center w-full h-[99.9vh] lg:w-full">
      <h1 className="text-3xl font-bold uppercase text-center pr-6 underline text-[#592B20]">
        Sign up
      </h1>

      <div className="lg:w-full lg:text-center lg:flex lg:justify-center lg:mt-10">
        <FormCard>
          <form onClick={submitFormHandler} className="w-full h-full">
            <div className="flex mt-6 mb-6 lg:pl-6">
              <label htmlFor="name" className="text-xl font-medium pr-2">
                Name:
              </label>
              <input
                id="name"
                type="text"
                className="w-[250px] bg-[#592B20] lg:w-[450px]"
                ref={nameInputRef}
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
                ref={emailInputRef}
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
                ref={passwordInputRef}
                required
              />
            </div>

            <div className="mt-20">
              <button
                className="bg-[#592B20] text-white pr-4 pl-4 h-9 pt-1 rounded-md font-medium"
                onClick={handleAction}
              >
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
        </FormCard>
      </div>

      <div className="w-full text-center">
        {success && <p className= "text-[#592B20 mt-10]">Account Created</p>}
      </div>
    </div>
  );
};

export default index;
