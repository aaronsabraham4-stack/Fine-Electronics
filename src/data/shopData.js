// Static data for Fine Electronics Energy Solutions (Peravoor, Kannur, Kerala)
import inverterImg from '../assets/inverter.png';
import batteryImg from '../assets/battery.png';
import solarPanelImg from '../assets/solar_panel.jpg';
import hybridInverterImg from '../assets/hybrid_inverter.png';
import solarInverterImg from '../assets/solar_inverter.png';
import lithiumBatteryImg from '../assets/lithium_battery.jpg';
import leadAcidBatteryImg from '../assets/lead_acid_battery.jpg';
import lithiumBuiltInverterImg from '../assets/lithium_built_inverter.jpg';
import keyboardMouseImg from '../assets/keyboard_mouse.jpg';
import batteryTrollyImg from '../assets/battery_trolly.jpg';
import distilledWaterImg from '../assets/distilled_water.jpg';
import cablesImg from '../assets/cables.jpg';
import extensionBoardImg from '../assets/extension_board.jpg';
import dthRemotesImg from '../assets/dth_remotes.jpg';
import tvRemotesImg from '../assets/tv_remotes.png';
import acRemotesImg from '../assets/ac_remotes.png';
import ledBulbImg from '../assets/led_bulb.jpg';
import tubeLightImg from '../assets/tube_light.jpg';
import tvStandImg from '../assets/tv_stand.jpg';
import cookingAppliancesImg from '../assets/cooking_appliances.jpg';
import cellsImg from '../assets/cells.png';

export const categories = [
  { id: 'inverter', name: 'Inverter' },
  { id: 'battery', name: 'Battery' },
  { id: 'solar-panels', name: 'Solar Panels' },
  { id: 'hybrid-inverter', name: 'Hybrid Inverter' },
  { id: 'solar-inverter', name: 'Solar Inverter' },
  { id: 'accessories', name: 'Accessories' }
];

