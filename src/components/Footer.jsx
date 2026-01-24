import React from "react";
import LogoHR from "../assets/hr2.png"
import { FaGoogle, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (

    
   <footer className="bg-gray-900 text-white pt-12 pb-6 px-6 md:px-20 mt-20 font-dmsans">
    
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* Left: Logo + Social */}
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <img src={LogoHR} alt="ProHire Logo" className="w-12 h-12 object-contain" />
        <h1 className="text-2xl font-poppins font-bold text-[#faa302]">ProHire</h1>
      </div>
      <p className="text-sm text-gray-300">
        Streamline your HR workflows with instant letter generation and smart employee tools.
      </p>
      <div className="flex gap-4 mt-2">
        <a href="#" className="hover:text-[#faa302] transition"><FaGoogle /></a>
        <a href="#" className="hover:text-[#faa302] transition"><FaInstagram /></a>
        <a href="#" className="hover:text-[#faa302] transition"><FaLinkedin /></a>
        <a href="#" className="hover:text-[#faa302] transition"><FaFacebook /></a>
      </div>
    </div>

    {/* Center: Quick Links */}
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-poppins font-semibold mb-3 text-[#faa302]">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-[#faa302] transition">Home</a></li>
          <li><a href="#" className="hover:text-[#faa302] transition">Features</a></li>
          <li><a href="#" className="hover:text-[#faa302] transition">Pricing</a></li>
          <li><a href="#" className="hover:text-[#faa302] transition">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-poppins font-semibold mb-3 text-[#faa302]">Resources</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-[#faa302] transition">Templates</a></li>
          <li><a href="#" className="hover:text-[#faa302] transition">FAQs</a></li>
          <li><a href="#" className="hover:text-[#faa302] transition">Blog</a></li>
          <li><a href="#" className="hover:text-[#faa302] transition">Terms & Policies</a></li>
        </ul>
      </div>
    </div>

    {/* Right: Contact Info */}
    <div>
      <h3 className="text-lg font-poppins font-semibold mb-3 text-[#faa302]">Contact Us</h3>
      <p className="text-sm text-gray-300 leading-relaxed">
        ProHire HQ<br />
        Tech Park Road, Infopark<br />
        Kakkanad, Kochi, Kerala 682030<br />
        <br />
        Phone: +91 9876543210<br />
        Email: support@prohire.in
      </p>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-10 border-t border-white/10 pt-4 text-center text-sm text-gray-400">
    &copy; {new Date().getFullYear()} ProHire. All rights reserved.
  </div>
</footer>
  );
}
