import { Phone, MessageSquare } from 'lucide-react';
import ctaTechnician from '../../assets/cta_technician.png';

const CTAHelp = ({ _onOpenQuote }) => {
  const waNumber = '919876543210';
  const waUrl = `https://wa.me/${waNumber}?text=Hi!%20I%20need%20help%20choosing%20the%20right%20energy%20product.`;

  return (
    <section className="py-8 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner container */}
        <div className="bg-[#072B61] rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-12 items-center min-h-[220px]">
          
          {/* Left illustration */}
          <div className="md:col-span-4 h-full flex justify-center md:justify-start items-end pt-6 md:pt-0 overflow-hidden px-8 md:px-0 md:pl-12">
            <img
              src={ctaTechnician}
              alt="Expert Technician"
              className="max-h-[200px] md:max-h-[240px] w-auto object-contain object-bottom transform md:scale-105 origin-bottom translate-y-1.5"
            />
          </div>

          {/* Right text & buttons */}
          <div className="md:col-span-8 p-8 md:p-10 space-y-5 text-center md:text-left">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Need Help Choosing the Right Product?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Our experts are ready to help you find the best solution for your home or business.
              </p>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {/* Call Now button */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 bg-[#FFB800] hover:bg-[#e0a200] text-[#072B61] font-bold text-xs py-3 px-6 rounded-xl transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-[#072B61]" />
                <span>Call Now: +91 98765 43210</span>
              </a>

              {/* Chat on WhatsApp button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1B66D6] hover:bg-[#1553b3] text-white font-bold text-xs py-3 px-6 rounded-xl transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current text-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTAHelp;
