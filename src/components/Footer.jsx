import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import wave from "../assets/wave.png";
import kpay from "../assets/kpay.png";
import facebook from "../assets/socialmedia/facebook.svg";
import instagram from "../assets/socialmedia/instagram.svg";
import telegram from "../assets/socialmedia/telegram.svg";
import twitter from "../assets/socialmedia/twitter.svg";
import viber from "../assets/socialmedia/viber.svg";
import qr from "../assets/socialmedia/qrcode.svg";

const Footer = () => {
  return (
    <div className=" max-w-[1215px] mx-auto">
      <div className=" px-5 flex flex-col gap-8 flex-wrap md:flex-row">
        <div className="flex-1   p-5">
          <h3 className=" mb-3 text-[18px]">Customer Services</h3>
          <div className="mb-14 flex flex-col gap-2">
            <div className="text-[14px]">Terms & Privacy Policy</div>
            <div className=" text-[14px]">Return Policy</div>
          </div>
          <div>
            <h4 className="mb-2">Payment</h4>
            <div className=" flex items-center gap-2">
              <img src={kpay} className=" h-10" alt="" />
              <img src={wave} className=" h-10" alt="" />
            </div>
          </div>
        </div>
        <div className="flex-1  p-5">
          <h3 className="mb-3 text-[18px]">Language</h3>
          <div className=" flex flex-col gap-2 mb-4">
            <div className="flex ml-2 items-center gap-3">
              <input type="radio" name="lang" id="unicode" />
              <label htmlFor="unicode">Myanmar(unicode)</label>
            </div>
            <div className="flex ml-2 items-center gap-3">
              <input type="radio" name="lang" id="Zawgyi" />
              <label htmlFor="Zawgyi">Myanmar(Zawgyi)</label>
            </div>
            <div className="flex ml-2 items-center gap-3">
              <input type="radio" name="lang" id="english" checked="checked" />
              <label htmlFor="english">English</label>
            </div>
          </div>
          <div>
            <h4 className="mb-2">Follow Us On</h4>
            <div className=" flex items-center gap-2">
              <img src={facebook} className=" h-10" alt="" />
              <img src={instagram} className=" h-10" alt="" />
              <img src={viber} className=" h-10" alt="" />
              <img src={telegram} className=" h-10" alt="" />
              <img src={twitter} className=" h-10" alt="" />
            </div>
          </div>
        </div>
        <div className="flex-1  p-5">
          <h3 className=" mb-3 text-[18px]">Contact Us</h3>
          <div className="mb-14 flex flex-col gap-2">
            <div className="text-[14px] flex gap-2 max-w-[100%]">
              <IoLocationOutline className=" mt-[-10px]" size={40} />
              Lay Daunt Kan Main Road,Cashmere Stop, Near Zawana,Thingangyan
              Tsp, Yangon
            </div>
            <div className=" text-[14px] flex gap-2 items-center">
              <BiPhone size={18} />
              09458489459
            </div>
          </div>
        </div>
        <div className="flex-1  p-5">
          <h3 className=" text-[18px] mb-3">Download Our App</h3>
          <div>
            <img src={qr} className=" h-40" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
