import { useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";

const FaqsAccordian = ({ data, openId, setOpenId }: any) => {
  const contentRefs = useRef<HTMLDivElement | null>(null);

  const handleSetHeight = () => {
    setOpenId(openId === data?._id ? null : data?._id);
  };

  useEffect(() => {
    if (contentRefs.current) {
      contentRefs.current.style.height =
        openId === data?._id ? `${contentRefs.current.scrollHeight}px` : "0";
    }
  }, [openId]);

  return (
    <div
      onClick={handleSetHeight}
      className="relative select-none grid grid-cols-1 md:grid-cols-2 gap-10 py-5 sm:py-20 border-b-2 cursor-pointer border-white group"
    >
      <p className="duration-150 faq_question group-hover:text-primary">
        {data?.question}
      </p>
      <div ref={contentRefs} className="duration-150 h-0 overflow-hidden">
        <p className="faq_answer">{data.answer}</p>
      </div>
      {openId !== data?._id && (
        <div className="absolute top-1/2 right-5 sm:-translate-y-1/2 faq_question">
          <GoArrowRight strokeWidth={0.1} />
        </div>
      )}
    </div>
  );
};

export default FaqsAccordian;
