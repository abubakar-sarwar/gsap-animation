"use client";
import { useEffect, useRef } from "react";
import { HoverText } from "..";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const footerRef = useRef<HTMLDivElement | null>(null);
  const fakeFooterRef = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (footerRef.current && fakeFooterRef.current) {
      fakeFooterRef.current.style.height = `${footerRef.current.offsetHeight}px`;
    }
  }, [pathname]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        footerRef.current,
        {
          yPercent: -30,
        },
        {
          yPercent: 0,
          scrollTrigger: {
            trigger: fakeFooterRef.current,
            start: "top bottom",
            end: "70% 80%",
            scrub: true,
          },
        }
      );
    },
    {
      scope: container,
      dependencies: [pathname, fakeFooterRef, footerRef, container],
    }
  );

  return (
    <footer ref={container}>
      <div
        ref={fakeFooterRef}
        className="fake_footer overflow-hidden mt-[100px]"
      >
        <div ref={footerRef} className="footer_bg pt-8">
          <div className="container">
            <div className="sm:flex justify-between pt-20 pb-10 gap-10">
              <div className="max-sm:mb-5">
                <p className="text-2xl">
                  ThrillQuest is the adventure <br /> you've been searching for.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-28">
                <div>
                  <p className="text-13 mb-3 opacity-10">LEGAL</p>
                  <ul className="space-y-0.5 text-sm">
                    <li>
                      <HoverText href="/" mainTextClass="opacity-40">
                        Contact
                      </HoverText>
                    </li>
                    <li>
                      <HoverText href="/" mainTextClass="opacity-40">
                        Privacy Policy
                      </HoverText>
                    </li>
                    <li>
                      <HoverText href="/" mainTextClass="opacity-40">
                        Terms & Conditions
                      </HoverText>
                    </li>
                    <li>
                      <HoverText href="/" mainTextClass="opacity-40">
                        Cookie Policy
                      </HoverText>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-13 mb-3 opacity-10">UPDATES</p>
                  <ul className="space-y-0.5 text-sm">
                    <li>
                      <HoverText href="/" mainTextClass="opacity-40">
                        Twitter
                      </HoverText>
                    </li>
                    <li>
                      <HoverText href="/" mainTextClass="opacity-40">
                        Instagram
                      </HoverText>
                    </li>
                    <li>
                      <HoverText href="/" mainTextClass="opacity-40">
                        Facebook
                      </HoverText>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-10 items-center justify-center sm:justify-between border-b border-font-dark/10">
              <p className="text-xs sm:text-13 mb-1 sm:mb-3 opacity-10 text-center">
                Copyright © 2024. ABZ, Inc. All rights reserved.
              </p>
              <p className="text-xs sm:text-13 mb-3 opacity-10">
                Made by Abubakar
              </p>
            </div>
            <div className="relative h-[180px] overflow-hidden">
              <h2 className="footer_text absolute inset-0 top-5">
                ThrillQuest
              </h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
