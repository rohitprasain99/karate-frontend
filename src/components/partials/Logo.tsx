import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <main className="text-xl font-bold">
      <Link href={"/"}>
        /~\ <span className="text-sm">Karate Nepal</span>
      </Link>
    </main>
  );
};
