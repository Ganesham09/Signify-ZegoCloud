import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="bg-black/90">
      <div className=" h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
        <div className="flex items-center">
          <div className="flex w-[3rem] h-[3rem] bg-white rounded-full">
            <img src={logo} alt="" className="object-cover " />
          </div>
          <div className="text-white font-bold">
            <p className="text-[21px] pl-2">Video Call App</p>
          </div>
        </div>

        <div className="">
          <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
            <li>About Us</li>
            <li>Product</li>
            <li>News</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
