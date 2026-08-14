import React, { useState } from 'react';
import { X, Heart, Sparkles, BookOpen, Users, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react';

export default function SupportModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('sponsor');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amountOrTime: '₹ 5,000 / One Child Education Kit',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // auto close or keep open
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-200 text-xs font-bold uppercase tracking-wider mb-1">
            <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
            <span>Support Ashirvad's Mission</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-white">
            Make a Tangible Difference Today
          </h2>
          <p className="text-amber-100/80 text-xs sm:text-sm mt-1">
            Support education for slum children, medical camps for migrant families, or volunteer your skills.
          </p>

          {/* Modal Tabs */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => { setActiveTab('sponsor'); setSubmitted(false); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'sponsor' ? 'bg-white text-amber-800 shadow' : 'bg-amber-900/40 text-amber-100 hover:bg-amber-900/60'
              }`}
            >
              Sponsor Child / Project
            </button>
            <button
              onClick={() => { setActiveTab('volunteer'); setSubmitted(false); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'volunteer' ? 'bg-white text-amber-800 shadow' : 'bg-amber-900/40 text-amber-100 hover:bg-amber-900/60'
              }`}
            >
              Volunteer as Tutor / Mentor
            </button>
            <button
              onClick={() => { setActiveTab('bank'); setSubmitted(false); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'bank' ? 'bg-white text-amber-800 shadow' : 'bg-amber-900/40 text-amber-100 hover:bg-amber-900/60'
              }`}
            >
              Direct Bank Transfer
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-slate-700">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Thank You for Your Generous Support!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Our social coordination team will contact you directly at <span className="font-semibold text-slate-800">{formData.email || formData.phone}</span> with details and receipts.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2 rounded-lg text-sm transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : activeTab === 'bank' ? (
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm space-y-2">
                <h4 className="font-bold text-slate-900 text-base">Direct Contribution / Bank Details</h4>
                <p className="text-xs text-slate-500">
                  Donations to Ashirvad are eligible for tax exemption under applicable non-profit trust regulations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div>
                    <span className="text-slate-500 block">Account Name:</span>
                    <span className="font-semibold text-slate-800">ASHIRVAD (Karnataka Jesuit Society)</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Bank:</span>
                    <span className="font-semibold text-slate-800">South Indian Bank / Central Bangalore</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Purpose:</span>
                    <span className="font-semibold text-slate-800">Spandana Slum Education & Child Welfare</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Contact for Receipt:</span>
                    <span className="font-semibold text-slate-800">ashirvadsj@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-xs text-amber-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>After transferring, kindly email your transaction reference to receive an official 80G acknowledgment.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              {activeTab === 'sponsor' ? (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Sponsorship Option</label>
                  <select
                    value={formData.amountOrTime}
                    onChange={(e) => setFormData({ ...formData, amountOrTime: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                  >
                    <option value="₹ 3,000 / Study Material Kit for 5 Children">₹ 3,000 – Study Material Kit for 5 Children</option>
                    <option value="₹ 6,000 / One Child Annual Tuition & Coaching">₹ 6,000 – One Child Annual Tuition & Coaching</option>
                    <option value="₹ 15,000 / Study Centre Monthly Operations">₹ 15,000 – Study Centre Monthly Operations</option>
                    <option value="₹ 25,000 / Bala Mela Carnival Sponsorship">₹ 25,000 – Bala Mela Children's Festival Sponsor</option>
                    <option value="Custom Amount / CSR Collaboration">Custom Contribution / CSR Collaboration</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">How would you like to volunteer?</label>
                  <select
                    value={formData.amountOrTime}
                    onChange={(e) => setFormData({ ...formData, amountOrTime: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                  >
                    <option value="Evening Tuition Teacher (Math/Science/English)">Evening Tuition Teacher (Math / Science / English)</option>
                    <option value="Weekend Arts & Sports Activity Anchor">Weekend Arts, Music & Sports Anchor</option>
                    <option value="Medical Camp / Healthcare Volunteer">Medical Camp & Health Screening Support</option>
                    <option value="Bala Mela & Event Coordinator">Bala Mela & Event Logistics</option>
                    <option value="IRHM Inter-Faith Youth Dialogue">IRHM Inter-Faith Youth Dialogue Mentor</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Personal Message / Note</label>
                <textarea
                  rows="2"
                  placeholder="Share any special instructions, preferred study centres, or queries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-md transition-all active:scale-95"
                >
                  <span>Submit Confirmation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