export const products = [
  {
    id: 'inverter',
    name: 'Inverter',
    category: 'inverter',
    image: inverterImg,
    description: 'Pure sine wave power backup solutions for home & office.',
    tagline: 'Never face a power cut again',
    features: [
      'Pure sine wave output — safe for all appliances',
      'Auto-cut protection & overload safety',
      'Intelligent battery charging management',
      'LCD display for battery status & load',
      'Available in 600VA to 5KVA range'
    ],
    brands: ['Luminous', 'Livguard', 'Microtek', 'V-Guard', 'Exide'],
    badge: 'Best Seller'
  },
  {
    id: 'battery',
    name: 'Battery',
    category: 'battery',
    image: batteryImg,
    description: 'Heavy duty deep cycle tubular battery for long backup.',
    tagline: 'Long-lasting backup you can rely on',
    features: [
      'Deep cycle tubular positive plate design',
      'Low maintenance & spill-proof variants',
      'High cyclic life — 1200+ charge cycles',
      'Available from 100Ah to 220Ah',
      'Warranty up to 5 years'
    ],
    brands: ['Luminous', 'Exide', 'Amaron', 'Livguard', 'Livfast'],
    badge: 'Warranty 5 Yrs'
  },
  {
    id: 'solar-panels',
    name: 'Solar Panels',
    category: 'solar-panels',
    image: solarPanelImg,
    description: 'High efficiency monocrystalline and poly modules.',
    tagline: 'Harvest the power of the sun',
    features: [
      'Monocrystalline PERC & bifacial options',
      'Anti-PID & anti-hotspot technology',
      'High efficiency up to 21%',
      'Wind resistance up to 2400 Pa',
      '25-year performance warranty'
    ],
    brands: ['Adani Solar', 'Waaree', 'Luminous', 'Livfast'],
    badge: '25yr Warranty'
  },
  {
    id: 'hybrid-inverter',
    name: 'Hybrid Inverter',
    category: 'hybrid-inverter',
    image: hybridInverterImg,
    description: 'Smart hybrid solar inverter for maximizing solar usage.',
    tagline: 'Solar + Grid + Battery — all in one',
    features: [
      'Grid-tie + off-grid hybrid operation',
      'MPPT solar charge controller built-in',
      'Smart load priority management',
      'Remote monitoring via app',
      'Compatible with lithium & tubular batteries'
    ],
    brands: ['Luminous', 'Livguard', 'Livfast'],
    badge: 'Smart Energy'
  },
  {
    id: 'solar-inverter',
    name: 'Solar Inverter',
    category: 'solar-inverter',
    image: solarInverterImg,
    description: 'On-grid and off-grid solar PCUs with intelligent tracking.',
    tagline: 'Convert sunlight to savings',
    features: [
      'PWM & MPPT charge controller options',
      'Grid export capability',
      'Wide solar input voltage range',
      'LCD / LED status indicators',
      'Overcharge and deep discharge protection'
    ],
    brands: ['Luminous', 'Microtek', 'V-Guard', 'Livguard'],
    badge: 'MPPT Tech'
  },
  {
    id: 'lithium-battery',
    name: 'Lithium Battery',
    category: 'battery',
    image: lithiumBatteryImg,
    description: 'Maintenance-free lithium batteries with fast charging.',
    tagline: 'Zero maintenance, maximum power',
    features: [
      '100% depth of discharge usability',
      'BMS (Battery Management System) built-in',
      'Fast charge — full in 2-3 hours',
      'Lightweight — 70% lighter than tubular',
      '3000+ cycle life'
    ],
    brands: ['Luminous', 'Livguard', 'Amaron'],
    badge: 'Zero Maintenance'
  },
  {
    id: 'lead-acid-battery',
    name: 'Lead Acid Battery',
    category: 'battery',
    image: leadAcidBatteryImg,
    description: 'Conventional backup batteries for home appliances.',
    tagline: 'Proven, reliable, affordable backup',
    features: [
      'Flat plate & tubular plate variants',
      'Low self-discharge rate',
      'Easy terminal access for maintenance',
      '12V standard voltage',
      'Available 100Ah to 180Ah'
    ],
    brands: ['Exide', 'Amaron', 'Luminous', 'Livfast'],
    badge: 'Value Pick'
  },
  {
    id: 'lithium-built-inverter',
    name: 'Lithium In-Built Battery',
    category: 'inverter',
    image: lithiumBuiltInverterImg,
    description: 'Modern compact inverters with built-in lithium-ion battery.',
    tagline: 'All-in-one compact power backup',
    features: [
      'Inverter + lithium battery in single unit',
      'Wall-mountable, space-saving design',
      'Supports fast USB and home load',
      'Eco-friendly — no acid or venting',
      '3-5 yr battery lifecycle'
    ],
    brands: ['Luminous', 'Livguard'],
    badge: 'Space Saver'
  },
  {
    id: 'battery-trolly',
    name: 'Battery Trolly',
    category: 'accessories',
    image: batteryTrollyImg,
    description: 'Heavy duty inverter and battery storage trolley.',
    tagline: 'Safe storage for your power unit',
    features: [
      'Heavy-gauge mild steel construction',
      'Cable management cutouts',
      'Lockable castors for mobility',
      'Fits all standard battery sizes',
      'Powder coat anti-rust finish'
    ],
    brands: ['Luminous', 'Livguard'],
    badge: 'Durable'
  },
  {
    id: 'distilled-water',
    name: 'Battery Distilled Water',
    category: 'accessories',
    image: distilledWaterImg,
    description: 'Pure distilled water for tubular battery top-ups.',
    tagline: 'Keep your battery healthy',
    features: [
      'Triple-purified, zero mineral content',
      'Maintains electrolyte gravity balance',
      'Extends battery life significantly',
      'Available in 1L, 2L, and 5L packs',
      'Compatible with all tubular batteries'
    ],
    sizes: ['1L', '2L', '5L'],
    brands: ['Luminous', 'Standard'],
    badge: 'Essential'
  },
  {
    id: 'cables',
    name: 'Cables',
    category: 'accessories',
    image: cablesImg,
    description: 'Heavy duty fire retardant copper wiring cables.',
    tagline: 'Wiring you can trust',
    features: [
      'Multi-strand pure electrolytic copper',
      'FR (fire retardant) PVC insulation',
      'ISI marked — BIS certified',
      '1.0 sqmm to 35 sqmm range',
      'Suitable for AC & DC wiring'
    ],
    brands: ['Polycab', 'V-Guard', 'Surya'],
    badge: 'ISI Certified'
  },
  {
    id: 'extension-board',
    name: 'Extension Board Adaptors',
    category: 'accessories',
    image: extensionBoardImg,
    description: 'Multi-plug surge protectors and extension units.',
    tagline: 'Power more, worry less',
    features: [
      'Built-in surge & spike protection',
      'Child safety shutters on sockets',
      'On/off master switch with indicator',
      '2m to 5m cord lengths available',
      'Universal 3-pin sockets'
    ],
    brands: ['Ogera', 'V-Guard', 'Polycab'],
    badge: 'Surge Safe'
  },
  {
    id: 'dth-remotes',
    name: 'All DTH Type Remotes',
    category: 'accessories',
    image: dthRemotesImg,
    description: 'Replacement remote controllers for all DTH setups.',
    tagline: 'Get your DTH back in control',
    features: [
      'Compatible with Tata Play, Airtel, Dish TV',
      'Original spec button layout',
      'Long IR range up to 10m',
      'Durable ABS plastic body',
      'Battery included'
    ],
    brands: ['Impex', 'Standard'],
    badge: 'All Brands'
  },
  {
    id: 'tv-remotes',
    name: 'TV Brand Remote',
    category: 'accessories',
    image: tvRemotesImg,
    description: 'Universal and brand-specific TV remotes.',
    tagline: 'Works with your TV',
    features: [
      'Compatible with Samsung, LG, Sony, etc.',
      'Smart TV function keys',
      'Backlight option available',
      'Plug & play — no programming',
      'Durable rubber buttons'
    ],
    brands: ['Impex', 'Standard'],
    badge: 'Universal'
  },
  {
    id: 'ac-remotes',
    name: 'AC Remote',
    category: 'accessories',
    image: acRemotesImg,
    description: 'Split and window air conditioner remotes.',
    tagline: 'Cool down without hassle',
    features: [
      'Compatible with all major AC brands',
      'Temperature, mode & timer controls',
      'Clear LCD display',
      'Works with split & window ACs',
      'Auto brand detection'
    ],
    brands: ['Impex', 'Standard'],
    badge: 'AC Compatible'
  },
  {
    id: 'led-bulb',
    name: 'LED Bulb',
    category: 'accessories',
    image: ledBulbImg,
    description: 'Energy saving bright LED bulbs for home lighting.',
    tagline: 'Bright home, low bills',
    features: [
      'Up to 80% energy savings vs CFL',
      '6W to 24W options',
      'Cool white & warm white available',
      '25,000 hour rated lifespan',
      'ISI marked BEE 5-star rated'
    ],
    brands: ['Surya', 'Polycab', 'Crompton'],
    badge: 'BEE 5-Star'
  },
  {
    id: 'tube-light',
    name: 'Tube Light',
    category: 'accessories',
    image: tubeLightImg,
    description: 'High lumen linear LED tube light fittings.',
    tagline: 'Bright, efficient, long-lasting',
    features: [
      'T8 & T5 LED tube replacements',
      '18W equivalent to 36W fluorescent',
      '6500K cool daylight output',
      'Direct driver — no choke needed',
      '3 year replacement warranty'
    ],
    brands: ['Surya', 'Polycab', 'Crompton', 'Ogera'],
    badge: '3yr Warranty'
  },
  {
    id: 'tv-stand',
    name: 'TV Stand',
    category: 'accessories',
    image: tvStandImg,
    description: 'Wall mounts and brackets for LED/LCD televisions.',
    tagline: 'Mount it right, view it right',
    features: [
      'Fits 32" to 75" TVs',
      'Full-motion tilt & swivel variants',
      'VESA 100x100 to 600x400 compatible',
      'Steel construction — up to 50kg load',
      'All hardware included'
    ],
    brands: ['Ogera', 'Standard'],
    badge: 'Fits All Sizes'
  },
  {
    id: 'keyboard-mouse',
    name: 'Keyboard and Mouse',
    category: 'accessories',
    image: keyboardMouseImg,
    description: 'Wired and wireless keyboard and mouse combos.',
    tagline: 'Type and click with comfort',
    features: [
      'Wired & 2.4GHz wireless combos',
      'Multimedia shortcut keys',
      'Optical sensor — 1000/1600 DPI mouse',
      'Spill-resistant keyboard',
      'Plug & play USB or nano receiver'
    ],
    brands: ['Asus', 'Acer', 'Frontech', 'Rapoo'],
    badge: 'Plug & Play'
  },
  {
    id: 'cells',
    name: 'Power Battery Cell',
    category: 'accessories',
    image: cellsImg,
    description: 'AAA and AA alkaline pencil batteries.',
    tagline: 'Power for every device',
    features: [
      'High-energy alkaline chemistry',
      'AA and AAA sizes available',
      'Long shelf life — 10 years',
      'Leak-proof construction',
      'Works in remotes, clocks, toys'
    ],
    brands: ['Duracell', 'Standard'],
    badge: '10yr Shelf Life'
  },
  {
    id: 'home-appliances',
    name: 'Cooking & Home Appliances',
    category: 'accessories',
    image: cookingAppliancesImg,
    description: 'Kitchen and cooking appliances for daily needs.',
    tagline: 'Make every home smarter',
    features: [
      'Iron Box, Pressure Cooker, Rice Cooker',
      'Electric Kettle & Non-Stick Tawa Pan',
      'Pedestal Fan, Wall Fan & Ceiling Fan',
      'Appachatty & Gas Stove available',
      'All ISI-marked quality products'
    ],
    brands: ['Impex', 'Prestige', 'Sreeram', 'Crompton', 'Surya'],
    badge: 'ISI Quality'
  }
];

