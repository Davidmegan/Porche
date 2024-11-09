import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import img from "../assets/images/image.png";

function Footer() {
  return (
    <div className="mt-16 flex justify-center ">
      <img className="h-16" src={img} alt="" />
      <img className="h-16 -ml-4" src={img} alt="" />

      <div className="flex text-xl dark:text-white  px-5 pa-5 font-porsche justify-center items-center">
        <FaRegCopyright />
        Copyright 2024
      </div>
      <img className="h-16" src={img} alt="" />
      <img className="h-16 -ml-4" src={img} alt="" />
    </div>
  );
}

export default Footer;
