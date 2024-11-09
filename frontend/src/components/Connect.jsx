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
          <h1 className="text-8xl dark:text-white  font-porsche font-medium">
            Connect
          </h1>
          <h2 className="text-5xl font-porsche text-red-800 py-4">with Us</h2>
        </div>
        <ul className="pa-4 dark:text-white  flex mt-10 font-poppins gap-4">
          <a href="https://www.instagram.com/porsche/" target="blank">
            <div className="hover:scale-110">
              <FaInstagram className="text-4xl m-auto " />
              Instagram
            </div>
          </a>
          <a href="https://www.youtube.com/porsche" target="blank">
            <div className="hover:scale-110">
              <FaYoutube className="text-4xl m-auto" />
              Youtube
            </div>
          </a>
          <a
            href="https://www.porsche.com/international/models/911/911-gt3-rs/911-gt3-rs/"
            target="blank"
          >
            <div className="hover:scale-110">
              <TbWorld className="text-4xl m-auto" />
              Website
            </div>
          </a>
        </ul>
      </div>
      <div>
        <img className="car4" src={img4} alt="porsche diagonal" />
      </div>
    </div>
  );
}

export default Connect;
