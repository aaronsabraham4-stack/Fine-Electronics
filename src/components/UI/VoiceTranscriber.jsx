import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, X, Check, Languages, HelpCircle } from 'lucide-react';

const LANGUAGES = [
  { code: 'ml-IN', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'hi-IN', name: 'Hindi', native: 'हिन्दी' },
  { code: 'ta-IN', name: 'Tamil', native: 'தமிழ்' },
  { code: 'kn-IN', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'te-IN', name: 'Telugu', native: 'తెలుగు' },
  { code: 'en-IN', name: 'English (India)', native: 'English' },
  { code: 'bn-IN', name: 'Bengali', native: 'বাংলা' },
  { code: 'mr-IN', name: 'Marathi', native: 'मраठी' },
  { code: 'gu-IN', name: 'Gujarati', native: 'ગુજરાતી' }
];

const VoiceTranscriber = ({ onTranscript, placeholderClass = "" }) => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]); // Default Malayalam
  const [isListening, setIsListening] = useState(false);
  const [interimText, setInterimText] = useState('');
  const [finalText, setFinalText] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const menuRef = useRef(null);

  const recognitionRef = useRef(null);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Set up Speech Recognition
  const startSpeechRecognition = (lang) => {
    setShowLangMenu(false);
    setErrorMsg('');
    setInterimText('');
    setFinalText('');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setErrorMsg("Your browser does not support Speech Recognition. Please try Google Chrome or Edge.");
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = lang.code;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        let interim = '';
        let final = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final += event.results[i][0].transcript + ' ';
          } else {
            interim += event.results[i][0].transcript;
          }
        }

        if (final) {
          setFinalText(prev => prev + final);
        }
        setInterimText(interim);
      };

      recognition.onerror = (event) => {
        console.error("Speech Recognition Error:", event.error);
        if (event.error === 'not-allowed') {
          setErrorMsg("Microphone access was denied. Please check site permissions.");
        } else {
          setErrorMsg(`Error occurred: ${event.error}`);
        }
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (e) {
      console.error(e);
      setErrorMsg("Failed to start speech recognition.");
      setIsListening(false);
    }
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const handleApply = () => {
    const textToInsert = (finalText + interimText).trim();
    if (textToInsert) {
      onTranscript(textToInsert);
    }
    setFinalText('');
    setInterimText('');
    setIsListening(false);
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      {/* Microphone Toggle Button */}
      <button
        type="button"
        onClick={() => {
          if (isListening) {
            stopSpeechRecognition();
          } else {
            setShowLangMenu(!showLangMenu);
          }
        }}
        title="Voice Transcribe (Indian Languages)"
        className={`p-2 rounded-xl transition-all border flex items-center justify-center cursor-pointer shrink-0 ${
          isListening
            ? 'bg-rose-500 border-rose-500 text-white animate-pulse'
            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-primary dark:hover:text-accent hover:border-primary/30'
        }`}
      >
        {isListening ? (
          <MicOff className="w-4 h-4" />
        ) : (
          <Mic className="w-4 h-4" />
        )}
      </button>

      {/* Language Selection Menu Dropdown */}
      <AnimatePresence>
        {showLangMenu && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-[9999] py-2 flex flex-col"
          >
            <div className="px-3.5 py-1.5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              <Languages className="w-3.5 h-3.5" />
              <span>Transcribe Language</span>
            </div>
            
            <div className="max-h-56 overflow-y-auto py-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setSelectedLang(lang);
                    startSpeechRecognition(lang);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-350 transition-colors cursor-pointer group"
                >
                  <div className="flex flex-col">
                    <span className="text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent">
                      {lang.name}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                      {lang.native}
                    </span>
                  </div>
                  {selectedLang.code === lang.code && (
                    <Check className="w-3.5 h-3.5 text-primary dark:text-accent" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Listening overlay/bar overlay */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-slate-950/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl z-[99999] p-5 text-white flex flex-col gap-4 text-left"
          >
            {/* Listening header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-rose-400">
                  Listening in {selectedLang.name} ({selectedLang.native})
                </span>
              </div>
              <button
                type="button"
                onClick={stopSpeechRecognition}
                className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Speech to text real-time screen */}
            <div className="bg-white/5 border border-white/5 rounded-xl p-3 min-h-[70px] max-h-[140px] overflow-y-auto text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed scrollbar-thin">
              {finalText || interimText ? (
                <>
                  <span className="text-white">{finalText}</span>
                  <span className="text-slate-400 italic">{interimText}</span>
                </>
              ) : (
                <span className="text-slate-500 italic">Say something...</span>
              )}
            </div>

            {/* Control buttons */}
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={stopSpeechRecognition}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleApply}
                disabled={!(finalText || interimText)}
                className="px-4 py-2 rounded-xl bg-primary dark:bg-accent text-white dark:text-primary-dark font-black text-xs hover:bg-primary-light dark:hover:bg-accent-light shadow-md shadow-primary/10 dark:shadow-accent/10 transition-all cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
              >
                Insert Text
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error alert toast */}
      <AnimatePresence>
        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-rose-650 border border-rose-500 text-white rounded-xl shadow-lg z-[99999] p-3 text-xs flex items-center justify-between gap-3 text-left font-semibold"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 shrink-0 text-rose-350" />
              <span>{errorMsg}</span>
            </div>
            <button
              type="button"
              onClick={() => setErrorMsg('')}
              className="p-0.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VoiceTranscriber;
