import Button from "@/layout/button";
import FormCard from "@/layout/formCard";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/context/UserContext";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter()
  const { setUser} = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Send login request to the API
    const res = await fetch("/api/UserLogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(data.message); // Login successful message
      router.push('/')
      setUser(data.user)
    } else {
      setMessage(data.message); // Error message
    }
  };

  

  return (
    <div className="pt-32 pl-6 text-center w-full h-[99.9vh]">
      <h1 className="text-3xl font-bold uppercase text-center pr-6 underline text-[#592B20]">
        Login
      </h1>

      <div className="lg:mt-10 lg:w-full lg:text-center flex lg:justify-center">
        <FormCard>
          <form onSubmit={handleLogin}>
            <div className="flex mt-6 mb-6 lg:pl-6 lg:pt-10">
              <label htmlFor="name" className="text-xl font-medium pr-2">
                Email:
              </label>
              <input
                id="name"
                type="email"
                className="w-[250px] bg-[#592B20] lg:w-[450px] pl-2"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex lg:pl-6">
              <label className="font-medium text-xl pr-2">Password:</label>
              <input
                id="password"
                type="password"
                className="w-[218px] bg-[#592B20] pl-2 lg:w-[420px]"
                onChange={(e) => setPassword(e.target.value)}
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
        </FormCard>
      </div>

      <div>
        {message && <p className="text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default index;
