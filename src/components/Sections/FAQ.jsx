import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { faqs } from '../../data/shopData';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-slate-200/60 dark:border-slate-800/80 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-4.5 text-left font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-50/50 dark:hover:bg-slate-850/30 transition-colors group cursor-pointer"
      >
        <span className="flex items-center gap-3 pr-4 text-sm sm:text-base group-hover:text-primary dark:group-hover:text-accent transition-colors leading-snug">
          <HelpCircle className="w-5 h-5 text-primary/70 dark:text-accent/70 shrink-0" />
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-slate-400 shrink-0 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-primary dark:text-accent' : ''
          }`} 
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-450 border-t border-slate-50 dark:border-slate-850 leading-relaxed font-light">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(faqs[0].id);

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-accent">
            F.A.Q.
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-450">
            Have questions about load calculations, solar panel performance, or battery maintenance? Find detailed technical answers below.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4 text-left">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>

        {/* Support Callout banner */}
        <div className="mt-12 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-205/50 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-xs">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 text-success-eco rounded-2xl shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white text-base">Still have questions?</h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-450 mt-1 leading-relaxed">
                Connect with our certified solar engineer directly for load sizing and site feasibility audits.
              </p>
            </div>
          </div>
          <a
            href="tel:+919876543210"
            className="w-full sm:w-auto text-center shrink-0 bg-primary dark:bg-accent text-white dark:text-primary-dark font-bold text-sm py-3 px-6 rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Call Us Now
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
