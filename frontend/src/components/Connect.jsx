import React from "react";
import img4 from "../assets/images/porsche-diagonal1.png";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import svg2 from "../assets/images/Rectangle 7.svg";
import svg3 from "../assets/images/Rectangle 9.svg";

function Connect() {
  return (
    <div id="connect" className="flex justify-between mx-10 mt-16 gap-10">
      <div className="flex  mr-3 items-center gap-2">
        <img className="svg4" src={svg3} alt="" />
        <img className="svg4" src={svg2} alt="" />
      </div>

      <div>
        <div className="ti-4">
          <h1 className="text-8xl font-porsche font-medium">Connect</h1>
          <h2 className="text-5xl font-porsche text-red-800 py-4">with Us</h2>
        </div>
        <ul className="pa-4 flex mt-10 font-poppins gap-4">
          <div className="">
            <FaInstagram className="text-4xl m-auto " />
            Instagram
          </div>
          <div>
            <FaYoutube className="text-4xl m-auto" />
            Youtube
          </div>
          <div>
            <TbWorld className="text-4xl m-auto" />
            Website
          </div>
        </ul>
      </div>
      <div>
        <img className="car4" src={img4} alt="porsche diagonal" />
      </div>
    </div>
  );
}

export default Connect;
