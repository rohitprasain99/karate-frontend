"use client";

import Link from "next/link";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  console.log("dashboard re-rendered");
  return (
    <div>
      <header className="flex justify-around">
        <h4 className="text-purple-400">
          <Link href={"/dashboard"}>dashboard</Link>
        </h4>
        <div className="text-green-400">
          <Link href={"/dashboard/dojo"}>Dojo</Link>
        </div>

        <div className="text-red-400">
          <Link href={"/"}>Home</Link>
        </div>
      </header>
      {children}
      <footer>dashboard footer</footer>
    </div>
  );
}
