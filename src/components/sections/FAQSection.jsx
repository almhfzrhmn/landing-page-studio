import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { faqItems } from '../../data/siteData';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq">
      <SectionHeading 
        label="FAQ" 
        title="Frequently Asked Questions" 
        subtitle="Got questions? We've got answers. If you don't see your question here, feel free to reach out to us directly."
      />
      
      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className={`border rounded-2xl mb-4 overflow-hidden transition-all duration-300 ${
                isOpen ? 'border-[#b58709]/30 bg-white/5' : 'border-white/10 hover:border-white/20'
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b58709] rounded-2xl"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-poppins text-sm md:text-base font-medium text-white pr-4">
                  {item.question}
                </span>
                <span className={`text-[#b58709] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <div>
                  <div className="p-5 pt-0 font-poppins text-sm text-white/60 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;

