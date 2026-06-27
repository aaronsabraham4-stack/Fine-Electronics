import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Users, Briefcase, Clock } from 'lucide-react';

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
    <span ref={elementRef} className="font-black text-2xl sm:text-3xl text-[#072B61] leading-none shrink-0">
      {count}
      {suffix}
    </span>
  );
};

const AchievementsStats = () => {
  const statsList = [
    { target: '25', suffix: '+', label: 'Years Experience', Icon: ShieldCheck },
    { target: '5000', suffix: '+', label: 'Happy Customers', Icon: Users },
    { target: '3500', suffix: '+', label: 'Successful Projects', Icon: Briefcase },
    { target: '24', suffix: '/7', label: 'Customer Support', Icon: Clock }
  ];

  return (
    <section id="about" className="py-8 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gold stats banner */}
        <div className="bg-[#FFB800] rounded-2xl p-6 md:p-8 shadow-md border border-[#ffd153] grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {statsList.map((stat, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 text-[#072B61]">
              <div className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center text-[#072B61] shrink-0">
                <stat.Icon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="flex items-baseline">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide opacity-90 leading-tight">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AchievementsStats;
