import React from "react";
import logo from "../assets/images/logo.png";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="head flex dark:text-white  justify-between items-center px-4 pt-2">
      <div>
        <img className="h-16" src={logo} alt="" />
      </div>
      <div
        className="nav font-p
      oppins font-semibold space-x-6 "
      >
        <a href="">
          <span className="hover:underline hover:cursor-pointer underline-offset-4 decoration-[1.5px]">
            Home
          </span>
        </a>
        <a href="#about">
          <span className="hover:underline hover:cursor-pointer underline-offset-4 decoration-[1.5px]">
            About
          </span>
        </a>
        <a href="#history">
          <span className="hover:underline hover:cursor-pointer underline-offset-4 decoration-[1.5px]">
            History
          </span>
        </a>
        <a href="#connect">
          <span className="hover:underline hover:cursor-pointer underline-offset-4 decoration-[1.5px]">
            Connect
          </span>
        </a>
      </div>
      <div className="w-[100px]">
        {" "}
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
