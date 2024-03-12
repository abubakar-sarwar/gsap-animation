"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const Banner = () => {
  const items = [
    { _id: "1", image: "/banner_06.jpg", parallaxSpeed: 0.08 },
    { _id: "2", image: "/banner_07.jpg", parallaxSpeed: 0.1 },
    { _id: "3", image: "/banner_02.jpg", parallaxSpeed: 0.12 },
    { _id: "4", image: "/banner_04.jpg", parallaxSpeed: 0.06 },
    { _id: "5", image: "/banner_05.jpg", parallaxSpeed: 0.095 },
    { _id: "6", image: "/banner_06.jpg", parallaxSpeed: 0.06 },
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
      <div className="absolute w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <video
            src="/test3.mp4"
            autoPlay
            loop
            muted
            className="clipped-video w-full h-full object-cover"
          ></video>
          <svg id="text_Header" height="100%" width="100%">
            <clipPath id="text-overlay" width="100%" height="100%">
              <text id="title" x="50%" y="50%" textAnchor="middle">
                <tspan x="50%" dy="-0.5em">
                  Embark on wild
                </tspan>
                <tspan x="50%" dy="1.2em">
                  adventures with us
                </tspan>
              </text>
            </clipPath>
          </svg>
          {/* <h1
            data-lag="0.1"
            data-speed="1"
            className="text-center font-bold leading-[90px] text-white customTextBG"
          >
            Embark on wild adventures with us
          </h1> */}
        </div>
      </div>
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
