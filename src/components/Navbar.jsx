import { FolderIcon } from "@heroicons/react/24/solid";
import React from "react";
import { FaLetterboxd } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-[#030329] h-[100px] flex justify-center text-white  shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl flex items-center gap-2 "> <FolderIcon className="h-8 w-8 "/> <span className="text-[30px]">Pro</span> Hire</h1>
        <div>
          <a href="#upload" className="px-3 hover:underline">Upload CV</a>
          <a href="#preview" className="px-3 hover:underline">Preview Letters</a>
        </div>
      </div>
    </nav>
  );
}