export const brandCategories = {
  forInverter: [
    { name: 'Luminous', logo: 'https://companieslogo.com/img/orig/Luminous_logo.png' },
    { name: 'Livguard', logo: 'https://companieslogo.com/img/orig/Livguard_logo.png' },
    { name: 'Livfast', logo: 'https://companieslogo.com/img/orig/Livguard_logo.png' },
    { name: 'Exide', logo: 'https://companieslogo.com/img/orig/Exide-Industries_logo.png' },
    { name: 'Microtek', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' },
    { name: 'V-Guard', logo: 'https://companieslogo.com/img/orig/V-Guard_logo.png' },
    { name: 'Amaron', logo: 'https://companieslogo.com/img/orig/Amaron_logo.png' }
  ],
  forBatteries: [
    { name: 'Sun Triotec', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' },
    { name: 'Luminous', logo: 'https://companieslogo.com/img/orig/Luminous_logo.png' },
    { name: 'Livguard', logo: 'https://companieslogo.com/img/orig/Livguard_logo.png' },
    { name: 'Livfast', logo: 'https://companieslogo.com/img/orig/Livguard_logo.png' },
    { name: 'Exide', logo: 'https://companieslogo.com/img/orig/Exide-Industries_logo.png' },
    { name: 'Amaron', logo: 'https://companieslogo.com/img/orig/Amaron_logo.png' },
    { name: 'V-Guard', logo: 'https://companieslogo.com/img/orig/V-Guard_logo.png' }
  ],
  forSolarPanel: [
    { name: 'Luminous', logo: 'https://companieslogo.com/img/orig/Luminous_logo.png' },
    { name: 'Livfast', logo: 'https://companieslogo.com/img/orig/Livguard_logo.png' },
    { name: 'Livguard', logo: 'https://companieslogo.com/img/orig/Livguard_logo.png' },
    { name: 'Adani Solar', logo: 'https://companieslogo.com/img/orig/Tata_logo.png' },
    { name: 'Waaree', logo: 'https://companieslogo.com/img/orig/Tata_logo.png' }
  ],
  forBulbTubeLight: [
    { name: 'Surya', logo: 'https://companieslogo.com/img/orig/V-Guard_logo.png' },
    { name: 'Polycab', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' }
  ],
  forFan: [
    { name: 'Polar', logo: 'https://companieslogo.com/img/orig/Luminous_logo.png' },
    { name: 'Polycab', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' },
    { name: 'Ogera', logo: 'https://companieslogo.com/img/orig/V-Guard_logo.png' }
  ],
  forCell: [
    { name: 'Duracell', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' }
  ],
  forKeyboardMouse: [
    { name: 'Asus', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' },
    { name: 'Acer', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' },
    { name: 'Frontech', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' },
    { name: 'Rapoo', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' }
  ],
  forHomeAppliances: [
    { name: 'Impex', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' },
    { name: 'Prestige', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' },
    { name: 'Sreeram', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' },
    { name: 'Polyguards', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' },
    { name: 'Surya', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' },
    { name: 'Crompton', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' },
    { name: 'Ogera', logo: 'https://companieslogo.com/img/orig/Microtek_logo.png' }
  ]
};

export const services = [
  {
    id: 'inverter-install',
    title: 'Inverter Installation',
    icon: 'Zap',
    shortDesc: 'Professional domestic & industrial inverter setups.'
  },
  {
    id: 'solar-install',
    title: 'Solar Installation',
    icon: 'SunDim',
    shortDesc: 'On-grid/off-grid rooftop solar plants installation.'
  },
  {
    id: 'battery-install',
    title: 'Battery Installation',
    icon: 'Battery',
    shortDesc: 'Tubular, lithium, and lead-acid battery configuration.'
  },
  {
    id: 'tv-repair',
    title: 'LED TV & Inverter Repairing',
    icon: 'Tv',
    shortDesc: 'Expert motherboard level repairs and backup diagnostics.'
  },
  {
    id: 'battery-charging',
    title: 'Battery Charging',
    icon: 'BatteryCharging',
    shortDesc: 'Boost charging and gravity recovery for weak batteries.'
  }
];

export const contacts = {
  shopName: 'Fine Electronics',
  tagline: 'Energy Solutions',
  address: 'Fine Electronics, Carmel Center, Near Bus Stand, Peravoor, Kannur, Kerala - 670673',
  phone: '9497294142',
  email: 'shibuaaron201018@gmail.com',
  workingHours: {
    weekdays: 'Mon - Sat: 9:00 AM - 8:00 PM',
    sunday: 'Sunday: 9:00 AM - 1:00 PM'
  }
};
