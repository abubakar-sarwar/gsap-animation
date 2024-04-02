"use client";

import { useRef, useState } from "react";
import FaqsAccordian from "./faqsAccordian";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type FaqsTypes = {
  _id: string;
  question: string;
  answer: string;
};

const Faqs = () => {
  const [openId, setOpenId] = useState<string>("-1");

  const faqs: FaqsTypes[] = [
    {
      _id: "1",
      question: "What are the tour options?",
      answer:
        "We provide a variety of wilderness experiences that include exciting wildlife excursions in addition to other things. Explore breathtaking paths, camp beneath the stars, or partake in thrilling experiences. Find the best experience possible for your trip into the outdoors.",
    },
    {
      _id: "2",
      question: "How do I book a tour?",
      answer:
        "Booking a tour is easy! Simply navigate to our website, select your desired destination, customize your adventure, and proceed with the booking process.",
    },
    {
      _id: "3",
      question: "Are there age restrictions for the tours?",
      answer:
        "Age restrictions may apply to certain tours for safety reasons. Please refer to the tour details or contact us for specific information regarding age requirements.",
    },
    {
      _id: "4",
      question: "Is travel insurance required for the tour?",
      answer:
        "While travel insurance is not mandatory, we highly recommend obtaining adequate coverage to protect against unexpected events such as trip cancellations, medical emergencies, or loss of belongings.",
    },
    {
      _id: "5",
      question: "Are pets allowed on the tours?",
      answer:
        "Pets are generally not permitted on our wilderness tours due to safety and environmental considerations. However, service animals may be accommodated with prior arrangement and verification.",
    },
    {
      _id: "6",
      question: "How can I contact customer support for further assistance?",
      answer:
        "You can reach our customer support team via email, phone, or live chat on our website. We are available to assist you with any questions or concerns you may have regarding your tour experience.",
    },
  ];

  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".stagger_faq",
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
            start: "top 65%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className="container" id="faqAnimate">
        {faqs?.map((item) => (
          <div className="stagger_faq" key={item?._id}>
            <FaqsAccordian data={item} openId={openId} setOpenId={setOpenId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
