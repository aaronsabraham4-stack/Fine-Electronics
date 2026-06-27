import { motion } from 'framer-motion';
import { categories } from '../../data/shopData';

const Categories = ({ onSelectCategory }) => {
  const handleCategoryClick = (catId) => {
    onSelectCategory(catId);
    const el = document.getElementById('products');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="products" className="py-16 bg-[#FFFFFF] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1.5px] w-8 sm:w-16 bg-slate-300" />
          <h2 className="text-xl sm:text-2xl font-black text-[#072B61] tracking-tight whitespace-nowrap">
            Our Product Categories
          </h2>
          <div className="h-[1.5px] w-8 sm:w-16 bg-slate-300" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              variants={cardVariants}
              onClick={() => handleCategoryClick(cat.id)}
              className="group text-center p-4 bg-white rounded-2xl border border-slate-100 hover:border-[#4E89FF]/30 shadow-sm hover:shadow-md transition-all duration-350 transform hover:-translate-y-1.5 cursor-pointer flex flex-col items-center justify-between"
            >
              {/* Product Image Wrapper */}
              <div className="w-full aspect-square bg-[#FAFBFD] rounded-xl overflow-hidden flex items-center justify-center mb-4 border border-slate-50/50 p-2">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-108 transition-transform duration-350"
                />
              </div>

              {/* Text content */}
              <div className="w-full flex-grow flex flex-col justify-center">
                <h4 className="font-extrabold text-[#072B61] text-sm group-hover:text-[#4E89FF] transition-colors leading-tight">
                  {cat.name}
                </h4>
                <p className="text-[10.5px] text-slate-500 font-medium mt-1 leading-snug">
                  {cat.description}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Categories;
