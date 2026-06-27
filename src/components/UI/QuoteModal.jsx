import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, ShieldCheck, Mail, Phone, User, MessageSquareCode } from 'lucide-react';
import { products, services } from '../../data/shopData';
import VoiceTranscriber from './VoiceTranscriber';

const QuoteModal = ({ isOpen, onClose, initialProductId, initialServiceId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestType: 'product', // 'product' or 'service' or 'general'
    interestId: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Set initial product or service if specified
      if (initialProductId) {
        setFormData((prev) => ({
          ...prev,
          interestType: 'product',
          interestId: initialProductId,
        }));
      } else if (initialServiceId) {
        setFormData((prev) => ({
          ...prev,
          interestType: 'service',
          interestId: initialServiceId,
        }));
      } else {
        setFormData({
          name: '',
          email: '',
          phone: '',
          interestType: 'general',
          interestId: '',
          message: '',
        });
      }
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialProductId, initialServiceId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // Reset interestId if type changes
      if (name === 'interestType') {
        updated.interestId = '';
      }
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your Name and Phone Number.');
      return;
    }
    
    setIsLoading(true);
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 animate-fade-in flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 dark:border-slate-850 shrink-0">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {isSubmitted ? 'Request Received' : 'Get a Free Quote'}
          </h3>
          <button 
            onClick={onClose} 
            className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {isSubmitted ? (
            <div className="text-center py-8 px-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 text-emerald-500 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Quote Request Sent!</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base max-w-sm mb-6">
                Thank you, <strong className="text-primary dark:text-accent">{formData.name}</strong>. Your enquiry for{' '}
                <strong className="text-slate-850 dark:text-slate-100">
                  {formData.interestType === 'product'
                    ? products.find((p) => p.id === formData.interestId)?.name || 'our products'
                    : formData.interestType === 'service'
                    ? services.find((s) => s.id === formData.interestId)?.title || 'our services'
                    : 'a general consultation'}
                </strong>{' '}
                has been recorded.
              </p>
              
              <div className="w-full bg-slate-50 dark:bg-slate-850 rounded-xl p-4 border border-slate-100 dark:border-slate-800 text-left mb-6 text-xs sm:text-sm space-y-2 text-slate-600 dark:text-slate-300">
                <div className="flex justify-between">
                  <span>Contact Number:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Response Time:</span>
                  <span className="font-semibold text-success-eco flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> Within 2 Hours
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full sm:w-auto bg-primary hover:bg-primary-light text-white font-bold py-2.5 px-8 rounded-xl transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Fill out this quick form and our expert team will contact you with free consultation, pricing, and system size estimates.
              </p>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 outline-none focus:border-primary dark:focus:border-accent text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 99999 99999"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 outline-none focus:border-primary dark:focus:border-accent text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 outline-none focus:border-primary dark:focus:border-accent text-sm transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Interest Type */}
              <div className="grid grid-cols-3 gap-2">
                {['product', 'service', 'general'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleChange({ target: { name: 'interestType', value: type } })}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-all capitalize ${
                      formData.interestType === type
                        ? 'bg-primary text-white border-primary dark:bg-accent dark:text-primary-dark dark:border-accent'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    {type === 'general' ? 'Consultation' : type}
                  </button>
                ))}
              </div>

              {/* Dynamic Items dropdown */}
              {formData.interestType === 'product' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Select Product of Interest
                  </label>
                  <select
                    name="interestId"
                    value={formData.interestId}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 outline-none focus:border-primary dark:focus:border-accent text-sm transition-colors"
                  >
                    <option value="">-- Choose a Product --</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.brand ? `[${p.brand}] ` : ''}{p.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {formData.interestType === 'service' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Select Service Required
                  </label>
                  <select
                    name="interestId"
                    value={formData.interestId}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 outline-none focus:border-primary dark:focus:border-accent text-sm transition-colors"
                  >
                    <option value="">-- Choose a Service --</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Message */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Detailed Requirements (Optional)
                  </label>
                  <VoiceTranscriber 
                    onTranscript={(text) => setFormData(prev => ({ ...prev, message: (prev.message ? prev.message + " " + text : text) }))} 
                  />
                </div>
                <div className="relative">
                  <MessageSquareCode className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="e.g. I need a power backup that runs 3 ceiling fans and a refrigerator for 5 hours. Please provide quotes."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 outline-none focus:border-primary dark:focus:border-accent text-sm transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-light dark:bg-accent dark:hover:bg-accent-light dark:text-primary-dark text-white font-bold py-3 px-4 rounded-xl transition-all transform active:scale-95 disabled:opacity-50 text-sm mt-6 cursor-pointer"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-white dark:border-primary border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
