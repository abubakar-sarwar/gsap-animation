"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Embark = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
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
    },
    { scope: container }
  );

  return (
    <>
      <section className="py-[100px]" ref={container}>
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
      </section>
      <section>
        <div className="container">
          <div className="h-screen">
            <div className="flex items-center">
              <div className="h-[20px] w-[2px] bg-white mr-5" />
              <div className="line grow"></div>
              <div className="h-[20px] w-[2px] bg-white mx-5" />
              <div className="line grow"></div>
              <div className="h-[20px] w-[2px] bg-white mx-5" />
              <div className="line grow"></div>
              <div className="h-[20px] w-[2px] bg-white mx-5" />
              <div className="line grow"></div>
              <div className="h-[20px] w-[2px] bg-white ml-5" />
              <div className="line grow"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-[500px]"></div>
    </>
  );
};

export default Embark;
