import { useState } from "react";
import plus from "../elements/plus.png";
import minus from "../elements/minus.png";


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Flowbite?",
      answer:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
      link: "/docs/getting-started/introduction/",
    },
    {
      question: "Is there a Figma file available?",
      answer:
        "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
      link: "https://flowbite.com/figma/",
    },
    {
      question: "What are the differences between Flowbite and Tailwind UI?",
      answer:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
      link: "https://flowbite.com/pro/",
    },
  ];

  return (
    <div className="p-6 bg-white  shadow-lg dark:bg-white-100" id="faq">
      <h1 className="text-2xl font-semibold text-black-800 dark:text-black mb-6">
        Frequently Asked Questions
      </h1>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-200 dark:border-black-700">
          <h2>
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full py-4 text-lg font-medium text-black-400 dark:text-black-400"
            >
              <span>{faq.question}</span>
              <img
                src={openIndex === index ? minus : plus}
                alt="toggle-icon"
                className="w-5 h-5"
              />
            </button>
          </h2>

          {openIndex === index && (
            <div className="p-4 text-black-600 dark:text-black-500">
              <p className="mb-2">{faq.answer}</p>
              {faq.link && (
                <a href={faq.link} className="text-blue-600 dark:text-blue-500 hover:underline">
                  Read more
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
