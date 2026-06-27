import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, UserCheck, Award, Smile } from 'lucide-react';
import heroComposite from '../../assets/hero_composite_clean.png';

const Hero = ({ _onOpenQuote }) => {
  const handleScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
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

  const waNumber = '919497294142';
  const waUrl = `https://wa.me/${waNumber}?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20inverters%20and%20solar%20setups.`;

  return (
    <section 
      id="home" 
      className="relative min-h-[85vh] flex flex-col justify-center pt-8 sm:pt-12 pb-10 overflow-hidden bg-gradient-to-b from-[#F0F5FA] to-[#FFFFFF] text-slate-800"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-indigo-50/50 blur-3xl pointer-events-none" />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-[#072B61]"
            >
              Powering Homes &{' '}
              <span className="inline lg:hidden">Businesses with </span>
              <br className="hidden lg:block" />
              <span className="hidden lg:inline">Businesses with </span>
              <br />
              <span className="text-[#FFB800]">
                Reliable Energy Solutions
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl font-semibold mx-auto lg:mx-0"
            >
              Premium Solar Panels, Inverters, Batteries, UPS Systems and Electrical Solutions with Expert Installation &amp; After Sales Support.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 sm:gap-4 pt-2 justify-center lg:justify-start"
            >
              {/* Explore Products */}
              <button
                onClick={() => handleScrollTo('products')}
                className="flex items-center gap-2 bg-[#072B61] hover:bg-[#051c3f] text-white font-bold py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer text-xs sm:text-sm"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* WhatsApp Direct */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#22C55E] hover:bg-[#1eb051] text-white font-bold py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer text-xs sm:text-sm"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.936 9.936 0 0 0 4.777 1.224h.005c5.505 0 9.989-4.478 9.99-9.985A9.983 9.983 0 0 0 12.012 2zm5.782 14.156c-.247.697-1.209 1.285-1.666 1.353-.418.062-.962.094-2.898-.67-2.476-.975-4.062-3.486-4.185-3.65-.123-.163-.984-1.31-1.002-2.47-.018-1.162.593-1.74.832-1.983.24-.243.633-.314.978-.314.113 0 .213.005.3.014.259.012.391.029.563.44.212.51.724 1.761.787 1.892.063.13.105.283.018.455-.088.172-.132.28-.264.434-.132.153-.277.34-.395.457-.132.13-.27.272-.115.54.155.267.689 1.135 1.477 1.838.966.863 1.776 1.13 2.083 1.258.307.13.488.11.67-.098.183-.21.783-.91.992-1.22.21-.309.418-.258.706-.153.287.106 1.815.857 2.128 1.013.313.156.52.233.597.367.078.134.078.775-.169 1.472z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </motion.div>
          </div>

          {/* Right Image Composite Column — hidden on very small, visible sm+ */}
          <div className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none"
            >
              <img
                src={heroComposite}
                alt="Fine Electronics Inverter and Solar Panels Setup"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* 4 Badges Underneath */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 pt-8 sm:pt-10 mt-6 sm:mt-10 border-t border-slate-100"
        >
          {/* Badge 1 */}
          <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xs border border-slate-100/80 hover:shadow-sm hover:border-[#4E89FF]/20 transition-all text-left">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#EBF3FF] flex items-center justify-center text-[#4E89FF] shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-[#072B61] leading-tight">Genuine Products</h4>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold mt-0.5 sm:mt-1 leading-snug">100% original products from trusted brands</p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xs border border-slate-100/80 hover:shadow-sm hover:border-[#4E89FF]/20 transition-all text-left">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#EBF3FF] flex items-center justify-center text-[#4E89FF] shrink-0">
              <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-[#072B61] leading-tight">Expert Installation</h4>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold mt-0.5 sm:mt-1 leading-snug">Trained &amp; certified technicians</p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xs border border-slate-100/80 hover:shadow-sm hover:border-[#4E89FF]/20 transition-all text-left">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#EBF3FF] flex items-center justify-center text-[#4E89FF] shrink-0">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-[#072B61] leading-tight">Warranty Support</h4>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold mt-0.5 sm:mt-1 leading-snug">Assured warranty &amp; after-sales service</p>
            </div>
          </div>

          {/* Badge 4 */}
          <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xs border border-slate-100/80 hover:shadow-sm hover:border-[#4E89FF]/20 transition-all text-left">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#EBF3FF] flex items-center justify-center text-[#4E89FF] shrink-0">
              <Smile className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-[#072B61] leading-tight">Customer Satisfaction</h4>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold mt-0.5 sm:mt-1 leading-snug">Thousands of happy customers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
