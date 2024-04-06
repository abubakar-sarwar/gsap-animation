"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";

const SmoothLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");
    setIsDesktop(mediaQuery.matches);
    const handleResize = () => {
      setIsDesktop(mediaQuery.matches);
    };

    window.addEventListener("change", handleResize);
    return () => {
      window.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) {
      import("@studio-freight/lenis").then((LenisModule) => {
        const Lenis = LenisModule.default;
        const lenis = new Lenis();
        function raf(time: any) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      });
    }
  }, [isDesktop]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="root">
        {children}
      </div>
    </div>
  );
};

export default SmoothLayout;
