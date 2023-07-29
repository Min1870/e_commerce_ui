import React, { useState } from "react";
import { BsCart, BsSearch } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import Banner from "./Banner";
// import "./navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative">
      <div className="">
        <Banner />
      </div>
      <nav className=" max-w-[1215px] mx-auto z-[51] absolute top-0 right-0 left-0 w-full h-16 flex items-center justify-between px-4 z-10">
        <div className=" text-white">Logo</div>
        <div className="flex items-center gap-5 ">
          <BsSearch className="text-white text-xl" />
          <BsCart className="text-white text-xl" />
          <HiBars3
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-xl"
          />
        </div>
      </nav>
      <div
        className={`${
          menuOpen
            ? "translate-y-0 top-[70px]  shadow-2xl"
            : "-translate-y-full top-0"
        } bg-white text-black z-[50] lg:hidden h-fit w-full absolute py-8 px-5 left-0 transition-all duration-500`}
      >
        <ul className="nav-a flex flex-col gap-10 ">
          <li>
            <a
              to="home"
              onClick={() => setMenuOpen(!menuOpen)}
              className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              to="about"
              onClick={() => setMenuOpen(!menuOpen)}
              className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              to="services"
              onClick={() => setMenuOpen(!menuOpen)}
              className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
            >
              Services
            </a>
          </li>
          <li>
            <a
              to="projects"
              onClick={() => setMenuOpen(!menuOpen)}
              className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
