"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Embark = () => {
  useGSAP(() => {
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
  });

  return (
    <section className="py-[100px]">
      <div className="pl-20 mb-[500px] bg-drak-body text_anim">
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
  );
};

export default Embark;
