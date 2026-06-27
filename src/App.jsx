import { useState } from 'react';
import AnnouncementBar from './components/Layout/AnnouncementBar';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import FeaturedProductsGrid from './components/Sections/FeaturedProductsGrid';
import Services from './components/Sections/Services';
import AchievementsStats from './components/Sections/AchievementsStats';
import TopBrandsCategorized from './components/Sections/TopBrandsCategorized';
import ContactSection from './components/Sections/ContactSection';
import Footer from './components/Layout/Footer';
import FloatingWhatsApp from './components/Layout/FloatingWhatsApp';
import BackToTop from './components/Layout/BackToTop';
import SearchModal from './components/UI/SearchModal';
import QuoteModal from './components/UI/QuoteModal';
import ShopGallery from './components/Sections/ShopGallery';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProductId, setQuoteProductId] = useState('');
  const [quoteServiceId, setQuoteServiceId] = useState('');

  // Handle opening quote modal with a preselected product
  const handleEnquireProduct = (productId) => {
    setQuoteServiceId('');
    setQuoteProductId(productId);
    setIsQuoteOpen(true);
  };

  // Handle opening quote modal with a preselected service
  const handleEnquireService = (serviceId) => {
    setQuoteProductId('');
    setQuoteServiceId(serviceId);
    setIsQuoteOpen(true);
  };

  // Handle scrolling to a product from global search
  const handleSelectProductFromSearch = (_productId) => {
    // Scroll to products section
    const el = document.getElementById('products');
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
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Navigation */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)} 
        onOpenQuote={() => {
          setQuoteProductId('');
          setIsQuoteOpen(true);
        }} 
      />

      {/* Main Content Area — offset for fixed announcement bar + navbar */}
      <main className="flex-grow pt-[88px] sm:pt-[106px]">
        
        {/* 2. Hero Section */}
        <Hero 
          onOpenQuote={() => {
            setQuoteProductId('');
            setIsQuoteOpen(true);
          }} 
        />

        {/* 3. Featured Products Grid */}
        <FeaturedProductsGrid onEnquireProduct={handleEnquireProduct} />

        {/* 4. Services Row */}
        <Services onEnquireService={handleEnquireService} />

        {/* 5. Images of Our Shop */}
        <ShopGallery />

        {/* 6. Achievements Stats Gold Banner */}
        <AchievementsStats />

        {/* 6. Top Brands Categorized Rows */}
        <TopBrandsCategorized 
          onOpenQuote={() => {
            setQuoteProductId('');
            setIsQuoteOpen(true);
          }} 
        />

        {/* 7. Contact & Visit Shop Column layout */}
        <ContactSection />

      </main>

      {/* 8. Footer */}
      <Footer 
        onOpenQuote={() => {
          setQuoteProductId('');
          setIsQuoteOpen(true);
        }} 
      />

      {/* Floating Action Buttons */}
      <FloatingWhatsApp />
      <BackToTop />

      {/* Global Interactive Modals */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelectProduct={handleSelectProductFromSearch}
      />

      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => {
          setIsQuoteOpen(false);
          setQuoteProductId('');
          setQuoteServiceId('');
        }} 
        initialProductId={quoteProductId}
        initialServiceId={quoteServiceId}
      />

    </div>
  );
}

export default App;
