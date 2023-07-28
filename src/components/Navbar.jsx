import React from "react";
import { BsCart, BsSearch } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import Banner from "./Banner";

const Navbar = () => {
  return (
    <header className="relative">
      <div className="">
        <Banner />
      </div>
      <nav className=" max-w-[1215px] mx-auto absolute top-0 right-0 left-0 w-full h-16 flex items-center justify-between px-4 z-10">
        <div className=" text-white">Logo</div>
        <div className="flex items-center gap-5">
          <BsSearch className="text-white text-xl" />
          <BsCart className="text-white text-xl" />
          <HiBars3 className="text-white text-xl" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
