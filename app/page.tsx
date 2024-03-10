"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { Banner } from "@/app/_components";

export default function Home() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  });

  return (
    <div className="relative">
      <div>
        <Banner />
      </div>
    </div>
  );
}
