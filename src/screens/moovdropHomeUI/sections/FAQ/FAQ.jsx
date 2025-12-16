import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "When will the platform launch?",
    answer: (
      <>
        We are preparing for launch soon,{" "}
        <a
          href="https://www.moovdrop.com/pre-register"
          rel="noopener noreferrer"
          target="_blank"
          className="underline text-moovdrop-primary hover:text-moovdrop-primary-dark"
        >
          pre-register
        </a>
        {" "}to be the first to find out and receive a discount of your first move!
      </>
    ),
  },
  {
    id: 2,
    question: "How do I know what vehicle size I need for my item?",
    answer: "You can use our vehicle selection guide in the app, which helps you choose the right vehicle based on your item's dimensions and weight. We also provide detailed specifications for each vehicle type on our website.",
  },
  {
    id: 3,
    question: "Am I able to see where the driver is during my delivery after my item/s are picked up?",
    answer: "Yes! Our app provides real-time tracking so you can see exactly where your driver is at all times during the delivery. You'll receive updates from pickup to drop-off.",
  },
  {
    id: 4,
    question: "How quick can I have an item/s moved?",
    answer: "Delivery times vary based on driver availability and distance. For same-day delivery, we typically match you with a driver within 1-2 hours. You can schedule deliveries in advance for specific dates and times.",
  },
  {
    id: 5,
    question: "What will ensure me that my item/s are in safe hands during my delivery?",
    answer: "All our drivers are verified, background-checked, and insured. We also provide insurance coverage for your items during transit. You can track your delivery in real-time and communicate directly with your driver through the app.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center gap-8 md:gap-12 px-4 md:px-[124.84px] py-20 relative w-full">
      <h2 className="font-rem font-normal text-text-primary text-3xl md:text-4xl lg:text-5xl text-center px-4 leading-tight md:leading-[55px]">
        Frequently Asked Question
      </h2>

      <div className="flex flex-col items-center gap-2.5 px-4 md:px-[78px] py-8 md:py-[45px] relative w-full bg-white rounded-moovdrop-sm shadow-moovdrop">
        <div className="flex flex-col w-full max-w-[812px] items-start gap-0 relative">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.id} className="w-full">
                <button
                  onClick={() => toggleItem(index)}
                  className="flex items-center justify-between w-full py-4 px-0 text-left hover:bg-moovdrop-cream/30 transition-colors rounded"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <p className={`font-dm-sans font-bold text-base md:text-lg leading-snug pr-4 ${
                    isOpen ? "text-moovdrop-primary" : "text-text-primary"
                  }`}>
                    {item.question}
                  </p>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-4 h-4 transition-transform duration-moovdrop-base ${
                        isOpen ? "rotate-180" : ""
                      } ${isOpen ? "text-moovdrop-primary" : "text-text-secondary"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={`overflow-hidden transition-all duration-moovdrop-slow ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-4 pt-2">
                    <p className="font-dm-sans font-normal text-text-secondary text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>

                {index < faqData.length - 1 && (
                  <div className="w-full h-px bg-moovdrop-cream my-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

