import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { contactData } from '../data/contactData';

export default function Footer({ setCurrentRoute, openSupportModal }) {
  const navigateTo = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Footer Call to Action Banner */}
      <div className="bg-amber-600 text-white py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Accompanying the Marginalised
            </h3>
            <p className="text-amber-100 text-xs sm:text-sm mt-0.5">
              50+ Years of Social Action, Child Education & Inter-Religious Harmony in Bengaluru
            </p>
          </div>
          <button
            onClick={openSupportModal}
            className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider shadow-md transition-all shrink-0"
          >
            Support Our Work
          </button>
        </div>
      </div>

      {/* Main Footer (Exact information from ashirvad.org.in) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: About */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="/uploads/2020/07/ashirvadj-1-1.png" 
              alt="Ashirvad Logo" 
              className="h-10 w-auto object-contain brightness-125"
            />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Ashirvad is situated in the heart of the city of Bengaluru. True to its name, Ashirvad has been a blessing to the city through its various inter-religious and social initiatives.
          </p>
          <span className="inline-block text-[11px] font-bold text-amber-400 uppercase tracking-wider">
            KARNATAKA JESUITS INITIATIVE
          </span>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => navigateTo('home')} className="text-slate-400 hover:text-amber-400 transition-colors uppercase tracking-wider">
                HOME
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('about')} className="text-slate-400 hover:text-amber-400 transition-colors uppercase tracking-wider">
                ABOUT
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('services')} className="text-slate-400 hover:text-amber-400 transition-colors uppercase tracking-wider">
                SERVICES
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('hrdc')} className="text-slate-400 hover:text-amber-400 transition-colors uppercase tracking-wider">
                HRDC
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('csc')} className="text-slate-400 hover:text-amber-400 transition-colors uppercase tracking-wider">
                CSC
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('irhm')} className="text-slate-400 hover:text-amber-400 transition-colors uppercase tracking-wider">
                IRHM
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('news')} className="text-slate-400 hover:text-amber-400 transition-colors uppercase tracking-wider">
                NEWS & EVENTS
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('contact')} className="text-slate-400 hover:text-amber-400 transition-colors uppercase tracking-wider">
                CONTACT
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Department Contacts */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
            Contact Departments
          </h4>
          <div className="space-y-2.5 text-xs text-slate-400">
            <div>
              <span className="text-white block font-medium">General / Admin:</span>
              <a href="mailto:ashirvadsj@gmail.com" className="hover:text-amber-400 block">ashirvadsj@gmail.com</a>
              <a href="tel:+918310952433" className="hover:text-amber-400 text-[11px] block">+91 8310952433</a>
            </div>
            <div>
              <span className="text-white block font-medium">CSC (Social Concern):</span>
              <a href="mailto:ashirvadcsc@gmail.com" className="hover:text-amber-400 block">ashirvadcsc@gmail.com</a>
              <a href="tel:+919148020709" className="hover:text-amber-400 text-[11px] block">+91 9148020709</a>
            </div>
            <div>
              <span className="text-white block font-medium">HRDC:</span>
              <a href="mailto:ashirvadhrdc@gmail.com" className="hover:text-amber-400 block">ashirvadhrdc@gmail.com</a>
            </div>
            <div>
              <span className="text-white block font-medium">Director Desk:</span>
              <a href="mailto:main.ashirvad@gmail.com" className="hover:text-amber-400 block">main.ashirvad@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Col 4: Address */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
            Address & Hours
          </h4>
          <div className="space-y-2.5 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                ASHIRVAD<br />
                #30, St Mark’s Road Cross, Shanthala Nagar, Bengaluru 560 001
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>080-2221 0154</span>
            </div>
            <div className="flex items-start gap-2 pt-1">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Mon – Saturday: 9 AM – 5:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800/80 bg-[#070D16] py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
          <div>
            Ashirvad © {new Date().getFullYear()}. All Rights Reserved. • Karnataka Jesuit Society
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm">
            <span className="text-slate-400 font-normal">Developed by</span>
            <a 
              href="https://parrophins.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-black tracking-tight hover:opacity-90 transition-opacity inline-flex items-baseline cursor-pointer"
            >
              <span className="text-[#4ADE80]">Parro</span>
              <span className="text-[#38BDF8]">Phins</span>
              <span className="text-[#38BDF8] text-[10px] ml-0.5 relative -top-1 font-bold">®</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
