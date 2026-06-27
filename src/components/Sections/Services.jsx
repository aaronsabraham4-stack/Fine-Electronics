import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, SunDim, Battery, Tv, BatteryCharging, X, ShieldCheck } from 'lucide-react';
import { services } from '../../data/shopData';

const Services = ({ onEnquireService }) => {
  const [selectedService, setSelectedService] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-7 h-7 text-[#072B61]" />;
      case 'SunDim':
        return <SunDim className="w-7 h-7 text-[#072B61]" />;
      case 'Battery':
        return <Battery className="w-7 h-7 text-[#072B61]" />;
      case 'Tv':
        return <Tv className="w-7 h-7 text-[#072B61]" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-7 h-7 text-[#072B61]" />;
      default:
        return <Zap className="w-7 h-7 text-[#072B61]" />;
    }
  };

  const serviceDetails = {
    'inverter-install': [
      'Technical load calculation for home/office backup needs',
      'Safe wall mounting & heavy-gauge copper terminal connection',
      'Dual-phase load distribution setup to prevent overloading',
      'Complete check of battery water levels & gravity diagnostics',
      'Standard warranty on wiring & installation'
    ],
    'solar-install': [
      'Comprehensive rooftop sun path & shading analysis',
      'Premium structural fabrication (high-wind resistance mounts)',
      'High-efficiency Mono PERC / Bifacial panel setup',
      'Smart Hybrid Inverter / Grid-Tie connection & programming',
      'Net metering application assistance with local KSEB office'
    ],
    'battery-install': [
      'Safe handling & acid spill-proof container placements',
      'Terminal grease application to prevent oxidation/sulfation',
      'Heavy-duty battery cable terminal crimping and testing',
      'Smart battery charger settings alignment for maximum backup',
      'Eco-friendly disposal/buyback of old tubular batteries'
    ],
    'tv-repair': [
      'Component-level TV motherboard diagnostic and backlight repair',
      'Inverter PCB track checking, MOSFET replacement & transformer repair',
      'Accurate load testing under simulated power cut environments',
      'Authentic manufacturer-grade replacement spares',
      'Service guarantee on all components repaired'
    ],
    'battery-charging': [
      'Slow boost constant-current charging for deeply discharged batteries',
      'Equalization charging to restore cell gravity balance',
      'Specific gravity check for individual cells using high-precision hydrometer',
      'Plate sulfation recovery treatments',
      'Comprehensive battery health status assessment report'
    ]
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-16 bg-[#F3F7FC] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1.5px] w-8 sm:w-16 bg-slate-300" />
          <h2 className="text-xl sm:text-2xl font-black text-[#072B61] tracking-tight whitespace-nowrap">
            OUR SERVICES
          </h2>
          <div className="h-[1.5px] w-8 sm:w-16 bg-slate-300" />
        </div>

        {/* Services Grid (5 columns row) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onClick={() => setSelectedService(service)}
              className="group bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-[#4E89FF]/20 shadow-sm hover:shadow-md transition-all duration-350 flex flex-col items-center text-center justify-center space-y-3 sm:space-y-4 cursor-pointer transform hover:-translate-y-1"
            >
              {/* Icon Wrapper */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#EBF3FF] group-hover:bg-[#4E89FF]/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                {getIcon(service.icon)}
              </div>

              {/* Text content */}
              <div className="space-y-1">
                <h4 className="font-extrabold text-[#072B61] text-xs sm:text-sm group-hover:text-[#4E89FF] transition-colors leading-tight">
                  {service.title}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-semibold leading-normal hidden sm:block">
                  {service.shortDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Services Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 cursor-default flex flex-col max-h-[92vh] sm:max-h-[90vh] mx-2 sm:mx-0"
            >
              {/* Header Banner */}
              <div className="bg-[#EBF3FF] dark:bg-slate-800/50 px-6 py-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4 shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-xs">
                  {getIcon(selectedService.icon)}
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-bold text-primary dark:text-accent uppercase tracking-widest block">
                    Our Professional Service
                  </span>
                  <h3 className="text-lg font-black text-[#072B61] dark:text-white mt-0.5">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body Details */}
              <div className="p-6 space-y-5 overflow-y-auto flex-1 text-left">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                  {selectedService.shortDesc} We deliver professional, warranty-backed services in Peravoor and neighboring areas with certified technical experts.
                </p>

                <div className="space-y-3">
                  <h5 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    What's Included in this Service
                  </h5>
                  <ul className="space-y-2.5">
                    {(serviceDetails[selectedService.id] || []).map((detail, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-tight">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              {/* Footer CTA */}
              <div className="p-6 border-t border-slate-100 dark:border-slate-800 shrink-0 flex gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-850 cursor-pointer transition-colors"
                >
                  Close
                </button>
                {onEnquireService && (
                  <button
                    onClick={() => {
                      const srvId = selectedService.id;
                      setSelectedService(null);
                      onEnquireService(srvId);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-primary dark:bg-accent text-white dark:text-primary-dark font-bold text-xs hover:bg-primary-light dark:hover:bg-accent-light cursor-pointer transition-colors shadow-md"
                  >
                    Get Service Quote
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
