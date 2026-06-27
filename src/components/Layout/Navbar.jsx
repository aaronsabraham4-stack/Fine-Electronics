import { useState, useEffect } from 'react';
import { Menu, X, Search, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import LanguageSelector from '../UI/LanguageSelector';

const Navbar = ({ onOpenSearch, onOpenQuote }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Intersection observer logic for active states
      const sections = ['home', 'products', 'services', 'shop-gallery', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    
    // Map shop gallery to its element ID
    const targetId = sectionId === 'shop-gallery' ? 'shop-gallery' : sectionId;
    const el = document.getElementById(targetId);
    
    if (el) {
      const offset = 80; // height of sticky navbar
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

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'Products', target: 'products', hasDropdown: true },
    { label: 'Services', target: 'services' },
    { label: 'Our Shop', target: 'shop-gallery' },
    { label: 'Projects', target: 'about' }, // scrolls to stats/brands or shop info
    { label: 'About Us', target: 'about' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <header
      className={`fixed top-[32px] sm:top-[34px] left-0 right-0 z-40 transition-all duration-300 bg-white dark:bg-slate-900/95 dark:backdrop-blur-md py-3 sm:py-4 border-b border-slate-100 dark:border-slate-800 ${isScrolled ? 'shadow-md dark:shadow-slate-950/20' : 'shadow-xs'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo FE */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          {/* Stylized Circle FE logo */}
          <div className="relative w-10 h-10 rounded-full bg-[#072B61] flex items-center justify-center text-white font-black text-sm shadow-md transition-all border-r-2 border-b-2 border-[#FFB800]">
            FE
          </div>
          <div>
            <span className="block font-black text-sm md:text-base leading-none tracking-tight text-[#072B61] dark:text-white uppercase">
              FINE ELECTRONICS
            </span>
            <span className="block text-[10px] font-bold text-[#FFB800] tracking-wider mt-0.5 uppercase">
              Energy Solutions
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.target;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target)}
                className={`flex items-center gap-0.5 px-3.5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#4E89FF] dark:text-accent'
                    : 'text-[#072B61] dark:text-slate-200 hover:text-[#4E89FF] dark:hover:text-accent'
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 mt-0.5" />}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Selector */}
          <LanguageSelector />



          {/* Product Search */}
          <button
            onClick={onOpenSearch}
            aria-label="Search products"
            className="p-2.5 rounded-xl text-[#072B61] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navbar Right Panel (Mobile Only) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Language Selector */}
          <LanguageSelector />



          <button
            onClick={onOpenSearch}
            className="p-2 rounded-lg text-[#072B61] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-[#072B61] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-4 px-4 shadow-xl flex flex-col gap-2 animate-fade-in">
          {navLinks.map((link) => {
            const isActive = activeSection === link.target;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target)}
                className={`w-full text-left py-3 px-4 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? 'text-[#4E89FF] dark:text-accent bg-slate-50 dark:bg-slate-800'
                    : 'text-[#072B61] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-100 mt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#FFB800] hover:bg-[#e0a200] text-[#072B61] font-bold py-3 px-4 rounded-xl text-center shadow-md cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+919497294142"
              className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-[#072B61] font-bold py-3 px-4 rounded-xl text-center cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#4E89FF]" />
              <span>Call 9497294142</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
