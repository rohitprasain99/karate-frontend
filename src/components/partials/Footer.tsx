import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between items-center px-10 py-2 font-medium">
      <div> &copy; 2023, Karate Nepal</div>
      <div className="text-xs">
        Developed by: <span className="text-[#4a98cd] ">Paldor Tech</span>
      </div>
    </div>
  );
}
