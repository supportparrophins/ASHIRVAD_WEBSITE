import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SupportModal from './components/SupportModal';
import LightboxModal from './components/LightboxModal';
import VisionMissionModal from './components/VisionMissionModal';
import Preloader from './components/Preloader';
import ScrollToTopButton from './components/ScrollToTopButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Spandana from './pages/Spandana';
import HRDC from './pages/HRDC';
import IRHM from './pages/IRHM';
import Services from './pages/Services';
import NewsEvents from './pages/NewsEvents';
import Contact from './pages/Contact';

// Helper to determine route from current pathname
const getRouteFromPath = (path) => {
  const cleanPath = path.toLowerCase().replace(/^\/|\/$/g, '');
  if (!cleanPath || cleanPath === 'home') return { route: 'home', year: '2025' };
  if (cleanPath === 'about') return { route: 'about', year: '2025' };
  if (cleanPath === 'service' || cleanPath === 'services') return { route: 'services', year: '2025' };
  if (cleanPath === 'hrdc') return { route: 'hrdc', year: '2025' };
  if (cleanPath === 'social-conern' || cleanPath === 'csc' || cleanPath === 'spandana') return { route: 'csc', year: '2025' };
  if (cleanPath === 'irhm') return { route: 'irhm', year: '2025' };
  if (cleanPath === 'news-2025') return { route: 'news', year: '2025' };
  if (cleanPath === 'news-2024') return { route: 'news', year: '2024' };
  if (cleanPath === 'news-2023') return { route: 'news', year: '2023' };
  if (cleanPath === 'news-2022') return { route: 'news', year: '2022' };
  if (cleanPath === 'news-and-events' || cleanPath === 'news') return { route: 'news', year: '2025' };
  if (cleanPath === 'contacts' || cleanPath === 'contact') return { route: 'contact', year: '2025' };
  return { route: 'home', year: '2025' };
};

// Helper to get URL path from route name
const getPathFromRoute = (route, year) => {
  switch (route) {
    case 'home': return '/';
    case 'about': return '/about/';
    case 'services': return '/service/';
    case 'hrdc': return '/hrdc/';
    case 'csc':
    case 'spandana': return '/social-conern/';
    case 'irhm': return '/irhm/';
    case 'news':
      if (year && year !== 'All') return `/news-${year}/`;
      return '/news-and-events/';
    case 'contact':
    case 'contacts': return '/contacts/';
    default: return '/';
  }
};

export default function App() {
  const initial = getRouteFromPath(window.location.pathname);
  const [currentRoute, setCurrentRoute] = useState(initial.route);
  const [selectedNewsYear, setSelectedNewsYear] = useState(initial.year || '2025');
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [visionModalData, setVisionModalData] = useState(null);

  // Global Lightbox state
  const [lightboxData, setLightboxData] = useState({
    isOpen: false,
    image: '',
    title: '',
    subtitle: ''
  });

  const openLightbox = (image, title, subtitle) => {
    setLightboxData({
      isOpen: true,
      image,
      title: title || '',
      subtitle: subtitle || ''
    });
  };

  const closeLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  // Synchronize route and push URL to browser history
  const navigate = (route, year) => {
    const targetYear = year || (route === 'news' ? selectedNewsYear : '2025');
    const newPath = getPathFromRoute(route, targetYear);

    if (window.location.pathname !== newPath) {
      window.history.pushState({ route, year: targetYear }, '', newPath);
    }
    
    setCurrentRoute(route);
    if (year) {
      setSelectedNewsYear(year);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser Back / Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const parsed = getRouteFromPath(window.location.pathname);
      setCurrentRoute(parsed.route);
      setSelectedNewsYear(parsed.year);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <Home
            setCurrentRoute={navigate}
            openSupportModal={() => setSupportModalOpen(true)}
            openLightbox={openLightbox}
            openVisionModal={(data) => setVisionModalData(data)}
          />
        );
      case 'about':
        return (
          <About
            setCurrentRoute={navigate}
            openSupportModal={() => setSupportModalOpen(true)}
          />
        );
      case 'services':
        return (
          <Services
            setCurrentRoute={navigate}
          />
        );
      case 'hrdc':
        return (
          <HRDC
            setCurrentRoute={navigate}
            openLightbox={openLightbox}
          />
        );
      case 'csc':
      case 'spandana':
        return (
          <Spandana
            setCurrentRoute={navigate}
            openSupportModal={() => setSupportModalOpen(true)}
            openLightbox={openLightbox}
          />
        );
      case 'irhm':
        return (
          <IRHM
            setCurrentRoute={navigate}
            openLightbox={openLightbox}
          />
        );
      case 'news':
        return (
          <NewsEvents
            openLightbox={openLightbox}
            initialYear={selectedNewsYear}
            onYearChange={(y) => navigate('news', y)}
          />
        );
      case 'contact':
      case 'contacts':
        return (
          <Contact
            openSupportModal={() => setSupportModalOpen(true)}
          />
        );
      default:
        return (
          <Home
            setCurrentRoute={navigate}
            openSupportModal={() => setSupportModalOpen(true)}
            openLightbox={openLightbox}
            openVisionModal={(data) => setVisionModalData(data)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-900 selection:bg-amber-500 selection:text-white relative">
      {/* Initial App Preloader (only on first page load) */}
      <Preloader />

      {/* Navbar */}
      <Navbar
        currentRoute={currentRoute}
        setCurrentRoute={navigate}
        openSupportModal={() => setSupportModalOpen(true)}
      />

      {/* Main Page Body (Smooth & simple page transition) */}
      <main 
        key={currentRoute + (currentRoute === 'news' ? selectedNewsYear : '')} 
        className="flex-grow page-transition"
      >
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        setCurrentRoute={navigate}
        openSupportModal={() => setSupportModalOpen(true)}
      />

      {/* Support / Donate Modal */}
      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
      />

      {/* Lightbox Modal for Photo Preview */}
      <LightboxModal
        isOpen={lightboxData.isOpen}
        currentImage={lightboxData.image}
        title={lightboxData.title}
        subtitle={lightboxData.subtitle}
        onClose={closeLightbox}
      />

      {/* Vision / Mission / Ashirvad Modal at Root Level */}
      <VisionMissionModal
        isOpen={Boolean(visionModalData)}
        data={visionModalData}
        onClose={() => setVisionModalData(null)}
      />

      {/* Floating Smooth Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
