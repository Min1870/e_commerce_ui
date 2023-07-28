import diamond from "../assets/diamond.svg";
import gold from "../assets/gold.svg";
import coin from "../assets/coin.svg";
import device from "../../public/device.png";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Programs = () => {
  return (
    <div className=" max-w-[1215px] mx-auto">
      <div className=" px-5 lg:px-0 grid grid-cols-12 grid-rows-4 sm:grid-rows-2 gap-2">
        <div className="bg-black h-full md:row-span-2 md:col-span-8 row-span-1 col-span-12 rounded-xl overflow-hidden md:bg-program bg-no-repeat md:bg-right   ">
          <div className=" p-10">
            <div className="flex items-center gap-5 mb-10">
              <img src={diamond} className=" h-14 md:h-20" alt="" />
              <img src={gold} className="h-14 md:h-20" alt="" />
              <img src={coin} className="h-14 md:h-20" alt="" />
            </div>
            <div className="">
              <h1 className=" text-white text-[30px]">Membership Program</h1>
              <p className=" text-gray-300 mb-5 max-w-[40%]">
                Be a Vape Pi member and get our special exclusive offers
              </p>
              <button className=" px-6 py-2 bg-black border text-white rounded-full">
                View
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black col-span-12 sm:col-span-6  md:row-span-2 md:col-span-2 rounded-xl overflow-hidden">
          <div className=" px-0 pt-10">
            <img src={device} className="" alt="" />
          </div>
          <div className="flex px-3 items-start justify-between backdrop-blur-md bg-white/10 pt-8 pb-6">
            <div>
              <h3 className=" text-white text-[18px]">Devices</h3>
              <p className="text-gray-300 text-[12px] max-w-[80%]">
                Find the best for you here
              </p>
            </div>
            <MdArrowForwardIos className="mt-2 text-[12px] text-white" />
          </div>
        </div>
        <div className="bg-black col-span-12 relative sm:col-span-3  md:col-span-2 bg-pod bg-no-repeat bg-contain bg-center rounded-xl">
          <div className="flex p-3 w-full absolute bottom-0 items-start justify-between backdrop-blur-md bg-white/10">
            <div>
              <h3 className=" text-white text-[18px]">Pods</h3>
              <p className="text-gray-300 text-[12px] max-w-[80%]">
                Variety of choice available
              </p>
            </div>
            <MdArrowForwardIos className="mt-2 text-[12px] text-white" />
          </div>
        </div>
        <div className="bg-black col-span-12 relative sm:col-span-3 md:col-span-2 bg-pod bg-no-repeat bg-contain bg-center rounded-xl ">
          <div className="flex p-3 w-full absolute bottom-0 items-start justify-between backdrop-blur-md bg-white/10">
            <div>
              <h3 className=" text-white text-[18px]">Disposable</h3>
              <p className="text-gray-300 text-[12px] max-w-[80%]">
                Easy,clean and superb flavour
              </p>
            </div>
            <MdArrowForwardIos className="mt-2 text-[12px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
