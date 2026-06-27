import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, Check, ChevronDown } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' }
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('en');
  const dropdownRef = useRef(null);

  // Initialize active language from cookie
  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    };

    const googtrans = getCookie('googtrans');
    if (googtrans) {
      const lang = googtrans.split('/').pop();
      if (LANGUAGES.some(l => l.code === lang)) {
        setActiveLang(lang);
      }
    }
  }, []);

  // Initialize Google Translate
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'ml,ta,hi,kn,te,mr,en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
    };

    if (!document.getElementById('google-translate-script')) {
      const addScript = document.createElement('script');
      addScript.id = 'google-translate-script';
      addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(addScript);
    }
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleLanguageChange = (langCode) => {
    // Set cookies for both paths to ensure Google Translate picks it up correctly
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
    
    // In case local dev uses localhost
    if (window.location.hostname === 'localhost') {
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=localhost`;
    }
    
    setActiveLang(langCode);
    setIsOpen(false);
    window.location.reload();
  };

  const currentLang = LANGUAGES.find(l => l.code === activeLang) || LANGUAGES[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Google Translate Hidden Div */}
      <div id="google_translate_element" className="hidden" style={{ display: 'none' }} />

      {/* Dropdown Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#072B61] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl border border-slate-200/60 dark:border-slate-800 cursor-pointer shadow-2xs hover:shadow-xs transition-all"
      >
        <Languages className="w-3.5 h-3.5 text-[#072B61] dark:text-accent" />
        <span className="hidden sm:inline text-[#072B61] dark:text-slate-200">{currentLang.native}</span>
        <span className="inline sm:hidden text-[#072B61] dark:text-slate-200">{currentLang.code.toUpperCase()}</span>
        <ChevronDown className="w-3 h-3 text-[#072B61]/60 dark:text-slate-400" />
      </button>

      {/* Dropdown Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-[99999] py-1.5"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleLanguageChange(lang.code)}
                className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors cursor-pointer group"
              >
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent">
                    {lang.name}
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                    {lang.native}
                  </span>
                </div>
                {activeLang === lang.code && (
                  <Check className="w-3.5 h-3.5 text-primary dark:text-accent shrink-0" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
