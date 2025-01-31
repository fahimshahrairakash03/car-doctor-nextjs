"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignupPage = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const res = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
    if (res) {
      e.target.reset();
    }
  };
  return (
    <div>
      <div className="container px-24 mx-auto py-24">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <Image
              alt="login image"
              src="/assets/images/login/login.svg"
              height={440}
              width={440}
            />
          </div>
          <div className="borde-2 p-12">
            <h6 className="text-3xl text-center mb-10 font-semibold">Signup</h6>
            <form onSubmit={handleSignUp}>
              <label className="" htmlFor="email">
                Name
              </label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input mt-3 input-bordered w-full "
              />
              <br />
              <label className="" htmlFor="email">
                Email
              </label>
              <br />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="input mt-3 input-bordered w-full "
              />
              <br />
              <label className="" htmlFor="email">
                Password
              </label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input mt-3 input-bordered w-full "
              />
              <br />
              <button type="submit" className="btn btn-primary w-full mt-5">
                SignUp
              </button>
            </form>

            <div className="mt-10">
              <h6 className="text-xl text-center">Signin With</h6>
              <div className="flex justify-center space-x-4">
                <button className="text-2xl text-green-700">
                  {" "}
                  <FaGoogle />
                </button>
                <button className="text-2xl">
                  {" "}
                  <FaGithub />
                </button>
              </div>
              <h6 className="text-2xl mt-5 text-center mb-10 font-semibold">
                Already Have Account?{" "}
                <Link className="text-primary " href="/signup">
                  SignIn
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
