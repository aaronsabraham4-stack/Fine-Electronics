import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Battery, Cpu, Sun, ShieldAlert, Settings, Zap, CornerDownRight } from 'lucide-react';
import { products } from '../../data/shopData';
import VoiceTranscriber from './VoiceTranscriber';

const SearchModal = ({ isOpen, onClose, onSelectProduct }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      setResults([]);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        (product.brand && product.brand.toLowerCase().includes(lowerQuery)) ||
        (product.description && product.description.toLowerCase().includes(lowerQuery))
    );
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'solar-panels':
        return <Sun className="w-4 h-4 text-amber-500" />;
      case 'solar-inverters':
        return <Cpu className="w-4 h-4 text-blue-500" />;
      case 'home-inverters':
        return <Zap className="w-4 h-4 text-yellow-500" />;
      case 'batteries':
        return <Battery className="w-4 h-4 text-emerald-500" />;
      case 'stabilizers':
        return <ShieldAlert className="w-4 h-4 text-rose-500" />;
      default:
        return <Settings className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 md:pt-32">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[80vh] flex flex-col z-10 animate-fade-in">
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100 dark:border-slate-850">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search panels, inverters, tubular batteries, stabilizers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-0 outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 text-base"
          />
          <VoiceTranscriber onTranscript={(text) => setQuery(text)} />
          <button 
            onClick={onClose} 
            className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="flex-1 overflow-y-auto p-4">
          {query.trim() === '' ? (
            <div>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {['Solar Panel', 'Luminous Zelio', 'Exide 150Ah', 'Voltage Stabilizer', 'Hybrid Inverter'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-sm text-slate-600 dark:text-slate-300 font-medium transition-all duration-200"
                  >
                    <Search className="w-3.5 h-3.5" />
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                Search Results ({results.length})
              </p>
              {results.map((product) => (
                <button
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product.id);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-accent text-sm md:text-base leading-snug line-clamp-1">
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        {product.brand && (
                          <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                            {product.brand}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                          {getCategoryIcon(product.category)}
                          <span className="capitalize">{product.category.replace('-', ' ')}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-450 group-hover:text-primary dark:group-hover:text-accent font-medium text-sm shrink-0">
                    {product.price && <span>{product.price}</span>}
                    <CornerDownRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6 text-slate-400" />
              </div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">No products found</h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-1 max-w-xs mx-auto">
                We couldn't find anything matching "{query}". Try checking your spelling or use general keywords.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
