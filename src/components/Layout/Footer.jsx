const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const Footer = ({ _onOpenQuote }) => {
  const handleNavClick = (sectionId) => {
    const targetId = sectionId === 'shop-gallery' ? 'shop-gallery' : sectionId;
    const el = document.getElementById(targetId);
    
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

  return (
    <footer className="bg-[#041E42] text-slate-300 pt-16 pb-6 transition-colors duration-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Brand Description & Socials Column (col-span-4) */}
        <div className="lg:col-span-4 space-y-5 text-left">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#041E42] font-black text-xs border-r border-b border-[#FFB800]">
              FE
            </div>
            <div>
              <span className="block font-black text-sm leading-none tracking-tight text-white uppercase">
                FINE ELECTRONICS
              </span>
              <span className="block text-[9px] font-bold text-[#FFB800] tracking-wider mt-0.5 uppercase">
                Energy Solutions
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs font-semibold">
            Powering a brighter tomorrow with clean and reliable energy.
          </p>
          {/* Social Icons (3 icons: FB, Insta, YT) */}
          <div className="flex gap-2.5 pt-2">
            {[
              { Icon: FacebookIcon, url: 'https://www.facebook.com/share/1Lu2iTqH65/' },
              { Icon: InstagramIcon, url: 'https://www.instagram.com/fineelectronicss_?igsh=MTJjZW5rbjgxdDRldw==' },
              { Icon: YoutubeIcon, url: 'https://youtube.com/@fineelectronic2222?si=zgNv6U6l83WK_DIq' }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors"
              >
                <item.Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column (col-span-2) */}
        <div className="lg:col-span-2 text-left">
          <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-5">Quick Links</h4>
          <ul className="space-y-2.5 text-xs">
            {[
              { label: 'Home', target: 'home' },
              { label: 'Products', target: 'products' },
              { label: 'Services', target: 'services' },
              { label: 'Our Shop', target: 'shop-gallery' },
              { label: 'Projects', target: 'about' },
              { label: 'About Us', target: 'about' },
              { label: 'Contact Us', target: 'contact' },
            ].map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleNavClick(link.target)}
                  className="hover:text-[#FFB800] hover:translate-x-0.5 transition-all cursor-pointer text-left font-semibold"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Column (col-span-2) */}
        <div className="lg:col-span-2 text-left">
          <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-5">Products</h4>
          <ul className="space-y-2.5 text-xs">
            {[
              'Inverter',
              'Battery',
              'Solar Panels',
              'Solar Inverter',
              'Stabilizers',
              'Cooking & Home Appliances',
              'Accessories'
            ].map((prod, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleNavClick('products')}
                  className="hover:text-[#FFB800] hover:translate-x-0.5 transition-all cursor-pointer text-left font-semibold"
                >
                  {prod}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column (col-span-2) */}
        <div className="lg:col-span-2 text-left">
          <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-5">Services</h4>
          <ul className="space-y-2.5 text-xs">
            {[
              'Installation',
              'Rewiring',
              'Battery Charging',
              'Maintenance Support'
            ].map((srv, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-[#FFB800] hover:translate-x-0.5 transition-all cursor-pointer text-left font-semibold"
                >
                  {srv}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Column (col-span-2) */}
        <div className="lg:col-span-2 text-left">
          <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-5">Support</h4>
          <ul className="space-y-2.5 text-xs">
            {[
              { label: 'Warranty', target: 'about' },
              { label: 'FAQ', target: 'home' },
              { label: 'Privacy Policy', target: 'home' },
              { label: 'Terms & Conditions', target: 'home' }
            ].map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleNavClick(link.target)}
                  className="hover:text-[#FFB800] hover:translate-x-0.5 transition-all cursor-pointer text-left font-semibold"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 my-4" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] sm:text-xs text-slate-500 font-medium">
        <div className="text-center sm:text-left">
          &copy; 2026 Fine Electronics. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
