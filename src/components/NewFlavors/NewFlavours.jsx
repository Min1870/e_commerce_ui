import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import "./styles.css";

const NewFlavours = () => {
  const sliderRef = useRef();

  return (
    <div className=" relative max-w-[1215px] mx-auto">
      <div
        onClick={() => sliderRef.current?.slidePrev()}
        className="absolute top-[25%] -left-32 z-10 cursor-pointer backdrop-blur-[2px] bg-white/30 text-white w-12 h-40 rounded-lg flex items-center justify-center"
      >
        <MdArrowBackIosNew />
      </div>
      <div
        onClick={() => sliderRef.current?.slideNext()}
        className="absolute top-[25%] -right-32 z-10 cursor-pointer backdrop-blur-[2px] bg-white/30 text-white w-12 h-40 rounded-lg flex items-center justify-center"
      >
        <MdArrowForwardIos />
      </div>
      <Swiper
        onSwiper={(it) => (sliderRef.current = it)}
        slidesPerView={"auto"}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper px-5 lg:px-0"
      >
        <SwiperSlide>
          <div className="w-full bg-gradient-to-l from-gray-200 ">
            <div className="w-full flex items-center justify-center md:justify-end col-span-12 md:col-span-6 lg:col-span-3 h-[300px] bg-black/90 rounded-xl bg-newFlavours bg-no-repeat bg-left ">
              <div className="flex flex-col items-center mr-[150px] text-center">
                <h4 className=" text-[14px] md:text-[36px] font-bold text-white">
                  Try New Flavours
                </h4>
                <p className="text-white md:max-w-[50%] mb-2">Cirtus Monster</p>
                <button className=" bg-gray-300/40 px-5 py-2 rounded-full text-white">
                  {" "}
                  View
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-gradient-to-l from-gray-200 ">
            <div className="w-full flex items-center justify-center md:justify-end col-span-12 md:col-span-6 lg:col-span-3 h-[300px] bg-black/90 rounded-xl bg-newFlavours bg-no-repeat bg-left ">
              <div className="flex flex-col items-center mr-[150px] text-center">
                <h4 className=" text-[14px] md:text-[36px] font-bold text-white">
                  Try New Flavours
                </h4>
                <p className="text-white md:max-w-[50%] mb-2">Cirtus Monster</p>
                <button className=" bg-gray-300/40 px-5 py-2 rounded-full text-white">
                  {" "}
                  View
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-gradient-to-l from-gray-200 ">
            <div className="w-full flex items-center justify-center md:justify-end col-span-12 md:col-span-6 lg:col-span-3 h-[300px] bg-black/90 rounded-xl bg-vape bg-no-repeat bg-left ">
              <div className="flex flex-col items-center mr-[150px] text-center">
                <h4 className=" text-[14px] md:text-[36px] font-bold text-white">
                  Try New Flavours
                </h4>
                <p className="text-white md:max-w-[50%] mb-2">Cirtus Monster</p>
                <button className=" bg-gray-300/40 px-5 py-2 rounded-full text-white">
                  {" "}
                  View
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-gradient-to-l from-gray-200 ">
            <div className="w-full flex items-center justify-center md:justify-end col-span-12 md:col-span-6 lg:col-span-3 h-[300px] bg-black/90 rounded-xl bg-vape bg-no-repeat bg-left ">
              <div className="flex flex-col items-center mr-[150px] text-center">
                <h4 className=" text-[14px] md:text-[36px] font-bold text-white">
                  Try New Flavours
                </h4>
                <p className="text-white md:max-w-[50%] mb-2">Cirtus Monster</p>
                <button className=" bg-gray-300/40 px-5 py-2 rounded-full text-white">
                  {" "}
                  View
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewFlavours;
