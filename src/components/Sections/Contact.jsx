import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle, ShieldCheck } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill out your Name and Phone Number.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  const waNumber = '919876543210';
  const waUrl = `https://wa.me/${waNumber}?text=Hi!%2520I%2520need%2520to%2520enquire%2520about%2520power%2520solutions%252520installation.`;

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-accent">
            Find Us
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Contact Our Store
          </h3>
          <p className="text-base text-slate-505 dark:text-slate-400">
            Visit our showroom for a live demonstration of smart hybrid solar systems and tubular batteries, or send us a digital query.
          </p>
        </div>

        {/* Outer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Contact details & Store Map (LG: 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Direct Cards */}
            <div className="bg-slate-50 dark:bg-slate-850 p-6 sm:p-8 rounded-3xl border border-slate-205/50 dark:border-slate-800 text-left space-y-6">
              <h4 className="font-bold text-lg text-slate-900 dark:text-white">Store Information</h4>

              <ul className="space-y-4.5 text-sm sm:text-base">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary dark:text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-800 dark:text-white">Store Location</span>
                    <span className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                      Shop No. 24, Energy Plaza, Main Market, Sector 5, Dwarka, New Delhi - 110075
                    </span>
                  </div>
                </li>

                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary dark:text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-800 dark:text-white">Phone Support</span>
                    <a href="tel:+919876543210" className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-accent transition-colors mt-0.5">
                      +91 98765 43210
                    </a>
                  </div>
                </li>

                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary dark:text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-800 dark:text-white">Email Address</span>
                    <a href="mailto:info@electrosolar.com" className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-accent transition-colors mt-0.5">
                      info@electrosolar.com
                    </a>
                  </div>
                </li>

                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary dark:text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-800 dark:text-white">Showroom Hours</span>
                    <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                      <p>Mon - Sat: 09:30 AM - 08:30 PM</p>
                      <p>Sunday: 11:00 AM - 05:00 PM</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map Mockup */}
            <div className="flex-1 min-h-[220px] rounded-3xl overflow-hidden border border-slate-205/50 dark:border-slate-800 shadow-sm relative group">
              {/* Google Maps iframe */}
              <iframe
                title="Store Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.918933393994!2d77.05047805!3d28.5853513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad3d9bd7e55%3A0x43e06180a0684f59!2sSector%205%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale dark:invert-[0.9] dark:opacity-80 group-hover:grayscale-0 dark:group-hover:invert-0 dark:group-hover:opacity-100 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Floating Maps CTA */}
              <a
                href="https://maps.app.goo.gl/yJ6h1GjGjGjGjGjG7"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-primary text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-md hover:bg-primary-light transition-all flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Maps</span>
              </a>
            </div>

          </div>

          {/* Column 2: Lead capture form (LG: 7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-850 p-6 sm:p-8 rounded-3xl border border-slate-205/50 dark:border-slate-800 flex flex-col justify-between text-left">
            <div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white">Send a Message</h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-450 mt-1 mb-6">
                Have questions about a customized solar kit or battery pricing? Fill out this form and we'll reply shortly.
              </p>

              {isSuccess ? (
                <div className="py-12 text-center flex flex-col items-center justify-center h-full">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h5 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Message Sent Successfully!</h5>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-450 max-w-sm mb-6">
                    Thank you for reaching out. We have logged your query and our store executives will email or call you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-primary hover:bg-primary-light text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Gupta"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-755 rounded-xl text-slate-850 dark:text-slate-100 outline-none focus:border-primary dark:focus:border-accent text-sm transition-colors shadow-sm"
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. +91 99999 99999"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-755 rounded-xl text-slate-850 dark:text-slate-100 outline-none focus:border-primary dark:focus:border-accent text-sm transition-colors shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-755 rounded-xl text-slate-850 dark:text-slate-100 outline-none focus:border-primary dark:focus:border-accent text-sm transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="e.g. Inverter Installation Service / Solar Quote"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-755 rounded-xl text-slate-850 dark:text-slate-100 outline-none focus:border-primary dark:focus:border-accent text-sm transition-colors shadow-sm"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Type your questions or requirements here..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-755 rounded-xl text-slate-850 dark:text-slate-100 outline-none focus:border-primary dark:focus:border-accent text-sm transition-colors shadow-sm resize-none"
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-150 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-xs text-slate-455">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>We protect your data privacy.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-light dark:bg-accent dark:hover:bg-accent-light dark:text-primary-dark text-white font-bold py-3 px-6 rounded-xl transition-all disabled:opacity-50 text-xs sm:text-sm cursor-pointer shadow-md"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white dark:border-primary border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Quick WhatsApp Support Callout */}
            {!isSuccess && (
              <div className="mt-8 border border-emerald-500/20 bg-emerald-500/5 p-4 rounded-2xl flex items-center justify-between gap-4">
                <div className="text-left space-y-0.5">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 fill-current" /> Instant WhatsApp Connect
                  </h5>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Prefer text support? Connect directly on WhatsApp with our shop manager.</p>
                </div>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba56] text-white text-xs font-bold py-2 px-4 rounded-xl shrink-0 flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Chat Now</span>
                </a>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
