import React from "react";
import img2 from "../assets/images/porche-top-view.png";
import svg2 from "../assets/images/Rectangle 7.svg";
import svg3 from "../assets/images/Rectangle 9.svg";

function About() {
  return (
    <div id="about" className="m-10 flex items-center gap-10">
      <div className="flex items-center gap-2">
        <img className="svg2" src={svg3} alt="" />
        <img className="svg2" src={svg2} alt="" />
      </div>

      <div>
        <div className="flex flex-col leading-none ml-5 justify-center">
          <div className="pb-5 ti-2">
            <h1 className="text-8xl font-porsche font-medium">About</h1>
            <div className="text-right font-porsche">
              Top Speed:{" "}
              <span className="font-porsche text-red-800">296 km/hr</span>
            </div>
            <h2 className="text-5xl font-porsche text-red-800 py-4">911</h2>
          </div>
          <p className="font-poppins pa-2 pt-10 w-[90%] leading-6">
            The Porsche 911 is more than just a car, it’s an automotive icon
            that has captured the hearts of enthusiasts, celebrities, and
            everyday drivers alike for over half a century. With its distinct
            silhouette, unmistakable rear-engine layout, and legendary
            performance, the 911 blends tradition with cutting-edge innovation.
            Unlike many sports cars that remain weekend-only thrills, the 911 is
            engineered for both exhilarating track experiences and daily
            practicality, offering a rare combination of luxury, power, and
            usability. Celebrities from Jerry Seinfeld to David Beckham have
            praised its refined design and exhilarating handling, calling it a
            "masterpiece of engineering" and "a therapy session on wheels."
            Every generation of the 911 builds on its heritage while enhancing
            performance, solidifying its place as one of the greatest and most
            beloved sports cars ever made. The 911 represents not only Porsche’s
            commitment to excellence but also an enduring passion for the art of
            driving.
          </p>
        </div>
      </div>
      <div className="flex-none ">
        <img
          className="car2 brightness-125"
          src={img2}
          alt="porsche top view"
        />
      </div>
    </div>
  );
}

export default About;
