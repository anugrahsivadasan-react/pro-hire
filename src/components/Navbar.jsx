import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">HR Letter Generator</h1>
        <div>
          <a href="#upload" className="px-3 hover:underline">Upload CV</a>
          <a href="#preview" className="px-3 hover:underline">Preview Letters</a>
        </div>
      </div>
    </nav>
  );
}
