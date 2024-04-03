"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "resize-observer-polyfill";
import ResizeObserver from "resize-observer-polyfill";

const SmoothLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  });

  useEffect(() => {
    const ro = new ResizeObserver((entries, observer) => {
      const lenis = new Lenis();
      function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="root">
        {children}
      </div>
    </div>
  );
};

export default SmoothLayout;
