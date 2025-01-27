"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const session = useSession();
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item) => (
                <Link
                  className="font-semibold hover:text-primary duration-6"
                  key={item.path}
                  href={item.path}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className="btn btn-ghost text-xl">
            <Link href={"/"}>
              <Image
                src="/assets/logo.svg"
                alt="logo"
                height={60}
                width={60}
              ></Image>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6 px-1">
            {navItems.map((item) => (
              <Link
                className="font-semibold hover:text-primary duration-6"
                key={item.path}
                href={item.path}
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex space-x-3 items-center">
            <FaShoppingCart />
            <FaSearch />

            {!session.data ? (
              <Link href="/login" className="btn btn-primary btn-outline px-8">
                Login
              </Link>
            ) : (
              <button
                onClick={() => signOut()}
                className="btn btn-primary btn-outline px-8"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
