import React from "react";

import LogoHR from "../assets/hr.png";


import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";


import { useNavigate } from "react-router-dom";






export default function Navbar() {





  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth data if you have any
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Navigate to login page
    navigate("/");
  };


  return (
   <nav
  className="
    w-full 
    bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/80
    backdrop-blur-xl
    shadow-[0_4px_20px_rgba(0,0,0,0.4)]
    border-b border-white/10
    px-6 md:px-12 py-4
    flex items-center justify-between
  "
>
  {/* Logo + Brand */}
  <div className="flex items-center gap-4">
    <div className="w-[60px] h-[60px]">
      <img
        src={LogoHR}
        alt="ProHire Logo"
        className="w-full h-full object-contain"
      />
    </div>


    <h1 className="text-3xl font-poppins font-bold flex items-baseline gap-1 tracking-wide">
      <span className="text-[#faa302]">Pro</span>
      <span className="font-light font-playfair  text-white">Hire</span>
    </h1>
  </div>

  {/* Navigation Links */}
  <div className="hidden md:flex items-center gap-8 text-white font-dmsans text-[17px]">
    <a
      href="#upload"
      className="hover:text-[#faa302] transition duration-200"
    >
      Upload CV
    </a>

    <a
      href="#details"
      className="hover:text-[#faa302] transition duration-200"
    >
      Employee Details
    </a>

    <a
      href="#preview"
      className="hover:text-[#faa302] transition duration-200"
    >
      Preview Letters
    </a>

    {/* Logout Button */}
    <button
      className="
        bg-[#faa302]/90 
        hover:bg-[#faa302] 
        text-white 
        px-5 py-2 
        rounded-xl 
        font-inter font-semibold 
        shadow-[0_4px_15px_rgba(250,163,2,0.4)]
        flex items-center gap-2
        transition-all duration-300
        active:scale-95
      "
    >
      <ImExit /> Logout
    </button>
  </div>
</nav>
  );
}