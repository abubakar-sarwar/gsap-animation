"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

const AboutSection = () => {
  const group1 = ["FROM", "THRILLING"];
  const group2 = ["TO", "DARING", "EXPEDITIONS,"];
  const group3 = ["SPECIALIZING", "IN"];

  const container = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

      gsap.from(".char", {
        opacity: 0.1,
        duration: 0.3,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".trigger_anim",
          start: "top 80%",
          end: "top 10%",
          scrub: true,
          markers: false,
        },
      });

      const itemsAndImages = document.querySelectorAll(
        ".about_banner, .item_toTop"
      );

      itemsAndImages.forEach((element) => {
        gsap.to(element, {
          y: element.classList.contains("item_toTop") ? -50 : 0,
          bottom: element.classList.contains("about_banner") ? 0 : "auto",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".trigger_anim",
            start: "top 80%",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="container py-[150px]">
      <div className="relative trigger_anim">
        <h1 className="flex flex-wrap items-center gap-x-3">
          {group1?.map((item) => (
            <span key={item} className="about_text">
              {item.split("")?.map((text, index) => (
                <div className="char" key={index} style={{ display: "inline" }}>
                  {text}
                </div>
              ))}
            </span>
          ))}
          <video
            src="/test6.mp4"
            autoPlay
            loop
            muted
            preload="none"
            className="h-[71px] -mt-[3px] aspect-video char about_text_media"
          ></video>
          <span className="about_text">
            {"SAFARIS".split("")?.map((text, index) => (
              <div className="char" key={index} style={{ display: "inline" }}>
                {text}
              </div>
            ))}
          </span>
        </h1>
        <h1 className="flex flex-wrap items-center gap-x-3">
          {group2?.map((item) => (
            <span key={item} className="about_text">
              {item.split("")?.map((text, index) => (
                <div className="char" key={index} style={{ display: "inline" }}>
                  {text}
                </div>
              ))}
            </span>
          ))}
        </h1>
        <h1 className="flex flex-wrap items-center gap-x-3">
          {group3?.map((item) => (
            <span key={item} className="about_text">
              {item.split("")?.map((text, index) => (
                <div className="char" key={index} style={{ display: "inline" }}>
                  {text}
                </div>
              ))}
            </span>
          ))}
          <Image
            src="/banner_06.jpg"
            alt="wild"
            width={100}
            height={71}
            className="aspect-video h-[71px] -mt-[3px] w-auto object-cover char about_text_media"
          />
          <span className="about_text">
            {"WILD".split("")?.map((text, index) => (
              <div className="char" key={index} style={{ display: "inline" }}>
                {text}
              </div>
            ))}
          </span>
        </h1>
        <h1 className="flex flex-wrap gap-x-3 about_text">
          {"EXPERIENCES & EXPEDITIONS.".split(" ")?.map((item, index) => (
            <div className="flex" key={index}>
              {item.split("")?.map((text, ind) => (
                <div className="char" key={ind} style={{ display: "inline" }}>
                  {text}
                </div>
              ))}
            </div>
          ))}
        </h1>
        <h1 className="flex flex-wrap gap-x-3 about_text">
          {"EXPLORE THE UNCHARTED.".split(" ")?.map((item, index) => (
            <div className="flex" key={index}>
              {item.split("")?.map((text, ind) => (
                <div className="char" key={ind} style={{ display: "inline" }}>
                  {text}
                </div>
              ))}
            </div>
          ))}
        </h1>
        <div className="w-1/2 lg:w-1/4 absolute top-1/2 h-full overflow-hidden item_toTop -translate-y-1/2 right-0 z-[-1]">
          <Image
            src="/about_sec.jpg"
            alt="wild"
            width={100}
            height={71}
            unoptimized
            className="absolute bottom-[-30%] w-full h-[130%] object-cover about_banner"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
