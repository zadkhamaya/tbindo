import { Advantages } from "@/component/Advantages";
import { Features } from "@/component/Features";
import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
import { HeroParallaxDemo } from "@/component/HeroParallax";
import { TopBanner } from "@/component/TopBanner";
import { HeroParallax } from "@/component/hero-parallax";
import React from "react";

export default function Page() {
  return (
    <div>
      <Header />
      <TopBanner />
      <Features />
      <Advantages />
      <Footer />
    </div>
  );
}
