import { useRef } from "react";
import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpg";
import banner3 from "../assets/banner/banner3.jpg";
import banner4 from "../assets/banner/banner4.jpg";
import banner5 from "../assets/banner/banner5.jpg";
import banner6 from "../assets/banner/banner6.jpg";
import banner7 from "../assets/banner/banner7.jpg";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banner.css";

const Banner = () => {
  
  const sliderRef = useRef();

  const bannerInfos = [
    {
      id: 1,
      img: banner1,
    },
    {
      id: 2,
      img: banner2
    },
    {
      id: 3,
      img: banner3
    },
    {
      id: 4,
      img: banner4
    },

    {
      id: 5,
      img: banner5
    },
    {
      id: 6,
      img: banner6
    },
    {
      id: 7,
      img: banner7
    },
  ];

  return (
    <div className="w-full text-white">
      <Swiper
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#000",
        }}
        onSwiper={(it) => (sliderRef.current = it)}
        modules={[Pagination, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {bannerInfos.map((infos) => (
          <SwiperSlide key={infos.id}>
            <div className="w-full h-[700px]">
              <img
                className="w-full h-full object-cover"
                src={infos.img}
                alt=""
              />
              <div className=" flex flex-col space-y-4 absolute w-full top-[60%] items-center justify-center">
                <h2 className=" text-[24px] font-normal">The Best Look</h2>
                <p className="  w-full text-gray-200 font-semibold text-5xl text-center">
                  Anytime Anywhere
                </p>
                <p>Starts from 10,000 MMK</p>
                <button className=" bg-gray-300/40 px-5 py-2 rounded-full text-white">
                  {" "}
                  View
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        onClick={() => sliderRef.current?.slidePrev()}
        className=" absolute top-[40%] left-4 z-10 cursor-pointer backdrop-blur-[2px] bg-black/60 text-white w-8 h-20 md:w-12 md:h-40 rounded-lg flex items-center justify-center"
      >
        <MdArrowBackIosNew />
      </div>
      <div
        onClick={() => sliderRef.current?.slideNext()}
        className="absolute top-[40%] right-4 z-10 cursor-pointer backdrop-blur-[2px] bg-black/60 text-white w-8 h-20 md:w-12 md:h-40 rounded-lg flex items-center justify-center"
      >
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default Banner;
