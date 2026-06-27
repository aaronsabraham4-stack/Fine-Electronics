import { Star } from 'lucide-react';
import { testimonials } from '../../data/shopData';

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#FFFFFF] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1.5px] w-8 sm:w-16 bg-slate-300" />
          <h2 className="text-xl sm:text-2xl font-black text-[#072B61] tracking-tight whitespace-nowrap">
            What Our Customers Say
          </h2>
          <div className="h-[1.5px] w-8 sm:w-16 bg-slate-300" />
        </div>

        {/* Testimonials Static Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-2xl border border-slate-100/90 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md hover:border-[#4E89FF]/20 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex gap-0.5 text-[#FFB800]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current shrink-0" />
                  ))}
                </div>

                {/* Review text */}
                <blockquote className="text-xs sm:text-sm text-slate-650 leading-relaxed font-medium">
                  "{t.text}"
                </blockquote>
              </div>

              {/* User Info (At the bottom of card) */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-50">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover shadow-xs border border-white shrink-0"
                />
                <div className="min-w-0">
                  <h5 className="font-extrabold text-[#072B61] text-xs truncate leading-tight">
                    {t.name}
                  </h5>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5 leading-none">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
