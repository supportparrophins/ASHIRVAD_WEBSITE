import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, ChevronDown, 
  Heart, Sparkles 
} from 'lucide-react';

export default function Navbar({ currentRoute, setCurrentRoute, openSupportModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);

  const servicesTimeoutRef = useRef(null);
  const newsTimeoutRef = useRef(null);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleNewsMouseEnter = () => {
    if (newsTimeoutRef.current) clearTimeout(newsTimeoutRef.current);
    setNewsDropdownOpen(true);
  };

  const handleNewsMouseLeave = () => {
    newsTimeoutRef.current = setTimeout(() => {
      setNewsDropdownOpen(false);
    }, 150);
  };

  const handleNavClick = (routeId, year) => {
    setCurrentRoute(routeId, year);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setNewsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServicesActive = ['services', 'hrdc', 'csc', 'spandana', 'irhm'].includes(currentRoute);
  const isNewsActive = currentRoute.startsWith('news');

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 shadow-md">
      {/* Top Bar (Exact from screenshot) */}
      <div className="bg-[#1F2328] text-slate-300 text-xs py-1.5 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5">
            <span className="bg-[#0D233A] text-white font-bold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase border border-slate-700">
              KARNATAKA JESUITS
            </span>
            <span className="hidden sm:inline-block text-slate-300 text-[11px]">
              Ashirvad – Jesuit Centre for Social Research & Action • Bengaluru
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-300">
            <a href="tel:+918310952433" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 83109 52433 / 080-2221 0154</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a href="mailto:ashirvadsj@gmail.com" className="hover:text-amber-400 transition-colors hidden md:flex items-center gap-1.5 cursor-pointer">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>ashirvadsj@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navy Blue Navigation Bar (Exact #0D2A45 from screenshot) */}
      <nav className="bg-[#0D2A45] text-white transition-all duration-300 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
          {/* Original Transparent Ashirvad Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center focus:outline-none py-1 group cursor-pointer"
          >
            <img 
              src="/uploads/2020/07/ashirvadj-1-1.png" 
              alt="Ashirvad Logo" 
              className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
            />
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-5 h-full">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className="relative px-3.5 py-2 text-base font-semibold text-white hover:text-amber-200 transition-colors flex items-center h-full group cursor-pointer"
            >
              <span>Home</span>
              {currentRoute === 'home' && (
                <span className="absolute bottom-3.5 left-3.5 right-3.5 h-[3px] bg-white rounded-full"></span>
              )}
            </button>

            {/* About */}
            <button
              onClick={() => handleNavClick('about')}
              className="relative px-3.5 py-2 text-base font-semibold text-white hover:text-amber-200 transition-colors flex items-center h-full group cursor-pointer"
            >
              <span>About</span>
              {currentRoute === 'about' && (
                <span className="absolute bottom-3.5 left-3.5 right-3.5 h-[3px] bg-white rounded-full"></span>
              )}
            </button>

            {/* Services with Dropdown (HRDC, CSC, IRHM) */}
            <div 
              className="relative h-full flex items-center cursor-pointer"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                onClick={() => handleNavClick('services')}
                className="relative px-3.5 py-2 text-base font-semibold text-white hover:text-amber-200 transition-colors flex items-center gap-1 h-full group cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                {isServicesActive && (
                  <span className="absolute bottom-3.5 left-3.5 right-3.5 h-[3px] bg-white rounded-full"></span>
                )}
              </button>

              {/* Dark Navy Dropdown */}
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-52 bg-[#0E233C] text-slate-200 shadow-2xl rounded-b-md border-t-2 border-amber-400 py-2 z-50 animate-fade-in"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <button
                    onClick={() => handleNavClick('hrdc')}
                    className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors block cursor-pointer ${
                      currentRoute === 'hrdc' 
                        ? 'bg-[#18395F] text-white font-bold' 
                        : 'text-slate-300 hover:bg-[#18395F] hover:text-white'
                    }`}
                  >
                    HRDC
                  </button>
                  <button
                    onClick={() => handleNavClick('csc')}
                    className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors block cursor-pointer ${
                      currentRoute === 'csc' 
                        ? 'bg-[#18395F] text-white font-bold' 
                        : 'text-slate-300 hover:bg-[#18395F] hover:text-white'
                    }`}
                  >
                    CSC
                  </button>
                  <button
                    onClick={() => handleNavClick('irhm')}
                    className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors block cursor-pointer ${
                      currentRoute === 'irhm' 
                        ? 'bg-[#18395F] text-white font-bold' 
                        : 'text-slate-300 hover:bg-[#18395F] hover:text-white'
                    }`}
                  >
                    IRHM
                  </button>
                </div>
              )}
            </div>

            {/* News & Events with Dropdown */}
            <div 
              className="relative h-full flex items-center cursor-pointer"
              onMouseEnter={handleNewsMouseEnter}
              onMouseLeave={handleNewsMouseLeave}
            >
              <button
                onClick={() => handleNavClick('news')}
                className="relative px-3.5 py-2 text-base font-semibold text-white hover:text-amber-200 transition-colors flex items-center gap-1 h-full group cursor-pointer"
              >
                <span>News & Events</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${newsDropdownOpen ? 'rotate-180' : ''}`} />
                {isNewsActive && (
                  <span className="absolute bottom-3.5 left-3.5 right-3.5 h-[3px] bg-white rounded-full"></span>
                )}
              </button>

              {newsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-52 bg-[#0E233C] text-slate-200 shadow-2xl rounded-b-md border-t-2 border-amber-400 py-2 z-50 animate-fade-in"
                  onMouseEnter={handleNewsMouseEnter}
                  onMouseLeave={handleNewsMouseLeave}
                >
                  <button
                    onClick={() => handleNavClick('news')}
                    className="w-full text-left px-5 py-2.5 text-xs font-bold text-amber-400 hover:bg-[#18395F] transition-colors block border-b border-slate-700/60 pb-2 mb-1 cursor-pointer"
                  >
                    All News & Events
                  </button>
                  <button
                    onClick={() => handleNavClick('news', '2025')}
                    className="w-full text-left px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-[#18395F] hover:text-white transition-colors block cursor-pointer"
                  >
                    Events of 2025
                  </button>
                  <button
                    onClick={() => handleNavClick('news', '2024')}
                    className="w-full text-left px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-[#18395F] hover:text-white transition-colors block cursor-pointer"
                  >
                    Events of 2024
                  </button>
                  <button
                    onClick={() => handleNavClick('news', '2023')}
                    className="w-full text-left px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-[#18395F] hover:text-white transition-colors block cursor-pointer"
                  >
                    Events of 2023
                  </button>
                  <button
                    onClick={() => handleNavClick('news', '2022')}
                    className="w-full text-left px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-[#18395F] hover:text-white transition-colors block cursor-pointer"
                  >
                    Events of 2022
                  </button>
                </div>
              )}
            </div>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className="relative px-3.5 py-2 text-base font-semibold text-white hover:text-amber-200 transition-colors flex items-center h-full group cursor-pointer"
            >
              <span>Contact</span>
              {currentRoute === 'contact' && (
                <span className="absolute bottom-3.5 left-3.5 right-3.5 h-[3px] bg-white rounded-full"></span>
              )}
            </button>
          </div>

          {/* Action CTA Button (Exact white pill with dark heart from screenshot) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={openSupportModal}
              className="bg-white hover:bg-slate-100 text-[#132E4F] text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow transition-all flex items-center gap-2 active:scale-95 cursor-pointer border border-slate-200"
            >
              <Heart className="w-4 h-4 fill-[#132E4F] text-[#132E4F]" />
              <span>SUPPORT US</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-black/20 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E233C] text-white px-5 py-4 border-t border-slate-700 max-h-[85vh] overflow-y-auto animate-fade-in space-y-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold cursor-pointer ${
              currentRoute === 'home' ? 'bg-[#132E4F] text-white' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold cursor-pointer ${
              currentRoute === 'about' ? 'bg-[#132E4F] text-white' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            About
          </button>

          {/* Services with sub-items */}
          <div className="py-1">
            <button
              onClick={() => handleNavClick('services')}
              className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold cursor-pointer ${
                currentRoute === 'services' ? 'bg-[#132E4F] text-white' : 'text-slate-200'
              }`}
            >
              Services
            </button>
            <div className="pl-4 space-y-1 mt-1 border-l-2 border-slate-700 ml-3">
              <button
                onClick={() => handleNavClick('hrdc')}
                className={`w-full text-left py-2 px-3 rounded-md text-xs font-medium cursor-pointer ${
                  currentRoute === 'hrdc' ? 'bg-amber-600/30 text-amber-300 font-bold' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                • HRDC
              </button>
              <button
                onClick={() => handleNavClick('csc')}
                className={`w-full text-left py-2 px-3 rounded-md text-xs font-medium cursor-pointer ${
                  currentRoute === 'csc' ? 'bg-amber-600/30 text-amber-300 font-bold' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                • CSC
              </button>
              <button
                onClick={() => handleNavClick('irhm')}
                className={`w-full text-left py-2 px-3 rounded-md text-xs font-medium cursor-pointer ${
                  currentRoute === 'irhm' ? 'bg-amber-600/30 text-amber-300 font-bold' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                • IRHM
              </button>
            </div>
          </div>

          {/* News & Events with sub-items */}
          <div className="py-1">
            <button
              onClick={() => handleNavClick('news')}
              className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold cursor-pointer ${
                currentRoute === 'news' ? 'bg-[#132E4F] text-white' : 'text-slate-200'
              }`}
            >
              News & Events
            </button>
            <div className="pl-4 space-y-1 mt-1 border-l-2 border-slate-700 ml-3">
              {['2025', '2024', '2023', '2022'].map((year) => (
                <button
                  key={year}
                  onClick={() => handleNavClick('news', year)}
                  className="w-full text-left py-1.5 px-3 rounded-md text-xs text-slate-300 hover:bg-slate-800 block cursor-pointer"
                >
                  • Events of {year}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold cursor-pointer ${
              currentRoute === 'contact' ? 'bg-[#132E4F] text-white' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            Contact
          </button>

          <div className="pt-3 border-t border-slate-700">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openSupportModal();
              }}
              className="w-full bg-white text-[#132E4F] text-xs font-extrabold uppercase tracking-wider py-3 rounded-lg flex items-center justify-center gap-2 shadow cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-[#132E4F]" />
              <span>SUPPORT US</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
