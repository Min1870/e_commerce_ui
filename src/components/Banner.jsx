import { useRef } from "react";
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
      img: "https://images.unsplash.com/photo-1524653736724-8490ee06859d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1616065787198-a41b9ab94ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmFwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/1074669778/photo/woman-vaping-an-electronic-cigarette.webp?b=1&s=170667a&w=0&k=20&c=ovD8YXFUjFsgFyhxqoXjv4lt8eRQq5T7-RRYkiHi0I0=",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1530031904810-67295401958c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },

    {
      id: 5,
      img: "https://images.unsplash.com/photo-1553273058-03f8445d9f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmFwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1566645561206-a5586419fb5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZhcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1513656967094-e96936e02fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YSUyMGdpcmwlMjB2YXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
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
          <SwiperSlide>
            <div key={infos.id} className="w-full h-full">
              <img
                className="w-full h-[690px] object-cover"
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
        className=" absolute top-[40%] left-4 z-10 cursor-pointer backdrop-blur-[2px] bg-white/30 text-white w-12 h-40 rounded-lg flex items-center justify-center"
      >
        <MdArrowBackIosNew />
      </div>
      <div
        onClick={() => sliderRef.current?.slideNext()}
        className="absolute top-[40%] right-4 z-10 cursor-pointer backdrop-blur-[2px] bg-white/30 text-white w-12 h-40 rounded-lg flex items-center justify-center"
      >
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default Banner;
