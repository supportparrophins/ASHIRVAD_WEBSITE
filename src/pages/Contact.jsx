import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  Sparkles, MessageSquare, ExternalLink, Heart, ArrowRight
} from 'lucide-react';
import { contactData } from '../data/contactData';

export default function Contact({ openSupportModal }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-stone-50 text-slate-900 min-h-screen pb-16 space-y-8 sm:space-y-10">
      
      {/* 1. Compact Hero Header Section */}
      <section className="bg-[#0D2A45] text-white py-6 sm:py-8 px-4 sm:px-6 relative overflow-hidden shadow-md">
        <div className="max-w-7xl mx-auto space-y-2 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-amber-300 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border border-white/15">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>GET IN TOUCH WITH ASHIRVAD</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Contact Us
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Reach out for inquiries, hall bookings, educational accompaniment, or inter-faith programmes.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Directory Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-amber-600">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Campus Location</span>
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900">ASHIRVAD</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                #30, St Mark’s Road Cross, Shanthala Nagar,<br />
                Bengaluru, Karnataka 560 001
              </p>
            </div>

            {/* Open Hours */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-amber-600">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Office Working Hours</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                Monday – Saturday: 9:00 AM – 5:30 PM
              </p>
            </div>

            {/* Telephone Contacts */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-600">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Direct Phone Numbers</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-600">Landline:</span>
                  <a href="tel:08022210154" className="font-bold text-[#0D2A45] hover:text-amber-600 transition-colors">
                    080-2221 0154
                  </a>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-600">Mobile / Office:</span>
                  <a href="tel:+918310952433" className="font-bold text-[#0D2A45] hover:text-amber-600 transition-colors">
                    +91 83109 52433
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">CSC Social Concern:</span>
                  <a href="tel:+919148020709" className="font-bold text-[#0D2A45] hover:text-amber-600 transition-colors">
                    +91 91480 20709
                  </a>
                </div>
              </div>
            </div>

            {/* Email Directory */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-600">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Department Emails</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-600">General:</span>
                  <a href="mailto:ashirvadsj@gmail.com" className="font-medium text-[#0D2A45] hover:text-amber-600 transition-colors">
                    ashirvadsj@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-600">CSC:</span>
                  <a href="mailto:ashirvadcsc@gmail.com" className="font-medium text-[#0D2A45] hover:text-amber-600 transition-colors">
                    ashirvadcsc@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-600">HRDC:</span>
                  <a href="mailto:ashirvadhrdc@gmail.com" className="font-medium text-[#0D2A45] hover:text-amber-600 transition-colors">
                    ashirvadhrdc@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">MAIN Network:</span>
                  <a href="mailto:main.ashirvad@gmail.com" className="font-medium text-[#0D2A45] hover:text-amber-600 transition-colors">
                    main.ashirvad@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <div>
                <span className="text-[11px] font-extrabold text-[#0D2A45] uppercase tracking-wider block">
                  ONLINE INQUIRY
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                  Send us a Message
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  We welcome your inquiries and usually respond within 1–2 business days.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-3 bg-emerald-50/50 rounded-xl border border-emerald-200 p-6">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-slate-900">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our team will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#0D2A45] text-white text-xs font-bold px-5 py-2 rounded-lg cursor-pointer hover:bg-[#133A61] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fr. / Dr. / Mr. / Ms."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0D2A45] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0D2A45] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0D2A45] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message / Query *</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Share details regarding your visit, hall booking query, or collaboration..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0D2A45] focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="pt-1 flex justify-end">
                    <button
                      type="submit"
                      className="bg-[#0D2A45] hover:bg-[#133A61] text-white font-bold px-7 py-2.5 rounded-lg text-xs uppercase tracking-wider shadow transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5 text-amber-400" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Embedded Google Map with Exact Pinpointed Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white p-3 space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-1">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  Ashirvad Building
                </span>
                <span className="text-xs text-slate-600">
                  6th Main Rd, opposite Beerappa Residency, Punyabhoomi Layout, Horamavu, Bengaluru, Karnataka 560016
                </span>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/r2jJuc9VZdvaqhqq5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#0D2A45] hover:bg-[#133A61] transition-colors px-4 py-2 rounded-lg shadow-sm shrink-0 cursor-pointer"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-200">
            <iframe
              title="Ashirvad Building Location Map"
              src="https://maps.google.com/maps?q=13.0276748,77.6736778&hl=en&z=17&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
