import aspireCyber from "../assets/vape/aspire-cyber-s-kit-green-pod-vape-kit_1.jpg";
import geekVape from "../assets/vape/geekvape-sonder-q-red-blue-pod-kit_1.jpg";
import innokinBlue from "../assets/vape/innokin_endura_apex_blue_vape_kit_1.jpg";
import innokinSilver from "../assets/vape/innokin-endura-s1-kit-silver-cerulean.jpg";
import innokinRed from "../assets/vape/innokin-ezwatt-vape-kit-red_1.jpg";
import lostVape from "../assets/vape/lost-vape-ursa-nano-pro-antarctica-g-vape-kit_1.jpg";
import BestDealsCard from "./BestDealsCard";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const BestDeals = () => {
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
  ];

  return (
    <div className=" max-w-[1215px] mx-auto ">
      <div className="mb-10">
        <h1 className=" font-bold text-[38px] text-center ">Best Deals</h1>
        <p className=" font-normal text-[16px] text-center">Just For you</p>
      </div>
      <div className="justify-center flex flex-wrap gap-3 ">
        {vapes.map((item) => (
            <BestDealsCard key={item.id} {...item}/>
        ))}
      </div>
      <div className="mt-10">
        <button className="bg-gray-200 px-20 py-2 rounded-full flex items-center gap-1 mx-auto transition-all duration-200 hover:bg-gray-200/80">View More <MdArrowForwardIos size={14}/></button>
      </div>
    </div>
  );
};

export default BestDeals;
