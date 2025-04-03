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
      question: "How do I register on the platform?",
      answer:
        "Click Sign Up as a Student, fill in your academic details, and verify your email via the link sent to your inbox.",
      link: "#",
    },
    {
      question: "Where can I find internships/courses?",
      answer:
        "Check the Resources tab for curated links to platforms like Coursera, GFG, and Udemy.",
      link: "#",
    },
    {
      question: "How do we shortlist candidates?",
      answer:
        "Access the Drive Management tab to view registered student profiles, filter by skills/CGPA, and download applicant data.",
      link: "#",
    },
  ];

  return (
    <div className="mx-14  my-5 p-6 bg-white border-2 border-gray-100  shadow-lg dark:bg-white-100" id="faq">
      <h1 className="text-2xl font-semibold text-black-800 dark:text-black mb-6">
        Frequently Asked Questions
      </h1>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-300 dark:border-black-700">
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
