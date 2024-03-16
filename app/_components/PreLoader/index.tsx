"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const PreLoader = () => {
  const loaderRef = useRef(null);

  useGSAP(
    () => {
      const animate = (counter: HTMLElement, togo: number = 0) => {
        const numHeight = counter.querySelector(".num")?.clientHeight ?? 0;
        const totalDistance = togo * numHeight;

        gsap.to(counter, {
          y: -totalDistance,
        });
      };

      const generateRandomWidths = () => {
        const totalWidth = 300;
        const numberOfDivs = 3;
        const minWidth = 70;
        const widths = [];
        let remainingWidth = totalWidth;

        for (let i = 0; i < numberOfDivs - 1; i++) {
          const randomWidth = Math.floor(
            Math.random() *
              (remainingWidth - minWidth * (numberOfDivs - i - 1) - minWidth) +
              minWidth
          );
          widths.push(randomWidth);
          remainingWidth -= randomWidth;
        }

        const lastWidth = Math.min(150, Math.max(minWidth, remainingWidth));
        widths.push(lastWidth);

        return widths;
      };

      const widths = generateRandomWidths();
      const loader = document.querySelector("#loader") as HTMLElement;
      const counter1 = loader?.querySelector(".counter-1") as HTMLElement;
      const counter2 = loader?.querySelector(".counter-2") as HTMLElement;
      const counter3 = loader?.querySelector(".counter-3") as HTMLElement;

      const tl = gsap.timeline({
        id: "preloader",
        onUpdate: function () {
          const bar1Width = gsap.getProperty(".bar_1", "width") as number;
          const bar2Width = gsap.getProperty(".bar_2", "width") as number;
          const bar3Width = gsap.getProperty(".bar_3", "width") as number;
          const totalWidthCompleted = bar1Width + bar2Width + bar3Width;
          const totalWidth = widths.reduce((acc, width) => acc + width, 0);
          const percentageCompleted = Math.round(
            (totalWidthCompleted / totalWidth) * 100
          );
          const percentageString = percentageCompleted
            .toString()
            .padStart(3, "0");
          const unit = parseInt(percentageString.charAt(2));
          const ten = parseInt(percentageString.charAt(1));
          const hundred = parseInt(percentageString.charAt(0));
          animate(counter1, hundred);
          animate(counter2, ten);
          animate(counter3, unit);
        },
      });

      tl.to(".bar_1", {
        width: widths[0],
        duration: 2,
        ease: "power2.inOut",
      })
        .to(".bar_2", {
          width: widths[1],
          duration: 2,
          ease: "power2.inOut",
        })
        .to(".bar_3", {
          width: widths[2],
          duration: 2,
          ease: "power2.inOut",
        })
        .to(".bars", {
          background: "#080808",
          borderColor: "#080808",
        })
        .to(".bar_1 .bar_2 .bar_3", {
          opacity: 0,
        })
        .to(
          ".bars",
          {
            rotate: 50,
            scale: 40,
            duration: 1,
            ease: "power2.inOut",
          },
          "+=0.2"
        )
        .to("#loader", {
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut",
        });
    },
    { scope: loaderRef, revertOnUpdate: true }
  );

  return (
    <div ref={loaderRef}>
      <div
        id="loader"
        className="fixed inset-0 z-50 bg-white pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 counter text-drak-body">
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
          <div className="bars border rounded-md overflow-hidden flex w-[300px] h-[50px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white">
            <div className="bar_1 w-0 h-full bg-drak-body"></div>
            <div className="bar_2 w-0 h-full bg-drak-body"></div>
            <div className="bar_3 w-0 h-full bg-drak-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
