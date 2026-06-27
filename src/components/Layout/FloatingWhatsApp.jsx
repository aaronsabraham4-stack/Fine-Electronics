import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tool tip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const waNumber = '919876543210';
  const message = 'Hello ElectroSolar! I am looking for a power backup/solar panel quote for my property. Please assist.';
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 font-sans">
      {/* Greeting Bubble */}
      {showTooltip && (
        <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs animate-fade-in relative flex items-start gap-2.5">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-0.5 rounded text-slate-400 hover:text-slate-655 dark:hover:text-slate-200"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="text-left">
            <p className="text-xs font-bold text-success-eco flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-success-eco animate-pulse" />
              We are online
            </p>
            <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1 pr-3">
              Need help calculating your inverter load? Chat with our engineer now!
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#20ba56] transition-all duration-300 transform hover:scale-110 hover:-rotate-6 relative group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
