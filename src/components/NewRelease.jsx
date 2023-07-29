import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import newRelease3 from "../assets/newRelease3.jpg";
import newRelease4 from "../assets/newRelease4.jpg";

const NewRelease = () => {
  return (
    <div className=" max-w-[1215px] mx-auto ">
      <div className="mb-10">
        <h1 className=" font-bold text-[38px] text-center ">
          <span className=" text-red-600">New</span> Released
        </h1>
        <p className=" font-normal text-[16px] text-center">
          Try Our Latest Flavors Here
        </p>
      </div>
      <div className="px-5 md:px-0 grid grid-cols-12 gap-3 grid-rows-1">
        <div className="relative col-span-12 md:col-span-6 lg:col-span-3 h-[200px] bg-black rounded-xl bg-newRelease3 bg-no-repeat bg-bottom md:bg-cover">
          <h4 className=" text-[14px] md:text-[16px] text-white md:max-w-[40%] left-5 bottom-3 absolute">
            Citrus Mon 20,0000 Pul Disposable 3 Percent 30,000MMK
          </h4>
        </div>
        <div className=" relative col-span-12 md:col-span-6 lg:col-span-3 h-[200px] bg-black rounded-xl bg-newRelease4 bg-no-repeat bg-bottom md:bg-cover">
          <h4 className="text-[14px] md:text-[16px] text-white md:max-w-[40%] left-5 bottom-3 absolute">
            Strawberry Yogurt with Refreshing Flavour Nic 3 Percent 30,000MMK
          </h4>
        </div>
        <div className=" relative col-span-12 md:col-span-6 lg:col-span-3 h-[200px] bg-black rounded-xl bg-newRelease3 bg-no-repeat bg-bottom md:bg-cover">
          <h4 className="text-[14px] md:text-[16px] text-white md:max-w-[40%] left-5 bottom-3 absolute">
            Strawberry Yogurt with Refreshing Flavour Nic 3 Percent 30,000MMK
          </h4>
        </div>
        <div className=" relative col-span-12 md:col-span-6 lg:col-span-3 h-[200px] bg-black rounded-xl bg-newRelease4 bg-no-repeat bg-bottom md:bg-cover">
          <h4 className="text-[14px] md:text-[16px] text-white md:max-w-[40%] left-5 bottom-3 absolute">
            Strawberry Yogurt with Refreshing Flavour Nic 3 Percent 30,000MMK
          </h4>
        </div>
      </div>
      <div className="mt-10">
        <button className="bg-gray-200 px-20 py-2 rounded-full flex items-center gap-1 mx-auto  transition-all duration-200 hover:bg-gray-200/80">
          View More <MdArrowForwardIos size={14} />
        </button>
      </div>
    </div>
  );
};

export default NewRelease;
