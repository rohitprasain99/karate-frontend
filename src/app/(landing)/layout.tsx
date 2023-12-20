"use client";

import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import React from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("rendered");
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
