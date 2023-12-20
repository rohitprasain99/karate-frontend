import HeroSection from "@/components/container/HeroSection";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import { Metadata } from "next";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Footer />
    </main>
  );
}
