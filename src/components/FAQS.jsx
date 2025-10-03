import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How quickly can we get started with HotelPro?',
      answer: 'Most hotels are up and running within 24-48 hours. Our dedicated implementation team will handle data migration, staff training, and system configuration to ensure a smooth transition.',
    },
    {
      question: 'Does HotelPro integrate with our existing systems?',
      answer: 'Yes, HotelPro integrates with 100+ popular hotel management tools including PMS systems, channel managers, payment processors, and booking engines. Our API-first approach ensures seamless connectivity.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 customer support through multiple channels including live chat, phone, and email. Each customer gets a dedicated success manager and access to our comprehensive knowledge base and training resources.',
    },
    {
      question: 'Is my data secure with HotelPro?',
      answer: 'Absolutely. We use enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with GDPR, PCI DSS, and other industry standards.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const element = document.getElementById('FAQ');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="FAQ" className="py-20 bg-[#faf7f2]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#562d0b] mb-4">
            Frequently Asked <span className="block text-[#8b4513]">Questions</span>
          </h2>
          <p className="text-[#8d561e] max-w-xl mx-auto text-lg">
            Got questions? We've got answers. Here are the most common ones our customers ask.
          </p>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-md mb-4 overflow-hidden transition-shadow hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-coffee-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-[#4b2e13] pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-coffee-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-coffee-500" />
                )}
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="px-6 pb-6">
                  <p className="text-[#6b4b2d]">{faq.answer}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <p className="text-[#864312] mb-4 font-medium">Still have questions?</p>
          <button
            onClick={scrollToContact}
            className="bg-[#864312] text-white px-8 py-3 rounded-full hover:bg-[#6a3711] transition-colors"
          >
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;