import { useState, useEffect, useRef } from 'react';
import { brands } from '../../data/shopData';

// Counter component for dynamic achievements
const Counter = ({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const end = parseInt(target, 10);
    if (isNaN(end)) return;
    
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef} className="font-black text-2xl sm:text-3xl md:text-4xl text-[#072B61]">
      {count}
      {suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  const stats = [
    { target: '10', suffix: '+', label: 'Years Experience' },
    { target: '1000', suffix: '+', label: 'Happy Customers' },
    { target: '500', suffix: '+', label: 'Successful Projects' },
    { target: '24', suffix: '/7', label: 'Customer Support' }
  ];

  return (
    <section id="about" className="py-12 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Combined Stats & Brands Container */}
        <div className="bg-[#EBF3FF]/60 rounded-3xl p-8 md:p-10 shadow-sm border border-blue-50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Why Choose Us (Stats) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div>
              <h3 className="text-xl font-black text-[#072B61] tracking-tight">
                Why Choose Us?
              </h3>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center space-y-1">
                  <Counter target={stat.target} suffix={stat.suffix} />
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider for large screens */}
          <div className="hidden lg:block lg:col-span-1 h-12 w-[1px] bg-slate-300/60 justify-self-center" />

          {/* Right Column: Our Top Brands */}
          <div className="lg:col-span-5 space-y-6 text-center">
            <div>
              <h3 className="text-xl font-black text-[#072B61] tracking-tight">
                Our Top Brands
              </h3>
            </div>

            {/* Brands Logos Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center justify-items-center">
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  className="w-16 h-8 sm:w-20 sm:h-10 flex items-center justify-center bg-white rounded-lg p-1 border border-slate-100/80 shadow-2xs hover:shadow-xs transition-shadow duration-300"
                  title={brand.name}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-350"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
