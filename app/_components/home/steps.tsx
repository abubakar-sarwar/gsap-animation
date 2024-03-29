"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Steps = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".text_anim",
          start: "top top",
          scrub: true,
          markers: true,
          pin: true,
        },
      });

      tl.fromTo(
        ".transform_cus",
        {
          rotate: 55,
          scaleX: 0,
        },
        {
          rotate: 55,
          scaleX: 1,
        }
      )
        .fromTo(
          ".border_second",
          {
            scaleY: 0,
          },
          {
            scaleY: 1,
          }
        )
        .fromTo(
          ".embark_step_text",
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
          "<"
        )
        .fromTo(
          ".list_item",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            stagger: 0.05,
          },
          "<"
        );
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <div className="text_anim">
        <div className="container">
          <div className="h-screen">
            <div className="pt-10 mb-[70px]">
              <h1>Give yourself the gift of anywhere</h1>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <div className="h-[20px] w-[2px] bg-white mr-5" />
                <div className="absolute -bottom-5 left-10 border-b w-[74px] transform_cus"></div>
                <div className="absolute top-0 left-0 translate-x-[82px] translate-y-[100px]">
                  <div className="relative pl-5 whitespace-nowrap">
                    <span className="absolute top-0 left-0 border-l h-full origin-top border_second" />
                    <h2 className="mb-5 embark_step_text">Register</h2>
                    <ol className="pl-2.5 list-decimal space-y-2">
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
              <div className="line w-[40%] shrink-0"></div>
              <div className="relative">
                <div className="h-[20px] w-[2px] bg-white mx-5" />
                <div className="absolute -bottom-5 left-10 border-b w-[74px] transform_cus"></div>
                <div className="absolute top-0 left-0 translate-x-[82px] translate-y-[100px]">
                  <div className="relative pl-5 whitespace-nowrap">
                    <span className="absolute top-0 left-0 border-l h-full origin-top border_second" />
                    <h2 className="mb-5 embark_step_text">Register</h2>
                    <ol className="pl-2.5 list-decimal space-y-2">
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
              <div className="line w-[40%] shrink-0"></div>
              <div className="h-[20px] w-[2px] bg-white mx-5" />
              <div className="line w-[40%] shrink-0"></div>
              <div className="h-[20px] w-[2px] bg-white mx-5" />
              <div className="line w-[40%] shrink-0"></div>
              <div className="h-[20px] w-[2px] bg-white ml-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[500px]"></div>
    </section>
  );
};

export default Steps;
