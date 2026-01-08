import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 p-4 mt-10">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} HR Letter Generator. All rights reserved.
      </div>
    </footer>
  );
}
