import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { contacts } from '../../data/shopData';

const ContactSection = () => {
  const waUrl = `https://wa.me/919497294142?text=Hi!%20I%20need%20help%20with%20your%2520energy%20products.`;

  return (
    <section id="contact" className="py-16 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Visit Our Shop (col-span-8) */}
          <div id="shop-gallery" className="lg:col-span-8 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-sm font-black text-[#072B61] uppercase tracking-wider border-b-2 border-[#FFB800] pb-1.5 inline-block">
                Visit Our Shop
              </h3>
              
              <ul className="space-y-3.5 text-xs text-slate-600 font-semibold leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#072B61] shrink-0 mt-0.5" />
                  <span>{contacts.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#072B61] shrink-0" />
                  <a href={`tel:+91${contacts.phone}`} className="hover:text-[#4E89FF] transition-colors">
                    {contacts.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#072B61] shrink-0" />
                  <a href={`mailto:${contacts.email}`} className="hover:text-[#4E89FF] transition-colors">
                    {contacts.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5 pt-1.5 border-t border-slate-100">
                  <Clock className="w-4 h-4 text-[#072B61] shrink-0 mt-0.5" />
                  <div className="space-y-0.5 leading-snug">
                    <p>{contacts.workingHours.weekdays}</p>
                    <p>{contacts.workingHours.sunday}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Stylized Google Map Iframe - Fine Electronics, Peravoor */}
            <div className="w-full h-[200px] sm:h-[240px] rounded-xl overflow-hidden shadow-xs border border-slate-100 mt-4 sm:mt-0">
              <iframe
                title="Fine Electronics Exact Location"
                src="https://maps.google.com/maps?q=11.901604,75.733418&z=17&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            {/* Directions Link */}
            <a
              href="https://maps.app.goo.gl/gm2CGfYDj9bsyb5h9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#4E89FF] hover:text-[#072B61] transition-colors mt-2"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions on Google Maps ↗
            </a>
          </div>

          {/* Column 2: Need Help? Card (col-span-4) */}
          <div className="lg:col-span-4 flex">
            <div className="w-full bg-[#072B61] rounded-2xl p-6 flex flex-col justify-between text-white text-left space-y-6 shadow-md">
              <div className="space-y-2">
                <h4 className="font-extrabold text-white text-xs uppercase tracking-wider opacity-85">
                  Need Help?
                </h4>
                <p className="text-[10px] text-slate-300 font-medium">
                  We are available to clarify your doubts and provide live backup load calculations.
                </p>
              </div>

              <div className="space-y-1">
                <span className="block text-[10px] font-bold text-[#FFB800] uppercase tracking-wider">
                  Call Us Now
                </span>
                <a
                  href={`tel:+91${contacts.phone}`}
                  className="block font-black text-xl sm:text-2xl text-white hover:text-[#FFB800] transition-colors tracking-tight"
                >
                  {contacts.phone}
                </a>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#1eb051] text-white font-bold text-xs py-3 px-4 rounded-xl transition-all shadow-md w-full"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.936 9.936 0 0 0 4.777 1.224h.005c5.505 0 9.989-4.478 9.99-9.985A9.983 9.983 0 0 0 12.012 2zm5.782 14.156c-.247.697-1.209 1.285-1.666 1.353-.418.062-.962.094-2.898-.67-2.476-.975-4.062-3.486-4.185-3.65-.123-.163-.984-1.31-1.002-2.47-.018-1.162.593-1.74.832-1.983.24-.243.633-.314.978-.314.113 0 .213.005.3.014.259.012.391.029.563.44.212.51.724 1.761.787 1.892.063.13.105.283.018.455-.088.172-.132.28-.264.434-.132.153-.277.34-.395.457-.132.13-.27.272-.115.54.155.267.689 1.135 1.477 1.838.966.863 1.776 1.13 2.083 1.258.307.13.488.11.67-.098.183-.21.783-.91.992-1.22.21-.309.418-.258.706-.153.287.106 1.815.857 2.128 1.013.313.156.52.233.597.367.078.134.078.775-.169 1.472z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
