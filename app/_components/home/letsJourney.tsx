"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const LetsJourney = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
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
          scrub: true,
        },
      });

      // const itemsB = document.querySelectorAll(".item_toBottom");
      // const itemsT = document.querySelectorAll(".item_toTop");
      // const images = document.querySelectorAll(".history_grid-item img");

      // itemsB.forEach((item) => {
      //   tl.to(
      //     item,
      //     {
      //       yPercent: 10,
      //       ease: "power2.inOut",
      //     },
      //     0
      //   );
      // });
      // itemsT.forEach((item) => {
      //   tl.to(
      //     item,
      //     {
      //       yPercent: -10,
      //       ease: "power2.inOut",
      //     },
      //     0
      //   );
      // });
      // images.forEach((img) => {
      //   tl.to(
      //     img,
      //     {
      //       bottom: 0,
      //       ease: "power2.inOut",
      //     },
      //     0
      //   );
      // });

      // const texts = document.querySelectorAll<HTMLElement>(".third_heading");

      // texts.forEach((item) => {
      //   const from = item.dataset.fromPos;
      //   const to = item.dataset.toPos;

      //   gsap.fromTo(
      //     item,
      //     {
      //       x: from,
      //     },
      //     {
      //       x: to,
      //       scrollTrigger: {
      //         trigger: ".text_anim",
      //         start: "top 90%",
      //         end: "bottom top",
      //         scrub: true,
      //       },
      //     }
      //   );
      // });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className="letsJourny_sec relative overflow-hidden">
        <div className="container">
          <div className="h-screen flex items-center justify-center">
            <div className="flex">
              <h2 className="text-center uppercase letsjourney_text">
                OUR JOURN
              </h2>
              <h2 className="text-center uppercase letsjourney_text">
                EY HISTORY
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
      <div className="container relative py-10 text_anim">
        <h2
          data-from-pos="20vw"
          data-to-pos="0"
          className="third_heading mb-10"
        >
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
                Nature's beauty, from starlight to symphony, mesmerizes.
              </h3>
              <p className="sm:w-[70%] sm:text-justify max-sm:line-clamp-6 text-xs mt-2.5">
                Starlight to Symphony was a magical journey into the heart of
                nature. The wilderness serenaded us with its beauty and wildlife
                symphony. Unforgettable encounters and stunning landscapes made
                it a trip of a lifetime!
              </p>
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
                Valleys cradle lakes - nature's embrace soothes and excites.
              </h3>
              <p className="sm:w-[70%] sm:text-justify max-sm:line-clamp-6 text-xs mt-2.5">
                Amidst the gentle curves of valleys, serene lakes rest, cradled
                by nature's comforting embrace. Here, tranquility and excitement
                intertwine, offering a harmonious escape into the beauty of the
                natural world.
              </p>
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
                Exploring forests light up nature's beauty.
              </h3>
              <p className="sm:w-[70%] sm:text-justify max-sm:line-clamp-6 text-xs mt-2.5">
                Forest exploration, a beacon to nature's beauty, each step
                reveals wonders, celebrating its timeless allure.
              </p>
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
                Unveiling the mesmerizing beauty of islands and the sea.
              </h3>
              <p className="sm:w-[70%] sm:text-justify max-sm:line-clamp-6 text-xs mt-2.5">
                Journeying through islands and sea reveals captivating beauty:
                pristine landscapes, serene waters, and breathtaking vistas.
                From secluded coves to vast horizons, every moment is a
                testament to their enduring charm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsJourney;
