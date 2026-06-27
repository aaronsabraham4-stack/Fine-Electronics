import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Brand Logo Subcomponents for Infinite Resolution and Crispness
const LuminousLogo = () => (
  <span className="text-[#0B4E9B] font-[900] tracking-wider text-base sm:text-lg">LUMINOUS</span>
);

const LivguardLogo = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center">
    <span className="italic font-black text-slate-800 text-base sm:text-lg">
      <span className="text-[#E85C24]">Liv</span>guard
    </span>
    <span className="text-[6px] tracking-widest text-slate-400 font-bold uppercase mt-0.5">energy unlimited</span>
  </div>
);

const LivfastLogo = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center">
    <span className="italic font-black text-[#E31E24] text-base sm:text-lg tracking-tighter flex items-center gap-0.5">
      LIV<span className="text-[#F39200]">FAST</span>
    </span>
    <span className="text-[6px] tracking-widest text-slate-400 font-bold uppercase mt-0.5">energy unlimited</span>
  </div>
);

const ExideLogo = () => (
  <span className="text-[#ED1C24] font-black tracking-tighter text-lg sm:text-xl" style={{ fontFamily: '"Impact", "Arial Black", sans-serif' }}>
    EXIDE
  </span>
);

const MicrotekLogo = () => (
  <div className="flex items-center justify-center gap-1.5">
    <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-red-500 relative flex-shrink-0">
      <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
    </div>
    <span className="text-[#00509E] font-[900] tracking-tighter text-sm sm:text-base">MICROTEK</span>
  </div>
);

const VGuardLogo = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center">
    <svg className="w-8 h-4 text-orange-500 fill-current" viewBox="0 0 24 10">
      <path d="M2 8 Q 8 2, 14 3 T 22 1 Q 16 5, 12 6 T 4 7 Z" />
    </svg>
    <span className="text-slate-800 font-extrabold tracking-wide text-[10px] mt-0.5">V-GUARD</span>
  </div>
);

const AmaronLogo = () => (
  <span className="text-[#7CB342] font-[900] tracking-wider text-base sm:text-lg">AMARON</span>
);

const SunTriotecLogo = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center">
    <span className="text-[#0E3B70] font-black text-xs sm:text-sm tracking-tighter">SUN TRIOTEC</span>
    <span className="text-[5px] text-[#E31E24] font-bold tracking-widest uppercase mt-0.5 border-t border-[#0E3B70] pt-0.5">PREMIUM BATTERIES</span>
  </div>
);

const AdaniSolarLogo = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center">
    <span className="font-extrabold text-[#7B2872] text-sm sm:text-base tracking-tight">adani</span>
    <span className="text-[#F15A24] font-bold text-[8px] uppercase tracking-wider mt-0.5">Solar</span>
  </div>
);

const WaareeLogo = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center">
    <span className="text-[#138808] font-black italic tracking-widest text-sm sm:text-base">WAAREE</span>
    <span className="text-[5px] text-[#E31E24] font-semibold tracking-wider mt-0.5">One with the Sun</span>
  </div>
);

const SuryaLogo = () => (
  <span className="text-[#ED1C24] font-black tracking-widest text-base sm:text-lg">SURYA</span>
);

const PolycabLogo = () => (
  <div className="flex items-center justify-center gap-1 font-sans">
    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0A5AA5] to-[#ED2024] flex-shrink-0" />
    <span className="font-black text-sm sm:text-base tracking-tight leading-none">
      <span className="text-[#0A5AA5]">POLY</span>
      <span className="text-[#ED2024]">CAB</span>
    </span>
  </div>
);

const PolarLogo = () => (
  <span className="bg-[#E31E24] text-white px-2 py-0.5 rounded font-black text-xs sm:text-sm tracking-wider">
    POLAR
  </span>
);

const OgeraLogo = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center">
    <div className="flex items-center justify-center gap-1">
      <div className="w-3.5 h-3.5 rounded-full border border-slate-700 flex items-center justify-center font-bold text-[8px] text-slate-700 flex-shrink-0">⚙</div>
      <span className="text-slate-800 font-extrabold tracking-widest text-sm sm:text-base">OGERA</span>
    </div>
    <span className="text-[5px] text-slate-400 font-medium tracking-wide mt-0.5">Switch to a Better Life</span>
  </div>
);

