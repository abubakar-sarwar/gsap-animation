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
        <h1 className="font-bold text-center policyTitle">
          Terms & Conditions
        </h1>
        <div id="faqAnimate" className="w-3/4 mx-auto trqplc text-font-dark">
          <p className="my-10">Last Updated: May 3, 2022</p>
          <p>
            Please read these Terms of Service (the “
            <HoverText
              href="http://localhost:3000/terms-conditions"
              className="text-white"
              hoverClass="text-white underline"
            >
              Terms
            </HoverText>
            ”) and our{" "}
            <HoverText
              href="https://thrillquest.vercel.app/privacy-policy"
              className="text-white"
              hoverClass="text-white underline"
            >
              Privacy Policy
            </HoverText>{" "}
            (“
            <HoverText
              href="https://thrillquest.vercel.app/"
              className="text-white"
              hoverClass="text-white underline"
            >
              Privacy Policy
            </HoverText>
            ”) carefully because they govern your use of the website located at{" "}
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
            ”). To make these Terms easier to read, the Site, our services and
            App are collectively called the “Services.”
          </p>
          <h2 className="trqplcHL">1. Agreement to Terms</h2>
          <p>
            By using our Services, you agree to be bound by these Terms. If you
            don’t agree to be bound by these Terms, do not use the Services.
          </p>
          <h2 className="trqplcHL">2. Privacy Policy</h2>
          <p>
            Please review our Privacy Policy, which also governs your use of the
            Services, for information on how we collect, use, and share your
            information.
          </p>
          <h2 className="trqplcHL">
            3. Changes to these Terms or the Services
          </h2>
          <p>
            We may update the Terms from time to time in our sole discretion. If
            we do, we’ll let you know by posting the updated Terms on the Site,
            to the App and/or may also send other communications. It’s important
            that you review the Terms whenever we update them, or you use the
            Services. If you continue to use the Services after we have posted
            updated Terms, it means that you accept and agree to the changes. If
            you don’t agree to be bound by the changes, you may not use the
            Services anymore. Because our Services are evolving over time, we
            may change or discontinue all or any part of the Services, at any
            time and without notice, at our sole discretion.
          </p>
          <h2 className="trqplcHL">4. Who May Use the Services?</h2>
          <p>
            You may use the Services only if you are at least 13 years of age
            (or such other minimum age at which you can provide consent to data
            processing under the laws of your territory), and not otherwise
            barred from using the Services under applicable law. If you are over
            13 years of age but under the age of majority in your respective
            jurisdiction, you hereby represent and warrant that your parent or
            legal guardian has read these Terms and accepts them on your behalf.
            Parents and legal guardians are responsible for the acts of their
            minor children when using the Services, whether or not the parent or
            guardian has authorized such acts.
          </p>
          {/* <h2 className="trqplcHL">5. SECURITY OF YOUR INFORMATION</h2>
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
          </p> */}
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
