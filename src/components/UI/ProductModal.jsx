import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone, Tag, Star, Package } from 'lucide-react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const waMessage = encodeURIComponent(
    `Hi! I'm interested in your *${product.name}* product. Can you please share the price and availability?`
  );
  const waUrl = `https://wa.me/919497294142?text=${waMessage}`;

  return (
    <AnimatePresence>
      <motion.div
        key="product-modal-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[9999] flex items-center justify-center p-3 sm:p-6"
      >
        {/* Modal Card */}
        <motion.div
          key="product-modal-card"
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 240 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-transparent dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[88vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all shadow-sm cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top: Image Banner */}
          <div className="relative bg-gradient-to-br from-[#EBF3FF] to-[#dbeeff] dark:from-[#0b1c3a] dark:to-[#08234d] flex items-center justify-center overflow-hidden shrink-0"
            style={{ minHeight: '200px', maxHeight: '240px' }}
          >
            {/* Badge */}
            {product.badge && (
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#FFB800] text-[#072B61] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm z-10">
                <Star className="w-3 h-3 fill-current" />
                {product.badge}
              </div>
            )}

            {/* Decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-transparent to-indigo-100/40 pointer-events-none" />

            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              src={product.image}
              alt={product.name}
              className="h-44 sm:h-56 w-auto max-w-[80%] object-contain drop-shadow-xl mix-blend-multiply dark:mix-blend-normal relative z-10"
            />
          </div>

          {/* Body — scrollable */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-5">

            {/* Header: name + tagline */}
            <div>
              <p className="text-[10px] font-bold text-[#4E89FF] uppercase tracking-widest mb-1">
                Fine Electronics — Product
              </p>
              <h3 className="text-xl sm:text-2xl font-black text-[#072B61] dark:text-white leading-tight">
                {product.name}
              </h3>
              {product.tagline && (
                <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mt-1 italic">
                  "{product.tagline}"
                </p>
              )}
              <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed mt-2 font-medium">
                {product.description}
              </p>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h5 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                  Key Features
                </h5>
                <ul className="space-y-2">
                  {product.features.map((feat, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">{feat}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* Available Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h5 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                  <Package className="w-3 h-3" />
                  Available Sizes
                </h5>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[11px] font-bold rounded-full border border-slate-200 dark:border-slate-700"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Available Brands */}
            {product.brands && product.brands.length > 0 && (
              <div>
                <h5 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                  <Tag className="w-3 h-3" />
                  Available Brands
                </h5>
                <div className="flex flex-wrap gap-2">
                  {product.brands.map((brand) => (
                    <span
                      key={brand}
                      className="px-3 py-1 bg-[#EBF3FF] dark:bg-[#0c2b5c] text-[#072B61] dark:text-blue-200 text-[11px] font-bold rounded-full border border-blue-100 dark:border-blue-900/50"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="shrink-0 p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/80 flex flex-col sm:flex-row gap-3">
            {/* WhatsApp CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#1eb051] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-sm text-sm cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.936 9.936 0 0 0 4.777 1.224h.005c5.505 0 9.989-4.478 9.99-9.985A9.983 9.983 0 0 0 12.012 2zm5.782 14.156c-.247.697-1.209 1.285-1.666 1.353-.418.062-.962.094-2.898-.67-2.476-.975-4.062-3.486-4.185-3.65-.123-.163-.984-1.31-1.002-2.47-.018-1.162.593-1.74.832-1.983.24-.243.633-.314.978-.314.113 0 .213.005.3.014.259.012.391.029.563.44.212.51.724 1.761.787 1.892.063.13.105.283.018.455-.088.172-.132.28-.264.434-.132.153-.277.34-.395.457-.132.13-.27.272-.115.54.155.267.689 1.135 1.477 1.838.966.863 1.776 1.13 2.083 1.258.307.13.488.11.67-.098.183-.21.783-.91.992-1.22.21-.309.418-.258.706-.153.287.106 1.815.857 2.128 1.013.313.156.52.233.597.367.078.134.078.775-.169 1.472z"/>
              </svg>
              <span>Enquire on WhatsApp</span>
            </a>

            {/* Call CTA */}
            <a
              href="tel:+919497294142"
              className="flex-1 flex items-center justify-center gap-2 bg-[#072B61] hover:bg-[#051c3f] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-sm text-sm cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us Now</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
