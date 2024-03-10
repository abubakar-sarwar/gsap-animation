"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const Banner = () => {
  const items = [
    { _id: "1", image: "/banner_06.jpg", parallaxSpeed: 0.08 },
    { _id: "2", image: "/banner_07.jpg", parallaxSpeed: 0.1 },
    { _id: "3", image: "/banner_02.jpg", parallaxSpeed: 0.12 },
    { _id: "4", image: "/banner_04.jpg", parallaxSpeed: 0.08 },
    { _id: "5", image: "/banner_05.jpg", parallaxSpeed: 0.095 },
    { _id: "6", image: "/banner_06.jpg", parallaxSpeed: 0.07 },
    { _id: "7", image: "/banner_07.jpg", parallaxSpeed: 0.05 },
    { _id: "8", image: "/banner_01.jpg", parallaxSpeed: 0.08 },
  ];

  useGSAP(() => {
    document.addEventListener("mousemove", (e) => {
      document.querySelectorAll(".banner_card").forEach((item, index) => {
        const animationFactor = items[index].parallaxSpeed;

        const deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
        const deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;

        gsap.to(item, { x: deltaX, y: deltaY, scale: 1, duration: 0.6 });
      });
    });
  });

  return (
    <section className="h-screen min-h-[600px] relative">
      <div className="absolute inset-0 overflow-hidden">
        {items?.map((item, index) => (
          <div
            key={item?._id}
            className={`banner_card--${index + 1} banner_card`}
          >
            <Image src={item?.image} alt="banner" width={184} height={276} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
