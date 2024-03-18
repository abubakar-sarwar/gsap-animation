"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const LetsJourney = () => {
  useGSAP(() => {
    gsap.to(".letsjourney_text:first-child", {
      x: () => -innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".letsJourny_sec",
        start: "top top",
        scrub: true,
      },
    });
    gsap.to(".letsjourney_text:last-child", {
      x: () => innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".letsJourny_sec",
        start: "top top",
        scrub: true,
      },
    });
    gsap.to(".letsJoury_IMG", {
      rotate: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".letsJourny_sec",
        start: "top top",
        scrub: true,
        pin: true,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".history_grid",
        start: "top 80%",
        end: "bottom top",
        markers: true,
        scrub: true,
      },
    });

    const itemsB = document.querySelectorAll(".item_toBottom");
    const itemsT = document.querySelectorAll(".item_toTop");
    const images = document.querySelectorAll(".history_grid-item img");

    itemsB.forEach((item) => {
      tl.to(
        item,
        {
          yPercent: 10,
          ease: "power2.inOut",
        },
        0
      );
    });
    itemsT.forEach((item) => {
      tl.to(
        item,
        {
          yPercent: -10,
          ease: "power2.inOut",
        },
        0
      );
    });
    images.forEach((img) => {
      tl.to(
        img,
        {
          bottom: 0,
          ease: "power2.inOut",
        },
        0
      );
    });
  });

  return (
    <>
      <div className="letsJourny_sec relative overflow-hidden">
        <div className="container">
          <div className="h-screen flex items-center justify-center">
            <div className="flex">
              <h2 className="text-center uppercase letsjourney_text">
                LET'S JOURN
              </h2>
              <h2 className="text-center uppercase letsjourney_text">
                EY TOGETHER
              </h2>
            </div>
            <div className="absolute inset-0 z-[-1] letsJoury_IMG rotate-[30deg]">
              <video
                src="/test6.mp4"
                autoPlay
                loop
                muted
                preload="none"
                className="h-full w-full object-cover scale-110"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="container relative py-10 mb-[1000px]">
        <h2 className="third_heading mb-10">
          Past whispers, join us to explore.
        </h2>
        <div className="history_grid pt-10">
          <div className="history_grid-item item_toBottom -translate-y-[5%]">
            <div className="relative w-[80%] aspect-square overflow-hidden">
              <Image
                src="/about_sec.jpg"
                alt="wild"
                width={100}
                height={71}
                unoptimized
                className="absolute bottom-[-30%] w-full h-[130%] object-cover"
              />
            </div>
            <div className="card_text">
              <h3
                data-lag="0.1"
                data-speed="1"
                className="mt-4 history_grid-text"
              >
                Starlight to symphony - nature's beauty lulled you and awakened
                you.
              </h3>
            </div>
          </div>
          <div className="history_grid-item item_toTop translate-y-[10%]">
            <div className="relative w-[80%] aspect-square overflow-hidden">
              <Image
                src="/about_sec.jpg"
                alt="wild"
                width={100}
                height={71}
                unoptimized
                className="absolute bottom-[-30%] w-full h-[130%] object-cover"
              />
            </div>
            <div className="card_text">
              <h3
                data-lag="0.1"
                data-speed="1"
                className="mt-4 history_grid-text"
              >
                Lakes embraced by valleys, nature's embrace both calms and
                invigorates.
              </h3>
            </div>
          </div>
          <div className="history_grid-item item_toTop translate-y-[10%]">
            <div className="relative w-[80%] aspect-square overflow-hidden">
              <Image
                src="/about_sec.jpg"
                alt="wild"
                width={100}
                height={71}
                unoptimized
                className="absolute bottom-[-30%] w-full h-[130%] object-cover"
              />
            </div>
            <div className="card_text">
              <h3
                data-lag="0.1"
                data-speed="1"
                className="mt-4 history_grid-text"
              >
                Starlight to symphony - nature's beauty lulled you and awakened
                you.
              </h3>
            </div>
          </div>
          <div className="history_grid-item item_toBottom -translate-y-[10%]">
            <div className="relative w-[80%] aspect-square overflow-hidden">
              <Image
                src="/about_sec.jpg"
                alt="wild"
                width={100}
                height={71}
                unoptimized
                className="absolute bottom-[-30%] w-full h-[130%] object-cover"
              />
            </div>
            <div className="card_text">
              <h3
                data-lag="0.1"
                data-speed="1"
                className="mt-4 history_grid-text"
              >
                Starlight to symphony - nature's beauty lulled you and awakened
                you.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsJourney;
