import React from "react";
import LogoHR from "../assets/logoHR.png";
import { ImExit } from "react-icons/im";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-2xl px-6 md:px-12 py-4 flex items-center justify-between text-[#107594]">
      {/* Logo + Brand */}
      <div className="flex items-center gap-4">
        <div className="w-[60px] h-[60px]">
          <img
            src={LogoHR}
            alt="ProHire Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold flex items-baseline gap-1">
          <span>Pro</span>
          <span className="font-normal text-gray-800">Hire</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <a href="#upload" className="hover:text-[#107594] transition">Upload CV</a>
        <a href="#details" className="hover:text-[#107594] transition">Employee Details</a>
        <a href="#preview" className="hover:text-[#107594] transition">Preview Letters</a>
         <div>
        <button
          href="#generate"
          className="bg-[#107594] flex items-center gap-2 hover:bg-[#0d5a6a] text-white px-5 py-2 rounded-xl font-semibold shadow-md transition"
        ><ImExit/>Logout
        </button>
      </div>
      </div>

      {/* CTA Button */}
     
    </nav>
  );
}