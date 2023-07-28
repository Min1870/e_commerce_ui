import { BsStarFill } from "react-icons/bs";
import aspireCyber from "../assets/vape/aspire-cyber-s-kit-green-pod-vape-kit_1.jpg";
import geekVape from "../assets/vape/geekvape-sonder-q-red-blue-pod-kit_1.jpg";
import innokinBlue from "../assets/vape/innokin_endura_apex_blue_vape_kit_1.jpg";
import innokinSilver from "../assets/vape/innokin-endura-s1-kit-silver-cerulean.jpg";
import innokinRed from "../assets/vape/innokin-ezwatt-vape-kit-red_1.jpg";
import lostVape from "../assets/vape/lost-vape-ursa-nano-pro-antarctica-g-vape-kit_1.jpg";

const RowsCard = ({ img }) => {
  return (
    <div className=" w-52 ">
                <img
                  src={img}
                  alt="Shoes"
                  className="rounded-[25px] border-2 w-full overflow-hidden "
                />

                <div className=" flex flex-col mt-3 items-center text-center">
                  <h2 className=" font-semibold mb-2 text-white">
                    Refreshing Mint
                  </h2>
                  <p className=" text-white mb-2">30,000 MMK</p>
                  <span className=" flex items-center gap-1 text-[12px] text-yellow-500">
                    <BsStarFill size={10} />
                    600 Points
                  </span>
                </div>
              </div>
  );
};

export default RowsCard;
