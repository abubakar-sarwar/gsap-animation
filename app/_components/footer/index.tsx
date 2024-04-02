"use client";
import { useEffect, useRef } from "react";
import { HoverText } from "..";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const fakeFooterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (footerRef.current && fakeFooterRef.current) {
      fakeFooterRef.current.style.height = `${footerRef.current.offsetHeight}px`;
    }
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".footer_bg",
      {
        yPercent: -40,
      },
      {
        yPercent: 0,
        scrollTrigger: {
          trigger: ".fake_footer",
          start: "top bottom",
          end: "70% 80%",
          scrub: true,
        },
      }
    );
  });

  return (
    <footer>
      <div
        ref={fakeFooterRef}
        className="fake_footer overflow-hidden mt-[100px]"
      >
        <div ref={footerRef} className="footer_bg pt-8">
          <div className="container">
            <div className="flex justify-between pt-20 pb-10">
              <div>
                <p className="text-2xl">
                  ThrillQuest is the adventure <br /> you've been searching for.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-28">
                <div>
                  <p className="text-13 mb-3 opacity-10">LEGAL</p>
                  <ul className="space-y-0.5 text-sm">
                    <li>
                      <HoverText href="/">Contact</HoverText>
                    </li>
                    <li>
                      <HoverText href="/">Privacy Policy</HoverText>
                    </li>
                    <li>
                      <HoverText href="/">Terms & Conditions</HoverText>
                    </li>
                    <li>
                      <HoverText href="/">Cookie Policy</HoverText>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-13 mb-3 opacity-10">UPDATES</p>
                  <ul className="space-y-0.5 text-sm">
                    <li>
                      <HoverText href="/">Twitter</HoverText>
                    </li>
                    <li>
                      <HoverText href="/">Instagram</HoverText>
                    </li>
                    <li>
                      <HoverText href="/">Facebook</HoverText>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-font-dark/10">
              <p className="text-13 mb-3 opacity-10">
                Copyright © 2024. ABZ, Inc. All rights reserved.
              </p>
              <p className="text-13 mb-3 opacity-10">Made by Abubakar</p>
            </div>
            <div className="relative h-[180px] overflow-hidden">
              <h2 className="footer_text absolute inset-0">ThrillQuest</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
