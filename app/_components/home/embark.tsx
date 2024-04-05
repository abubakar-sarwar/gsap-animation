"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

const Embark = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

      const texts = document.querySelectorAll<HTMLElement>(".embark_text");

      texts.forEach((item) => {
        const from = item.dataset.fromPos;
        const to = item.dataset.toPos;

        gsap.fromTo(
          item,
          {
            x: from,
          },
          {
            x: to,
            scrollTrigger: {
              trigger: ".text_anim",
              start: "top 90%",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      const rows = document.querySelectorAll<HTMLElement>(".embark_row");

      rows.forEach((item) => {
        const from = item.dataset.fromPos;
        const to = item.dataset.toPos;

        gsap.fromTo(
          item,
          {
            x: from,
          },
          {
            x: to,
            scrollTrigger: {
              trigger: ".row_anim",
              start: "top 90%",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: container }
  );

  const images = [
    "/banner_01.jpg",
    "/banner_02.jpg",
    "/banner_03.jpg",
    "/banner_04.jpg",
    "/banner_05.jpg",
    "/banner_06.jpg",
  ];

  return (
    <>
      <section ref={container}>
        <div className="relative py-[100px] row_anim">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 space-y-3">
            <div
              data-from-pos="-15vw"
              data-to-pos="0"
              className="flex space-x-3 embark_row"
            >
              {images?.map((item, index) => (
                <Image
                  src={item}
                  key={index}
                  alt="image"
                  width={100}
                  height={100}
                  className="w-[25%] shrink-0 h-auto aspect-video object-cover"
                />
              ))}
            </div>
            <div
              data-from-pos="-15vw"
              data-to-pos="-30vw"
              className="flex space-x-3 embark_row"
            >
              {images?.map((item, index) => (
                <Image
                  src={item}
                  key={index}
                  alt="image"
                  width={100}
                  height={100}
                  className="w-[25%] shrink-0 h-auto aspect-video object-cover"
                />
              ))}
            </div>
          </div>
          <div className="pl-20 bg-drak-body text_anim">
            <h1 data-from-pos="50vw" data-to-pos="0" className="embark_text">
              EMBARK
            </h1>
            <h1 data-from-pos="0" data-to-pos="30vw" className="embark_text">
              ON THIS JOURNEY
            </h1>
            <h1 data-from-pos="40vw" data-to-pos="15vw" className="embark_text">
              TOGETHER
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Embark;
