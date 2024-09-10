import React from "react";
import NavbarItem from "./navbar/NavbarItem";
import SearchBar from "./navbar/SearchBar";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 navbarFont">
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
              <NavbarItem />
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">LazyList</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavbarItem />
          </ul>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="mr-10">
          <button className="px-4 py-1 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-zinc-600 mx-1 ">
            <Link href="/login">Login</Link>
          </button>
          <button className="px-4 py-1 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-zinc-600 mx-1">
            <p>Register</p>
          </button>
        </div>
      </div>
    </div>
  );
}
