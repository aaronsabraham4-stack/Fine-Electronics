import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import shop1 from '../../assets/shop_1.png';
import shop2 from '../../assets/shop_2.png';
import shop3 from '../../assets/shop_3.png';
import shop4 from '../../assets/shop_4.png';
import shop5 from '../../assets/shop_5.png';

const ShopGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const shopImages = [
    {
      id: 1,
      title: 'Storefront Signage',
      url: shop1
    },
    {
      id: 2,
      title: 'Showroom & Shelves',
      url: shop2
    },
    {
      id: 3,
      title: 'Electronics Repair Bench',
      url: shop3
    },
    {
      id: 4,
      title: 'Technical Service Desk',
      url: shop4
    },
    {
      id: 5,
      title: 'Solar Solutions Showroom',
      url: shop5
    }
  ];

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = shopImages.findIndex(img => img.id === selectedImg.id);
    const prevIndex = (currentIndex - 1 + shopImages.length) % shopImages.length;
    setSelectedImg(shopImages[prevIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = shopImages.findIndex(img => img.id === selectedImg.id);
    const nextIndex = (currentIndex + 1) % shopImages.length;
    setSelectedImg(shopImages[nextIndex]);
  };

  return (
    <section id="shop-gallery" className="py-16 bg-[#FFFFFF] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1.5px] w-8 sm:w-16 bg-slate-300" />
          <h2 className="text-xl sm:text-2xl font-black text-[#072B61] tracking-tight whitespace-nowrap">
            Images of Our Shop
          </h2>
          <div className="h-[1.5px] w-8 sm:w-16 bg-slate-300" />
        </div>

        {/* Shop Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {shopImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: img.id * 0.05 }}
              onClick={() => setSelectedImg(img)}
              className="relative group aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:border-[#4E89FF]/20 transition-all duration-350 cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#072B61]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-xs uppercase tracking-wider bg-[#072B61]/80 py-1.5 px-3 rounded-full backdrop-blur-sm">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Overlay Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-pointer"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl flex flex-col cursor-default"
            >
              <img
                src={selectedImg.url}
                alt={selectedImg.title}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
              <div className="bg-slate-950/95 py-4 px-6 text-center border-t border-white/5">
                <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">
                  {selectedImg.title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ShopGallery;
