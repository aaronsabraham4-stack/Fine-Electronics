const Brands = () => {
  const brandsList = [
    { name: 'Luminous', logo: '🔋 LUMINOUS', subtitle: 'Authorized Dealer', color: 'border-l-blue-600' },
    { name: 'Exide', logo: '⚡ EXIDE', subtitle: 'Gold Partner', color: 'border-l-red-655' },
    { name: 'Amaron', logo: '🟢 AMARON', subtitle: 'Certified Retailer', color: 'border-l-green-600' },
    { name: 'Livguard', logo: '🔴 LIVGUARD', subtitle: 'Premium Distributor', color: 'border-l-orange-500' },
    { name: 'Microtek', logo: '💻 MICROTEK', subtitle: 'Value Partner', color: 'border-l-cyan-600' },
    { name: 'V-Guard', logo: '🛡️ V-GUARD', subtitle: 'Direct Stockist', color: 'border-l-yellow-600' },
    { name: 'Tata Power Solar', logo: '☀️ TATA SOLAR', subtitle: 'Key Installer', color: 'border-l-sky-700' },
  ];

  return (
    <section className="py-12 bg-slate-100 dark:bg-slate-950 transition-colors duration-300 border-t border-b border-slate-200/50 dark:border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subheader */}
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
          Authorized Dealer & Installation Partner
        </p>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {brandsList.map((brand, idx) => (
            <div
              key={idx}
              className={`p-4 bg-white dark:bg-slate-900 rounded-2xl border-l-4 ${brand.color} border-t border-r border-b border-slate-200/40 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center text-center group`}
            >
              <span className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-200 tracking-tight group-hover:scale-105 transition-transform duration-200">
                {brand.logo}
              </span>
              <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase mt-1 tracking-wider">
                {brand.subtitle}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Brands;
