import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { navItems } from "@/utils/constants/navItems";

export default function Header() {
  return (
    <main className="flex justify-between items-center px-10 py-4 shadow-sm sticky top-0 z-10 bg-white">
      <section>
        <Logo />
      </section>
      <section className="flex items-center gap-x-2 md:gap-7 ">
        {navItems.map((item, idx) => (
          <div key={idx} className="text-md hover:text-blue-400">
            <Link href={`${item.path}`}>{item.name}</Link>
          </div>
        ))}
        <div className="text-green-300">
          <Link href={"/dashboard"}>
            <button>Login</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
