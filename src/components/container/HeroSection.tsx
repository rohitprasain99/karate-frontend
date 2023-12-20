"use client";

import React from "react";
import Image from "next/image";
import heroImg from "../../assets/hero-img.svg";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="h-[80vh] sm:h-[84vh] flex justify-between px-10">
      <div className="flex flex-col justify-center gap-y-4 ">
        <div className="grid gap-y-4">
          <div className="text-2xl font-semibold">
            <div>Join us as we embark on a journey of </div>
            <div>self-discovery and empowerment </div>
            <div>through the art of karate</div>
          </div>

          <div className="text-lg font-medium">
            &Prime; Empower Your Journey, Master Your Strength
          </div>
        </div>
        <div>
          <button>
            <Link href={"/contact"}>Contact</Link>
          </button>
        </div>
      </div>
      <div className="hidden sm:flex justify-end ">
        <Image
          src={heroImg}
          alt="_heroImg"
          objectFit="cover"
          style={{
            height: "100%",
            width: "80%",
          }}
        />
      </div>
    </section>
  );
}
