"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";

const PreLoader = () => {
  useEffect(() => {
    const animate = (
      counter: HTMLElement,
      duration: number,
      delay: number = 0
    ) => {
      const numHeight = counter.querySelector(".num")?.clientHeight ?? 0;
      const totalDistance =
        (counter.querySelectorAll(".num")?.length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    };

    const loader = document.querySelector("#loader") as HTMLElement;
    const counter1 = loader?.querySelector(".counter-1") as HTMLElement;
    const counter2 = loader?.querySelector(".counter-2") as HTMLElement;
    const counter3 = loader?.querySelector(".counter-3") as HTMLElement;

    if (counter3) {
      animate(counter3, 2);
      animate(counter2, 2.5);
      animate(counter1, 0.5, 1.5);
    }
  }, []);

  return (
    <div id="loader" className="fixed inset-0 z-50 bg-drak-body">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 counter text-white">
        <div className="counter-1">
          <div className="num">0</div>
          <div className="num left-20 relative">1</div>
        </div>
        <div className="counter-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="num">
              {index}
            </div>
          ))}
          <div className="num">0</div>
        </div>
        <div className="counter-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="num">
              {index}
            </div>
          ))}
          <div className="num">0</div>
        </div>
      </div>
      <div className="font-bold flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 loading_text text-white">
        Loading..
      </div>
    </div>
  );
};

export default PreLoader;
