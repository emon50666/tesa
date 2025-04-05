import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const faqs = [
  {
    question: "DO YOU TRAVEL FOR EVENTS?",
    answer:
      "Yes, I will be happy to travel anywhere in the states to capture your special day. Travel fees may apply.",
  },
  {
    question: "HOW DO I SECURE A BOOKING?",
    answer:
      "To secure your booking, a signed contract and a 25% non-refundable deposit is required. The remaining balance due 2 weeks before the event.",
  },
  {
    question: "HOW FAR IN ADVANCE SHOULD I BOOK YOU?",
    answer:
      "It's best to book as soon as you have your date and venue confirmed. Popular dates can fill up quickly, sometimes a year or more in advance.",
  },
  {
    question: "WHAT HAPPENS IF YOU ARE UNABLE TO ATTEND ON THE DAY OF THE EVENT?",
    answer:
      "In the unlikely event that I cannot attend, I have a network of professional photographers I can call upon. I will ensure a qualified replacement is found.",
  },
  {
    question: "HOW LONG WILL IT TAKE TO RECEIVE THE PHOTOS?",
    answer:
      "You will receive the fully edited photos within 6 weeks after your wedding or engagement. For portrait sessions, 1 week is the wait period.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-white">
      <div className="text-center py-16">
        <h1 className="text-[24px] tracking-[10px] text-[#bba085]">FAQ</h1>
        <h1 className="md:text-[48px]">Any Queries?</h1>
      </div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full flex hover:bg-[#EBE7E0] p-4 justify-between items-center py-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h1 className="text-[28px]">{faq.question}</h1>
              {openIndex === index ? (
                <FiX className="text-[38px] text-[#BAA084]" />
              ) : (
                <FiPlus className="text-[38px] text-[#BAA084]" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-[#EBE7E0] text-[24px]">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
