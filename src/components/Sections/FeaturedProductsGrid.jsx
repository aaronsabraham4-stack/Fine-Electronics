import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../../data/shopData';
import ProductModal from '../UI/ProductModal';

const FeaturedProductsGrid = ({ _onEnquireProduct }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const row1to3 = products.filter(p => p.id !== 'keyboard-mouse' && p.id !== 'cells' && p.id !== 'tv-stand' && p.id !== 'home-appliances');
  const tvStand = products.find(p => p.id === 'tv-stand');
  const keyboardMouse = products.find(p => p.id === 'keyboard-mouse');
  const cells = products.find(p => p.id === 'cells');
  const homeAppliances = products.find(p => p.id === 'home-appliances');

  const appliancesList = [
    'Iron Box', 'Pressure Cooker', 'Non Stick Tawa Pan', 'Electric Kettle',
    'Appachatty', 'Frypan', 'Rice Cooker', 'Gas Stove', 'Pedested Fan',
    'Wall Mount Fan', 'Ceiling Fan'
  ];

  // Small "click hint" — tiny pulse ring on hover
  const cardBase = "group bg-white p-4 rounded-xl border border-slate-100/90 shadow-2xs hover:shadow-md hover:border-[#4E89FF]/30 transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer relative overflow-hidden";

  return (
    <section id="products" className="py-16 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1.5px] w-8 sm:w-16 bg-slate-300" />
          <h2 className="text-xl sm:text-2xl font-black text-[#072B61] tracking-tight whitespace-nowrap">
            FEATURED PRODUCTS
          </h2>
          <div className="h-[1.5px] w-8 sm:w-16 bg-slate-300" />
        </div>
        <p className="text-center text-xs text-slate-400 font-semibold mb-10">
          Tap any product to view details
        </p>

        {/* Products Grid (6 columns on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* First 18 standard cards */}
          {row1to3.slice(0, 18).map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.02 }}
              onClick={() => setSelectedProduct(p)}
              whileTap={{ scale: 0.97 }}
              className={cardBase}
            >
              {/* Hover glow bg */}
              <div className="absolute inset-0 bg-[#EBF3FF]/0 group-hover:bg-[#EBF3FF]/60 transition-colors duration-300 rounded-xl pointer-events-none" />
              
              {/* Product Image */}
              <div className="w-full aspect-square bg-[#FAFBFD] rounded-lg overflow-hidden flex items-center justify-center mb-3 p-1 relative z-10">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-400"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h4 className="font-extrabold text-[#072B61] text-xs leading-snug group-hover:text-[#4E89FF] transition-colors relative z-10">
                {p.name}
              </h4>
            </motion.div>
          ))}

          {/* Card 19: TV Stand */}
          {tvStand && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProduct(tvStand)}
              whileTap={{ scale: 0.97 }}
              className={cardBase}
            >
              <div className="absolute inset-0 bg-[#EBF3FF]/0 group-hover:bg-[#EBF3FF]/60 transition-colors duration-300 rounded-xl pointer-events-none" />
              <div className="w-full aspect-square bg-[#FAFBFD] rounded-lg overflow-hidden flex items-center justify-center mb-3 p-1 relative z-10">
                <img
                  src={tvStand.image}
                  alt={tvStand.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-400"
                  loading="lazy"
                />
              </div>
              <h4 className="font-extrabold text-[#072B61] text-xs leading-snug group-hover:text-[#4E89FF] transition-colors relative z-10">
                {tvStand.name}
              </h4>
            </motion.div>
          )}

          {/* Card 20: Cooking Appliances Double-Width */}
          {homeAppliances && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProduct(homeAppliances)}
              whileTap={{ scale: 0.98 }}
              className="col-span-2 lg:col-span-3 bg-white p-4 sm:p-5 rounded-xl border border-slate-100/90 shadow-2xs hover:shadow-md hover:border-[#4E89FF]/30 transition-all duration-300 flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-4 items-center cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#EBF3FF]/0 group-hover:bg-[#EBF3FF]/40 transition-colors duration-300 rounded-xl pointer-events-none" />
              {/* Left Image */}
              <div className="w-full sm:col-span-5 aspect-[4/3] sm:aspect-auto bg-[#FAFBFD] rounded-lg overflow-hidden flex items-center justify-center p-1 relative z-10">
                <img
                  src={homeAppliances.image}
                  alt={homeAppliances.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              {/* Right details */}
              <div className="sm:col-span-7 text-left space-y-1.5 flex flex-col justify-center w-full relative z-10">
                <h4 className="font-black text-[#072B61] text-sm group-hover:text-[#4E89FF] transition-colors leading-none uppercase">
                  {homeAppliances.name}
                </h4>
                <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                  {appliancesList.join(', ')}
                </p>
              </div>
            </motion.div>
          )}

          {/* Card 21: Keyboard and Mouse */}
          {keyboardMouse && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProduct(keyboardMouse)}
              whileTap={{ scale: 0.97 }}
              className={cardBase}
            >
              <div className="absolute inset-0 bg-[#EBF3FF]/0 group-hover:bg-[#EBF3FF]/60 transition-colors duration-300 rounded-xl pointer-events-none" />
              <div className="w-full aspect-square bg-[#FAFBFD] rounded-lg overflow-hidden flex items-center justify-center mb-3 p-1 relative z-10">
                <img
                  src={keyboardMouse.image}
                  alt={keyboardMouse.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-400"
                  loading="lazy"
                />
              </div>
              <h4 className="font-extrabold text-[#072B61] text-xs leading-snug group-hover:text-[#4E89FF] transition-colors relative z-10">
                {keyboardMouse.name}
              </h4>
            </motion.div>
          )}

          {/* Card 22: Power Battery Cell */}
          {cells && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProduct(cells)}
              whileTap={{ scale: 0.97 }}
              className={cardBase}
            >
              <div className="absolute inset-0 bg-[#EBF3FF]/0 group-hover:bg-[#EBF3FF]/60 transition-colors duration-300 rounded-xl pointer-events-none" />
              <div className="w-full aspect-square bg-[#FAFBFD] rounded-lg overflow-hidden flex items-center justify-center mb-3 p-1 relative z-10">
                <img
                  src={cells.image}
                  alt={cells.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-400"
                  loading="lazy"
                />
              </div>
              <h4 className="font-extrabold text-[#072B61] text-xs leading-snug group-hover:text-[#4E89FF] transition-colors relative z-10">
                {cells.name}
              </h4>
            </motion.div>
          )}
        </div>

      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            key={selectedProduct.id}
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProductsGrid;
