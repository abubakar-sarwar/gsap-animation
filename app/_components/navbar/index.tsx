"use client";
import { FiMenu } from "react-icons/fi";
import { HoverText } from "..";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navbar = document.getElementById("navBar");

    if (navbar) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 200) {
          gsap.to(navbar, {
            duration: 2,
            yPercent: -500,
          });
        } else {
          gsap.to(navbar, {
            duration: 2,
            yPercent: 0,
          });
        }
      };

      window.addEventListener("scroll", handleScroll);
    }
  });

  const scrollToFAQs = () => {
    const faqsElement = document.getElementById("faqs");
    if (faqsElement) {
      const startY = window.scrollY;
      const targetY = faqsElement.getBoundingClientRect().top + window.scrollY;
      const distance = Math.abs(startY - targetY);
      const duration = 1000;

      const easeInOutQuad = (t: any) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      let startTime: any;
      const animation = (currentTime: any) => {
        if (!startTime) {
          startTime = currentTime;
        }
        const timeElapsed = currentTime - startTime;
        const scrollProgress = easeInOutQuad(
          Math.min(timeElapsed / duration, 1)
        );
        window.scrollTo(0, startY + distance * scrollProgress);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      requestAnimationFrame(animation);
    }
  };

  return (
    <div
      id="navBar"
      className="fixed top-4 sm:top-8 left-4 sm:left-8 z-50 max-sm:right-4"
    >
      <nav className="flex items-center max-sm:justify-between">
        <Link href="/" className="block">
          <h2 className="font-medium tracking-wider text-xl">ThrillQuest</h2>
        </Link>
        <ul className="max-sm:hidden flex space-x-4 ml-16 text-xs sm:mt-1">
          <li>
            <HoverText
              href="/"
              className="capitalize"
              mainTextClass="opacity-50"
            >
              Journey
            </HoverText>
          </li>
          <li>
            <HoverText
              onClick={scrollToFAQs}
              href="#faqs"
              className="capitalize"
              mainTextClass="opacity-50"
            >
              Faqs
            </HoverText>
          </li>
          <li>
            <HoverText
              href="/"
              className="capitalize"
              mainTextClass="opacity-50"
            >
              Contact
            </HoverText>
          </li>
        </ul>
        <div className="sm:hidden">
          <FiMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
