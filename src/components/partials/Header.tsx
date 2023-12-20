import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";

export default function Header() {
  return (
    <main className="flex justify-between p-4">
      <div>
        <Logo />
      </div>
      <div> items</div>
      <div className="text-green-300">
        <Link href={"/dashboard"}>login</Link>
      </div>
    </main>
  );
}
