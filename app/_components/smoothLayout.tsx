"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import Image from "next/image";

const SmoothLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="root">
        {children}
        {/* <div className="relative">
          <Image
            src="/background.webp"
            alt="background"
            width={100}
            height={100}
            unoptimized
            className="w-full h-full"
          />
          <div className="absolute inset-0">
            <div className="text-[100px] text-white text-center font-bold mt-[400px]">
              <h1 data-lag="0.2" data-speed="1">
                Hello World
              </h1>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SmoothLayout;
