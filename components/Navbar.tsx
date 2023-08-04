"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-navcolor to-navright to-10% relative">
      <nav className="pr:flex justify-between items-center mx-16">
        <div className="flex justify-between items-center">
          <h1 className="py-4">
            <a
              href="#"
              className="font-bold font-montserrat-800 text-3xl text-white"
            >
              abel<span className="font-normal">muema.</span>
            </a>
          </h1>
          <div className="pr:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <ul
          className={`pr:flex ${
            isMenuOpen ? "" : "hidden"
          } pr:static absolute top-0 left-0 pr:h-auto pr:w-auto h-screen w-screen z-30 pr:bg-transparent bg-white`}
        >
          <li className="mt-12 pr:mt-0  ml-6 font-semibold pr:text-white">
            <a
              href="#"
              className="hover:border-b-2 transition ease-linear duration-300"
            >
              <span>Home</span>
            </a>
          </li>
          <li className="mt-1.5 pr:mt-0 ml-6 font-semibold pr:text-white">
            <a
              href="#"
              className="hover:border-b-2 transition ease-linear duration-300"
            >
              <span>Skills</span>
            </a>
          </li>
          <li className="mt-1.5 pr:mt-0 ml-6 font-semibold pr:text-white">
            <a
              href="#"
              className="hover:border-b-2 transition ease-linear duration-300"
            >
              <span>Projects</span>
            </a>
          </li>
          <li
            className={`mt-1 pr:mt-0 ml-6 font-semibold pr:text-white hidden pr:block`}
          >
            <a
              href="#"
              className="border-white border px-3 py-2.5 rounded hover:bg-hcolor hover:border-hcolor transition ease-linear duration-200"
            >
              Let's Connect
            </a>
          </li>
          <div className="pr:hidden absolute right-20 top-6" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
