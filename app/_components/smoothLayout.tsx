"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

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
      </div>
    </div>
  );
};

export default SmoothLayout;
