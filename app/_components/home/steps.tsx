"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Steps = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
      const texts =
        document.querySelectorAll<HTMLElement>(".embark_text_title");

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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".text_anim",
          start: "center 50%",
          end: "+=2500",
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      });

      const steps = document.querySelectorAll<HTMLElement>(".step");

      steps.forEach((step, index) => {
        const delay = index * 1.5;

        tl.fromTo(
          step.querySelector(".transform_cus"),
          {
            rotate: 55,
            scaleX: 0,
          },
          {
            rotate: 55,
            scaleX: 1,
          },
          delay
        )
          .fromTo(
            step.querySelector(".border_second"),
            {
              scaleY: 0,
            },
            {
              scaleY: 1,
            },
            `stepStart+=${delay}`
          )
          .fromTo(
            step.querySelector(".embark_step_text"),
            {
              opacity: 0,
            },
            {
              opacity: 1,
            },
            `stepStart+=${delay}`
          )
          .fromTo(
            step.querySelectorAll(".list_item"),
            {
              opacity: 0,
            },
            {
              opacity: 1,
              stagger: 0.05,
            },
            `stepStart+=${delay}`
          )
          .fromTo(
            step.querySelectorAll(".circle_mouse"),
            {
              visibility: "hidden",
            },
            {
              visibility: "visible",
            },
            `<`
          );
      });

      tl.to(
        ".all_steps",
        {
          x: "-120%",
          duration: 5,
          ease: "sine.out",
          delay: 2,
        },
        0
      );

      document.addEventListener("mousemove", (e) => {
        document.querySelectorAll(".circle_mouse").forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const deltaX = e.clientX - rect.left - rect.width / 2;
          const deltaY = e.clientY - rect.top - rect.height / 2;

          gsap.to(item, {
            x: deltaX,
            y: deltaY,
            duration: 0.6,
            ease: "power2.out", // You can adjust the easing function as needed
          });
        });
      });
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <div className="text_anim">
        <div className="container">
          <div className="h-screen">
            <div className="py-[50px]">
              <h1
                data-from-pos="10vw"
                data-to-pos="0"
                className="embark_text_title"
              >
                Give yourself the gift of anywhere
              </h1>
            </div>
            <div className="flex items-center all_steps">
              <div className="relative step">
                <div className="h-[20px] w-[2px] bg-white mr-5" />
                <div className="absolute -bottom-5 left-10 border-b w-[74px] transform_cus"></div>
                <div className="absolute top-0 left-0 translate-x-[82px] translate-y-[100px]">
                  <div className="relative group pl-5 whitespace-nowrap">
                    <div className="circle_mouse opacity-0 group-hover:opacity-100 duration-150 z-10">
                      <div className="aspect-square p-2.5 text-center flex items-center justify-center rounded-full bg-primary text-drak-body">
                        <span>Register</span>
                      </div>
                    </div>
                    <span className="absolute top-0 left-0 border-l h-full origin-top border_second" />
                    <h2 className="mb-5 embark_step_text">Register</h2>
                    <ol className="pl-7 list-decimal space-y-2">
                      <li className="list_item">Visit registration page.</li>
                      <li className="list_item">
                        Enter info & create password.
                      </li>
                      <li className="list_item">Agree to terms.</li>
                      <li className="list_item">Verify email.</li>
                      <li className="list_item">
                        Congratulations! You're registered.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="line w-[50%] shrink-0"></div>
              <div className="relative step">
                <div className="h-[20px] w-[2px] bg-white mx-5" />
                <div className="absolute -bottom-5 left-10 border-b w-[74px] transform_cus"></div>
                <div className="absolute top-0 left-0 translate-x-[82px] translate-y-[100px]">
                  <div className="relative group pl-5 whitespace-nowrap">
                    <div className="circle_mouse opacity-0 group-hover:opacity-100 duration-150 absolute top-1/2 left-1/2 z-10">
                      <div className="aspect-square p-2.5 text-center flex items-center justify-center rounded-full bg-primary text-drak-body">
                        <span>Discover</span>
                      </div>
                    </div>
                    <span className="absolute top-0 left-0 border-l h-full origin-top border_second" />
                    <h2 className="mb-5 embark_step_text">FIND A LOCATION</h2>
                    <ol className="pl-7 list-decimal space-y-2">
                      <li className="list_item">Explore destinations.</li>
                      <li className="list_item">Select preferred location.</li>
                      <li className="list_item">
                        Customize adventure/service.
                      </li>
                      <li className="list_item">Book tour.</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="line w-[50%] shrink-0"></div>
              <div className="relative step">
                <div className="h-[20px] w-[2px] bg-white mx-5" />
                <div className="absolute -bottom-5 left-10 border-b w-[74px] transform_cus"></div>
                <div className="absolute top-0 left-0 translate-x-[82px] translate-y-[100px]">
                  <div className="relative pl-5 whitespace-nowrap">
                    <span className="absolute top-0 left-0 border-l h-full origin-top border_second" />
                    <h2 className="mb-5 embark_step_text">PAYMENT</h2>
                    <ol className="pl-7 list-decimal space-y-2">
                      <li className="list_item">Review booking details.</li>
                      <li className="list_item">Choose payment method.</li>
                      <li className="list_item">Verify & complete.</li>
                      <li className="list_item">Receive confirmation.</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="line w-[50%] shrink-0"></div>
              <div className="relative step">
                <div className="size-[20px] rounded-full bg-white mx-5" />
                <div className="absolute top-0 left-0 translate-y-[40px]">
                  <div className="relative whitespace-nowrap">
                    <h2 className="mb-5 embark_step_text embark_text_ready">
                      GET READY AND ENJOY
                    </h2>
                    <video
                      src="/test6.mp4"
                      autoPlay
                      loop
                      muted
                      preload="none"
                      style={{ maxWidth: "initial" }}
                      className="aspect-video w-[110%] object-cover list_item"
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
