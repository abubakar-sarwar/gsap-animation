"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const Banner = () => {
  const items = [
    {
      _id: "1",
      mainTrans: "20rem, 9rem",
      image: "/banner_06.jpg",
      parallaxSpeed: 0.08,
    },
    {
      _id: "2",
      mainTrans: "20rem, -12rem",
      image: "/banner_07.jpg",
      parallaxSpeed: 0.1,
    },
    {
      _id: "3",
      mainTrans: "10rem, 10rem",
      image: "/banner_02.jpg",
      parallaxSpeed: 0.12,
    },
    {
      _id: "4",
      mainTrans: "10rem, -16rem",
      image: "/banner_04.jpg",
      parallaxSpeed: 0.06,
    },
    {
      _id: "5",
      mainTrans: "-10rem, -17rem",
      image: "/banner_05.jpg",
      parallaxSpeed: 0.095,
    },
    {
      _id: "6",
      mainTrans: "-20rem, 15rem",
      image: "/banner_06.jpg",
      parallaxSpeed: 0.06,
    },
    {
      _id: "7",
      mainTrans: "-30rem, -20rem",
      image: "/banner_07.jpg",
      parallaxSpeed: 0.05,
    },
    {
      _id: "8",
      mainTrans: "-20rem, -4rem",
      image: "/banner_01.jpg",
      parallaxSpeed: 0.15,
    },
    {
      _id: "9",
      mainTrans: "30rem, 0rem",
      image: "/banner_01.jpg",
      parallaxSpeed: 0.15,
    },
  ];

  useGSAP(() => {
    document.querySelectorAll(".banner_grid_cards").forEach((item, index) => {
      gsap.to(item, {
        translateX: 0,
        translateY: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        duration: 1,
      });
    });

    document.addEventListener("mousemove", (e) => {
      document.querySelectorAll(".banner_card").forEach((item, index) => {
        const animationFactor = items[index].parallaxSpeed;

        const deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
        const deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;

        gsap.to(item, { x: deltaX, y: deltaY, scale: 1, duration: 0.6 });
      });

      document.querySelectorAll(".banner_video").forEach((item, index) => {
        const animationFactor = 0.16;

        const deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
        const deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;

        gsap.to(item, { x: deltaX, y: deltaY, scale: 1, duration: 0.6 });
      });
    });

    gsap.to(".banner_video", {
      translateX: 0,
      translateY: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
    });
  });

  return (
    <section className="h-screen min-h-[600px] relative">
      <div className="absolute w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative flex">
          <video
            src="/test6.mp4"
            autoPlay
            loop
            muted
            preload="none"
            style={{
              transform: `translate(-10rem, 5rem) scale(0.3, 0.3)`,
              opacity: 0,
            }}
            className="absolute -top-[35%] right-5 z-10 w-[40%] object-cover banner_video"
          ></video>
          <h1
            data-lag="0.1"
            data-speed="1"
            className="absolute inset-0 font-bold text-center leading-[110px] uppercase banner_text text-white"
          >
            EMBARK ON WILD ADVENTURES WITH US
          </h1>
          <h1
            data-lag="0.1"
            data-speed="1"
            className="w-full font-bold text-center z-20 leading-[110px] uppercase outlineText banner_text text-white"
          >
            EMBARK ON WILD ADVENTURES WITH US
          </h1>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {items?.map((item, index) => (
          <div
            style={{
              transform: `translate(${item?.mainTrans}) scale(0.8, 0.8)`,
              opacity: 0,
            }}
            key={item?._id}
            className={`banner_grid_cards absolute banner_card--${index + 1}`}
          >
            <div className="banner_card">
              <Image
                src={item?.image}
                alt="banner"
                width={184}
                height={276}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
