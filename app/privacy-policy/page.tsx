"use client";
import React, { useRef } from "react";
import { HoverText } from "../_components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

const PrivacyPolicyPage = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

      const elements = document.querySelectorAll(
        "#faqAnimate > *, #faqAnimate ul > li"
      );

      gsap.fromTo(
        elements,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: "#faqAnimate",
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );

      const tl = gsap.getById("preloader");

      if (tl) {
        if (tl.progress() === 1) {
          runAnimations();
        } else {
          tl.eventCallback("onComplete", () => {
            runAnimations();
          });
        }
      } else {
        runAnimations();
      }

      const elem = document.querySelector(".policyTitle");
      const elem2 = document.querySelector("#faqAnimate");

      gsap.set(elem, {
        scale: 0.5,
        opacity: 0,
      });
      gsap.set(elem2, {
        opacity: 0,
        y: 50,
      });

      function runAnimations() {
        const elem = document.querySelector(".policyTitle");
        const elem2 = document.querySelector("#faqAnimate");
        const tl = gsap.timeline();
        tl.to(elem, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }).to(
          elem2,
          {
            opacity: 1,
            y: 0,
          },
          "<=0.2"
        );
      }
    },
    { scope: container }
  );

  return (
    <div ref={container} className="pt-32">
      <div className="container">
        <h1 className="font-bold text-center policyTitle">Privacy Policy</h1>
        <div id="faqAnimate" className="w-3/4 mx-auto trqplc text-font-dark">
          <p className="my-10">Last Updated: May 3, 2022</p>
          <p>
            ThrillQuest provides a website located at{" "}
            <HoverText
              href="https://thrillquest.vercel.app/"
              className="text-white"
              hoverClass="text-white underline"
            >
              thrillquest.vercel.app
            </HoverText>{" "}
            (the “
            <HoverText
              href="https://thrillquest.vercel.app/"
              className="text-white"
              hoverClass="text-white underline"
            >
              Site
            </HoverText>
            ”) and corresponding mobile application (the “
            <HoverText
              href="https://thrillquest.vercel.app/"
              className="text-white"
              hoverClass="text-white underline"
            >
              App
            </HoverText>
            ”) which allows users to explore and share thrilling travel
            experiences. To make this Privacy Notice easier to read, the Site,
            our services, and App are collectively referred to as the
            “Services.” This Privacy Notice is designed to help you understand
            how we collect, use, and share your personal information and to help
            you understand and exercise your privacy rights.
          </p>
          <h2 className="trqplcHL">1. SCOPE</h2>
          <p>
            This Privacy Notice applies to the collection, use, and disclosure
            of personal information through the ThrillQuest website (
            <HoverText
              href="https://thrillquest.vercel.app/"
              className="text-white"
              hoverClass="text-white underline"
            >
              thrillquest.vercel.app
            </HoverText>
            ) (the “
            <HoverText
              href="https://thrillquest.vercel.app/"
              className="text-white"
              hoverClass="text-white underline"
            >
              Site
            </HoverText>
            ”).
          </p>
          <h2 className="trqplcHL">2. PERSONAL INFORMATION WE COLLECT</h2>
          <p>
            We collect various types of personal information from you when you
            use our Site, including but not limited to:
          </p>
          <ul className="trqplcLs">
            <li>Contact information (e.g., name, email address)</li>
            <li>Demographic information (e.g., age, gender, location)</li>
            <li>User-generated content (e.g., reviews, photos)</li>
          </ul>
          <p>
            For a detailed overview of the types of personal information we
            collect and how we collect it, please refer to our full Privacy
            Notice.
          </p>
          <h2 className="trqplcHL">3. Information Collected Automatically</h2>
          <p>
            We may collect personal information automatically when you use our
            Services:
          </p>
          <ul className="trqplcLs">
            <li>
              <span className="text-white">Automatic Data Collection.</span> We
              may collect certain information automatically when you use our
              Services, such as your Internet protocol (IP) address, user
              settings, cookie identifiers, browser or device information,
              location information (including approximate location derived from
              IP address), and Internet service provider. We may also
              automatically collect information regarding your use of our
              Services, such as pages that you visit before, during, and after
              using our Services, information about the links you click, the
              types of content you interact with, the frequency and duration of
              your activities, and other information about how you use our
              Services.
            </li>
            <li>
              <span className="text-white">Location Information.</span> We may
              collect precise location information when you use our Services.
            </li>
            <li>
              <span className="text-white">
                Cookies, Pixel Tags/Web Beacons, and Other Technologies.{" "}
              </span>{" "}
              We, as well as third parties that provide content, advertising, or
              other functionality on our Services, may use cookies, pixel tags,
              local storage, and other technologies (“Technologies”) to
              automatically collect information through your use of our
              Services.
            </li>
            <li>
              <span className="text-white">Cookies:</span> Cookies are small
              text files placed in device browsers that store preferences and
              facilitate and enhance your experience.
            </li>
          </ul>
          <h2 className="trqplcHL">4. HOW WE USE YOUR INFORMATION</h2>
          <p>
            We use the personal information we collect for various purposes,
            including:
          </p>
          <ul className="trqplcLs">
            <li>Providing and improving our Site</li>
            <li>Personalizing your experience</li>
            <li>Communicating with you</li>
            <li>Marketing and advertising</li>
          </ul>
          <h2 className="trqplcHL">5. SECURITY OF YOUR INFORMATION</h2>
          <p>
            We are committed to protecting the security of your personal
            information and employ various measures to safeguard it. For details
            on our security practices, please refer to our full Privacy Notice.
          </p>
          <h2 className="trqplcHL">6. RETENTION OF PERSONAL INFORMATION</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Notice unless a longer
            retention period is required or permitted by law. For details on our
            retention practices, please refer to our full Privacy Notice.
          </p>
          <h2 className="trqplcHL">7. CONTACT US</h2>
          <p>
            If you have any questions about our privacy practices or this
            Privacy Notice, or to exercise your rights as detailed in this
            Privacy Notice, please contact us at:
          </p>
          <p className="mt-10">ThrillQuest</p>
          <p>123 North XYZ St</p>
          <HoverText
            href="https://thrillquest.vercel.app/"
            className="text-white"
            hoverClass="text-white underline"
          >
            123@thrillquest.vercel.app
          </HoverText>
          <p>(+92) 300-000000</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
