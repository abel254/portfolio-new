/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-navcolor to-navright to-10%">
      <nav className="flex justify-between items-center mx-16">
        <div>
          <h1 className="py-4">
            <a href="#" className="font-bold font-montserrat-800 text-3xl text-white">
              abel<span className="font-normal">muema.</span>
            </a>
          </h1>
        </div>
        <ul className="flex">
          <li className="ml-1 font-semibold text-white">
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li className="ml-6 font-semibold text-white">
            <a href="#">
              <span>Skills</span>
            </a>
          </li>
          <li  className="ml-6 font-semibold text-white">
            <a href="#">
              <span>Projects</span>
            </a>
          </li>
          <li  className="ml-6 font-semibold text-white">
           <a href="#" className="border-white border px-2 py-1.5 rounded">Let's Connect</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
