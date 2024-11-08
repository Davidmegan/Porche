import React from "react";
import img1 from "../assets/images/porschehome1.png";
import svg1 from "../assets/images/Rectangle 8.svg";
import svg2 from "../assets/images/Rectangle 7.svg";
import svg3 from "../assets/images/Rectangle 9.svg";

function Home() {
  return (
    <div className="flex items-center px-2 overflow-hidden pb-10">
      <div className="flex flex-col  items-center leading-none">
        <div className="ti-1 font-porsche text-[8rem]">
          PORSCHE
          <div className="text-right text-[6rem] text-red-800">911</div>
        </div>
        <div className="relative px-10">
          <img
            className="car1 w-[90%] mx-auto brightness-125"
            src={img1}
            alt="porsche side image"
          />
          <div className="pa-1 absolute top-2 left-10 w-1/3 font-poppins text-lg font-medium">
            “Driving a 911 is a therapy session on wheels. You lose yourself in
            the car and find peace.” <br />– Magnus Walker
          </div>
        </div>
      </div>
      <div>
        <img className="svg1 pr-1" src={svg1} alt="" />
      </div>
      <div>
        <img className="svg1 pr-1" src={svg2} alt="" />
      </div>
      <div>
        <img className="svg1 pr-1" src={svg3} alt="" />
      </div>
    </div>
  );
}

export default Home;
