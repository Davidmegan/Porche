import React from "react";
import img3 from "../assets/images/porsche-right-half3.png";
import ReactCountryFlag from "react-country-flag";
import svg2 from "../assets/images/Rectangle 7.svg";
import svg3 from "../assets/images/Rectangle 9.svg";

function History() {
  return (
    <div
      id="history"
      className="ml-10 flex text-right leading-none my-32  w-[95%]"
    >
      <div className="flex-none">
        <img
          className="car3 brightness-110"
          src={img3}
          alt="porsche right half"
        />
      </div>
      <div>
        <div className="ti-3">
          <h1 className="text-8xl font-medium font-porsche">History</h1>
          <div className="text-left font-porsche">
            Origin: <ReactCountryFlag countryCode="DE" svg />
          </div>
          <h2 className="text-5xl py-4 font-porsche text-red-800">Porsche</h2>
        </div>
        <p className="pa-3 font-poppins leading-6 pt-10">
          Porsche, founded in 1931 by Ferdinand Porsche, began as an engineering
          firm and introduced its first car, the 356, in 1948. Known for its
          innovation and performance, Porsche has become an icon in the
          automotive world, especially with the legendary 911.
        </p>
      </div>
      <div className="flex items-center ml-8 gap-2">
        <img className="svg3" src={svg2} alt="" />
        <img className="svg3" src={svg3} alt="" />
      </div>
    </div>
  );
}

export default History;