const DuracellLogo = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center">
    <span className="text-slate-900 font-black tracking-tight text-base sm:text-lg" style={{ borderTop: '2.5px solid #C4762E', paddingTop: '1px' }}>
      DURACELL
    </span>
    <span className="text-[5px] text-slate-400 font-semibold tracking-wider mt-0.5">TRUST IS POWER</span>
  </div>
);

const AsusLogo = () => (
  <span className="text-[#0054A6] font-[900] tracking-tighter text-base sm:text-lg italic">
    ASUS
  </span>
);

const AcerLogo = () => (
  <span className="text-[#83B81A] font-extrabold tracking-tight text-base sm:text-lg lowercase">
    acer
  </span>
);

const FrontechLogo = () => (
  <span className="text-slate-800 font-black tracking-tight text-sm sm:text-base">
    FRONTECH
  </span>
);

const RapooLogo = () => (
  <span className="text-[#00A0E9] font-bold tracking-tight text-sm sm:text-base lowercase">
    rapoo
  </span>
);

const ImpexLogo = () => (
  <span className="font-extrabold text-sm sm:text-base tracking-tighter text-slate-800">
    imp<span className="text-[#ED1C24]">ex</span>
  </span>
);

const PrestigeLogo = () => (
  <span className="bg-[#ED1C24] text-white px-2.5 py-0.5 rounded-md font-serif italic font-extrabold text-xs sm:text-sm shadow-xs">
    Prestige
  </span>
);

const SreeramLogo = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center">
    <span className="text-[#0F6F3A] font-serif font-black text-sm sm:text-base tracking-wide">SREERAM</span>
    <span className="text-[5px] text-slate-400 font-semibold mt-0.5">Since 1980</span>
  </div>
);

const PolyguardsLogo = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center">
    <span className="text-[#10316B] font-extrabold text-xs sm:text-sm tracking-widest">POLYGUARDS</span>
    <span className="text-[5px] text-slate-400 font-medium tracking-wider mt-0.5">Built to Last</span>
  </div>
);

const CromptonLogo = () => (
  <div className="flex flex-col items-center justify-center leading-none text-center">
    <span className="text-[#0A5C9B] font-black text-sm sm:text-base lowercase tracking-tight">crompton</span>
    <span className="text-[5px] text-slate-400 font-semibold tracking-wider mt-0.5">Life. Unlimited</span>
  </div>
);

const BrandLogo = ({ name }) => {
  switch (name.toUpperCase()) {
    case 'LUMINOUS': return <LuminousLogo />;
    case 'LIVGUARD': return <LivguardLogo />;
    case 'LIVFAST': return <LivfastLogo />;
    case 'EXIDE': return <ExideLogo />;
    case 'MICROTEK': return <MicrotekLogo />;
    case 'V-GUARD': return <VGuardLogo />;
    case 'AMARON': return <AmaronLogo />;
    case 'SUN TRIOTEC': return <SunTriotecLogo />;
    case 'ADANI SOLAR': return <AdaniSolarLogo />;
    case 'WAAREE': return <WaareeLogo />;
    case 'SURYA': return <SuryaLogo />;
    case 'POLYCAB': return <PolycabLogo />;
    case 'POLAR': return <PolarLogo />;
    case 'OGERA': return <OgeraLogo />;
    case 'DURACELL': return <DuracellLogo />;
    case 'ASUS': return <AsusLogo />;
    case 'ACER': return <AcerLogo />;
    case 'FRONTECH': return <FrontechLogo />;
    case 'RAPOO': return <RapooLogo />;
    case 'IMPEX': return <ImpexLogo />;
    case 'PRESTIGE': return <PrestigeLogo />;
    case 'SREERAM': return <SreeramLogo />;
    case 'POLYGUARDS': return <PolyguardsLogo />;
    case 'CROMPTON': return <CromptonLogo />;
    default:
      return <span className="font-bold text-slate-500 text-xs sm:text-sm">{name}</span>;
  }
};

