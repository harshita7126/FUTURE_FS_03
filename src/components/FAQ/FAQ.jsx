import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqList } from '../../data/faq';
import './FAQ.css';

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <section className="faq-section">
      <div className="section-container">
        
        <div className="section-header">
          <span className="section-subtitle">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Everything you need to know about our memberships, facilities, programs, and scheduling guidelines.
          </p>
        </div>

        <div className="faq-grid">
          {faqList.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`faq-item glassmorphic-card ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  <span className="faq-question">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-chevron"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="faq-answer-wrapper"
                    >
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
