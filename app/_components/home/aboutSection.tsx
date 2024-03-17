"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const AboutSection = () => {
  const group1 = ["FROM", "THRILLING"];
  const group2 = ["TO", "DARING", "EXPEDITIONS,"];
  const group3 = ["SPECIALIZING", "IN"];

  const container = useRef(null);

  useGSAP(
    () => {
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
    },
    { scope: container }
  );

  return (
    <div ref={container} className="container py-[150px]">
      <div className="relative trigger_anim">
        <h1 className="flex items-center gap-3">
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
            className="h-[71px] -mt-[3px] aspect-video about_text"
          ></video>
          <span className="about_text">
            {"SAFARIS".split("")?.map((text, index) => (
              <div className="char" key={index} style={{ display: "inline" }}>
                {text}
              </div>
            ))}
          </span>
        </h1>
        <h1 className="flex items-center gap-3">
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
        <h1 className="flex items-center gap-3">
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
            className="aspect-video h-[71px] w-auto object-cover about_text"
          />
          <span className="about_text">
            {"WILD".split("")?.map((text, index) => (
              <div className="char" key={index} style={{ display: "inline" }}>
                {text}
              </div>
            ))}
          </span>
        </h1>
        <h1 className="about_text">
          {"EXPERIENCES & EXPEDITIONS.".split("")?.map((text, index) => (
            <div className="char" key={index} style={{ display: "inline" }}>
              {text}
            </div>
          ))}
        </h1>
        <h1 className="about_text">
          {"EXPLORE THE UNCHARTED.".split("")?.map((text, index) => (
            <div className="char" key={index} style={{ display: "inline" }}>
              {text}
            </div>
          ))}
        </h1>
        <div
          data-lag="0.3"
          data-speed="1"
          className="absolute top-1/2 -translate-y-1/2 right-0 z-[-1] w-1/4"
        >
          <Image
            src="/about_sec.jpg"
            alt="wild"
            width={100}
            height={71}
            unoptimized
            className="h-auto w-full object-cover aspect_portrate"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
