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
              href="/about"
              className="capitalize"
              mainTextClass="opacity-50"
            >
              About ThrillQuest
            </HoverText>
          </li>
          <li>
            <HoverText
              href="/about"
              className="capitalize"
              mainTextClass="opacity-50"
            >
              Journey
            </HoverText>
          </li>
          <li>
            <HoverText
              href="/about"
              className="capitalize"
              mainTextClass="opacity-50"
            >
              Faqs
            </HoverText>
          </li>
          <li>
            <HoverText
              href="/about"
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