const BRAND_CATEGORIES = [
  {
    id: 'inverter',
    title: 'For Inverter',
    brands: ['LUMINOUS', 'LIVGUARD', 'LIVFAST', 'EXIDE', 'MICROTEK', 'V-GUARD', 'AMARON']
  },
  {
    id: 'batteries',
    title: 'For Batteries',
    brands: ['SUN TRIOTEC', 'LUMINOUS', 'LIVGUARD', 'LIVFAST', 'EXIDE', 'AMARON', 'V-GUARD']
  },
  {
    id: 'solar',
    title: 'For Solar Panel',
    brands: ['LUMINOUS', 'LIVFAST', 'LIVGUARD', 'ADANI SOLAR', 'WAAREE']
  },
  {
    id: 'bulb-fan-cell',
    isSplit: true,
    columns: [
      {
        id: 'bulb',
        title: 'For Bulb & Tube Light',
        brands: ['SURYA', 'POLYCAB']
      },
      {
        id: 'fan',
        title: 'For Fan',
        brands: ['POLAR', 'POLYCAB', 'OGERA']
      },
      {
        id: 'cell',
        title: 'For Power Battery Cell',
        brands: ['DURACELL']
      }
    ]
  },
  {
    id: 'keyboard-mouse',
    title: 'For Keyboard & Mouse',
    brands: ['ASUS', 'ACER', 'FRONTECH', 'RAPOO']
  },
  {
    id: 'home-appliances',
    title: 'For Cooking & Home Appliances',
    brands: ['IMPEX', 'PRESTIGE', 'SREERAM', 'POLYGUARDS', 'SURYA', 'CROMPTON', 'OGERA']
  }
];

const TopBrandsCategorized = ({ _onOpenQuote }) => {
  return (
    <section id="brands" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-blue-500 blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-indigo-500 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Premium Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-headings">
            Authorized Brands We Deal In
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            We partner with leading local and international manufacturers to bring you 100% genuine products with full warranty support.
          </p>
        </motion.div>

        {/* Brands Sheet Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-3xl bg-slate-800/40 border border-white/10 p-4 sm:p-8 shadow-2xl backdrop-blur-md overflow-hidden group hover:border-blue-500/30 transition-all duration-500 text-left"
        >
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="flex flex-col gap-6 w-full">
            {BRAND_CATEGORIES.map((category) => {
              if (category.isSplit) {
                return (
                  <div key={category.id} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {category.columns.map((col) => (
                      <div 
                        key={col.id}
                        className="flex flex-col border border-slate-700/50 bg-slate-900/60 rounded-2xl overflow-hidden shadow-xs hover:border-slate-600/50 transition-all duration-300"
                      >
                        <div className="bg-slate-800/80 px-5 py-3.5 font-extrabold text-xs text-blue-400 tracking-wider border-b border-slate-700/50 uppercase flex items-center justify-between">
                          <span>{col.title}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        </div>
                        <div className="p-3 sm:p-5 flex flex-nowrap sm:flex-wrap items-center gap-2.5 sm:gap-3.5 flex-grow bg-slate-950/20 overflow-x-auto scrollbar-none">
                          {col.brands.map((brandName) => (
                            <div
                              key={brandName}
                              className="flex items-center justify-center px-3 sm:px-4 py-2 min-w-[90px] sm:min-w-[110px] h-10 sm:h-12 rounded-xl bg-white border border-slate-100 shadow-xs hover:shadow-md hover:border-blue-500/40 hover:scale-105 transition-all duration-300 select-none shrink-0 sm:shrink sm:flex-grow"
                            >
                              <BrandLogo name={brandName} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              return (
                <div 
                  key={category.id}
                  className="flex flex-col md:flex-row md:items-stretch border border-slate-700/50 bg-slate-900/60 rounded-2xl overflow-hidden shadow-xs hover:border-slate-600/50 transition-all duration-300"
                >
              {/* Category Sidebar/Header */}
                  <div className="md:w-44 lg:w-48 flex-shrink-0 bg-slate-800/80 flex items-center justify-between md:justify-start px-4 sm:px-5 py-3 sm:py-3.5 md:py-4 font-extrabold text-xs text-blue-400 tracking-wider border-b md:border-b-0 md:border-r border-slate-700/50 uppercase">
                    <span>{category.title}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                  
                  {/* Brand Logos — scrollable on mobile */}
                  <div className="p-3 sm:p-5 flex flex-nowrap sm:flex-wrap items-center gap-2.5 sm:gap-3.5 flex-grow bg-slate-950/20 overflow-x-auto scrollbar-none">
                    {category.brands.map((brandName) => (
                      <div
                        key={brandName}
                        className="flex items-center justify-center px-3 sm:px-4 py-2 min-w-[90px] sm:min-w-[120px] lg:min-w-[130px] h-10 sm:h-12 rounded-xl bg-white border border-slate-100 shadow-xs hover:shadow-md hover:border-blue-500/40 hover:scale-105 transition-all duration-300 select-none shrink-0 sm:shrink sm:flex-grow-0"
                      >
                        <BrandLogo name={brandName} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopBrandsCategorized;
