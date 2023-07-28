import React, { useEffect, useRef, useState } from "react";
import pod from "../../../public/pods.png";
import aspireCyber from "../../assets/vape/aspire-cyber-s-kit-green-pod-vape-kit_1.jpg";
import geekVape from "../../assets/vape/geekvape-sonder-q-red-blue-pod-kit_1.jpg";
import innokinBlue from "../../assets/vape/innokin_endura_apex_blue_vape_kit_1.jpg";
import innokinSilver from "../../assets/vape/innokin-endura-s1-kit-silver-cerulean.jpg";
import innokinRed from "../../assets/vape/innokin-ezwatt-vape-kit-red_1.jpg";
import lostVape from "../../assets/vape/lost-vape-ursa-nano-pro-antarctica-g-vape-kit_1.jpg";
import RowsCard from "../RowsCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "./row.css";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsStarFill } from "react-icons/bs";

const Rows = () => {
  const sliderRef = useRef();
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Function to update slidesPerView based on the window width
  const updateSlidesPerView = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      setSlidesPerView(1);
    } else if (screenWidth >= 640 && screenWidth < 768) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(5);
    }
  };

  useEffect(() => {
    updateSlidesPerView(); // Initial setting based on window width
    window.addEventListener("resize", updateSlidesPerView);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const vapes = [
    {
      id: 1,
      img: aspireCyber,
    },
    {
      id: 2,
      img: geekVape,
    },
    {
      id: 3,
      img: innokinBlue,
    },
    {
      id: 4,
      img: innokinSilver,
    },
    {
      id: 5,
      img: innokinRed,
    },
    {
      id: 6,
      img: lostVape,
    },
    {
      id: 7,
      img: innokinSilver,
    },
    {
      id: 8,
      img: innokinRed,
    },
    {
      id: 9,
      img: lostVape,
    },
  ];
  return (
    <div className=" relative max-w-[1215px] mx-auto">
      <div
        onClick={() => sliderRef.current?.slideNext()}
        className="absolute top-[30%] right-3 z-10 cursor-pointer backdrop-blur-[2px] bg-black/70 text-white w-12 h-40 rounded-lg flex items-center justify-center"
      >
        <FaArrowRightLong size={20} />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center overflow-hidden gap-5 md:justify-between col-span-12 md:col-span-6 lg:col-span-3 h-[400px] bg-black/90 rounded-xl bg-gradient-to-l from-gray-800 via-gray-700 to-gray-600  ">
        <div className=" flex items-center ml-10 z-10">
          <img src={pod} className="h-40" alt="" />
          <div className="flex flex-col items-start">
            <h4 className=" text-[14px] md:text-[36px] font-bold text-white">
              Devices
            </h4>
            <p className="text-white mb-2">Find the best for you here!</p>
          </div>
        </div>

        <div className="w-full flex justify-center ml-28 gap-3">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={(it) => (sliderRef.current = it)}
            slidesPerView={slidesPerView}
            cssMode={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {vapes.map((item) => (
              <SwiperSlide key={item.id}>
                <RowsCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Rows;
