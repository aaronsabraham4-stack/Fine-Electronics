const AnnouncementBar = () => {
  return (
    <div className="bg-[#072B61] text-white py-2 px-4 text-[10px] sm:text-[11px] font-semibold tracking-wide border-b border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-2">
        {/* Left Side: show fewer badges on mobile */}
        <div className="flex items-center gap-x-4 sm:gap-x-6 text-slate-100">
          <div className="flex items-center gap-1">
            <span className="text-[#FFB800] font-bold">✓</span>
            <span>Genuine Products</span>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <span className="text-[#FFB800] font-bold">✓</span>
            <span>Professional Installation</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#FFB800] font-bold">✓</span>
            <span>Warranty Support</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <span className="text-[#FFB800] font-bold">✓</span>
            <span>Free Consultation</span>
          </div>
        </div>

        {/* Right Side: Call — always visible */}
        <div className="flex items-center text-slate-100 hover:text-white transition-colors shrink-0">
          <a
            href="tel:+919497294142"
            className="flex items-center gap-1 font-bold transition-all duration-200"
          >
            <span>📞 <span className="hidden sm:inline">9497294142</span></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
