import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquareCode, Search } from 'lucide-react';
import { products } from '../../data/shopData';

const FeaturedProducts = ({ activeCategory, onSelectCategory, onEnquireProduct }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'solar-panels', label: 'Solar Panels' },
    { id: 'solar-inverters', label: 'Solar Inverters' },
    { id: 'home-inverters', label: 'Home Inverters' },
    { id: 'batteries', label: 'Batteries' },
    { id: 'stabilizers', label: 'Stabilizers' },
  ];

  let filteredProducts = products;
  if (activeCategory !== 'all') {
    filteredProducts = filteredProducts.filter((p) => p.category === activeCategory);
  }
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  return (
    <section id="products" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-accent">
              Our Catalog
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Featured Products & Systems
            </h3>
            <p className="text-sm sm:text-base text-slate-505 dark:text-slate-400 max-w-xl">
              Equip your home or commercial enterprise with high-grade components from leading brands. Select a category below or search.
            </p>
          </div>

          {/* Inline Product Search */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search products by brand, specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 outline-none focus:border-primary dark:focus:border-accent text-sm transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Filters and Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 scrollbar-none gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-primary text-white border-primary dark:bg-accent dark:text-primary-dark dark:border-accent shadow-md shadow-primary/10 dark:shadow-accent/10'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`inline-flex items-center justify-center text-[10px] px-1.5 py-0.5 rounded-full ${
                activeCategory === cat.id
                  ? 'bg-white/20 text-white dark:bg-primary-dark/20 dark:text-primary-dark'
                  : 'bg-slate-200 text-slate-655 dark:bg-slate-700 dark:text-slate-300'
              }`}>
                {cat.id === 'all' 
                  ? products.length 
                  : products.filter((p) => p.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-sm overflow-hidden flex flex-col justify-between"
                >
                  {/* Top Image Box */}
                  <div className="relative aspect-[4/3] bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                      loading="lazy"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-primary/90 dark:bg-accent/90 text-white dark:text-primary-dark font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {product.badge}
                      </span>
                    )}

                    {/* Quick Specs Floating Banner */}
                    <div className="absolute inset-x-0 bottom-0 bg-slate-950/80 backdrop-blur-xs py-2 px-3 flex justify-between text-[10px] text-slate-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Brand: {product.brand}</span>
                      <span className="flex items-center gap-0.5 text-accent">
                        <Star className="w-3 h-3 fill-current" /> {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Product Header */}
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                        {product.brand}
                      </span>
                      <h4 className="text-base font-bold text-slate-800 dark:text-white mt-1 group-hover:text-primary dark:group-hover:text-accent transition-colors line-clamp-2">
                        {product.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Specification Table */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-slate-100 dark:border-slate-800 text-[11px] space-y-1.5">
                      {Object.entries(product.specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-slate-400 dark:text-slate-500">{key}</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-205 text-right pl-2 line-clamp-1">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price and Enquiry Footer */}
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase">Dealer Price</span>
                        <span className="text-lg font-bold text-slate-850 dark:text-white">{product.price}</span>
                      </div>

                      <button
                        onClick={() => onEnquireProduct(product.id)}
                        className="flex items-center gap-1.5 bg-primary dark:bg-accent hover:bg-primary-light dark:hover:bg-accent-light text-white dark:text-primary-dark font-bold text-xs py-2 px-3.5 rounded-xl transition-all cursor-pointer"
                      >
                        <MessageSquareCode className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-slate-50 dark:bg-slate-850/30 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center">
                <Search className="w-12 h-12 text-slate-400 mb-3" />
                <h4 className="text-lg font-bold text-slate-700 dark:text-slate-300">No products found</h4>
                <p className="text-sm text-slate-400 dark:text-slate-500 mt-1 max-w-sm">
                  We couldn't find any products in this category that match your search filters. Try clearing your filters or changing keywords.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    onSelectCategory('all');
                  }}
                  className="mt-4 text-xs font-bold text-primary dark:text-accent hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
