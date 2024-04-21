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
              href="https://thrillquest.vercel.app/privacy-policy"
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
            To ensure compliance with legal requirements and to guarantee the
            safety of younger travelers, Wild Travel Agency stipulates the
            following terms for the use of its services:
          </p>
          <p className="mt-5">
            You are eligible to utilize our services if you are at least 13
            years old, provided that this age meets the minimum age requirement
            for consent to data processing under the laws of your jurisdiction.
            However, if you are under the legal age of majority in your region,
            you must have the endorsement of a parent or legal guardian who
            agrees to these terms on your behalf.
          </p>
          <p className="mt-5">
            For travelers under the age of 18, it is mandatory to be accompanied
            by a parent or legal guardian throughout the journey. Parents and
            legal guardians are responsible for supervising their minor children
            and will be held accountable for their actions during the use of our
            services. This policy helps ensure that all adventures with Wild
            Travel Agency are safe and enjoyable for everyone.
          </p>
          <h2 className="trqplcHL">5. Feedback</h2>
          <p>
            We appreciate feedback, comments, ideas, proposals, and suggestions
            for improvements to the Services (“Feedback”). If you choose to
            submit Feedback, you agree that we are free to use it without any
            restriction or compensation to you.
          </p>
          <h2 className="trqplcHL">
            6. Links to Third Party Websites or Resources
          </h2>
          <p>
            The Services may allow you to access third-party websites or other
            resources. We provide access only as a convenience and are not
            responsible for the content, products or services on or available
            from those resources or links displayed on such websites. You
            acknowledge sole responsibility for and assume all risk arising
            from, your use of any third-party resources.
          </p>
          <h2 className="trqplcHL">7. DMCA/Copyright Policy.</h2>
          <p>
            Thrillquest respects copyright law and expects its users to do the
            same. It is Thrillquest’s policy to terminate in appropriate
            circumstances account holders who repeatedly infringe or are
            believed to be repeatedly infringing the rights of copyright
            holders. Please see Thrillquest’s Copyright and IP Policy for
            further information.
          </p>
          <h2 className="trqplcHL">8. Contact Information</h2>
          <p>
            If you have any questions about these Terms or the Services, please
            contact Thrillquest at{" "}
            <HoverText
              href="/"
              className="text-white"
              hoverClass="text-white underline"
            >
              123@thrillquest.vercel.app
            </HoverText>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
